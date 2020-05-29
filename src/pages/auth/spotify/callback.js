import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

export default function spotifyCallbackPage(props) {
  const [token, tokenSet] = useState(null);
  useEffect(() => {
    tokenSet(props.location.hash.split('&')[0].split('=')[1]);
  }, []);

  useEffect(() => {
    Axios.defaults.headers = { Authorization: `Bearer ${token}` };
  }, [token]);
  return (
    <div>
      <div>{token}</div>
      <Link to='/'>Back to Login</Link>
    </div>
  );
}
