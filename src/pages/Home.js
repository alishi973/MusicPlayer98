import React, { useEffect } from 'react';
import Axios from 'axios';
export default function Home() {
  useEffect(() => {
    Axios.get('/browse/new-releases').then(({ data }) => {
      console.log(data);
    });
  }, []);
  const loginComponent = () => (
    <div>
      <p>We Need To Login You To Play Songs For First Time</p>
      <button>
        <a
          href={`https://accounts.spotify.com/authorize/?redirect_uri=${process.env.SPOTIFY_RU}&client_id=${process.env.SPOTIFY_CI}&response_type=token`}>
          Login In spotify
        </a>
      </button>
    </div>
  );
  return <div> {loginComponent} </div>;
}
