<template>
    <nav id="nav">
      <ul>
          <li v-for="(route, key) in routes" v-bind:key="key">
              <router-link :to="route.path ? route.path : '/'"> {{ route.name }} </router-link> |
          </li>
      </ul>
    </nav>
</template>

<script>

export default {
    props: {
        routes : {
            type: Array,
            requided: true
        }
    }
}
</script>

<style>

</style>
