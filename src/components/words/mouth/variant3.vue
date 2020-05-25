<template>
  <div :class="$style.element">
    <template v-if="!error">
      <div :class="[$style.symbol, $style.symbolCircle]"></div>
    </template>
    <transition name="square">
      <template v-if="error && !secondState">
        <div :class="[$style.symbol, $style.symbolAbsolute]"></div>
      </template>
    </transition>
    <template v-if="secondState">
      <svg :class="$style.secondState"
          viewBox="0 0 801.000000 801.000000"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <g>
          <title>background</title>
          <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"></rect>
        </g>
        <g>
          <title>Layer 1</title>
          <g id="svg_1" fill="#000000"
             transform="translate(0,801) scale(0.10000000149011612,-0.10000000149011612) ">
            <path stroke="null" id="svg_2" d="m860,4026.666615l0,-3256.666615l499.066743,
            0l498.066609,0l-1.000134,868.779997c0,477.174645 0,1725.479622 2.000268,
            2773.451785l2.000268,1904.671789l2095.280212,0l2095.280212,0l0,-2763.38481l0,
            -2763.38481l520.069551,0l520.069551,0l0,3246.59964l0,3246.59964l-3115.41664,
            0l-3115.41664,0l0,-3256.666615z"></path>
          </g>
          <transition name="slide-2">
            <template v-if="animateHorizontalLine">
              <rect id="svg_3" height="94.838417" width="420.643863" y="526" x="184.377305"
                    stroke-width="1.5" stroke="#000" fill="#000000"></rect>
            </template>
          </transition>
        </g>
      </svg>
    </template>
    <transition name="fade">
      <template v-if="error">
        <div :class="$style.lt"></div>
      </template>
    </transition>
    <transition name="fade">
      <template v-if="error">
        <div :class="$style.lb"></div>
      </template>
    </transition>
    <transition name="fade">
      <template v-if="error">
        <div :class="$style.rt"></div>
      </template>
    </transition>
    <transition name="fade">
      <template v-if="error">
        <div :class="$style.rb"></div>
      </template>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'MouthVariant3',

    props: {
      error: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        secondState: false,
        animateHorizontalLine: false,
      };
    },

    watch: {
      error(value) {
        if (value) {
          setTimeout(() => {
            this.secondState = true;
            setTimeout(() => this.animateHorizontalLine = true, 1500);
          }, 1500);
        }
      }
    }
  };
</script>

<style>
.square-enter-active {
  animation: square-transform 2.5s;
}

@keyframes square-transform {
  0% {
    height: 105px;
    border-radius: 100%;
  }
  50% {}
  100% {
    transform: scale(1);
  }
}

.slide-2-enter-active, .slide-2-leave-active {
  transition: y 2.5s ease-out;
}

.slide-2-enter, .slide-2-leave-to {
  y: 626;
}

.slide-2-enter-to, .slide-2-leave {
  y: 526;
}
</style>

<style lang="scss" module>
  .element {
    position: relative;
    min-height: 150px;
    padding: 25px;

    .lt, .lb, .rt, .rb {
      position: absolute;
      width: 65px;
      height: 65px;
      border-radius: 50px;
      background: rgba(254, 252, 158, 0.7);

    }

    .lt {
      top: 5%;
      left: 5%;
    }

    .lb {
      top: 64%;
      left: 5%;
    }

    .rt {
      top: 5%;
      left: 64%;
    }

    .rb {
      top: 64%;
      left: 64%;
    }

    .symbol {
      height: 106px;
      width: 100px;
      margin: -2px auto 0;
      border: 25px black solid;
      animation-duration: 1.5s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
      animation-fill-mode: none;
      animation-play-state: running;
    }

    .symbolAbsolute {
      position: absolute;
    }

    .symbolCircle {
      border-radius: 100%;
    }

    .secondState {
      width: 192px;
      margin: -20px;
    }
  }
</style>
