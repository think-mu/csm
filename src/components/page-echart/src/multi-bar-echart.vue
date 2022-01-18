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
import { toolHtmlMultiBar } from '@/utils/tool-html'

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
    },
    source: {
      type: Array
    },
    dimensions: {
      type: Array
    }
  },
  data() {
    return {
      optionLabel: {
        show: true,
        color: '#fff',
        fontSize: 14,
        position: 'top',
        formatter: function (params) {
          // return params.value + '家'
        }
      },
      optionItemStyle(color1,color2) {
        return {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: color1
              },
              {
                offset: 1,
                color: color2
              }
            ]),
            barBorderRadius: 6
          }
        }
      }
    }
  },
  mounted() {},
  computed: {
    options() {
      return {
        legend: {
          // left: 'right',
          right: '10%',
          icon: "circle",
          selectedMode: false,
          textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal'
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          padding: 0,
          backgroundColor: 'opacity',
          borderWidth: 0,
          formatter: function (params) {
            return toolHtmlMultiBar(params)
          }
        },
        grid: {
          bottom: '20%'
        },
        dataset: {
          dimensions: this.dimensions,
          source: this.source
        },
        xAxis: {
          type: 'category',
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
        yAxis: {
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
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar', barWidth: '20', label: this.optionLabel, itemStyle: this.optionItemStyle('rgba(17,117,253, 0.6)','#01ADEA') },
          { type: 'bar', barWidth: '20', label: this.optionLabel, itemStyle: this.optionItemStyle('rgba(245,130,75, 0.6)','#FCC70A') },
          { type: 'bar', barWidth: '20', label: this.optionLabel, itemStyle: this.optionItemStyle('rgba(0,106,117, 0.6)','#83D372') }
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
