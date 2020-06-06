import React, { useContext } from 'react';
import { CurrentMusic } from '../Context';

const HoverAudioPlayer = () => {
  const { musicSet, music: song } = useContext(CurrentMusic);
  const playButton = (
    <svg
      aria-hidden='true'
      focusable='false'
      width='1em'
      height='1em'
      style={{ transform: 'rotate(360deg)' }}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 24 24'>
      <path d='M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z' fill='#626262' />
      <rect x='0' y='0' width='24' height='24' fill='rgba(0, 0, 0, 0)' />
    </svg>
  );
  const stopButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      width='1em'
      height='1em'
      style={{ transform: 'rotate(360deg)' }}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 24 24'>
      <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' fill='#626262' />
      <rect x='0' y='0' width='24' height='24' fill='rgba(0, 0, 0, 0)' />
    </svg>
  );

  const ActionButton = () => {
    musicSet((lastState) => ({ ...lastState, isPlaying: !lastState.isPlaying }));
  };
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
                <p>3:55</p>
                <input className='has-box-indicator' type='range' min='1' step='1' max='100' defaultValue='0' />
                <p>1:55</p>
              </div>
              <div className='song-info-trail'>
                <p>&nbsp;</p>
                <button onClick={ActionButton}>{song.isPlaying ? stopButton : playButton}</button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xlink='http://www.w3.org/1999/xlink'
                  aria-hidden='true'
                  focusable='false'
                  width='2em'
                  height='2em'
                  preserveAspectRatio='xMidYMid meet'
                  viewBox='0 0 72 72'>
                  <path
                    fill='#EA5A47'
                    d='M59.5 25c0-6.904-5.596-12.5-12.5-12.5a12.497 12.497 0 0 0-11 6.56a12.497 12.497 0 0 0-11-6.56c-6.904 0-12.5 5.596-12.5 12.5c0 2.97 1.04 5.694 2.77 7.839l-.004.003L36 58.54l20.734-25.698l-.004-.003A12.44 12.44 0 0 0 59.5 25z'
                  />
                  <path
                    fill='none'
                    stroke='#000'
                    strokeLinejoin='round'
                    strokeMiterlimit='10'
                    strokeWidth='2'
                    d='M59.5 25c0-6.904-5.596-12.5-12.5-12.5a12.497 12.497 0 0 0-11 6.56a12.497 12.497 0 0 0-11-6.56c-6.904 0-12.5 5.596-12.5 12.5c0 2.97 1.04 5.694 2.77 7.839l-.004.003L36 58.54l20.734-25.698l-.004-.003A12.44 12.44 0 0 0 59.5 25z'
                  />
                  <rect x='0' y='0' width='72' height='72' fill='rgba(0, 0, 0, 0)' />
                </svg>
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
