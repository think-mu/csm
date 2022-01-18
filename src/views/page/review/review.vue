<template>
  <div class="review">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="board">
          <div class="board-btn">
            <el-radio-group v-model="radio" @change="selectItem">
              <el-radio-button
                v-for="(item, index) in btnName"
                :label="item"
              ></el-radio-button>
            </el-radio-group>
          </div>
          <!-- <div class="board-data">
            <div
              class="board-data-item"
              v-for="(item, index) in totalData"
              :key="index"
            >
              <i :class="item.icon"></i>
              <div class="board-data-item-content">
                <span>{{ item.name }}</span>
                <span>{{ item.num }}</span>
              </div>
            </div>
          </div> -->
        </div>
        <s-card title="全市监督检查情况" class="map">
          <div class="map-hd">
            <ul v-for="(item, index) in totalData" :key="index">
              <li>
                <span>{{ item.num }}</span
                ><span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
          <map-echart
            height="695px"
            width="100%"
            :mapData="mapData"
            :mapName="mapItem"
          ></map-echart>
        </s-card>
      </el-col>
      <el-col :span="12" class="content-right">
        <s-card title="监督检查情况" class="content-right-pie">
          <template v-slot:select v-if="isShowSec">
            <el-switch
              v-model="switchValue"
              >
            </el-switch>
            <el-form
              v-if="switchValue"
              :inline="true"
              :model="formSpecial"
              class="content-form"
              size="mini"
              :rules="rules" 
              ref="ruleForm"
            >
              <el-form-item label-width="80" prop="year">
                <!-- <el-select v-model="formSpecial.year" placeholder="年度">
                  <el-option label="2021" value="2021"></el-option>
                </el-select> -->
                <el-date-picker
                  v-model="formSpecial.year"
                  type="year"
                  popper-class="yselect"
                  :picker-options="pickerOptions"
                  :popper-append-to-body="false"
                  placeholder="选择年">
                </el-date-picker>
              </el-form-item>
              <el-form-item prop="plan">
                <el-select v-model="formSpecial.plan" placeholder="方案名称" :popper-append-to-body="false">
                  <el-option
                    v-for="item in planData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')" >查询</el-button>
              </el-form-item>
            </el-form>
          </template>
          <line-echart
            height="325px"
            :xLineData="xLineData"
            :LineData="LineData"
            @pieClick="pieClick"
            v-if="isShowFri"
          ></line-echart>
          <mix-echart
            height="325px"
            @pieClick="pieClick"
            :mixXdata="mixXdata"
            :mixLineData="mixLineData"
            :mixBarData="mixBarData"
            v-if="!switchValue && isShowSec"
          ></mix-echart>
          <stack-echart
            height="325px"
            @pieClick="pieClick"
            :stackData="stackData"
            v-if="isShowThi"
          ></stack-echart>
          <!-- <h1 v-if="isShowSecCh">test</h1> -->
          <stack-simple-echart-se
            ref="se"
            height="325px"
            :fromData='formSpecial'
            :stackData='stackSimpleDatai'
            v-if="switchValue"
          ></stack-simple-echart-se>
        </s-card>
        <s-card
          title="监督检查情况"
          :isShowIcon="isShowIcon"
          @changeShowIcon="changeShowIcon"
        >
          <multi-bar-echart
            height="325px"
            :source="source"
            :dimensions="dimensions"
            @barClick="barClick"
            v-if="isShowFri"
          ></multi-bar-echart>
          <multi-bar-echart
            height="325px"
            :source="source"
            :dimensions="dimensions"
            @barClick="barClick"
            v-if="isShowSec"
          ></multi-bar-echart>

          <stack-simple-echart
            height="325px"
            @pieClick="pieClick"
            :stackData="stackSimpleData"
            v-if="isShowThi"
          ></stack-simple-echart>
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
import LineEchart from '@/components/page-echart/src/line-echart'
import MixEchart from '@/components/page-echart/src/mix-echart'
import StackEchart from '@/components/page-echart/src/stack-echart'
import StackSimpleEchart from '@/components/page-echart/src/stack-simple-echart'
import StackSimpleEchartSe from '@/components/page-echart/src/stack-simple-echart-se'
import MultiBarEchart from '@/components/page-echart/src/multi-bar-echart'
import MapEchart from '@/components/page-echart/src/map-echart'
import { dataTotal } from 'service/main/detail/detail'
import { mainInfo } from 'service/main/main'

