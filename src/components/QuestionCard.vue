<template>
  <div
    :class="$style.question">
    <h1>
      Find the character for "{{ word }}"
    </h1>
    <transition name="fade">
      <div
        v-if="isCloseShown"
        :class="$style.closeContainer"
        @click="skipQuestion"
        title="Hey, you can always click here if you are unsure about the answer.">
        <div :class="$style.leftright"></div>
        <div :class="$style.rightleft"></div>
        <label :class="$style.close">I don't know</label>
      </div>
    </transition>
    <div
      :class="$style.variants">
      <div
        v-for="variant in 3"
        :key="variant"
        @click="chooseVariant(variant - 1)">
        <component
          :is="getVariantComponentName(word, variant)"
          :error="error[variant - 1]"
          @same="sameQuestion" />
      </div>
    </div>
    <transition name="fade">
      <div
        :class="$style.unknown">
        <div
          v-for="(text, index) in descriptions"
          :id="'error-' + (index + 1)"
          :key="text">
          {{ text }}
        </div>
      </div>
    </transition>
    <div
      :class="$style.error">
      <transition name="fade" mode="out-in">
        <div
          v-if="error[selected]">
            {{ descriptions[selected] }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap';

import OutVariant1 from './words/out/variant1.vue';
import OutVariant2 from './words/out/variant2.vue';
import OutVariant3 from './words/out/variant3.vue';
import MouthVariant1 from './words/mouth/variant1.vue';
import MouthVariant2 from './words/mouth/variant2.vue';
import MouthVariant3 from './words/mouth/variant3.vue';

import { runAudioEffect } from "../utils";

export default {
  name: 'QuestionCard',

  components: {
    'out-1': OutVariant1,
    'out-2': OutVariant2,
    'out-3': OutVariant3,
    'mouth-1': MouthVariant1,
    'mouth-2': MouthVariant2,
    'mouth-3': MouthVariant3,
  },

  props: {
    word: {
      type: String,
      required: true,
    },
    correct: {
      type: Number,
      required: true,
    },
    descriptions: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      selected: -1,
      error: [
        false,
        false,
        false,
      ],
      isCloseShown: true,
      isAllHintsShown: false,
    };
  },

  created() {
    if (this.word === 'mouth') {
      runAudioEffect(require(`../assets/sounds/1-20.wav`));
    }
  },

  methods: {
    nextQuestion() {
      this.$emit('next');
    },

    sameQuestion() {
      this.$emit('same');
    },

    chooseVariant(variant) {
      this.selected = variant;
      this.$set(this.error, variant, false);

      if (this.correct === variant) {
        this.$emit('correct-answer');
        this.nextQuestion();
        runAudioEffect(require(`../assets/sounds/correct answer.wav`));
      } else {
        this.isCloseShown = false;
        this.showIncorrectVariant();
        setTimeout(() => {
          this.$set(this.error, variant, true);
        }, 1500);
      }
    },

    skipQuestion() {
      const idSVG = '#fig-';
      const idError = '#error-';
      const tl = new TimelineLite();

      const incorrectVariants = [1, 2, 3].filter(e => e !== this.correct + 1);
      const correctElement = document.querySelector(idSVG + (this.correct + 1)).parentNode;

      tl.to(correctElement, 1, {scaleY: 0});

      incorrectVariants.forEach(index => tl.to(
        document.querySelector(idSVG + index).parentNode, {scaleY: 0}, '-=1'
      ));

      incorrectVariants.forEach(index => {
        const element = document.querySelector(idSVG + index).parentNode;
        const error = document.querySelector(idError + index);

        tl.to(element, 2, {scaleY: 1});
        tl.to(error, {scaleY: 1, opacity: 1}, '-=2');
        tl.to(element, 2, {scaleY: 1});
        tl.to(error, {scaleY: 1, opacity: 1}, '-=2');
        tl.to(element, 1.5, {scaleY: 0});
        tl.to(error, {scaleY: 0, opacity: 0}, '-=1.5');
      });



      runAudioEffect(require(`../assets/sounds/button click.wav`));
      this.isAllHintsShown = true;
      this.isCloseShown = false;

      setTimeout(() => {
        tl.to(document.querySelector(idSVG + (this.correct + 1)).parentNode, 1, {transform: 'scale(1.5)'});
      }, 500);
      setTimeout(() => {
        runAudioEffect(require(`../assets/sounds/correct answer.wav`));
        setTimeout(this.nextQuestion, 500);
      }, 12500);
    },

    getVariantComponentName(word, variant) {
      return `${word}-${variant}`;
    },

    showIncorrectVariant() {
      const idSVG = '#fig-';
      const tl = new TimelineLite();
      const otherVariants = [1, 2, 3].filter(e => e !== this.selected + 1);

      const element1 = document.querySelector(idSVG + otherVariants[0]).parentNode;
      const element2 = document.querySelector(idSVG + otherVariants[1]).parentNode;
      const element3 = document.querySelector(idSVG + (this.selected + 1)).parentNode;
      const transformIncorrect = {transform: 'scale(1.5)'};

      if (this.selected === 0) {
        transformIncorrect['x'] = '260px';
      } else if (this.selected === 2) {
        transformIncorrect['x'] = '-310px';
      }

      tl.to(element1, 1, {x: -700, scaleY: 0});
      tl.to(element2, 1, {x: 700, scaleY: 0}, '-=1');
      tl.to(element3, transformIncorrect, '-=1');

      runAudioEffect(require(`../assets/sounds/highlight.wav`));
    }
  },
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<style lang="scss" module>
  .question {
    h1 {
      font-size: 24px;
      text-transform: uppercase;
      color: #c00000;
    }

    .variants {
      display: flex;
      justify-content: center;
      padding: 80px 20px;

      > div {
        width: 200px;
        height: 200px;
        margin: 0 50px;
        border-radius: 20px;
        border: 2px #fff dashed;
        cursor: pointer;

        &:hover {
          border: 2px #7f7f7f dashed;
        }
      }
    }

    button {
      width: 225px;
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

    .error {
      height: 82px;

      > div {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px #c00000 dashed;
        border-radius: 15px;
        text-align: left;
        font-size: 22px;
        font-family: Roboto Slab;
      }
    }

    $softorange: #c00000;
    $tomatored: #F25C66;
    $mediumblu: #1E272D;

    .closeContainer {
      position: relative;
      width: 50px;
      height: 50px;
      float: right;
      right: 10%;
      cursor: pointer;
    }

    .leftright {
      height: 4px;
      width: 50px;
      position: absolute;
      margin-top: 24px;
      background-color: $softorange;
      border-radius: 2px;
      transform: rotate(45deg);
      transition: all .3s ease-in;
    }

    .rightleft {
      height: 4px;
      width: 50px;
      position: absolute;
      margin-top: 24px;
      background-color: $softorange;
      border-radius: 2px;
      transform: rotate(-45deg);
      transition: all .3s ease-in;
    }

    label {
      width: 200px;
      margin-left: -50px;
      font-size: .9em;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: all .3s ease-in;
      opacity: 0;
    }
    .close {
      margin: 60px 0 0 -100px;
      position: absolute;
    }

    .closeContainer:hover .leftright {
      transform: rotate(-45deg);
      background-color: $tomatored;
    }
    .closeContainer:hover .rightleft {
      transform: rotate(45deg);
      background-color: $tomatored;
    }
    .closeContainer:hover label {
      opacity: 1;
    }

    .unknown {
      display: flex;
      justify-content: center;
      margin-top: -50px;

      div {
        width: 220px;
        margin: 0 30px;
        padding: 20px;
        border: 2px #c00000 dashed;
        border-radius: 15px;
        opacity: 0;

        &:first-child {
          border: none !important;
          width: 160px;
        }
      }
    }
  }
</style>
