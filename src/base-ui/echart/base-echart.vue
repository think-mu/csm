<template>
  <div class="echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import gzMap from '@/common/guangzhou.json'
export default {
  name: '',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    options: {
      type: Object
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.draw()
    })
  },
  methods: {
    draw() {
      let that = this;
      echarts.registerMap('gz', gzMap)
      const echartDivRef = this.$refs.echartDivRef
      const echartInstance = echarts.init(echartDivRef)
      // echartInstance.off("click").on('click', 'series.bar', function (params) {
      //   that.$emit('barClick',params)
      // });
      echartInstance.off('click')
      // echartInstance.getZr().off('click');
      echartInstance.on('click', 'series', function (params) {
        
        const pointInPixel = [params.offsetX, params.offsetY];
        if (echartInstance.containPixel("grid", pointInPixel)) {
            let pointInGrid = echartInstance.convertFromPixel({
						seriesIndex: 0
					}, pointInPixel);
					let xIndex = pointInGrid[0]; //索引
        //   let xIndex = echartInstance.convertFromPixel({ seriesIndex: 0 }, [
        //     params.offsetX,
        //     params.offsetY,
        // ])[0];
					let handleIndex = Number(xIndex);
					let seriesObj = echartInstance.getOption(); //图表object对象
          // console.log("handleIndex");
           that.$emit('pieClick',seriesObj,handleIndex)
       } 
        that.$emit('pieClick',params)

      });
      // echartInstance.getZr().on("click", (params) => {
      //     that.$emit('pieClick',params)
      //     /* const pointInPixel = [params.offsetX, params.offsetY];
      //     if (echartInstance.containPixel("grid", pointInPixel)) {
      //         let xIndex = echartInstance.convertFromPixel({ seriesIndex: 0 }, [params.offsetX,params.offsetY])[0];//柱形的下标 ，此处取[0]
      //     } */
      // });
      // echartInstance.clear()
      
      // echartInstance.setOption(this.options,true)
      // echartInstance.refresh(); 

      setTimeout(() => {
        try {
          // echartInstance.clear()
            echartInstance.setOption(this.options,true)
        } catch (error) {}
      }, 1000) //加延时,先获取数据在加载图表.

      window.addEventListener('resize', () => {
        echartInstance.resize()
      })
    }
  },
  watch: {
    options: { 
      deep:true,
      handler(newVal, oldVal) {
        // console.log(newVal, oldVal,"testtt");
        this.draw()
        // this.$nextTick(() => {
        //   this.draw()
        // })
      },
      

    }
  },
}
</script>

<style scoped>

</style>
