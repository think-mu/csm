import sRequest from '../index';

export function mainInfo(data) {
  return sRequest.post({
    url: '/rcms/EagleActions/ncStatisticsAction',
    data: data,
    showLoad: true //是否添加请求加载动画 
  })
}