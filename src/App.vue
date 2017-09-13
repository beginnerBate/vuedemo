<template>
  <div id="app">
    <local-linear></local-linear>
    <random-chart></random-chart>
    <list></list>
    <router-view></router-view>
  </div>
</template>

<script>
  import LocalLinear from 'components/localLinear'
  import RandomChart from 'components/randomChart/RandomChart.vue'
  import list from 'components/list/list.vue'
  export default {
    name: 'app',
    components: {
      RandomChart,
      LocalLinear,
      list
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
