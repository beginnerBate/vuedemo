<template>
  <div class="list">
    <ul>
      <template v-for="item in listData">
        <li>{{ item }}</li>
      </template>
    </ul>
    <button @click="more()">点击加载更多</button>
  </div>
</template>

<script>
  import {listData, listData01, huaBan} from 'api/list.js'
  export default {
    data () {
      return {
        listData: []
      }
    },
    created () {
      this._getlistData()
      this._getlistData01()
      this._getHunban()
    },
    methods: {
      more () {
        this._getlistData()
      },
      _getlistData () {
        listData().then((res) => {
          this.listData = this.listData.concat(res.data)
        })
      },
      _getlistData01 () {
        listData01().then((res) => {
          this.listData = res.data
        })
      },
      _getHunban () {
        huaBan().then((res) => {
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet">

</style>
