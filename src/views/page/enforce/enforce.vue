<template>
  <div class="enforce">
        <el-row :gutter="20">
      <el-col :span="11">
        <s-card title="监督执法统计" class="map">
          <map-echart height="750px" :mapData="mapData" mapName="enforce"></map-echart>
        </s-card>
      </el-col>
      <el-col :span="13" class="content-right">
        <s-card
          title="药品违法案件情况"
          class="content-right-pie"
        >
        <template v-slot:select>
          <el-select v-model="value" @change="pieSelect" class="content-select" :popper-append-to-body="false" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
          <pie-echart
            style="padding-left: 20%;"
            height="325px"
            legendWidth="400"
            :pieData="pieAllData"
          ></pie-echart>
        </s-card>
        <s-card
          title="药品违法案件情况"
        >
        <template v-slot:select>
          <el-select v-model="valueBar" @change="barSelect" :popper-append-to-body="false"> 
            <el-option
              v-for="item in optionsBar"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
          <!-- <bar-echart
            height="280px"
            :xData="xData"
            :yData="yData"
            @barClick="barClick"
            v-show="!isShowIcon"
          ></bar-echart>-->
          <bar-echart
            height="325px"
            :xData="xData"
            :yData="yData"
          ></bar-echart> 
        </s-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import qs from 'qs'
import SCard from '@/base-ui/card/card'
import PieEchart from '@/components/page-echart/src/pie-echart'
import BarEchart from '@/components/page-echart/src/bar-echart'
import MapEchart from '@/components/page-echart/src/map-echart'
import { mainInfo } from 'service/main/main'
import { levelData,convertData } from '@/utils/convert-data'

  export default {
    name: "",
    components: {
      SCard,
      PieEchart,
      BarEchart,
      MapEchart
    },
    data() {
      return {
        mapData: [],
        pieAllData: [],

        xData: [], //柱形图x轴数据
        xData1: [],
        yData: [], //柱形图y轴数据
        yData1: [],
        isShowIcon: false, //是否现实柱形图返回按钮
        mainData:[],
        options: [{
          value: 'LANUM',
          label: '立案数量'
        }, {
          value: 'CZNUM',
          label: '处置数量'
        }, {
          value: 'YSNUM',
          label: '移送数量'
        }],
        optionsBar: [{
          value: 'LANUM',
          label: '立案数量'
        }, {
          value: 'CZNUM',
          label: '处置数量'
        }, {
          value: 'YSNUM',
          label: '移送数量'
        }],
        value: 'LANUM',
        valueBar: 'LANUM'
      }
    },
    created() {
      this.getMapInfo()
      
      // this.getLevelInfo()
      // this.getPieAraeData("A")
    },
    mounted() {
      
    },
    methods: {
      /* 数据获取 start */
      //获取地图数据
      getMapInfo() {
        const data = {
          region: '',
          action: 'punish',
          year: 2021,
          type: 'T01',
          level: 1,
        }
        mainInfo(qs.stringify(data)).then((res) => {
          this.mapData = res.data.map((item) => {
            return {
              name: item.REGIONNAME,
              value: item
            }
          })
          this.mainData = res.data
          this.getPieInfo("LANUM")
          this.getBarInfo("LANUM")
          // console.log(this.mapData,"map")
        })
      },
      //获取饼图数量
      getPieInfo(val) {
        this.pieAllData = this.mainData.map((item)=> {
          return {
              name: item.REGIONNAME,
              value: item[val]
          }
        })
      },
      getBarInfo(val) {
        // console.log(val);
        this.xData = this.mainData.map((item)=> {
          return {
              value: item.REGIONNAME
          }
        })
        this.yData = this.mainData.map((item)=> {
          return {
              value: item[val]
          }
        })
      },


      /* 数据获取 end */
      /* 饼形图事件 start*/
      //全市分级饼形图--点击事件
      pieSelect(param) {
        this.getPieInfo(param)
        
      },
      /* 饼形图事件 end*/

      /* 柱形图事件 start*/
      barSelect(param) {
        this.getBarInfo(param)
      },
      changeShowIcon(val) {
        this.isShowIcon = val
      }
      /* 柱形图事件 end*/
      }
  }
</script>

<style scoped lang='less'>
  ::v-deep { 

    .el-input__inner {
      background-color: rgba(166, 255, 0, 0) !important;
      border:1px transparent solid;
      border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
      box-shadow: 0px 0px 3px 1px #01cfff;
      z-index: 10;
      color: #fff;
      font-size: 16px;
      width: 180px;
      text-align: left;
    }
    .el-select-dropdown {
      background-color: rgba(20, 74, 116, 0);
      .el-scrollbar{
        background-color: rgba(20, 74, 116, 0.705);
        color: #fff !important;
        border:1px transparent solid;
        border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
        box-shadow: 0px 0px 3px 1px #01cfff;
        .el-scrollbar__view {
          color: #fff !important;
          .el-select-dropdown__item {
            font-size: 16px;
            text-align: left;
            color: #fff !important;
          }
          .hover {
            background-image: linear-gradient(to right,rgba(2,157,193,1), rgb(3, 64, 110)) !important;
          }
          .selected {
            font-weight: bold;
            color: #00efff !important;
          }
        }
      }
    } 
  }
  // /deep/ .el-scrollbar{
  //   background-color: rgba(20, 74, 116,.8);
  //   color: #fff !important;
  //   border:1px transparent solid;
  //   border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
  //   box-shadow: 0px 0px 3px 1px #01cfff;
  // }

.enforce {
  // height: 100%;
  .el-row,
  .el-col {
    height: 100% !important;
  }

  .content-right {
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .content-select {
      // background-color: rgb(255, 0, 0) !important;
    }
    &-pie {
      margin-bottom: 15px;
    }
  }
}
</style>
