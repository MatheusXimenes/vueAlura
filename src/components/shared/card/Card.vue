<template>
  <div class="card">
     <h2 class="card-title">{{ title }}</h2>
     <slot class="card-content"></slot>
  </div>
  </template>

<script>
  export default {
    // Props
    props: [ 
      'title'
    ]
  };
</script>

<style <style lang="scss" scoped>
  .card-title {
    background-color: #ccc;
  }

  .card-content {
    background-color: #fff;
  }
</style>

