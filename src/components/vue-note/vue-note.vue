<template>
    <div class="vue-note">
      <header>
        <ul class="note-menu">
          <li><span>vue云笔记</span></li>
          <li>
            <div>
              <span class="active">云笔记</span>
              <span>云协作</span>
            </div>
            <div>
              <span>头像</span>
              <span>官网</span>
              <span>会员</span>
              <span>客户端下载</span>
            </div>
          </li>
        </ul>
      </header>
      <section class="main-wrapper">
        <ul>
          <template>
            <li></li>
          </template>
        </ul>
      </section>
    </div>
</template>

<script>
    export default {

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet">
  .note-menu{
    list-style: none;
    display: flex;
    background: #318DEA;
    color:#ffffff;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height:44px;
    line-height: 44px;
    li:first-child{
      flex: 0 0 200px;
      font-size: 18px;
      text-indent: 30px;
    }
    li:last-child{
      flex: 1;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      font-size: 14px;
      div {
        flex: 1;
        display: flex;
        box-sizing: border-box;
        text-align: center;
        color:#ADD1F7;
        .active {
          background: #2A78C7;
          color: #ffffff;
        }
      }
      div:last-child{
        justify-content: flex-end;
        span{
          flex: 0 0 90px;
        }
      }
      div span {
        flex: 0 0 90px;
      }
    }
  }
</style>