export default {
  name: '',
  components: {
    SCard,
    PieEchart,
    BarEchart,
    MapEchart,
    MultiBarEchart,
    LineEchart,
    MixEchart,
    StackEchart,
    StackSimpleEchart,
    StackSimpleEchartSe,
  },
  data() {
    return {
      switchValue: false,
      btnName: [
        '日常检查',
        '专项检查',
        '零售药店GSP跟踪检查',
        '有因检查',
        '飞行检查'
      ],
      mapData: [],
      pieAllData: [],
      pieAreaData: [],
      pieTitle1: '药品企业信用情况',
      pieTitle2: '各辖区A药品企业数量',
      xData: [], //柱形图x轴数据
      xData1: [],
      yData: [], //柱形图y轴数据
      yData1: [],
      isShowIcon: false, //是否现实柱形图返回按钮
      totalData: [],
      radio: '日常检查', //业务按钮选中值
      pickYear: 2021,
      mapItem: 'review',
      source: [],
      dimensions: [],
      isShowFri: true, //日常，有因，飞行
      isShowSec: false, // 专项
      isShowThi: false, // gsp
      isShowSecCh: false, // 专项具体
      xLineData: [], // 年度折线图x轴
      LineData: [], //年度折线图数据
      mixXdata: [], //专项混合图x轴数
      mixLineData: [], //专项混合图折线数据
      mixBarData: [], // 专项混合图柱形数据
      stackData: [], //gsp堆积图数据
      stackSimpleData: [],
      stackSimpleDatai:{},//专项详细数据
      formSpecial: {
        year: new Date('2021'),
        plan: 680
      }, //筛选
      PlanData1: [
        {
          value: 'LANUM',
          label: '立案数量'
        },
        {
          value: 'CZNUM',
          label: '处置数量'
        },
        {
          value: 'YSNUM',
          label: '移送数量'
        }
      ],
      planData:[],
      // timeDefaultShow: new Date('2021'),
      pickerOptions: {
        disabledDate(time) {
          return (
            time.getTime() > Date.now() ||
            time.getTime() < new Date('2021')
          )
        },
      },
      rules:{
        year: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        plan: [
          { required: true, message: '请选择方案', trigger: 'change' }
        ],
      }//表单验证规则

    }
  },
  created() {
    this.getPlanInfo({ vYaer: this.formSpecial.year,vPlanId: this.formSpecial.plan })
    // console.log(this.PlanData);
    this.getTotalData()
    this.getMapInfo()
    this.getBarFri()
    this.getLineInfo()
    this.getStackThi()
    this.getMixSec({ vYaer: this.pickYear,vLevel: 2 })
    // this.getLevelInfo()
    // this.getPieAraeData('A')
  },
  // computed: {
  //   btnStatus() {
  //     if(this.formSpecial.plan&&this.formSpecial.year) {
  //       return true
  //     }else {
  //       return false
  //     }
      
  //   }
  // },
  methods: {
    /* 数据获取 start */
    //今日统计数据
    getTotalData() {
      const data = {
        region: '',
        action: 'today',
        type: 'T01',
        model: 1
      }
      dataTotal(qs.stringify(data)).then((res) => {
        let titleArr = ['符合数', '整改数', '检查数', '不符合数']
        let iconArr = [
          'el-icon-s-claim',
          'el-icon-warning-outline',
          'el-icon-search',
          'el-icon-s-release'
        ]
        let obj = res.data[0]
        delete obj.ID
        this.totalData = Object.values(obj).map((item, index) => {
          return { num: item, name: titleArr[index], icon: iconArr[index] }
        })
      })
    },
    //获取地图数据
    getMapInfo({ vYaer = 2021, vCategory = '日常检查' } = {}) {
      const data = {
        region: '',
        level: 1,
        action: 'normal',
        type: 'T01',
        year: vYaer,
        category: vCategory
      }
      mainInfo(qs.stringify(data)).then((res) => {
        this.mapData = res.data.map((item) => {
          return {
            name: item.REGIONNAME,
            value: item
          }
        })
      })
    },
    getGspInfo({ vYaer = 2021 } = {}) {
      const data = {
        region: '',
        level: 1,
        action: 'gsp',
        year: vYaer
      }
      mainInfo(qs.stringify(data)).then((res) => {
        this.mapData = res.data.map((item) => {
          return {
            name: item.REGIONNAME,
            value: item
          }
        })
      })
    },
    //获取日常，有因，飞行检查数据
    getBarFri({ vYaer = 2021, vCategory = '日常检查' } = {}) {
      const data = {
        region: '',
        level: 2,
        action: 'normal',
        type: 'T01',
        year: vYaer,
        category: vCategory
      }
      mainInfo(qs.stringify(data)).then((res) => {
        this.source = res.data.map((item) => {
          return {
            name: item.CLASS_NAME,
            已整改数量: item.YZGCNUM,
            需整改数量: item.XYZG,
            检查数量: item.CHECKNUM
          }
        })
        this.dimensions = ['name', '已整改数量', '需整改数量', '检查数量']
      })
    },
    //获取折线图数据
    getLineInfo({ vCategory = '日常检查' } = {}) {
      const data = {
        region: '',
        action: 'trend',
        type: 'T01',
        model: 1,
        category: vCategory
      }
      mainInfo(qs.stringify(data)).then((res) => {
        this.xLineData = res.data.map((item) => {
          return item.YEAR
        })
        this.LineData = res.data.map((item) => {
          return item.NUM
        })
      })
    },
    //获取专项柱形折线混合数据
    getMixSec({ vYaer = 2021,vLevel= 1,vPlanId= '' } = {}) {
      const data = {
        region: '',
        action: 'plan',
        type: 'T01',
        level: vLevel,
        year: vYaer,
        name: '',
        planId: vPlanId
      }
      mainInfo(qs.stringify(data)).then((res) => {
        if(vLevel==1){ //获取专项柱形折线混合数据
          this.mixXdata = res.data.map((item) => {
            return item.REGION
          })
          this.mixBarData = res.data.map((item) => {
            return item.JCRWL
          })
          this.mixLineData = res.data.map((item) => {
            return parseInt(item.WCBFB)
          })
        }else if(vLevel==2){ //获取筛选方案信息
          this.planData = res.data.map((item) => {
            return { label: item.PLAN_NAME, value: item.PLAN_ID }
          })
        }
        // else if(vLevel==3){ //获取筛选方案信息
        //   console.log(res,"999");
        //   this.stackSimpleDatai.REGIONNAME = res.data.map((item) => {
        //     return item.GROUPNAME
        //   })
        //   this.stackSimpleDatai.PLANNUM = res.data.map((item) => {
        //     return item.PLANNUM
        //   })
        //   this.stackSimpleDatai.CHECKEDNUM = res.data.map((item) => {
        //     return item.CHECKEDNUM
        //   })
        //   this.stackSimpleDatai.RECTIFYNUM = res.data.map((item) => {
        //     return item.RECTIFYNUM
        //   })
        //   this.stackSimpleDatai.MUSTCHECKNUM = res.data.map((item) => {
        //     return item.MUSTCHECKNUM
        //   })
        //   this.stackSimpleDatai.FLAG = res.data.map((item) => {
        //     return parseInt(item.FLAG)
        //   })

        
        
      })
    },
    //获取筛选方案信息
    getPlanInfo({ vYaer = 2021,vPlanId = 860 } = {}) {
      const data = {
        region: '',
        action: 'plan',
        type: 'T01',
        level: 3,
        year: vYaer,
        name: '',
        planId: vPlanId
      }
      mainInfo(qs.stringify(data)).then((res) => {
        // console.log(res.data, 'planData')
          this.stackSimpleDatai.REGIONNAME = res.data.map((item) => {
            return item.GROUPNAME
          })
          this.stackSimpleDatai.PLANNUM = res.data.map((item) => {
            return item.PLANNUM
          })
          this.stackSimpleDatai.CHECKEDNUM = res.data.map((item) => {
            return item.CHECKEDNUM
          })
          this.stackSimpleDatai.RECTIFYNUM = res.data.map((item) => {
            return item.RECTIFYNUM
          })
          this.stackSimpleDatai.MUSTCHECKNUM = res.data.map((item) => {
            return item.MUSTCHECKNUM
          })
          this.stackSimpleDatai.FLAG = res.data.map((item) => {
            return parseInt(item.FLAG)
          })
          // console.log(this.stackSimpleDatai,"000");
          if(this.switchValue){
            this.$nextTick(() => { 
                  this.$refs.se.draw();
            });
          }
          
        
      })
    },

    //获取堆积图数据
    getStackThi({ vYaer = 2021 } = {}) {
      const data = {
        region: '',
        action: 'gsp',
        level: 1,
        year: vYaer
      }
      mainInfo(qs.stringify(data)).then((res) => {
        let arr = ['FH', 'XQZG', 'FHJC', 'YZWF', 'TY']
        this.stackData.FH = res.data.map((item) => {
          return item.FH
        })
        this.stackData.XQZG = res.data.map((item) => {
          return item.XQZG
        })
        this.stackData.FHJC = res.data.map((item) => {
          return item.FHJC
        })
        this.stackData.YZWF = res.data.map((item) => {
          return item.YZWF
        })
        this.stackData.TY = res.data.map((item) => {
          return item.TY
        })
        this.stackData.REGIONNAME = res.data.map((item) => {
          return item.REGIONNAME
        })
        this.stackSimpleData.REGIONNAME = res.data.map((item) => {
          return item.REGIONNAME
        })
        this.stackSimpleData.PLANNUM = res.data.map((item) => {
          return item.PLANNUM
        })
        this.stackSimpleData.YJC = res.data.map((item) => {
          return item.YJC
        })
        this.stackSimpleData.DFH = res.data.map((item) => {
          return item.DFH
        })
        this.stackSimpleData.WJC = res.data.map((item) => {
          return item.WJC
        })
        this.stackSimpleData.WCBFB = res.data.map((item) => {
          return parseInt(item.WCBFB)
        })

      })
    },
    //获取更新饼形图辖区分级数据
    getPieAraeData(param) {},
    //获取更新柱形图辖区分级数据
    getBarAraeData(param) {},
    /* 数据获取 end */

    // 业务按钮选择事件
    selectItem(val) {
      if (val == '零售药店GSP跟踪检查') {
        this.isShowFri = false
        this.isShowSec = false
        this.isShowThi = true
        this.mapItem = 'review1'
        this.getGspInfo({ vYaer: this.pickYear })
        // this.getStackThi({vYaer:this.pickYear})
      } else {
        if (val == '专项检查') {
          this.isShowFri = false
          this.isShowSec = true
          this.isShowThi = false
          this.getBarFri({ vYaer: this.pickYear, vCategory: val })
          this.getMixSec({ vYaer: this.formSpecial.year.getFullYear(),vLevel: 1 })
        } else {
          this.isShowFri = true
          this.isShowSec = false
          this.isShowThi = false
          this.getLineInfo({ vCategory: val })
          this.getBarFri({ vYaer: this.pickYear, vCategory: val })
        }
        this.mapItem = 'review'
        this.getMapInfo({ vYaer: this.pickYear, vCategory: val })
      }
    },
    /* 饼形图事件 start*/
    //全市分级饼形图--点击事件
    pieClick(param) {
      this.getPieAraeData(param.name)
      this.pieTitle2 = '各辖区' + param.name + '药品企业数量'
    },
    /* 饼形图事件 end*/

    /* 柱形图事件 start*/
    barClick(param) {
      // this.getBarAraeData(param.name)
      // this.isShowIcon = true
    },
    changeShowIcon(val) {
      // this.isShowIcon = val
    },
    /* 柱形图事件 end*/
    onSubmit(param) {
      this.$refs[param].validate((valid) => {
        if (valid) {
          
          const yy = this.formSpecial.year.getFullYear();
          this.getPlanInfo({ vYaer: yy,vPlanId: this.formSpecial.plan })

          // this.getMixSec({ vYaer: yy,vLevel: 3, vPlanId: this.formSpecial.plan })
          // this.isShowSecCh = true
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
      // this.isShowSecCh = true

      
      
    }
  }
}
</script>

<style scoped lang="less">
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
      background-color: rgba(20, 74, 116, 0.322);
      .el-scrollbar{
        background-color: rgba(9, 39, 61, 0.87);
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
    .el-picker-panel {
      background-color: rgba(20, 74, 116, 0.322) !important;
      .el-picker-panel__body-wrapper {
        background-color: rgba(9, 39, 61, 0.87) !important;

      }
    }
  }
/deep/ .el-picker-panel {
      background-color: rgba(20, 74, 116, 0.322) !important;
      .el-picker-panel__body-wrapper {
        background-color: rgba(9, 39, 61, 0.87) !important;
      }
    }  
.yselect {
    background-color: rgba(20, 74, 116, 0.322) !important;
    .el-picker-panel__body-wrapper {
      background-color: rgba(9, 39, 61, 0.87) !important;
    }
}    
.review {
  .el-row,
  .el-col {
    height: 100% !important;
  }
  .board {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    // background: linear-gradient(to right, #82badf8f, #0ca6daa1) !important;
    margin-bottom: 10px;

    &-btn {
      line-height: 50px;
      width: 100%;
      .el-radio-group {
        padding-top: 5px;
        padding-bottom: 5px;
        // display: flex;
        // flex-direction: row;
        // flex: 1;
        // justify-content: space-around;
        .el-radio-button {
          z-index: 9;
          color: #fff;
          // border-radius: 15px !important;
          /deep/.el-radio-button__inner {
            color: #fff;
            background: linear-gradient(to top, #2c647700, #49a9e094) !important;
            border: 1px solid rgba(146, 239, 255, 0.315);

            // border-radius: 15px !important;
          }
          /deep/.el-radio-button__inner:hover {
            background: linear-gradient(to top, #69c2e6, #348eca) !important;
          }
        }
        .is-active {
          /deep/.el-radio-button__inner {
            color: #fff;
            font-size: 16px;
            // font-weight: bold;
            border: 1px solid rgba(134, 234, 252, 0.774);
            box-shadow: 0px 0px 6px 3px rgb(93, 204, 248) !important;
            background: linear-gradient(to top, #18befffb, #2fa6f598) !important;
            // border-radius: 15px !important;
          }
        }
      }
      .el-button {
        color: #fff;
        background: linear-gradient(to top, #4cc5ec, #46d7d1) !important;
      }
      .el-button:focus {
        background: linear-gradient(to top, #5756d7, #348eca) !important;
      }
      .el-button:hover {
        background: linear-gradient(to top, #5756d7, #348eca) !important;
      }
    }
  /*   &-data {
      height: 80px;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: space-around;
      &-item {
        align-items: center;
        height: 100%;
        display: flex;
        &-content {
          height: 100%;
          justify-content: space-evenly;
          display: flex;
          flex-direction: column;
          color: #4f5155;
          font-size: 14px;
          span:last-child {
            font-family: 'electronicFont';
            font-size: 30px;
            color: #057d88;
          }
        }
        i {
          font-size: 24px;
          color: #fff;
          margin-right: 10px;
          line-height: 60px;
          height: 60px;
          width: 50px;
          background: #e75c4e;
          border-radius: 5px;
        }
      }
      &-item:nth-child(1) {
        i {
          background: #09bc1d;
        }
      }
      &-item:nth-child(2) {
        i {
          background: #f0a820;
        }
      }
      &-item:nth-child(3) {
        i {
          background: #409eff;
        }
      }
    } */
  }
  .map {
    position: relative;
    .map-hd {
      position: absolute;
      top: 50px;
      left: -10px;
      display: flex;
      width:56%;
      ul {
        width: 260px;
        li {
          flex: 1;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          text-align: center;
          height: 113px;
          background: url('../../../assets/img/total-icon.png') no-repeat center
            top;
        }
        span:first-child {
          font-family: 'electronicFont';
          line-height: 40px;
          font-size: 40px;
          margin-top: 10px;
          // color: #faa60b;
          background-image: -webkit-linear-gradient(bottom, #ff7200, #ffee30);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        span:last-child {
          font-family: 'electronicFont';
          line-height: 18px;
          font-size: 18px;
          color: #e5f0f1;
          text-shadow: 2px 2px 8px #aaf2ff;
          margin-top: 30px;
        }
      }
    }
  }

  .content-right {
    height: 100%;
    display: flex;
    flex-direction: column;
    .content-form {
      margin-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: row;
    }
    &-pie {
      margin-bottom: 15px;
      /deep/ .card-header {
        justify-content: flex-start !important;
        .card-header-title {
          margin-bottom: 0px;
        }
        .el-switch {
          margin-left: 20px;
          margin-right: 35px;
        }
      }
    }
  }
}
</style>
