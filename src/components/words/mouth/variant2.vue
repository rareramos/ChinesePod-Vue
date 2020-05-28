<template>
  <svg @click="click" id="fig-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <g>
      <line x1="775.04" y1="690.15" x2="124.96" y2="690.15" fill="none"
            stroke="#000" stroke-width="95"></line>
      <line x1="124.96" y1="77.46" x2="124.96" y2="822.54" fill="none"
            stroke="#000" stroke-width="95"></line>
      <line x1="775.04" y1="77.46" x2="775.04" y2="822.54" fill="none"
            stroke="#000" stroke-width="95"></line>
    </g>
    <g id="fig2-move">
      <line x1="775.04" y1="424.96" x2="124.96" y2="424.96" fill="none"
            stroke="#000" stroke-width="95"></line>
      <g id="light">
        <circle cx="450" cy="425.29" r="8" fill="none" stroke-width="1.2"></circle>
        <circle cx="450" cy="425.29" r="8" fill="none" stroke-width="1.2"></circle>
        <circle cx="450" cy="425.29" r="8" fill="none" stroke-width="1.2"></circle>
      </g>
    </g>
  </svg>
</template>

<script>
import { gsap } from "gsap";

import { runAudioEffect } from "../../../utils";

export default {
  name: 'MouthVariant2',

  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    click() {
      runAudioEffect(require(`../../../assets/sounds/textbox shows.wav`));
      setTimeout(() => {
        setTimeout(this.animate, 8500);
        setTimeout(() => {
          runAudioEffect(require(`../../../assets/sounds/1-30.wav`));
        }, 500);
        setTimeout(() => this.$emit('same'), 11000);
      }, 500);
    },

    animate() {
      let idSVG = '#fig-2' + ' ';

      gsap.to(
        idSVG + '#light > circle', 1,
        {stroke: "#fefc9e"}
      );
      gsap.fromTo(
        idSVG + '#light > circle', 1,
        {
          scale: 0, svgOrigin: '450px 425.39px'
        },
        {
          scale: 14, ease: 'sine.out', stagger: 0.5, repeat: -1, delay: 1
        },
      );
      gsap.fromTo(
        idSVG + '#light > circle', 1,
        {opacity: 1},
        {opacity: 0, ease: 'sine.in', stagger: 0.5, repeat: -1, delay: 1},
      );
      gsap.to(
        idSVG + '#fig2-move', 2,
        {y: -300, ease: 'sine.inOut', delay: 0.9},
      );
    }
  },
};
</script>
