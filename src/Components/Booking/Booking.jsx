import React from 'react'
import { useState } from 'react'
import { BannerHome } from '../Home/Home'
import "./Booking.sass"
import {BsFillCalendarDateFill} from "react-icons/bs"
import DatePickerPlugin from '../Plugin/DatePicker'
import moment from 'moment'
import OutsideClickHandler from 'react-outside-click-handler'
import { useLocation } from 'react-router-dom'
import _ from 'lodash'
import booking_room_hotel from '../../api/booking/booking_room_hotel'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Button } from 'react-bootstrap'

const Booking = (props) => {
  const location= useLocation()
  if(location?.state?.state=== true) {
    return (
      <div className={"fjlkssdsjklasjdas"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className={"detail-room-booking-hotel"} style={{width: "100%", maxWidth: 1116}}>
          <Tab1 {...location.state} />
          <Tab2 {...location.state} />
        </div>
      </div>
    )
  }
  else {
    return (
      <div className={"detail-room-booking-hotel"} style={{width: "100%", minHeight: "100vh"}}>
        Có lỗi khi xảy ra 
      </div>
    )
  }
}

export const Tab1= (props)=> {
  return (
    <div className={"tab-1-detail-room-booking-hotel"} style={{marginTop: 20, width: "100%", display: "flex", gap: 20, padding: "0 40px", marginBottom: 30}}>
      <div className={"sejsioeasaw"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <div className={"jskdjkjhireasa"} role={"img"} style={{width: 400, height: 250, background: "#d9d9d9"}}>
          <img src={props?.data1?.image} alt="Can't open" style={{width: '100%', height: '100%', objectFit: "cover",}} />
        </div>
      </div>
      {/*  */}
      <div className={"jsdkjdkdlhjfas"} style={{}}>
        <div className={"djdklrjioejawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 16}}>
          {props?.data1?.hotel_name}
        </div>
        <div className={"sukfdhkjashas"} style={{marginBottom: 40}}>
        {props?.data1?.address}
        </div>
        <div className={"sukfdhkjashas"} style={{marginBottom: 40}}>
        Số điện thoại: {props?.data1?.phone}
        </div>
      </div>
    </div>
  )
}

const Tab2= (props)=> {
  const {user }= useContext(AppContext)
  const [checkin, setCheckin]= useState(new Date())
  const [checkout, setCheckout]= useState(new Date())
  // const [stay, setStay]= useState(0)
  const [openCalendar, setOpenCalendar]= useState(()=> false)
  const [data, setData]= useState()

  const [info, setInfo]= useState(()=> ({
    userName: "",
    phoneNumber: "",
    email: "",
    other: ""
  }))

  const booking = async ()=> {
      await booking_room_hotel(moment(checkin).format("DD/MM/YYYY"), moment(checkout).format("DD/MM/YYYY"), _.sumBy(props?.data, function(o) {return o.amount}), user?.full_name, info.phoneNumber, info.email, Cookies.get("uid"), _.map(props?.data, 'id'), setData)
  
    }
  return (
    <div className={"tab-2-detail-room-booking-hotel"} style={{width: "100%", display: "flex", justifyContent: 'center', gap: 40, padding: '0 40px'}}>
      <div className={"sldjhlksdjasas"} style={{width: 400, padding: 20, border: "1px solid #000", height: "max-content"}}>
        <div className={"fvjlkjdklsjfdasas"} style={{fontSize: 20, fontWeight: 600, marginBottom: 20}}>
          Thông tin chi tiết đặt phòng
        </div>
        <div className={"jdsijhiorjuhseas"} style={{width: "100%", padding: 10}}>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, position: "relative"}}>
            Ngày vào: {moment(checkin).format("DD/MM/YYYY")} <span title={"Chọn ngày"}><BsFillCalendarDateFill onClick={()=> setOpenCalendar(prev=> !prev)} /></span>
            {
              openCalendar=== true && <div style={{position: "absolute", top: "100%", left: 0}}>
                <OutsideClickHandler onOutsideClick={()=> setOpenCalendar(()=> false)}>
                  <DatePickerPlugin setOpen={setOpenCalendar} startDate={checkin} endDate={checkout} setStartDate={setCheckin} setEndDate={setCheckin} />
                </OutsideClickHandler>
              </div>
            }
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Ngày ra: {moment(checkout).format("DD/MM/YYYY")}
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Tổng thời gian lưu trữ: <span className={"dfjhkdjskljdasas "} style={{fontSize: 18}}>1 đêm</span>
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Phòng đã chọn: <div className={"dfjhkdjskljdasas "} style={{fontSize: 18, fontWeight: 600}}>
              {props?.data?.map((item, key)=> <div style={{marginBottom: 8}} key={key}>Loại phòng: {item?.name_hotel} - Số lượng: {item?.count}</div>)}
            </div>
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16}}>
            Tổng giá: {_.sumBy(props?.data, function(o) {return o.amount})}
          </div>
        </div>
      </div>
      {/*  */}
      <div className={"djslksajkjfklasa"} style={{width: "calc(100% - 400px)"}}>
        <div className={"dfjkahduashajksas"} style={{width: "100%"}}>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Họ và tên: </div>
            <input onChange={(e)=> setInfo(prev=> ({...prev, userName: e.target.value}))} type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Nhập số điện thoại liên hệ: </div>
            <input onChange={(e)=> setInfo(prev=> ({...prev, phoneNumber: e.target.value}))} type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Nhập địa chỉ email: </div>
            <input onChange={(e)=> setInfo(prev=> ({...prev, email: e.target.value}))} type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Yêu cầu khác: </div>
            <textarea onChange={(e)=> setInfo(prev=> ({...prev, other : e.target.value}))} type="text" className={"sdjskldjakjask"} rows={40} style={{width: 300, height: 200, background: "#d9d9d9", padding: 10, fontSize: 16, resize: "none"}} />
          </div>
          <div className={"fjklsajklsjasas"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems :'center', marginBottom: 40}}>
            <Button onClick={booking} color={"primary"} className={"fjksajsdkass"} style={{width: 200, height: 60,}}>
              Đặt ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking