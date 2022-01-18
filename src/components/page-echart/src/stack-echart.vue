<template>
  <div class="stack-chart">
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
      type: Array
    }
  },
  data() {
    return {
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
  mounted() {},
  computed: {
    options() {
      return {
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
          icon: 'circle',
          right: '6%',
          selectedMode: false,
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
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,.3)'
              }
            },
            axisLabel: {
              fontSize: 14
            }
          }
        ],
        series: [
          {
            name: '符合',
            type: 'bar',
            barWidth: 16,
            stack: 'Search Engine',
            itemStyle: this.optionItemStyle('rgba(55,255,249,1)','rgba(0,222,215,0.5)'),
            emphasis: {
              focus: 'series'
            },
            data: this.stackData.FH
          },
          {
            name: '限期整改',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            itemStyle: this.optionItemStyle('rgba(255,252,0,1)','rgba(255, 251, 0, 0.522)'),
            data: this.stackData.XQZG
          },
          {
            name: '复核检查',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            itemStyle: this.optionItemStyle('rgb(170,191,255)','rgba(170,191,255,.5)'),

            data: this.stackData.FHJC
          },
          {
            name: '严重违反',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            itemStyle: this.optionItemStyle('rgb(255,148,136)','rgba(255,148,136,.5)'),
            data: this.stackData.YZWF
          },
          {
            name: '停业',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            itemStyle: this.optionItemStyle('rgb(255,105,0)','rgba(255,105,0,.5)'),
            data: this.stackData.TY
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
