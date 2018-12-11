<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="images">Images</router-link></li>
        <li><router-link to="register">Register</router-link></li>
      </ul>
    </nav>
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>


<style lang="scss" scoped>
  .page-enter {}
  .page-enter-active {}
  .page-leave-active {}
</style>

