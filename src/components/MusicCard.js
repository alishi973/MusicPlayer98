import React from 'react';

const playSongs = (link) => {
    
};

const MusicCard = ({ song }) => {
  return (
    <div className='audio-card'>
      <div className='audio-card__art'>
        <img src={song.image}></img>
      </div>
      <div className='audio-card__info'>
        <h4>{song.Ensong}</h4>
        <h5>{song.Enartist}</h5>
        <a>Link</a>
        <div className='audio-card__info__stats'>
          <button  onClick={()=>playSongs(song.link)}>Play</button>
          <button>
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
                stroke-linejoin='round'
                stroke-miterlimit='10'
                stroke-width='2'
                d='M59.5 25c0-6.904-5.596-12.5-12.5-12.5a12.497 12.497 0 0 0-11 6.56a12.497 12.497 0 0 0-11-6.56c-6.904 0-12.5 5.596-12.5 12.5c0 2.97 1.04 5.694 2.77 7.839l-.004.003L36 58.54l20.734-25.698l-.004-.003A12.44 12.44 0 0 0 59.5 25z'
              />
              <rect x='0' y='0' width='72' height='72' fill='rgba(0, 0, 0, 0)' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
