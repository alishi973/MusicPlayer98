import React, { createContext, useState, useEffect } from 'react';

export const CurrentMusic = createContext();

export default function Context({ children }) {
  const [music, musicSet] = useState({ link: '', name: '', artist: '', covert: '', played: 0 });
  const setMusic = (props) => {
    musicSet(props);
  };
  return <CurrentMusic.Provider value={{ music, setMusic }}>{children}</CurrentMusic.Provider>;
}
