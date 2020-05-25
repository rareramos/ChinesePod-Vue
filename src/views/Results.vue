<template>
  <div
    :class="$style.results">
    <h1>Results</h1>
    <h2>{{ $route.query.answers || 0 }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ResultsPage',
};
</script>

<style lang="scss" module>
  .results {
    h1, h2 {
      font-size: 66px;
    }

    h1 {
      text-transform: uppercase;
      color: #c00000;
    }

    h2 {
      text-align: center;
    }
  }
</style>
