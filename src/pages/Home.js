import React, { useEffect, useState } from 'react';
import MusicCard from '../components/MusicCard';
import { getFeedMusic } from '../helpers/scrapper';
import Axios from 'axios';
export default function Home() {
  const [songs, songsSet] = useState([]);
  const [page, pageSet] = useState(1);
  useEffect(() => {
    document.title = 'Music App';
    Axios.get(`nex1music.ir/page/${page}`).then(({ data }) => {
      songsSet(getFeedMusic(data));
    });
  }, []);
  return (
    <div>
      <div className='container'>
        <div> </div>
        {songs.length != 0 ? songs.map((eachSongs, i) => <MusicCard song={eachSongs} key={i} />) : <div className='loader'></div>}
      </div>
    </div>
  );
}
