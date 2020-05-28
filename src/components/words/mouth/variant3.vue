<template>
  <svg @click="click" id="fig-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <rect id="fig3-p1" x="124.96" y="124.96" width="650.08" height="650.08" rx="325.04"
          fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="95"></rect>
    <g id="fig3-p2" opacity="0">
      <line id="fig3-move" x1="775.04" y1="775.04" x2="124.96" y2="775.04" fill="none"
            stroke="#000" stroke-miterlimit="10" stroke-width="95"></line>
      <polyline points="775.03 822.53 775.03 124.97 124.97 124.97 124.97 822.53" fill="none"
                stroke="#000" stroke-miterlimit="10" stroke-width="95"></polyline>
    </g>
    <g id="light-mouth" opacity="1">
      <circle cx="124.96" cy="124.96" r="8" fill="none" stroke="#fefc9e"
              stroke-width="1.2"></circle>
      <circle cx="124.96" cy="124.96" r="8" fill="none" stroke="#fefc9e"
              stroke-width="1.2"></circle>
      <circle cx="124.96" cy="124.96" r="8" fill="none" stroke="#fefc9e"
              stroke-width="1.2"></circle>
    </g>
    <use href="#light-mouth" transform="translate(0, 650.08)"></use>
    <use href="#light-mouth" transform="translate(650.08, 650.08)"></use>
    <use href="#light-mouth" transform="translate(650.8, 0)"></use>
  </svg>
</template>

<script>
  import { gsap } from "gsap";

  import { runAudioEffect } from "../../../utils";

  export default {
    name: 'MouthVariant3',

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
            runAudioEffect(require(`../../../assets/sounds/1-31.wav`));
          }, 500);
          setTimeout(() => this.$emit('same'), 15000);
        }, 500);
      },

      animate() {
        let idSVG = '#fig-3' + ' ';

        gsap.fromTo(
          idSVG + '#light-mouth > circle', 1,
          {scale: 0, svgOrigin: '124.96px 124.96px'},
          {scale: 14, ease: 'sine.out', stagger: 0.5, repeat: -1, delay: 1},
        );
        gsap.fromTo(
          idSVG + '#light-mouth > circle', 1,
          {opacity: 1},
          {opacity: 0, ease: 'sine.in', stagger: 0.5, repeat: -1, delay: 1},
        );
        gsap.timeline({defaults: {ease: 'sine.inOut'}, delay: 0})
          .to(idSVG + '#fig3-p1', 3, {rx: 0.01, ease: 'sine.in'})
          .set(idSVG + '#fig3-p2', {opacity: 1})
          .set(idSVG + '#fig3-p1', {opacity: 0})
          .to(idSVG + '#fig3-move', 3, {y: -84.88});
      },
    },
  };
</script>
