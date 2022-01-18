<template>
  <div class="stack-simple-chart">
    <!-- <base-echart
      :options="options"
      :height="height"
      @pieClick="barClick"
    ></base-echart> -->
    <div id="ec" style="width: 100%;height: 325px;"></div>
  </div>
</template>

<script>
import BaseEchart from '@/base-ui/echart/base-echart'
import * as echarts from 'echarts'
import { toolHtmlStack } from '@/utils/tool-html'

export default {
  name: '',
  components: {
    BaseEchart
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    stackData: {
      type: Object
    },
    fromData: {
      type: Object
    },
  },
  data() {
    return {
      charts: '',
      optionItemStyle(color1, color2) {
        return {
          barBorderRadius: 20,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: color1
            },
            {
              offset: 1,
              color: color2
            }
          ])
        }
      }
    }
  },
  mounted() {
    
    this.$nextTick(function() {
        this.draw()
    })
  },
  // computed: {
  //   options() {
  //     return {
  //       tooltip: {
  //         trigger: 'axis',
  //         axisPointer: {
  //           type: 'shadow'
  //         },
  //         backgroundColor: 'opacity',
  //         borderWidth: 0,
  //         formatter: function (params) {
  //           return toolHtmlStack(params)
  //         }
        
  //       },
  //       legend: {
  //         // data: ['检查任务量', '完成百分比（%）'],
  //         // y: 'bottom'
  //         icon: 'circle',
  //         selectedMode: false,
  //         right: '6%',
  //         textStyle: {
  //           color: '#fff',
  //           fontSize: 16,
  //           fontWeight: 'normal'
  //         }
  //       },
  //       grid: {
  //         left: '3%',
  //         right: '4%',
  //         bottom: '3%',
  //         containLabel: true
  //       },
  //       xAxis: [
  //         {
  //           type: 'category',
  //           data: this.stackData.REGIONNAME,
  //           axisTick: {
  //             show: false
  //           },
  //           axisLine: {
  //             show: false,
  //             lineStyle: {
  //               color: '#fff'
  //             }
  //           },
  //           axisLabel: {
  //             fontSize: 14
  //           }
          
  //         }
  //       ],
  //       yAxis: [
  //         {
  //           type: 'value',
  //           axisLine: {
  //             show: false,
  //             lineStyle: {
  //               color: '#fff'
  //             }
  //           },
  //           splitLine: {
  //             show: true,
  //             lineStyle: {
  //               color: 'rgba(255,255,255,.3)'
  //             }
  //           },
  //           axisLabel: {
  //             fontSize: 14
  //           }
  //         },
  //         {
  //           show: false,
  //           type: 'value',
  //           name: '增长率',
  //           min: -150,
  //           max: 100,
  //           interval: 20
  //         }
  //       ],
  //       series: [
  //         {
  //           name: '计划数',
  //           type: 'bar',
  //           itemStyle: this.optionItemStyle('rgba(55,255,249,1)','rgba(0,222,215,0.5)'),
  //           barWidth: 15,
  //           data: this.stackData.PLANNUM,
  //           emphasis: {
  //             focus: 'series'
  //           },
  //           stack: 'Search Engine',

  //           // markLine: {
  //           //   lineStyle: {
  //           //     type: 'dashed'
  //           //   }
  //           //   // data: [[{ type: 'min' }, { type: 'max' }]]
  //           // }
  //         },
  //         {
  //           name: '检查数',
  //           type: 'bar',
  //           itemStyle: this.optionItemStyle('rgba(255,252,0,1)','rgba(255, 251, 0, 0.522)'),
  //           barWidth: 10,
  //           stack: 'Search Engine',
  //           emphasis: {
  //             focus: 'series'
  //           },
  //           data: this.stackData.CHECKEDNUM
  //         },
  //         {
  //           name: '待复核检查数',
  //           type: 'bar',
  //           itemStyle: this.optionItemStyle('rgb(170,191,255)','rgba(170,191,255,.5)'),
  //           stack: 'Search Engine',
  //           emphasis: {
  //             focus: 'series'
  //           },
  //           data: this.stackData.RECTIFYNUM
  //         },
  //         {
  //           name: '未检查数',
  //           type: 'bar',
  //           itemStyle: this.optionItemStyle('rgb(255,148,136)','rgba(255,148,136,.5)'),
  //           stack: 'Search Engine',
  //           emphasis: {
  //             focus: 'series'
  //           },
  //           data: this.stackData.MUSTCHECKNUM
  //         },
  //         {
  //           name: '完成百分比（%）',
  //           type: 'line',
  //           data: this.stackData.FLAG,
  //           yAxisIndex: 1,
  //           // symbol: 'circle',
  //           symbolSize: 10,
  //           color: '#fff',

  //           itemStyle: {
  //             normal: {
  //               color: '#FCC70A',//决定标志点边框颜色
  //               borderWidth: 4,
  //               borderColor: "#F6D06F",
  //               label: {
  //                 offset: [0,0],
  //                 show: true,
  //                 color: '#fff',
  //                 fontSize: 14,
  //                 position: 'top',
  //                 formatter: '{c}%'
  //               }
  //             }
  //           },
  //           lineStyle: {
  //             width: 4,
  //             color: {
  //               type: 'linear',
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: 'rgba(245,130,75, 0.6)' // 0% 处的颜色
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: '#FCC70A' // 100% 处的颜色
  //                 }
  //               ],
  //               globalCoord: false // 缺省为 false
  //             },
  //             shadowColor: 'rgba(72,216,191, 0.3)',
  //             shadowBlur: 10,
  //             shadowOffsetY: 20
  //           },
  //           emphasis: {
  //             itemStyle: {
  //               borderWidth: 8.5,
  //             },
  //             label: {
  //               fontSize: 24,
  //             }
  //           },
  //         }
  //       ]
  //     }
  //   }
  // },
  methods: {
    barClick(param) {
      this.$emit('barClick', param)
    },
    draw(){
      // console.log(this.stackData,"s0");
      // console.log(typeof this.stackData,"类型")
      this.charts = echarts.init(document.getElementById('ec'))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'opacity',
          borderWidth: 0,
          formatter: function (params) {
            return toolHtmlStack(params)
          }
        
        },
        legend: {
          // data: ['检查任务量', '完成百分比（%）'],
          // y: 'bottom'
          icon: 'circle',
          selectedMode: false,
          right: '6%',
          textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.stackData.REGIONNAME,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              fontSize: 14
            }
          
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.3)'
              }
            },
            axisLabel: {
              fontSize: 14
            }
          },
          {
            show: false,
            type: 'value',
            name: '增长率',
            min: -150,
            max: 100,
            interval: 20
          }
        ],
        series: [
          {
            name: '计划数',
            type: 'bar',
            itemStyle: this.optionItemStyle('rgba(55,255,249,1)','rgba(0,222,215,0.5)'),
            barWidth: 15,
            data: this.stackData.PLANNUM,
            emphasis: {
              focus: 'series'
            },
            stack: 'Search Engine',

            // markLine: {
            //   lineStyle: {
            //     type: 'dashed'
            //   }
            //   // data: [[{ type: 'min' }, { type: 'max' }]]
            // }
          },
          {
            name: '检查数',
            type: 'bar',
            itemStyle: this.optionItemStyle('rgba(255,252,0,1)','rgba(255, 251, 0, 0.522)'),
            barWidth: 10,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: this.stackData.CHECKEDNUM
          },
          {
            name: '待复核检查数',
            type: 'bar',
            itemStyle: this.optionItemStyle('rgb(170,191,255)','rgba(170,191,255,.5)'),
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: this.stackData.RECTIFYNUM
          },
          {
            name: '未检查数',
            type: 'bar',
            itemStyle: this.optionItemStyle('rgb(255,148,136)','rgba(255,148,136,.5)'),
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: this.stackData.MUSTCHECKNUM
          },
          {
            name: '完成百分比（%）',
            type: 'line',
            data: this.stackData.FLAG,
            yAxisIndex: 1,
            // symbol: 'circle',
            symbolSize: 10,
            color: '#fff',

            itemStyle: {
              normal: {
                color: '#FCC70A',//决定标志点边框颜色
                borderWidth: 4,
                borderColor: "#F6D06F",
                label: {
                  offset: [0,0],
                  show: true,
                  color: '#fff',
                  fontSize: 14,
                  position: 'top',
                  formatter: '{c}%'
                }
              }
            },
            lineStyle: {
              width: 4,
              color: {
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(245,130,75, 0.6)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#FCC70A' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            emphasis: {
              itemStyle: {
                borderWidth: 8.5,
              },
              label: {
                fontSize: 24,
              }
            },
          }
        ]
      
      },true)
      window.addEventListener('resize', () => {
        this.charts.resize()
      }) 
    },
    test() {
      console.log(this.stackData,"se");
    }
  },
  watch: {
    fromData: { 
        handler(newVal, oldVal) {
          // console.log(newVal, oldVal,"scscsc");
          // this.draw()
          this.$nextTick(() => {
            this.draw()
          })
        },
        deep:true,
    }
  },
}
</script>

<style scoped lang="less"></style>
