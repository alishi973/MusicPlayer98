import React, { useContext } from 'react';
import { CurrentMusic } from '../Context';

const HoverAudioPlayer = () => {
  const song = useContext(CurrentMusic).music;
  console.log(song);
  if (song.name)
    return (
      <div className='on-screen-player-container'>
        <div className='on-screen-player window'>
          <div className='title-bar' style={{ position: 'initial', padding: '3px 2px 3px 3px' }}>
            <div className='title-bar-text'>
              {song.artist} - {song.name}
            </div>
            <div className='title-bar-controls'>
              <button aria-label='Maximize'></button>
              <button aria-label='Close'></button>
            </div>
          </div>
          <div className='window-body media-player '>
            <div className='art'>
              <img src={song.cover}></img>
            </div>
            <div className='song-info'>
              <div className='field-row'>
                <input id='range22' type='range' min='1' step='1' max='100' />
              </div>
              <div className="song-info-trail" >
                <p>P</p>
                <p>S</p>
                <p>L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return <div></div>;
  }
};

export default HoverAudioPlayer;
