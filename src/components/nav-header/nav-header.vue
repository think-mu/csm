<template>
  <div class="nav-header">
    <img src="~assets/img/logo.png" alt="" />
    <!-- <span>药品展示平台</span>  -->
    <div class="content">
      <div class="title"><span>药品展示平台</span></div>
      <!-- <div class="crumbs">面包屑</div> -->
      <!-- <div class="info">用户信息</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.nav-header {
  margin-left: 104px;
  display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
  // text-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
  // position: relative;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    // padding: 0 20px;
    height: 100%;
    // position: relative;
    .crumbs {
      // position: absolute;
      // bottom: 5px;
      // left: 80px;
    }
    .title {
      padding-left: 0;
      font-size: 38px;
      background-image:-webkit-linear-gradient(bottom,#83EAEB,#FFE9E9);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      font-family: 'headerTitleFont';
    }
    .info {
      padding-right: 20px;
    }
  }
  img {
    width: 52px;
    height: 52px;
    margin-right: 11px;
  }
}
</style>
