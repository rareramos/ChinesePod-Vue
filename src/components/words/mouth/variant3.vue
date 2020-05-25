<template>
  <div :class="$style.element">
    <template v-if="!error">
      <div :class="[$style.symbol, $style.symbolCircle]"></div>
    </template>
    <transition name="square">
      <template v-if="error">
        <div :class="$style.symbol"></div>
      </template>
    </transition>
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
  };
</script>

<style>
.square-enter-active {
  animation: square-transform 2.5s;
}

@keyframes square-transform {
  0% {
    border-radius: 100%;
  }
  50% {}
  100% {
    transform: scale(1);
  }
}
</style>

<style lang="scss" module>
  .element {
    position: relative;
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
      height: 105px;
      width: 105px;
      margin: 0 auto;
      border: 23px black solid;
      animation-duration: 1.5s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
      animation-fill-mode: none;
      animation-play-state: running;
    }

    .symbolCircle {
      border-radius: 100%;
    }
  }
</style>
