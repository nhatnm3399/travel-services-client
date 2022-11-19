import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import AddRoomForHotel from './AddRoomForHotel'
import "./AdminLevel2.sass"
import ListHotel from './ListHotel'
import ManageRoom from './ManageRoom'
import RegisterHotel from './RegisterHotel'
import RequestBookingRoom from './RequestBookingRoom'

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
        <div className={"jaksjakdslkdass"} style={{ background: "#d9d9d9", minHeight: "100%", width: 300, padding: 20}}>
            <NavigationHeritage textLv1={"Danh sách khách sạn"} textLv2={"Thông tin chung"}
            array_link={[{link: "/admin/hotel/manage/verified", text: "Đã xác thực"}, {link: "/admin/hotel/manage/pending", text: "Chờ xác thực"}, {link: "/admin/hotel/manage/disabled", text: "Đã bị vô hiệu hóa"}]}
                linkLv1={"/admin/hotel/manage"}
                linkLv2={"/admin/hotel/manage/general"}
            />
             <NavigationHeritage textLv1={"List comment bị report"} textLv2={"Thông tin chung"}
                linkLv1={"/admin/hotel/new"}
                linkLv2={"/admin/hotel/new/general"}
            />
             <NavigationHeritage textLv1={"Quản lý sự kiện"} textLv2={"Thông tin chung"}
                linkLv1={"/admin/hotel/manage"}
                linkLv2={"/admin/hotel/new/manage/room"}
            />
             <NavigationHeritage textLv1={"Thống kê"} textLv2={"Thông tin chung"}
                linkLv1={"/admin/hotel/manage"}
                linkLv2={"/admin/hotel/manage/general"}
            />

        </div>
    )
}

const MainAdminLevel2= (props)=> {
    return (
        <div className={"alksjklrjwkeawsa"} style={{flex: "1 1 0"}}>
            <Routes>
                {/* <Route path={"/admin/"} /> */}
                <Route path={"  "} element={<RequestBookingRoom />} />
                <Route path={"/manage/hotel/list"} element={<ListHotel />} />
                <Route path={"/manage/hotel/register"} element={<RegisterHotel />} />
                <Route path={"/manage/hotel/:hotelId/new/room"} element={<AddRoomForHotel />} />
                <Route path={"/manage/room/detail"} element={<ManageRoom />} />
            </Routes>
        </div>
    )
}

export default AdminLevel2

const NavigationHeritage= (props)=> {
    return (
        <div className={"dlfjskldjksdjesiwawa"} style={{marginBottom: 8}}>
            <div className={"dsjkjkawjsfseaw"}>
                <NavLink to={props.linkLv1} className={({isActive})=> isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} style={{color: "#000", textDecoration: "none", fontWeight: 600}}>
                    {props.textLv1}
                </NavLink>
            </div>
            
                {
                    props?.array_link?.map((item, key)=> <div key={key} className={"dkskalkflkeseseaw"} style={{marginTop: 16, marginLeft: 12}}>
                        <NavLink to={item.link} className={({isActive})=> isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} style={{color: "#000", textDecoration: "none", fontWeight: 600}}>
                        {item.text}
                    </NavLink>
                    </div>)
                }
                
        </div>
    )
}