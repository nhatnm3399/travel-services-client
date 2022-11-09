import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AdminLevel2 = (props) => {
  return (
    <div className={"sjfkljdkjaskasas"} style={{width: '100%'}}>
        <div className={"sdkljdakldjkas"} style={{width :"100%", display: "flex", justifyContent: 'space-between', gap: 20 }}>
            <Navigation />
            <MainAdminLevel2 />
        </div>
    </div>
  )
}

const Navigation= (props)=> {
    return (
        <div className={"jaksjakdslkdass"} style={{ background: "#d9d9d9", minHeight: "100%", width: 300}}>

        </div>
    )
}

const MainAdminLevel2= (props)=> {
    return (
        <div className={"alksjklrjwkeawsa"} style={{flex: "1 1 0"}}>
            <Routes>
                <Route path={"/admin/"} />
            </Routes>
        </div>
    )
}

export default AdminLevel2