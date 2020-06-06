import React, { createContext, useState, useEffect } from 'react';

const InitialValue = {
  music: { link: '', name: '', artist: '', covert: '', isPlaying: false, played: 0 },
};

export const CurrentMusic = createContext(InitialValue.music);

export default function Context({ children }) {
  const [music, musicSet] = useState({});
  return <CurrentMusic.Provider value={{ music, musicSet }}>{children}</CurrentMusic.Provider>;
}
