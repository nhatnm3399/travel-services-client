import React from 'react'
import InputTemplate from '../Common/InputTemplate'
import MultiRangeSlider from './RangeSlider'
import "./LeftSide.sass"
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'

const LeftSide = (props) => {
  return (
    <div className={"left-side-search-result"} style={{width: 300}}>
        <div className={"title-left-side-search-result"} style={{fontSize: 16, fontWeight: 600, marginBottom: 10, padding: "0 10px"}}>
            Tìm
        </div>
        <MainLeftSide />
        <Rating />
    </div>
  )
}

const MainLeftSide= (props)=> {
    // const [range, setRange]= useState(()=> ({min: 0, max: 1000}))
    return (
        <div className={"main-left-side-search-result"} style={{padding: 10, background: "#d9d9d9", width: "100%", marginBottom: 50}}>
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
            <div className={"w-option-main-left-side-search-result"} style={{width: "100%", marginBottom: 20}}>
                <Title title={"Lựa chọn"} />
                <MultiRangeSlider onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} min={0} max={1000} />
            </div>
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
    )
}

const Title= (props)=> {
    return (
        <div className={"title-main-left-side-search-result"} style={{fontSize: 14, marginBottom: 16}}>
            {props.title}
        </div>
    )
}

const Rating= (props)=> {
    return (
        <div className={"rating-booking-hotel"} style={{width: "100%", padding: 10, background: "#d9d9d9"}}>
            <Title title={"Xếp hạng theo sao"} />
            <div className={"rating-booking-hotel-star-1 rating-booking-hotel-star"} style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 16}}>
                <div className={"wrap-inp-rating-booking-hotel-star-1"} style={{width: 24, height: 24}}>
                    <InputTemplate onChange={()=> {}} value={1} type={"checkbox"} className={"inp-rating-booking-hotel-star-1"} />
                </div>
                <div className={"rating-booking-hotel-star-d"} style={{fontSize: 16}}>
                    1 sao
                </div>
            </div>
            
        </div>
    )
}

export default LeftSide