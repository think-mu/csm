<template>
<div class="border">
  <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="card-header-title"><img src="~@/assets/img/card/card-icon.png" alt="">{{ title }}</span>
          <slot name='select'></slot>
          <i class="el-icon-refresh-left" v-if="isShowIcon" @click="changeShowIcon"></i>
          <img class="card-header-line" src="~@/assets/img/card/card-line.png" alt="">
        </div>
      </template>
      <div class="item" :style="{ display : flex}">
        <slot></slot>
      </div>
      <div class="card-footer"></div>
  </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    flex: {
      type: String,
      default: ''
    },
    isShowIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    changeShowIcon() {
      this.$emit('changeShowIcon', false)
    }
  }
}
</script>

<style scoped lang="less">
.border {
  position: relative;
}
.box-card {
  background-color: #d7eff800; 
  border: 1px solid #00748D;
  border-radius: 5px;
  color: #FFAE00;
  font-size: 20px;
  /deep/ .el-card__header {
    padding: 10px 20px !important;
    border-bottom: none;
    
    // border-bottom: 5px dashed #ffffff;  //ui设计
  }
  /deep/ .el-card__body {
    padding: 0px !important;
  }
  

  // 边框角样式
  &::before {
    position:absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-top-left-radius: 5px;
    border-left: 3px solid #00C0FF;
    border-top: 3px solid #00C0FF;
    content: "";
  }
  &::after {
    position:absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    border-top-right-radius: 5px;
    border-right: 3px solid #00C0FF;
    border-top: 3px solid #00C0FF;
    content: "";
  }
  .card-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    &::before {
    position:absolute;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-bottom-left-radius: 5px;
    border-left: 3px solid #00C0FF;
    border-bottom: 3px solid #00C0FF;
    content: "";
    }
    &::after {
      position:absolute;
      bottom: 0;
      right: 0;
      width: 8px;
      height: 8px;
      border-bottom-right-radius: 5px;
      border-right: 3px solid #00C0FF;
      border-bottom: 3px solid #00C0FF;
      content: "";
    }
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: relative;
  &-title {
    margin-left: 16px;
    margin-bottom: 5px;
    img {
      margin-right: 15px;
    }
  }
  &-line { 
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0px;
  }
}

.item {
  // margin-bottom: 10px;
  // display: flex;
  // flex: 1;
  // justify-content: space-between;
  // border: 1px solid red;
}
</style>
