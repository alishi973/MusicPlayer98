import React from 'react';

export default function Layout({ children }) {
  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>Windows Media Player</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>
        {children}
        <div className="on-screen-player">
          <div>lkagskdhjasd</div>
        </div>
      </div>
    </div>
  );
}
