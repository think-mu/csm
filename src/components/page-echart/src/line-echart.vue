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
import { toolHtmlLine } from '@/utils/tool-html'

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
    xLineData: {
      type: Array
    },
    LineData: {
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
        tooltip: {
          trigger: 'axis',
          padding: 0,
          backgroundColor: 'opacity',
          borderWidth: 0,
          formatter: function (params) {
            return toolHtmlLine(params)
          }
        },
        grid: {
          top: '12%',
          bottom: '12%'
        },
        xAxis: {
          type: 'category',
          data: this.xLineData,
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
        yAxis: {
          type: 'value',
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
        series: [
          {
            data: this.LineData,
            type: 'line',
            // symbol: 'circle',
            symbolSize: 10,
            color: '#fff',

            label: {
              show: true,
              color: '#FFF',
              fontSize: 14,
              position: 'top'
            },
            lineStyle: {
              width: 4,
              color: {
                type: 'linear',

                colorStops: [
                  {
                    offset: 0,
                    color: '#0091C7' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#35BCFA' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: '#00C2CB',
                    borderWidth: 4,
                    borderColor: "#F6D06F"
                }
            },
            emphasis: {
              itemStyle: {
                borderWidth: 8.5,
              },
              label: {
                fontSize: 24,
              }
            },
            smooth: true
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
