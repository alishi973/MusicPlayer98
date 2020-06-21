export const getFeedMusic: [Music] = (node) => convertDivtoArray(getMusicDiv(node));

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

export const getSong = (songPageNode): Music => {
  const node = new DOMParser().parseFromString(songPageNode, 'text/html');
  let song = {};
  song.Fasong = node.querySelector('div.pcnt > div > p:nth-child(4) > strong:nth-child(3) > a').innerText; //Fa Name Of song
  song.Faartist = node.querySelector('div.pcnt > div > p:nth-child(4) > strong:nth-child(2) > a').innerText; // Fa name Of Artist

  try {
    song.image = node.querySelector('div.pcnt > div > p:nth-child(6) > img').getAttribute('src'); //Image
  } catch (e) {
    // song.image = node.querySelector('div.pcnt > div > p:nth-child(10) > img').getAttribute('src'); //Image
    song.image = node.querySelector('div.pcnt > div  img').getAttribute('src'); //Image
    console.log(e);
  }
  song.Ensong = node.querySelector('div.pcnt > div > p:nth-child(5) > strong:nth-child(2) > a').innerText; //En Name Of Song
  song.Enartist = node.querySelector('div.pcnt > div > p:nth-child(5) > strong:nth-child(1) > a').innerText; //En Name Of Artist

  /* song.downloadLinks = []; //Song Download Link
  let downloadLinksNode = node.querySelector('div.pscn > div.lnkdl');
  for (let downloadLink of downloadLinksNode.children) {
    const quality = downloadLink.innerText.match(/\d+/);
    song.downloadLinks.push({ link: downloadLink.href, quality: quality && quality[0] });
  } */

  //Get Link From playBox
  song.downloadLinks = []; //Song Download Link
  let downloadLinksNode = node.querySelector('ul.tracklist');
  for (let downloadLink of downloadLinksNode.children) {
    try {
      const link = downloadLink.querySelector('div.details> i.play1').getAttribute('audiourl');
      const quality = downloadLink.querySelector('div.details> div.name').innerText.match(/\d+/);
      song.downloadLinks.push({ link, quality: quality && quality[0] });
    } catch (e) {
      const link = downloadLink.querySelector('div.details> i.play').getAttribute('audiourl');
      const quality = downloadLink.querySelector('div.details> div.name').innerText.match(/\d+/);
      song.downloadLinks.push({ link, quality: quality && quality[0] });
    }
  }
  return { Ensong: song.Ensong, Enartist: song.Enartist, artist: song.Faartist, name: song.Fasong, link: song.downloadLinks };
};

interface Music {
  Enartist: string,
  Ensong: string,
  artist: string,
  name: string,
  image: string,
  link?: [string],
}