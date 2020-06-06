import React, { useEffect, useState, useContext } from 'react';
import { CurrentMusic } from '../Context';
import Axios from 'axios';
import { getSong } from '../helpers/scrapper';

const Song = (props) => {
  const [songDetail, songDetailSet] = useState({});
  const currentMusic = useContext(CurrentMusic);

  const playSong = (e, song) => {
    const link = e.link;
    const finalLink = process.env.BASE_CORS + link.split('https://')[1]; //Generate Audio File Link

    try {
      caches.open('v1').then((ca) => ca.add(finalLink)); //Add Audio To Cache
    } catch (error) {
      console.log(error);
    }
    currentMusic.music.song && currentMusic.music.song.pause();

    let audio = new Audio(finalLink);

    console.log(songDetail);
    audio.title = songDetail.Ensong;
    // x-webkit-airplay="" poster="" title=""
    audio.setAttribute('poster', songDetail.image);
    audio.setAttribute('x-webkit-airplay', songDetail.Enartist);

    const newSong = {
      link: finalLink,
      name: song.Ensong,
      artist: song.Enartist,
      cover: song.image,
      isPlaying: true,
      song: audio,
      played: 0,
    }; //Update Hoverable Music Box
    newSong.song.play();
    newSong.song.loop = true;
    newSong.song.addEventListener('timeupdate', (e) => {
      currentMusic.musicSet((lastState) => ({ ...lastState, played: audio.currentTime, fulllenght: audio.duration }));
    });
    newSong.song.crossOrigin = true;

    console.log(newSong);
    currentMusic.musicSet(newSong);
  };

  useEffect(() => {
    Axios.get(`nex1music.ir/${props.songName}`).then(({ data }) => songDetailSet(getSong(data)));
  }, []);
  useEffect(() => {
    try {
      if (songDetail.image) {
        document.title = songDetail.Ensong;
        caches.open('v1').then((ca) => {
          const imageLink = songDetail.image;
          const finalImageLink = process.env.BASE_CORS + imageLink.split('https://')[1];
          ca.add(finalImageLink);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [songDetail]);
  return (
    <div className='song-detail'>
      <img className='song-detail__image' src={songDetail.image} />
      <h2>{songDetail.Ensong}</h2>
      <h4>{songDetail.Enartist}</h4>
      <div className='dl-box'>
        {songDetail.Ensong ? (
          songDetail.downloadLinks &&
          songDetail.downloadLinks.map((eachLink, i) => (
            <button className='dl-box__song' key={i} onClick={() => playSong(eachLink, songDetail)}>
              <p>Play With {eachLink.quality || 'Orginal'} Quality </p>
            </button>
          ))
        ) : (
          <div className='loader'></div>
        )}
      </div>
    </div>
  );
};

export default Song;
