<template>
  <div class="pie-chart">
    <base-echart
      :options="options"
      :height="height"
      :width="width"
      @pieClick="pieClick"
    ></base-echart>
  </div>
</template>

<script>
import BaseEchart from '@/base-ui/echart/base-echart'
import imgSrc from 'assets/img/card/pie-bg.png'
import { toolHtmlPie } from '@/utils/tool-html'

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
    pieData: {
      type: Array
    },
    pieTitle: {
      type: String,
      default: ''
    },
    legendWidth: {
      type: String,
      default: "300"
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.test()
  },
  computed: {
    options() {
      return {
        graphic: {
            elements: [{
                type: "image",
                z: 3,
                style: {
                    image: imgSrc,
                    width: 215,
                    height: 215
                },
                left: '26%',
                top: "10%",
                z: 0
               
            }]
        },
        color: ['#59B3FF', '#006A75', '#00FFF0', '#0091C7', '#27C5FC', '#0060FF','#06FDBC', '#F6FE05', '#07B0FE', '#FDB408', '#00DB1C', '#0188FE'],
        tooltip: {
          show: true,
          backgroundColor: 'opacity',
          trigger: 'item',
          padding: 0,
          borderWidth: 0,
          formatter: function (params) {
            return toolHtmlPie(params)
          }
        },
        legend: {
          bottom: '1%',
          left: 'center',
          width: this.legendWidth,
          height: 'auto',
          align: 'left',
          orient: 'horizontal',
          backgroundColor: 'rgba(45, 65, 95, 0.8)',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'normal'
          },
          icon: "circle",
          itemWidth: 12,
          borderRadius: 5,
        },
        title: {
          text: this.pieTitle,
          top: '0%',
          left: 'center',
          textStyle: {
            color: '#00D8FF',
            fontSize: 18,
            fontWeight: 'normal'
          }
        },

        series: [
          {
            // selectedMode: true,
            // selectedOffset: 15,
            name: '分类数据',
            label: {
              show: true,
              position: 'outside',
              color: '#fff',
              fontSize: 16,
              alignTo: 'labelLine', // 'labelLine'：label line 的末端对齐，其中最短的长度由 labelLine.length2 决定
              formatter: function (params) {
                // return params.name + '-' + params.value + '家'
                // return '{txt|'+params.value + '家'+'}';
                return params.value + '家';
              },
              // 仅当 label.position 为 'outer' 并且 label.alignTo 为 'none' 或 'labelLine' 的情况有效
              // rich: {  
              //     txt: {
              //         color: '#fff',
              //         width: 10,
              //         height: 10,
              //         padding: [0, 0, 20, 0],
              //     },
                  
              // },
            },
            
            type: 'pie',
            radius: ['35%', '46%'],
            data: this.pieData,
            center: ['52%', '40%'],
            itemStyle: {
              show: true,
              borderRadius: 8,
              
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              },
              scaleSize: 15,
            },
            labelLine: {
              show: true,
              showAbove: true,
              length2: 50,
              minTurnAngle: 120,
              lineStyle: {
                width: 2,
              } 
            },
         
            z: 1
            // emphasis: {
            //   show: true,
            //   itemStyle: {
            //     shadowBlur: 10,
            //     shadowOffsetX: 0,
            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
            //   }
            // }
          }
        ]
      }
    }
  },
  methods: {
    pieClick(param) {
      this.$emit('pieClick', param)
    },
        test() {
      console.log(this.stackData,"se");
    }
  }
}
</script>

<style scoped lang="less">
.pie-chart {
  width: 50%;
  color:#144a74e6
}
</style>
