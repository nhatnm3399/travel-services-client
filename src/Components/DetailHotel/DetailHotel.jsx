import React from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import InputTemplate from '../Common/InputTemplate'
import { BannerHome } from '../Home/Home'
import GoogleMapPlugin from '../Plugin/GoogleMap'
import { Title } from '../Profile/Profile'
import "./DetailHotel.sass"

const DetailHotel = (props) => {
  return (
    <div className={"detail-hotel"} style={{width: "100%"}}>
        <BannerHome />
        <MainHotel />
    </div>
  )
}

const MainHotel= (props)=> {
    return (
        <div className={"main-hotel"} style={{width: "100%", display: "flex", gap: 10, marginTop: 50, padding: "0 40px", minHeight: 640, alignItems: "end", marginBottom: 20}}>
            <MainDetailHotel1 />
            <MainHotel2 />
        </div>
    )
}


const MainDetailHotel1= (props)=> {
    return (
        <div className={"wrap-main-left"} style={{width: 300, height: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <div className={"main-left"} style={{width: "100%"}}>
                <div style={{fontSize: 20, marginBottom: 16, fontWeight: 600}}>Tìm</div>
                <div className="wrap-x--w" style={{width: "100%", height: 610}}>
                    <div className={"main-left-side-search-result"} style={{padding: 10, background: "#d9d9d9", width: "100%", marginBottom: 6}}>
                        <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20}}>
                            <Title title={"Điểm đến"} />
                            <div className={"wrap-option-main-left-side-search-result"} style={{width: "100%", height: 40, background: "#fff"}}>
                                <InputTemplate onChange={()=> {}} className={"inp-wrap-option-main-left-side-search-result"} />
                            </div>
                        </div>
                        {/*  */}
                        <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20}}>
                            <Title title={"Ngày nhận - trả phòng"} />
                            <div className={"wrap-option-main-left-side-search-result"} style={{width: "100%", height: 40, background: "#fff"}}>
                                <InputTemplate onChange={()=> {}} className={"inp-wrap-option-main-left-side-search-result"} />
                            </div>
                        </div>
                        {/*  */}
                        <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                            <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className={"w-guest-left-side-sp"}>Trẻ em</span>
                                <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                                    <InputTemplate type={"number"} onChange={()=> {}} className={"inp-wrap-guest-option-left-side-search-result"} />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                            <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className={"w-guest-left-side-sp"}>Phòng</span>
                                <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                                    <InputTemplate type={"number"} onChange={()=> {}} className={"inp-wrap-guest-option-left-side-search-result"} />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className={"guest-adult-c"} style={{marginBottom: 16}}>
                            <div className={"w-guest-left-side"} style={{width:" 100%", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className={"w-guest-left-side-sp"}>Người lớn</span>
                                <div className={"w-guest-l-inp"} style={{width: 50, height: 18, background: "#fff"}}>
                                    <InputTemplate type={"number"} onChange={()=> {}} className={"inp-wrap-guest-option-left-side-search-result"} />
                                </div>
                            </div>
                        </div>
                        <div className={"wrap-btn-search-booking-again"} style={{width: "100%", height: 40, marginTop: 20}}>
                            <ButtonTemplate disable={false} className={"c-wrap-btn-search-booking-again"}>Tìm kiếm</ButtonTemplate>
                        </div>
                    </div>
                    <div className={"wrap-detail-map-location"} style={{width: "100%", height: 200}}>
                        <GoogleMapPlugin />
                    </div>
                </div>
            </div>
        </div>
    )
}

const MainHotel2= (props)=> {
    return (
        <div className={"main-hotel-2"} style={{width: "calc(100% - 300px)"}}>
            <div className={"main-hotel-2-1"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 18px"}}>
                <div className={"main-hotel-2-1-1"}>
                    <div className={"main-hotel-2-1-1-1"}style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>
                        Queen's Finger Hotel Da Nang
                    </div>
                    <div className={"main-hotel-2-1-1-2"} style={{fontSize: 18}}>
                        155-157 Le Quang Dao, Ngu Hanh Son, Da Nang, Viet Nam
                    </div>
                </div>
                <div className={"main-hotel-2-1-2"} style={{width: 200, height: 60}}>
                    <ButtonTemplate className={"main-hotel-2-1-2-btn"} onClick={()=> {}}>Đặt ngay</ButtonTemplate>
                </div>
            </div>
            <div className={"main-hotel-2-2"} style={{width: "100%", marginTop: 16}}>
                <div className={"main-hotel-2-2-1"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 10, flexWrap: "wrap"}}>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "48%", height: 300, background: "#d9d9d9"}}></div>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "48%", height: 300, background: "#d9d9d9"}}></div>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "48%", height: 300, background: "#d9d9d9"}}></div>
                    <div className={"main-hotel-2-2-1-1"} style={{width: "48%", height: 300, background: "#d9d9d9"}}></div>
                </div>
            </div>
        </div>
    )
}

const Tab2= (props)=> {
    return (
        <div className={"tab-2"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, gap: 20}}>
            <div className={"tab-2-1"} style={{width: "calc(100% - 300px)"}}>

            </div>
            <div className={"tab-2-2"} style={{width: 300, background: "#d9d9d9"}}>
                
            </div>  
        </div>
    )
}

export default DetailHotel