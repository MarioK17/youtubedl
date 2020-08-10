<template>
  <div id="app">
    <descarga title="Descarga tus videos"></descarga>
  </div>
</template>

<script>
import Descarga from './components/Descarga.vue'

export default {
  name: 'App',
  components: {
    Descarga
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
