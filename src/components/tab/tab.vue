<template>
  <div class="tabs">
    <template v-for="(item,index) in tabs">
      <router-link tag="div" class="tabs-item" :to="item.urlLink">
        <span>{{ item.name }}</span>
      </router-link>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          {
            name: '图表',
            urlLink: '/vue-chart'
          },
          {
            name: '列表',
            urlLink: '/vue-list'
          },
          {
            name: '懒加载',
            urlLink: '/loader-img'
          },
          {
            name: '作品',
            urlLink: '/vue-note'
          }
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet">
  @import "../../common/scss/variable";
  .tabs{
    display: flex;
    height: 44px;
    align-items: center;
    justify-items: center;
    background:$background-color-theme;
    color: $text-color;
    border-bottom: 1px solid #d4d4d4;
    .tabs-item{
      flex: 1;
      text-align: center;
    }
    .router-link-active {
      color: crimson;
    }
  }
</style>
