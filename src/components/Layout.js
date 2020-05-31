import React from 'react';
import HoverAudioPlayer from './HoverAudioPlayer';
import { navigate } from '@reach/router';

const Layout = ({ children }) => {
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
      <div className='window-body'>
        {children}
        <HoverAudioPlayer />
      </div>
    </div>
  );
};

export default Layout;
