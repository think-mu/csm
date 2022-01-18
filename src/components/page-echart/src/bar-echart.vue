<template>
  <div class="bar-chart">
    <base-echart
      :options="options"
      :height="height"
      @pieClick="barClick"
    ></base-echart>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import BaseEchart from '@/base-ui/echart/base-echart'
import imgSrc from 'assets/img/card/bar-bg.png'
import { toolHtmlBar } from '@/utils/tool-html'

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
    xData: {
      type: Array
    },
    yData: {
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
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: {
                image: imgSrc,
                width: 785,
                height: 205
              },
              left: '8%',
              bottom: '10%',
              z: 0,
              // ignore: true,
              silent: true
            }
          ]
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          z: 2,
          padding: 0,
          backgroundColor: 'opacity',
          borderWidth: 0,
          formatter: function (params) {
            return toolHtmlBar(params)
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '4%',
          top: '24%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: this.xData,
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
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
            show: true,
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
        series: [
          {
            // name: 'Direct',
            type: 'bar',
            barWidth: '18%',
            data: this.yData,
            label: {
              show: true,
              color: '#fff',
              fontSize: 16,
              position: 'top',
              formatter: function (params) {
                return params.value 
              }
            },
            z: 1,
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
            },
            emphasis: {
              label: {
                show: true,
                fontStyle: 24,
                fontWeight: 'bold'
              }
            }
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
