<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <div id="audio-trash"></div>
  </div>
</template>

<script>
import { runAudioEffect } from "./utils";

export default {
  name: 'App',

  created() {
    document.addEventListener('mouseover', e => {
      if (e.target && (e.target.localName === 'button'
        || String(e.target.className).indexOf('particles-button') > -1
        || String(e.target.className).indexOf('closeContainer') > -1)) {
        if (String(e.target.className).indexOf('backButton') > -1) return;
        runAudioEffect(require('./assets/sounds/mouse over.wav'));
      }
    });
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 25vh;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

svg {
  width: 85%;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

button {
  transition: transform .1s;
}

button:hover, .particles-wrapper:hover {
  transform: scale(1.05);
}
</style>
