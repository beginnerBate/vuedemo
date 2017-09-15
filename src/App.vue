<template>
  <div id="app">
    <vue-header></vue-header>
    <tab></tab>
    <transition name="slider">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
  import tab from 'components/tab/tab.vue'
  import vueHeader from 'components/header/header.vue'
  export default {
    name: 'app',
    components: {
      vueHeader,
      tab
    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  .slider{

    }
  .slider{

  }
</style>
