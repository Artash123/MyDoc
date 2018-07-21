<template>
  <div id="app">
    <top-header />
    <router-view/>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader';
export default {
  name: 'App',
  components: {
    TopHeader,
  },
};
</script>

<style lang="scss">
@import './assets/style';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
