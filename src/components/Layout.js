import React, { useContext } from 'react';
import HoverAudioPlayer from './HoverAudioPlayer';
import { navigate } from '@reach/router';
import { CurrentMusic } from '../Context';

const Layout = ({ children }) => {
  const currentMusic = useContext(CurrentMusic).music;
  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>Windows Media Player</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button onClick={() => navigate(-1)} aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body' style={{ paddingBottom: currentMusic.name ? '100px' : '0px' }}>
        {children}
        <HoverAudioPlayer />
      </div>
    </div>
  );
};

export default Layout;
