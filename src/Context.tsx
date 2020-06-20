import * as React from 'react';

const InitialValue = {
  music: { link: '', name: '', artist: '', cover: '',fulllenght:0, isPlaying: false, played: 0, song: null },
};

export const CurrentMusic = React.createContext(InitialValue.music);

export default function Context({ children }) {
  const [music, musicSet] = React.useState({});
  return <CurrentMusic.Provider value={{ music, musicSet }}>{children}</CurrentMusic.Provider>;
}
