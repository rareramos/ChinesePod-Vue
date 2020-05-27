<template>
  <div
    :class="$style.results">
    <h1>Results</h1>
    <h2>
      {{ $route.query.answers || 0 }}
    </h2>
    <button
      :class="$style.backButton"
      @click="goToStart">
      Go back
    </button>
  </div>
</template>

<script>
import { TweenMax, Power1, Back } from 'gsap';
import random from 'lodash.random';

export default {
  name: 'ResultsPage',

  created() {
    this.$nextTick(() => {
      const element = document.getElementsByTagName('h2')[0];

      (function() {
        let numberOfStars = 300;

        for (let i = 0; i < numberOfStars; i++) {
          let child = document.createElement('div');
          child.innerHTML = '<div class="blob fa fa-star ' + i + '"></div>';
          child = child.firstChild;
          element.parentNode.appendChild(child);
        }
      })();

      this.clickScore();
    });
  },

  methods: {
    async goToStart() {
      this.runAudioEffect('button click.wav');
      await this.$router.push({ path: '/' });
    },

    runAudioEffect(filename) {
      document.body.click();
      const audio = new Audio(require(`../assets/sounds/${filename}`));
      audio.play();
    },

    clickScore() {
      if (parseInt(this.$route.query.answers) !== 0) {
        this.reset();
        this.animateText();
        this.animateBlobs();
      }
    },

    animateText() {
      TweenMax.from(document.querySelector('h2'), 0.8, {
        scale: 0.4,
        opacity: 0,
        rotation: 15,
        ease: Back.easeOut.config(4),
      });
    },

    reset() {
      Array.from(document.querySelectorAll('.blob')).forEach(blob => {
        TweenMax.set(blob, { x: 0, y: 0, opacity: 1 });
      });

      TweenMax.set(document.getElementById('fig-1'), { scale: 1, opacity: 1, rotation: 0 });
    },

    animateBlobs() {

      let xSeed = random(350, 380);
      let ySeed = random(120, 170);

      Array.from(document.querySelectorAll('.blob')).forEach(blob => {
        let speed = random(1, 5);
        let rotation = random(5, 100);
        let scale = random(0.8, 2);
        let x = random(-xSeed, xSeed);
        let y = random(-ySeed, ySeed);

        TweenMax.to(blob, speed, {
          x: x,
          y: y,
          ease: Power1.easeOut,
          opacity: 0,
          rotation: rotation,
          scale: scale,
          onStartParams: [blob],
          onStart: function(element) {
            element.style.display = 'block';
          },
          onCompleteParams: [blob],
          onComplete: function(element) {
            element.style.display = 'none';
          }
        });
      });
    },
  }
};
</script>

<style lang="scss">
  .fig-1 {
    position: relative;
    z-index: 2;
  }

  .blob {
    height: 50px;
    width: 50px;
    color: #ffcc00;
    position: absolute;
    z-index: 1;
    font-size: 30px;
    display: none;
    top: 40%;
    left: 50%;
  }
</style>

<style lang="scss" module>
  .results {

    h1 {
      font-size: 66px;
      text-transform: uppercase;
      color: #c00000;
    }

    h2 {
      position: relative;
      text-align: center;
      font-size: 96px;
      font-family: 'Sigmar One', cursive;
      z-index: 2;
    }

    button {
      width: 180px;
      margin: auto;
      padding: 10px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 28px;
      color: #fff;
      border: 0;
      outline: none;
      border-radius: 10px;
      cursor: pointer;
    }

    .backButton {
      background: #757070;
    }
  }
</style>
