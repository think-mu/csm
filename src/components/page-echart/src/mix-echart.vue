<template>
  <div class="line-chart">
    <base-echart
      :options="options"
      :height="height"
      @pieClick="barClick"
    ></base-echart>
  </div>
</template>

<script>
import BaseEchart from '@/base-ui/echart/base-echart'
import * as echarts from 'echarts'
import { toolHtmlMix } from '@/utils/tool-html'

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
    mixXdata: {
      type: Array
    },
    mixLineData: {
      type: Array
    },
    mixBarData: {
      type: Array
    }
  },
  data() {
    return {}
  },
  mounted() {},
  computed: {
    options() {
      return {
        grid: {
          left: '4%',
          right: '4%',
          bottom: '6%',
          top: '24%',
          containLabel: true
        },
        color: ['#B2D233', '#29C3F8'],
        // title: {
        //   text: '2012-2018年中国B2B电子商务市场交易规模',
        //   left: 'center'
        // },
        tooltip: {
          trigger: 'axis',
          padding: 0,
          backgroundColor: 'opacity',
          borderWidth: 0,
          formatter: function (params) {
            // console.log(params);
            return toolHtmlMix(params)
          }
          // axisPointer: {
          //     type: 'cross',
          //     label: {
          //         backgroundColor: '#283b56'
          //     }
          // }
        },
        legend: {
          data: ['检查任务量', '完成百分比（%）'],
          y: 'top',
          right: '6%',
          selectedMode: false,
          textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal'
          }
        },
        xAxis: {
          type: 'category',
          data: this.mixXdata,
          // axisLabel: {
          //   interval: 0,
          //   rotate: 30
          // },
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
        },
        yAxis: [
          {
            type: 'value',
            show: true,
            // axisTick: {
            //   show: false
            // },
            // splitLine: {
            //   show: false
            // },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false,
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
            data: this.mixBarData,
            type: 'bar',
            name: '检查任务量',
            barWidth: '20',
            label: {
              normal: {
                show: true,
                color: '#fff',
                fontSize: 16,
                position: 'inside'
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(0, 177, 162, 0.4)'
                  },
                  {
                    offset: 1,
                    color: '#01ADEA'
                  }
                ]),
                barBorderRadius: 6
              }
            }
          },
          {
            name: '完成百分比（%）',
            smooth: true,
            type: 'line',
            data: this.mixLineData,
            yAxisIndex: 1,
            // symbol: 'circle',
            symbolSize: 10,
            color: '#FCC70A',

            itemStyle: {
              normal: {
                label: {
                  offset: [0,-10],
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
      }
    }
  },
  methods: {
    barClick(param) {
      this.$emit('barClick', param)
    }
  }
}
</script>

<style scoped lang="less"></style>
