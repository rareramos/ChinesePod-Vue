<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    document.addEventListener('mouseover', e => {
      if (e.target && (e.target.localName === 'button'
        || String(e.target.className).indexOf('particles-button') > -1)) {
        document.body.click();  // fix bug with audio running without any clicks
        const audio = new Audio(require('./assets/sounds/mouse over.wav'));
        audio.play();
      }
    });
  },
};
</script>

<style lang="scss">
#app {
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
