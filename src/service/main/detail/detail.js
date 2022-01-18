import sRequest from '../../index';

//企业详情数据接口
export function entInfo(data) {
  return sRequest.post({
    url: '/rcms/EagleActions/ncStatisticsAction',
    data: data,
    showLoad: true //是否添加请求加载动画 
  })
}
//今日数据统计接口名，FSS：符合数，ZGS：整改数，JCS：检查总数,BFS:不符合数
export function dataTotal(data) {
  return sRequest.post({
    url: '/rcms/EagleActions/ncStatisticsAction',
    data: data,
    showLoad: true //是否添加请求加载动画 
  })
}