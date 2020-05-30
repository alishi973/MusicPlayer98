import React from 'react';

const HoverAudioPlayer = (props) => {
  const link =
    'https://dl.nex1music.ir/1399/03/10/Omid%20Ashgaran%20-%20Majnoon%20[64].mp3?time=1590846796&filename=/1399/03/10/Omid%20Ashgaran%20-%20Majnoon%20[64].mp3';
  return (
    <div className='on-screen-player window'>
      <div className='title-bar' style={{ position: 'initial', padding: '3px 2px 3px 3px' }}>
        <div className='title-bar-text'>Windows Media Player</div>
        <div className='title-bar-controls'>
          <button aria-label='Maximize'></button>
          <button aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body media-player '>
        <div className='art'>
          <img src='https://nex1music.ir/upload/special_post/nex1music-kamran-moradi-negaran-to-nistam.jpg'></img>
        </div>
        <div className='song-info'>
          <h5>title</h5>
          <div className='field-row'>
            <input id='range22' type='range' min='1' step='1' max='100' />
          </div>
          <p>song</p>
        </div>
      </div>
    </div>
  );
};

export default HoverAudioPlayer;
