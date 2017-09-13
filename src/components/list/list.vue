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
  import {listData, listData01} from 'api/list.js'
  export default {
    data () {
      return {
        listData: []
      }
    },
    created () {
      this._getlistData()
      this._getlistData01()
    },
    methods: {
      more () {
        this._getlistData()
        console.log(this.listData)
      },
      _getlistData () {
        listData().then((res) => {
          this.listData = this.listData.concat(res.data)
        })
      },
      _getlistData01 () {
        listData01().then((res) => {
          console.log(res)
          this.listData = res.data
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet">

</style>
