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

    caches.open('v1').then((ca) => ca.add(finalLink)); //Add Audio To Cache

    const newSong = { link: finalLink, name: song.Ensong, artist: song.Enartist, covert: song.image }; //Update Hoverable Music Box
    currentMusic.setMusic((lastState) => Object.assign(lastState, newSong));
  };
  useEffect(() => {
    Axios.get(`nex1music.ir/${props.songName}`).then(({ data }) => songDetailSet(getSong(data)));
  }, []);
  useEffect(() => {
    if (songDetail.image) {
      caches.open('v1').then((ca) => {
        const imageLink = songDetail.image;
        const finalImageLink = process.env.BASE_CORS + imageLink.split('https://')[1];
        ca.add(finalImageLink);
      });
    }
  }, [songDetail]);
  return (
    <div className='song-detail'>
      <img className='song-detail__image' src={songDetail.image} />
      <h2>{songDetail.Ensong}</h2>
      <h4>{songDetail.Enartist}</h4>
      <div className='dl-box'>
        {songDetail &&
          songDetail.downloadLinks &&
          songDetail.downloadLinks.map((eachLink, i) => (
            <button className='dl-box__song' key={i} onClick={() => playSong(eachLink, songDetail)}>
              <p>Play With {eachLink.quality || 'Orginal'} Quality </p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Song;