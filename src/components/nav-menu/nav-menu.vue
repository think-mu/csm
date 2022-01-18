<template>
  <div class="nav-menu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      unique-opened
      background-color="#5F88AF"
      text-color="#fff"
      active-text-color="#fff">
      <div v-for="(item,index) in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <template slot="title">
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历子项 -->
            <template v-for="subitem in item.children" >
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>  
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''" class="amenu-item"
          @click="handleMenuItemClick(item)">
            <img :class="'amenu-item-icon' + index" class="amenu-item-icon" :src="iconName[index].url" alt="" />
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </div>  
    </el-menu>
  </div>
</template>

<script>
import userMenus from 'utils/nav-menu.js'
import icon1 from 'assets/img/side/icon-1.png'
import icon2 from 'assets/img/side/icon-2.png'
import icon3 from 'assets/img/side/icon-3.png'
import icon4 from 'assets/img/side/icon-4.png'
  export default {
    name: "",
    data() {
      return {
        defaultActive: "1",
        userMenus :"",
        // iconName: icon1
        iconName: [
          {
            url: icon1
          },{
            url: icon2
          },{
            url: icon3
          },{
            url: icon4
          },
        ]
      }
    },
    created() {
      this.userMenus = userMenus
      this.setCurrentRoute()
      // console.log(userMenus,"nav");
    },
    watch: {
      $route () {
        this.setCurrentRoute()
      }
    },
    methods: {
      handleMenuItemClick(item) {
        // console.log(item);
        if(item){
          this.$router.push(item.url)
        }else{
          this.$router.push('/not-found')
        }
      },
      setCurrentRoute () {
        // this.defaultActive = this.$route.name//关键   通过他就可以监听到当前路由状态并激活当前菜单
        let ac
        switch(this.$route.name)
        {
          case "detail":
            ac = "1"
          break;
          case "category":
            ac = "2"
          break;
          case "review":
            ac = "3"
          break;
          case "enforce":
            ac = "4"
          break;
        }
        this.defaultActive = ac
      }
    }
  }
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background: #000000 !important;
    z-index: 99;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      line-height: 42px;
      height: 42px;
      padding-left: 30px !important;
      background: #5F88AF !important;
      // background-image: linear-gradient(to top,#5dabf5, #cedfeb) !important;
    }
  }
  .amenu-item {
    background: rgba(19, 53, 108, 0.795) !important;
    border-bottom: 1px #99dde53a solid;
    &-icon {
      margin-right: 10px;
    }

  }  


  ::v-deep .el-submenu__title {
    height: 42px;
    line-height: 42px;
    background: linear-gradient(to top,#6BBAE3, #cedfeb) !important;

  }
  .el-menu-item {
    font-size: 16px;
    height: 42px;
    line-height: 42px;
    text-align: center;
  }
  // hover 高亮
  .el-menu-item:hover {
    background-color: #31629e98 !important;
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    // color: #fff !important;
    // background: url('../../assets/img/side/frame.png') !important;
    // background-size: 100% 100%;
    background-image: url('../../assets/img/side/frame.png') !important;
    background-color: #0b2041 !important;
    background-repeat: no-repeat !important;
    background-size: 100% 100% !important;
    height: 42px !important;
    text-align: center !important;
    color: #4DE8FF !important;
    border-right: 2px solid #03b2aca1 !important;
    // background: #1466bd !important;
    .amenu-item-icon0 {
       content: url("../../assets/img/side/icon-1-c.png")
    }
    .amenu-item-icon1 {
       content: url("../../assets/img/side/icon-2-c.png")
    }
    .amenu-item-icon2 {
       content: url("../../assets/img/side/icon-3-c.png")
    }
    .amenu-item-icon3 {
       content: url("../../assets/img/side/icon-4-c.png")
    }
  }

}

</style>
