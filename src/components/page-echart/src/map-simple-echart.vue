<template>
  <div class="map-chart">
    <base-echart
      :options="options"
      :height="height"
      :width="width"
    ></base-echart>
  </div>
</template>

<script>
import BaseEchart from '@/base-ui/echart/base-echart'
import { convertData } from '@/utils/convert-data'
import { toolHtmlI, toolHtmlII, toolHtmlIV } from '@/utils/tool-cate-html'

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
    mapData: {
      type: Array
    },
    mapName: {
      type: String
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
          left: '0%',
          top: '10%',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        geo: {
          roam: false,
          map: 'gz',
          center: [113.505367, 23.22559],
          aspectScale: 1,
          zoom: 1.2,
          show: true,
          itemStyle: {
            // areaColor: '#0E4287',
            // borderColor: '#0378DA'
            normal: {
              areaColor: '#3a7fd5',
              borderColor: '#0a53e9', //线
              shadowColor: '#092f8f', //外发光
              shadowBlur: 20
            },
            emphasis: {
              areaColor: '#0a2dae' //悬浮区背景
            }
          },
          // emphasis: {
          //   borderColor: 'rgb(9, 54, 95)',
          //   label: {
          //     color: '#fff'
          //   }
          // },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
            // show: true,
            // color: '#fff',
            // formatter: '{a}'
            // formatter: function (params) {
            //   console.log(params, '333')
            // }
          },
          // regions: [
          //   //对不同的区块进行着色
          //   {
          //     name: '番禺区',
          //     itemStyle: {
          //       areaColor: '#5CD89E'
          //     }
          //   },
          //   {
          //     name: '荔湾区',
          //     itemStyle: {
          //       areaColor: '#FCCF73'
          //     }
          //   }
          // ]
        },

        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            if (params.seriesName == 'detail') {
              return params.name + ' : ' + params.data.value[2] + '家'
            } else if (params.seriesName == 'category') {
              return (
                params.name +
                '</br>' +
                'A级:' +
                params.data.value[2].A +
                '</br>' +
                'B级:' +
                params.data.value[2].B +
                '</br>' +
                'C级:' +
                params.data.value[2].C +
                '</br>' +
                'D级:' +
                params.data.value[2].D +
                '</br>' +
                '未评级:' +
                params.data.value[2]['未评级']
              )
            } else if (params.seriesName == 'review') {
              // console.log(params,"review");
              return (
                params.name +
                '</br>' +
                '出动人次:' +
                params.data.value[2].CDRC +
                '</br>' +
                '需整改数量:' +
                params.data.value[2].XYZG +
                '</br>' +
                '已整改数量:' +
                params.data.value[2].YZGCNUM +
                '</br>' +
                '检查数量:' +
                params.data.value[2].CHECKNUM +
                '</br>' +
                '检查覆盖率:' +
                params.data.value[2].FGL
              )
            } else if (params.seriesName == 'review1') {
              return (
                params.name +
                '</br>' +
                '计划数:' +
                params.data.value[2].PLANNUM +
                '</br>' +
                '检查数:' +
                params.data.value[2].YJC +
                '</br>' +
                '待复核检查数:' +
                params.data.value[2].DFH +
                '</br>' +
                '未检查数:' +
                params.data.value[2].WJC +
                '</br>' +
                '符合数:' +
                params.data.value[2].FH +
                '</br>' +
                '限期整改:' +
                params.data.value[2].XQZG +
                '</br>' +
                '复核检查数:' +
                params.data.value[2].FHJC +
                '</br>' +
                '严重违反:' +
                params.data.value[2].YZWF +
                '</br>' +
                '停业:' +
                params.data.value[2].TY +
                '</br>' +
                '完成百分比:' +
                params.data.value[2].WCBFB
              )
            } else if (params.seriesName == 'enforce') {
              // console.log(params);
              return (
                params.name +
                '</br>' +
                '处置数:' +
                params.data.value[2].CZNUM +
                '</br>' +
                '立案数:' +
                params.data.value[2].LANUM +
                '</br>' +
                '移送数:' +
                params.data.value[2].YSNUM
              )
            }
          }
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            symbolSize: 5,
            label: {
              
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
                color: "#fff",
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(this.mapData)
          },
          /* {
            name: this.mapName,
            type: 'map',
            map: 'gz',
            geoIndex: 0,
            data: convertData(this.mapData)
          }, */
          {
            name: 'Top 5',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [50, 50],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 9
                },
                formatter(value) {
                  console.log(value, '000000')
                  return value.data.value[2] + '家'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#D8BC37' //标志颜色
              }
            },
            data: convertData(this.mapData),
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
