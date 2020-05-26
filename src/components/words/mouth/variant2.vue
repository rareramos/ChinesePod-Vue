<template>
  <svg width="801" height="801" viewBox="0 0 801.000000 801.000000"
       xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <g>
      <title>background</title>
      <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"></rect>
    </g>
    <g>
      <title>Layer 1</title>
      <g transform="translate(0,801) scale(0.10000000149011612,-0.10000000149011612) " fill="#000000" id="svg_1">
        <path d="m750,4005l0,-3465l535,0l535,0l0,345l0,345l2245,0l2245,0l0,-335l0,-335l560,0l560,0l0,3455l0,3455l-560,
        0l-560,0l0,-2595l0,-2595l-2245,0l-2245,0l0,2595l0,2595l-535,0l-535,0l0,-3465z" id="svg_2"></path>
      </g>
      <template v-if="!error">
        <rect fill="#000000" stroke-width="1.5" x="179.911775" y="308" width="452.941186" height="101.176474"
              id="svg_3" stroke="#000"></rect>
      </template>
      <transition name="slide-mouth">
        <template v-if="error">
          <rect fill="#000000" stroke-width="1.5" x="179.911775" y="55" width="452.941186" height="101.176474"
                id="svg_3" stroke="#000"></rect>
        </template>
      </transition>
      <transition name="fade-mouth">
        <template v-if="error">
          <ellipse stroke="#000" ry="89.23135" rx="313.848232" id="svg_4" cy="359.634356" cx="412.038538"
                   fill-opacity="0.7" stroke-opacity="null" stroke-width="0" fill="#fefc9e"></ellipse>
        </template>
      </transition>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'MouthVariant2',

  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .fade-mouth-enter-active, .fade-mouth-leave-active {
    transition: opacity 2.5s;
  }
  .fade-mouth-enter, .fade-mouth-leave-to {
    opacity: 0;
  }

  .slide-mouth-enter-active, .slide-mouth-leave-active {
    transition: y 2.5s ease-out;
  }

  .slide-mouth-enter, .slide-mouth-leave-to {
    y: 308;
  }

  .slide-enter-to, .slide-leave {
    y: 55;
  }
</style>
