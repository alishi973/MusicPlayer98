import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { getSong } from '../helpers/scrapper';

const Song = (props) => {
  const [songDetail, songDetailSet] = useState({});
  useEffect(() => {
    Axios.get(`nex1music.ir/${props.songName}`).then(({ data }) => {
      console.log(getSong(data));
    });
  }, []);
  return (
    <div>
      <p>{props.songName}</p>
    </div>
  );
};

export default Song;
