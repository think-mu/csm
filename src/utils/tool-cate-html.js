export function toolHtmlI(params) {
  const resultTooltip = 
  `<div style=\'background-image: linear-gradient(to right,rgba(2,157,193,1), rgba(0,29,90,.9)) !important; 
      padding: 20px 25px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10; border-radius: 2px;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params.name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: center;\'>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 20px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2].CZNUM} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>处置数</span>
        </div>
      </div>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 20px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2].LANUM} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>立案数</span>
        </div>
      </div>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 20px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2].YSNUM} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>移送数</span>
        </div>
      </div>


    </div>
  </div>`
  return resultTooltip
}