import sRequest from '../../index';
//分级分类数据接口
export function categoryInfo(data) {
  return sRequest.post({
    url: '/rcms/EagleActions/ncStatisticsAction',
    data: data,
    showLoad: true //是否添加请求加载动画 
  })
}