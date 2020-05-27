<template>
<svg id="fig-2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
  <g>
    <rect fill="none" id="canvas_background" height="186" width="170" y="-1" x="-1" ></rect>
  </g>
  <g>
    <title>Layer 1</title>
    <g id="svg_1" fill="#000000" transform="translate(0,184) scale(0.10000000149011612,
    -0.10000000149011612) ">
      <path id="svg_2" d="m720,1450l0,-250l-150,0l-150,0l0,175l0,176l-87,-3l-88,-3l-3,-267l-2,
      -268l570,0l570,0l-2,268l-3,267l-87,3l-88,3l0,-176l0,-175l-145,0l-145,0l-2,248l-3,247l
      -92,3l-93,3l0,-251z"></path>
      <path id="svg_3" d="m700,640l0,-250l-170,0l-170,0l0,175l0,175l-110,0l-110,0l0,-270l0,
        -270l670,0l670,0l0,270l0,270l-110,0l-110,0l0,-175l0,-175l-170,0l-170,0l0,250l0,250l
        -110,0l-110,0l0,-250z">
      </path>
    </g>
    <transition name="fade-out">
      <template v-if="error">
        <ellipse ry="21.886789" rx="28.867921" id="svg_4" cy="88.014153" cx="80.603774"
                 fill-opacity="0.7" stroke-width="0" stroke="#000" fill="#ffffcc"></ellipse>
      </template>
    </transition>
  </g>
</svg>
</template>

<script>
export default {
  name: 'OutVariant2',

  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity 2.5s;
  }
  .fade-out-enter, .fade-out-leave-to {
    opacity: 0;
  }
</style>
