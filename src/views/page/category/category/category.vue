<template>
  <div class="category">
        <el-row :gutter="20">
      <el-col :span="11">
        <s-card title="药品企业信用分级" class="map">
          <map-echart height="750px" :mapData="mapData" mapName="category"></map-echart>
        </s-card>
      </el-col>
      <el-col :span="13" class="content-right">
        <s-card
          title="企业信用分级"
          class="content-right-pie"
          flex="flex"
        >
          <pie-echart
            height="325px"
            :pieData="pieAllData"
            :pieTitle="pieTitle1"
            @pieClick="pieClick"
          ></pie-echart>
          <pie-echart
            height="325px"
            :pieData="pieAreaData"
            :pieTitle="pieTitle2"
          ></pie-echart>
        </s-card>
        <s-card
          title="各信用级别药品企业数量"
          :isShowIcon="isShowIcon"
          @changeShowIcon="changeShowIcon"
        >
          <bar-echart
            height="325px"
            :xData="xData"
            :yData="yData"
            @barClick="barClick"
            v-show="!isShowIcon"
          ></bar-echart>
          <bar-echart
            height="325px"
            :xData="xData1"
            :yData="yData1"
            v-if="isShowIcon"
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
import { categoryInfo } from 'service/main/category/category'
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
        pieAreaData: [],
        pieTitle1: "药品企业信用情况",
        pieTitle2: "A药品企业数量",
        xData: [], //柱形图x轴数据
        xData1: [],
        yData: [], //柱形图y轴数据
        yData1: [],
        isShowIcon: false, //是否现实柱形图返回按钮
      }
    },
    created() {
      this.getCategoryInfo()
      this.getLevelInfo()
      this.getPieAraeData("A")
    },
    methods: {
      /* 数据获取 start */
      //获取地图数据
      getCategoryInfo() {
        const data = {
          region: '',
          action: 'credit',
          year: 2021,
          type: 'T01',
          level: 2,
          classname: "零售药店"
        }
        categoryInfo(qs.stringify(data)).then((res) => {
          this.mapData = levelData(res.data)
          // console.log(this.mapData,"map")
        })
      },
      //获取全市各级别企业数量
      getLevelInfo() {
        const data = {
          region: '',
          action: 'credit',
          year: 2021,
          type: 'T01',
          level: 3,
          classname: "零售药店"
        }
        categoryInfo(qs.stringify(data)).then((res) => {
          this.pieAllData = res.data.map((item) => {
            return {
              name: item.CREDIT_CLASS,
              value: item.NUM
            }
          })
          //更新柱形图x轴值
          this.xData = res.data.map((item) => {
            return {
              value: item.CREDIT_CLASS
            }
          })
          //更新柱形图y轴值
          this.yData = res.data.map((item) => {
            return {
              value: item.NUM
            }
          })
        })
      },
      //获取更新饼形图辖区分级数据
      getPieAraeData(param) {
        setTimeout(() => {
          try {
            this.pieAreaData = this.mapData.map((item) => {
              return {
                name: item.name,
                value: item.value[0][param]
              }
            })
          } catch (error) {}
        }, 500)
        
      },
      //获取更新柱形图辖区分级数据
      getBarAraeData(param) {
          setTimeout(() => {
            try {
              this.xData1 = this.mapData.map((item) => {
                return {
                  value: item.name,
                  // value: item.value[0][param]
                }
              })
              this.yData1 = this.mapData.map((item) => {
                return {
                  value: item.value[0][param]
                }
              })
            } catch (error) {}
          }, 500)
          //更新柱形图x轴值
         /*  this.xData1 = res.data.map((item) => {
            return {
              value: item.REGION
            }
          })
          //更新柱形图y轴值
          this.yData1 = res.data.map((item) => {
            return {
              value: item.NUM
            }
          }) */
    
      },
      /* 数据获取 end */
      /* 饼形图事件 start*/
      //全市分级饼形图--点击事件
      pieClick(param) {
        // console.log(param,"并行");
        this.getPieAraeData(param.name)
        this.pieTitle2 = param.name + '级别药品企业数量'
        
      },
      /* 饼形图事件 end*/

      /* 柱形图事件 start*/
      barClick(param) {
        this.getBarAraeData(param.name)
        this.isShowIcon = true
        // console.log(param, '柱形图')
      },
      changeShowIcon(val) {
        // console.log(val)
        this.isShowIcon = val
      }
      /* 柱形图事件 end*/
      }
  }
</script>

<style scoped lang='less'>
.category {
  // height: 100%;
  .el-row,
  .el-col {
    height: 100% !important;
  }
  .content-right {
    height: 100%;
    display: flex;
    flex-direction: column;
    &-pie {
      margin-bottom: 15px;
    }
  }
}
</style>
