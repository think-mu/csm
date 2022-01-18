export function toolHtmlI(params) {
  const resultTooltip = 
  `<div style=\'background-image: linear-gradient(to right,rgba(2,157,193,1), rgba(0,29,90,.9)) !important; 
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10; border-radius: 2px;
      \'>
    <div style=\'text-align:center;margin-top: 5px; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params.name}</div>
    <div style=\'\'>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 16px;\'>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2]} 
        </span> 家
      </div>
    </div>
  </div>`
  return resultTooltip
}
export function toolHtmlII(params) {
  const resultTooltip = 
  `<div style=\'background-image: linear-gradient(to right,rgba(2,157,193,1), rgba(0,29,90,.9)) !important; 
      padding: 20px 25px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10; border-radius: 2px;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params.name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: center;\'>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 16px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2].A} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>A级</span>
        </div>
      </div>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 12px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2].B} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>B级</span>
        </div>
      </div>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 12px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2].C} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>C级</span>
        </div>
      </div>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 12px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2].D} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>D级</span>
        </div>
      </div>
      <div style=\'font-size: 15px;color: #00efff;text-align:center;margin-top: 12px;\'>
        <div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
            ${params.data.value[2]['未评级']} 
          </span> 家
        </div>  
        <div style=\'color:#fff; font-size: 18px; margin-top: 5px;\'>
        <span>未评级级</span>
        </div>
      </div>
    </div>
  </div>`
  return resultTooltip
}
export function toolHtmlIII(params) {
  const resultTooltip = 
  `<div style=\'background-image: linear-gradient(to right,rgb(3, 120, 146), rgba(0,29,90,.9)) !important; 
      padding: 20px 25px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10; border-radius: 2px;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params.name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: left;\'>
      <div style=\'font-size: 18px;color: #fff;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>出动人次</span>
        <span style=\'text-align:center;font-size: 24px;font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].CDRC} 
        </span> 
      </div>
      <div style=\'font-size: 18px;color: #fff;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>需整改数量</span> 
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].XYZG} 
        </span> 
      </div>
      <div style=\'font-size: 18px;color: #fff;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>已整改数量</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].YZGCNUM} 
        </span> 
      </div>
      <div style=\'font-size: 18px;color: #fff;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>检查数量</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].CHECKNUM} 
        </span> 
      </div>
      <div style=\'font-size: 18px;color: #fff;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>检查覆盖率</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].FGL} 
        </span>
      </div>
    </div>
  </div>`
  return resultTooltip
}
export function toolHtmlIV(params) {
  const resultTooltip = 
  `<div style=\'background-image: linear-gradient(to right,rgb(3, 120, 146), rgba(0,29,90,.9)) !important; 
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10; border-radius: 2px;
      \'>
    <div style=\'text-align:center; font-size: 18px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params.name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: center;\'>
      <div style=\'font-size: 14px;color: #00efff;text-align:center;margin-top: 15px;\'>
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
export function toolHtmlVI(params) {
  const resultTooltip = 
  `<div style=\'background-image: linear-gradient(to right,rgb(3, 120, 146), rgba(0,29,90,.9)) !important; 
      padding: 15px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10; border-radius: 2px;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params.name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: left;color: #fff;\'>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:left;margin-top: 18px;\'>
        <span>计划数</span>
        <span style=\'text-align:center;font-size: 22px;font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].PLANNUM} 
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:left;margin-top: 12px;\'>
        <span>检查数</span> 
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].YJC} 
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 12px;\'>
        <span>待复核检查数</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].DFH} 
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 12px;\'>
        <span>未检查数</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].WJC} 
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 12px;\'>
        <span>符合数</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].FH} 
        </span>
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>限期整改</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].XQZG} 
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>复核检查数</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].FHJC} 
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>严重违反</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].YZWF} 
        </span>
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>停业</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].TY} 
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;text-align:center;margin-top: 20px;\'>
        <span>完成百分比</span>
        <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params.data.value[2].WCBFB} 
        </span>
      </div>
    </div>
  </div>`
  return resultTooltip
}
export function toolHtmlPie(params) {
  const resultTooltip = 
  `<div style=\'background-color: rgba(20, 74, 116,.9) !important;box-shadow: 0px 0px 3px 2px #01cfff;
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
      \'>
    <div style=\'text-align:center; font-size: 22px;display: flex;flex-direction: row;align-items: center;color: #fff;;letter-spacing: 0;padding: 0px;\'> 
      <div style=\'height:12px;width: 12px; border-radius: 6px; background-color: ${params.color};margin-left:-10px;margin-right:10px;\'></div>
        ${params.name}
    </div>
    <div style=\'display: flex;flex-direction: column;align-items: center;color: #fff;\'>
      <div style=\'font-size: 18px;text-align:center;margin-top: 16px;\'>
        <span style=\'text-align:center;font-size: 26px;font-weight: bold;color:#00efff;\'>
          ${params.value} 
        </span> 家
      </div>
    </div>
  </div>`
  return resultTooltip
}
export function toolHtmlBar(params) {
  const resultTooltip = 
  `<div style=\'background-color: rgba(20, 74, 116,.9);box-shadow: 0px 0px 3px 2px #01cfff;
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params[0].name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: left;color: #fff;\'>
      <div style=\'font-size: 18px;text-align:center;margin-top: 16px;\'>
        
        <span style=\'text-align:center;font-size: 24px;font-weight: bold;color:#00efff;\'>
          ${params[0].value} 
        </span> 家
      </div>
    </div>
  </div>`
  return resultTooltip
}
export function toolHtmlLine(params) {
  const resultTooltip = 
  `<div style=\'background-color: rgba(20, 74, 116,.9);box-shadow: 0px 0px 3px 2px #01cfff;
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params[0].name}年</div>
    <div style=\'display: flex;flex-direction: column;align-items: left;color: #fff;\'>
      <div style=\'font-size: 18px;text-align:center;margin-top: 16px;\'>
        
        <span style=\'text-align:center;font-size: 24px;font-weight: bold;color:#00efff;\'>
          ${params[0].value} 
        </span> 家
      </div>
    </div>
  </div>`
  return resultTooltip
}

export function toolHtmlMultiBar(params) {
  const resultTooltip = 
  `<div style=\'background-color: rgba(20, 74, 116,.9);box-shadow: 0px 0px 3px 2px #01cfff;
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;padding: 0px;\'> ${params[0].value.name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: left;color: #fff;\'>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center; text-align:left;margin-top: 14px;\'>
        <div style=\'height:10px;width: 10px; border-radius: 5px; background-image: linear-gradient(to bottom,${params[0].color.colorStops[0].color}, ${params[0].color.colorStops[1].color}) !important;margin-right:10px;\'></div>
        <span style=\'margin-right:10px;'>已整改数量</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[0].value['已整改数量']}
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center;text-align:left;margin-top: 10px;\'>
        <div style=\'height:10px;width: 10px; border-radius: 5px; background-image: linear-gradient(to bottom,${params[1].color.colorStops[0].color}, ${params[1].color.colorStops[1].color}) !important;margin-right:10px;\'></div>
        <span style=\'margin-right:10px;'>需整改数量</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[0].value['需整改数量']}
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center;text-align:left;margin-top: 10px;\'>
        <div style=\'height:10px;width: 10px; border-radius: 5px; background-image: linear-gradient(to bottom,${params[2].color.colorStops[0].color}, ${params[2].color.colorStops[1].color}) !important;margin-right:10px;\'></div>
        <span style=\'margin-right:10px;'>检查数量</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[0].value['检查数量']}
        </span> 
      </div>
    </div>
  </div>`
  return resultTooltip
}
export function toolHtmlMix(params) {
  const resultTooltip = 
  `<div style=\'background-color: rgba(20, 74, 116,.9);box-shadow: 0px 0px 3px 2px #01cfff;
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params[0].name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: left;color: #fff;\'>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center; text-align:left;margin-top: 14px;\'>
        <div style=\'margin-right:10px; display:flex; align-items: center;' >
          <div style=\'height:10px;width: 10px; border-radius: 5px; background-image: linear-gradient(to bottom,${params[0].color.colorStops[0].color}, ${params[0].color.colorStops[1].color}) !important;margin-right:10px;\'></div>
             检查任务量
          </div>
          <span style=\'text-align:center;font-size: 24px; font-weight: bold;color:#00efff;\'>
          ${params[0].value}
          </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center;text-align:left;margin-top: 10px;\'>
        <div style=\'height:10px;width: 10px; border-radius: 5px; background-color: ${params[1].color}; !important;margin-right:10px;\'></div>
        <span style=\'margin-right:10px;'>完成百分比（%）</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[1].value}%
        </span> 
      </div>
    </div>
  </div>`
  return resultTooltip
}

export function toolHtmlStack(params) {
  const resultTooltip = 
  `<div style=\'background-color: rgba(20, 74, 116,.9);box-shadow: 0px 0px 3px 2px #01cfff;
      padding: 12px 20px; border:1px transparent solid;border-image:linear-gradient(to right,rgba(4,127,156,1),#e9eceb,#01cfff) 1 10;
      \'>
    <div style=\'text-align:center; font-size: 20px;color: #fff;;letter-spacing: 0;padding: 0px;\'> ${params[0].name}</div>
    <div style=\'display: flex;flex-direction: column;align-items: left;color: #fff;\'>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center; text-align:left;margin-top: 14px;\'>
        <span style=\'margin-right:10px;'>${params[0].marker}${params[0].seriesName}</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[0].value}
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center;text-align:left;margin-top: 8px;\'>
        <span style=\'margin-right:10px;'>${params[1].marker}${params[1].seriesName}</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[1].value}
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center;text-align:left;margin-top: 8px;\'>
        <span style=\'margin-right:10px;'>${params[2].marker}${params[2].seriesName}</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
        ${params[2].value}
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center;text-align:left;margin-top: 8px;\'>
        <span style=\'margin-right:10px;'>${params[3].marker}${params[3].seriesName}</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[3].value}
        </span> 
      </div>
      <div style=\'font-size: 18px;display:flex; justify-content:space-between;align-items: center;text-align:left;margin-top: 8px;\'>
        <span style=\'margin-right:10px;'>${params[4].marker}${params[4].seriesName}</span>
        <span style=\'text-align:center;font-size: 22px; font-weight: bold;color:#00efff;\'>
         ${params[4].value}
        </span> 
      </div>
    </div>
  </div>`
  return resultTooltip
}