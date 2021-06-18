<template>
  <div class="box">
    <img class="albumImage" src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=6&m=1147544807&s=612x612&w=0&h=8CXEtGfDlt7oFx7UyEZClHojvDjZR91U-mAU8UlFF4Y=" alt="">
    <h1>{{ song.split('-')[1] }}</h1>
    <h2>{{ song.split('-')[0] }}</h2>
    <div class="btns">
      <a href="" class="btn">
        <img src="./assets/lastdotfm.svg" alt="">
      </a>
      <div v-if="isPlaying" class="play-btn" @click="toggleAudio">
        <img src="./assets/pause.svg" alt="">
      </div>
      <div v-else class="play-btn" @click="toggleAudio">
        <img src="./assets/play-button-arrowhead.svg" alt="">
      </div>
      <a href="" class="btn">
        <img src="./assets/share.svg" alt="">
      </a>
    </div>
    <div class="volume-slider">
      <img src="./assets/speaker-filled-audio-tool.svg" alt="">
      <input v-model="volume" v-on:change="volumeAudio" type="range" min="0" max="99" value="50" class="slider" id="myRange">
    </div>
    <audio src="http://s1.slotex.pl:7348/live" id="audio-player" autoplay></audio>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ThePlayerBox",
  data() {
    return {
      isPlaying: true,
      volume: 50,
      song: '',
      imageCover: '',
      songName: '',
    }
  },
  methods: {
    toggleAudio() {
      var audio = document.getElementById("audio-player");
      if (audio.paused) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
      this.splitSong()
    },
    splitSong() {
      this.songName = this.song.split('-');
      console.log(this.songName);
      axios.get('http://ws.audioscrobbler.com/2.0/?method=album.search&api_key=d4de217f3bb2af61a3be0af5dcbf6a3f&format=json&limit=1&album=' + this.songName[0]).then(response => (this.imageCover = response.data.results));
      console.log(this.imageCover.albummatches.album[0].image[2])
    },
    volumeAudio() {
      var audio = document.getElementById("audio-player");
      audio.volume = '0.' + this.volume;
    }
  },
  mounted() {
    axios.get('http://sluchaj.radiozory.pl/js/song.php').then(response => (this.song = response.data));
  },
}
</script>

<style scoped>
  .box img {
    width: 50px;
  }
  .box {
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(51, 51, 51, 0.1);
    border-radius: 24px;
    overflow: hidden;
    padding: 30px;
    text-align: center;
    /*max-width: 380px;*/
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .box .albumImage {
    width: 100%;
    border-radius: 20px;
  }
  h1 {
    font-weight: bold;
    font-size: 20px;
    margin-top: 18px;
  }
  h2 {
    font-weight: normal;
    font-size: 16px;
    margin-top: 5px;
  }
  .btns {
    display: grid;
    grid-template-columns: 24px 48px 24px;
    height: 48px;
    align-items: center;
    column-gap: 42px;
    margin-top: 35px;
  }
  .btns .play-btn {
    background: #D0483E;
    border-radius: 8px;
    height: 48px;
    padding: 14px;
    cursor: pointer;
  }
  .btns .play-btn img {
    width: 100%;
    filter: invert(1);
  }
  .btns .btn img {
    width: 100%;
    opacity: 0.4;
  }
  .volume-slider {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
  .volume-slider img {
    height: 28px;
    margin-right: 20px;
  }
  .volume-slider input {
    width: 70%;
  }
  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    background: rgba(51, 51, 51, 0.1);
    outline: none;
    opacity: 1;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 10px;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    background: #333333;
    cursor: pointer;
    border-radius: 50px;
  }

  .slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #333333;
    cursor: pointer;
    border-radius: 50px;
  }
  @media screen and (max-width: 440px) {
    .box {
      width: 100%;
    }
  }
</style>
