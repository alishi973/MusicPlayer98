export const getFeedMusic = (node) => convertDivtoArray(getMusicDiv(node));

const getMusicDiv = (node) => new DOMParser().parseFromString(node, 'text/html').getElementsByClassName('ps anm');

const convertDivtoArray = (nodes) => {
  let musics = [];
  for (let i = 0; i < nodes.length; i++) {
    const music = {};
    music.artist = nodes[i].querySelector('div.pcnt > div > p:nth-child(4) strong > a').innerText; //artist
    music.song = nodes[i].querySelector('div.pcnt > div > p:nth-child(4)  strong:nth-child(3) > a').innerText; //song name

    music.image = nodes[i].getElementsByTagName('img')[0].getAttribute('data-src'); //song picture
    // music.image = nodes[i].querySelector('div.pcnt > div > p:nth-child(6) > img'); //song picture

    music.Enartist = nodes[i].querySelector('div.pcnt > div > p:nth-child(5) strong > a').innerText; //English artist
    music.Ensong = nodes[i].querySelector('div.pcnt > div > p:nth-child(5)  strong:nth-child(2)').innerText; // English song name

    // body > div:nth-child(5) > div.wth > div.sdr > div:nth-child(1) > div.psdown.l2.f12
    music.link = nodes[i].querySelector('a').href; // song link

    musics.push(music);
  }
  return musics;
};
