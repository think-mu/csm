import SRequest from './request';
import {BASE_URL,TIME_OUT} from './request/config'

const sRequest = new SRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  // showLoad: ''//不确定是否有此属性
})
export default sRequest  