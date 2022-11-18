import React from 'react'
import { Tab2 } from '../DetailSubRoom/DetailSubRoom'

const DetailPopupRoom = (props) => {
  return (
    <div className={"djksajksljriajeijeawaw"} style={{width: "100%"}}>
      <div className={"fnljdksjfkddas"} style={{marginBottom: 12, padding: "0 40px", fontSize: 24, fontWeight: 600}}>{props?.type_room_name}</div>
        <div className={"djksjaksjasklaww"} style={{width: "100%"}}>
          <Tab2 {...props} />
        </div>
    </div>
  )
}

export default DetailPopupRoom