<template>
  <svg id="fig-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <g>
      <line x1="775.04" y1="690.15" x2="124.96" y2="690.15" fill="none"
            stroke="#000" stroke-width="95"></line>
      <line x1="124.96" y1="77.46" x2="124.96" y2="822.54" fill="none"
            stroke="#000" stroke-width="95"></line>
      <line x1="775.04" y1="77.46" x2="775.04" y2="822.54" fill="none"
            stroke="#000" stroke-width="95"></line>
    </g>
    <line x1="775.04" y1="124.96" x2="124.96" y2="124.96" fill="none"
          stroke="#000" stroke-width="95"></line>
  </svg>
</template>

<script>
export default {
  name: 'MouthVariant1',

  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
</style>
