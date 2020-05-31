import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { getSong } from '../helpers/scrapper';

const playSong = (e) => {
  caches.open('v1').then((ca) => {
    const link = e.link;
    const finalLink = process.env.BASE_CORS + link.split('https://')[1];
    ca.add(finalLink);
  });
  //Multiplie Add Song In Cache
  /* songDetail.downloadLinks.map(({ link }) => {
          const finalLink = process.env.BASE_CORS + link.split('https://')[1];
          ca.keys(link).then((e) => {
            if (!e.includes(link)) {
              ca.addAll(process.env.BASE_CORS + finalLink);
            }
          });
        }); */
  console.log(e);
};

const Song = (props) => {
  const [songDetail, songDetailSet] = useState({});
  useEffect(() => {
    //   let song;
    Axios.get(`nex1music.ir/${props.songName}`).then(({ data }) => songDetailSet(getSong(data)));
  }, []);
  return (
    <div className='song-detail'>
      <img className='song-detail__image' src={songDetail.image} />
      <h2>{songDetail.Ensong}</h2>
      <h4>{songDetail.Enartist}</h4>
      <div className='dl-box'>
        {songDetail &&
          songDetail.downloadLinks &&
          songDetail.downloadLinks.map((eachLink, i) => (
            <button className='dl-box__song' key={i} onClick={() => playSong(eachLink)}>
              <p>Play With {eachLink.quality || 'Orginal'} Quality </p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Song;
