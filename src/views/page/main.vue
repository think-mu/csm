<template>
  <div class="main">
    <el-container class="main-content">
      <el-header>
        <nav-header />
      </el-header>
      <el-container class="page">
        <el-aside class="page-aside">
          <nav-menu />
        </el-aside>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/nav-menu/nav-menu'
import NavHeader from '@/components/nav-header/nav-header'
import userMenus from 'utils/nav-menu.js'

export default {
  name: '',
  components: {
    NavMenu,
    NavHeader
  },
  data() {
    return {}
  },
  created() {
    this.getUserMenus()
  },
  methods: {
    getUserMenus() {
      // this.$store.commit('changeUserMenus', userMenus)
      this.$store.dispatch('saveMenus', userMenus)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content {
  height: 100%;
  position: relative;
}

.page {
  height: calc(100% - 86px);
}

.el-header {
  // background: url('../../assets/img/bgh.png');
  // height: 90px !important;
  // display: flex;
  // text-align: center;
  // align-items: center;
  // position: fixed;
  // top: 0;
  // left: 0;
/*   width: 100%;
  height: 86px !important;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background: url(../../assets/img/bgh.png) no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0; */
  padding: 0;
  background-image: url(../../assets/img/bgh.png);
  background-repeat:no-repeat;
  background-size: 100% 100%;
  height: 86px !important;
  // min-width: 1024px;
  width: 100%;

}

.el-aside {
  width: 217px !important;
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  // background: linear-gradient(to top, #0f69ca, #d0f3ff) !important;
  background-image: url(../../assets/img/bgs.png);
  background-repeat:no-repeat;
  background-size: 100% 100%;
  // height: 86px !important;
  // min-width: 1024px;
  // width: 100%;
  // transition: width 0.3s linear;
  // scrollbar-width: none; 
  // -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  // background-color: #f0f2f5;
  padding: 15px !important;
  background-image: url(../../assets/img/bgc.png);
  background-repeat:no-repeat;
  background-size: 100% 100%;
  // height: 86px !important;
  min-width: 1024px;
  width: 100%;
  height: 100%;
}
</style>
