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
import { toolHtmlI, toolHtmlII, toolHtmlIII, toolHtmlIV, toolHtmlVI } from '@/utils/tool-html'
import * as echarts from 'echarts'

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
  methods: {},
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
          tooltip: {
            show: false
          },
          label: {
            show: false
          },
          select: {
            label: {
              show: false
            }
          },
          map: 'gz',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          aspectScale: 1.04,
          layoutCenter: ['50%', '52.5%'], //地图位置
          layoutSize: '91%',
          emphasis: {
            label: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(37,162,222,.8)',
              borderWidth: 0
              // shadowColor: 'rgba(33, 93, 166, 0.9)',
              // shadowBlur:8,
              // shadowOffsetX: 2,
              // shadowOffsetY: 8
            },
            emphasis: {
              areaColor: 'rgba(37,162,222,.8)'
            }
          },
          z: 2
        },

        tooltip: {
          show: true,
          backgroundColor: 'opacity',
          trigger: 'item',
          padding: 0,
          borderWidth: 0,
          // alwaysShowContent: true,
          formatter: function (params) {
            // console.log(params, 'params')
            if (params.seriesName == 'detail') {
              return toolHtmlI(params)
            } else if (params.seriesName == 'category') {
              return toolHtmlII(params)
            } else if (params.seriesName == 'review') {
              return toolHtmlIII(params)
            } else if (params.seriesName == 'review1') {
              return toolHtmlVI(params)
            } else if (params.seriesName == 'enforce') {
              return toolHtmlIV(params)
            }
          }
        },

        series: [
          {
            zlevel: 2,
            symbolSize: 5,
            geoIndex: 0,
            selectedMode: false,
            label: {
              show:false,
              // normal: {
              //   formatter: '{b}',
              //   position: 'left',
              //   show: false,
              //   color: '#fff'
              // },
              emphasis: {
                show: false
              }
            },

            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            name: this.mapName,
            type: 'map',//scatter
            coordinateSystem: 'geo',
            data: convertData(this.mapData)
          },
          {
            type: 'map',
            roam: false,
            map: 'gz',
            center: [113.505367, 23.22559],
            aspectScale: 1.04,
            zoom: 1.1,
            selectedMode: false,
            data: convertData(this.mapData),
            showLegendSymbol: true,
            name: this.mapName,
            zlevel: 2,
            label: {
              show: true,
              color: '#fff',
              fontSize: 14,
              formatter: function (params) {
                if (params.seriesName == 'detail') {
                  // return params.data.value[0] + '家' + '\n' +  '{txt|'+params.name+'}'
                  return  '{txt|'+params.name+'}'
                } else if (params.seriesName == 'category') {
                  // const resultLabeltip = `<div style=\'padding:2px 5px; background: rgb(34,184,104);border:1px #5DFA96 solid;\'>
                  //    <span>${params.name} </span>
                  // </div>`
                  // return resultLabeltip
                  return  '{txt|'+params.name+'}';
                } else if (params.seriesName == 'review') {
                  // console.log(params,"review2");
                  // return params.name
                  return  '{txt|'+params.name+'}';
                  
                } else if (params.seriesName == 'enforce') {
                  // console.log(params,"review2");
                  // return params.name
                  return  '{txt|'+params.name+'}';
                  
                }
              },
              rich: {
                txt: {
                  padding:[1,5],
                  backgroundColor: '#25BACC',
                  borderWidth: 1,
                  borderColor: '#58F2F7',
                  borderRadius: 2,
                  fontSize: 16
                  // color: '#fff',
                  // width: 10,
                  // height: 10,
                  // padding: [0, 0, 20, 0]
                }
              }
            },
            //   itemStyle: {
            //     normal: {
            //       areaColor: '#031525',
            //       borderColor: '#FFFFFF'
            //     },
            //     emphasis: {
            //       areaColor: '#2B91B7'
            //     }
            //   },

            itemStyle: {
              normal: {
                areaColor: 'rgba(19,106,182,.9)',
                // borderColor: '#fff', //线
                // shadowColor: '#B1DEF6', //外发光
                borderColor: 'rgb(200,237,254)',
                borderWidth: 1,
                shadowColor: 'rgba(25, 83, 155, 0.9)', //rgba(20, 65, 121, 0.9)偏深色调
                shadowBlur: 20,
                opacity: 0.9,

                areaColor: {
                  type: 'linear-gradient',
                  x: 0,
                  y: 1000,
                  x2: 200,
                  y2: 150,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: 'rgba(11, 219, 247, 0.8)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(44, 128, 224, 0.8)' // 100% 处的颜色
                    }
                  ],
                  global: true // 缺省为 false
                }
              },
              emphasis: {
                label: {
                  color: '#fff'
                  // fontSize: 24,
                },
                areaColor: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#68b88e'
                    },
                    {
                      offset: 1,
                      color: '#e2d849'
                    }
                  ],
                  false
                ) //悬浮区背景
              }
            }
          }
          /* {
            name: this.mapName,
            type: 'map',
            map: 'gz',
            geoIndex: 0,
            data: convertData(this.mapData)
          }, */
        ]
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
