import React from 'react'
import InputTemplate from '../Common/InputTemplate'
import { Title } from './ListHotel'

const AddRoomForHotel = (props) => {
  return (
    <div className={"fkdkaskalskalsas"} style={{width: "100%"}}>
        <Title title={"Thêm phòng"} />
        <MainAddRoom />
    </div>
  )
}

const MainAddRoom= (props)=> {
    return (
        <div className={"fkdkalskalrwarae"} style={{width: "100%", padding: 10,}}>
            <div className={"vkdkskadfdsdssd"} style={{marginBottom: 20}}>Thông tin chính</div>
            <Tab1 />
            <br />
            <br />
            <Tab2 />
            <BtnCreate />
        </div>
    )
}

const Tab1= (props)=> {
    return (
        <div className={"fkjaksjkfaweaw"} style={{width: "100%", padding: 10, display: "flex", alignItems: "center", flexWrap: "wrap"}}>
            <ItemOption width={"calc(100% / 3)"} title={"*Tên phòng"} />
            <ItemOption width={"calc(100% / 3)"} title={"*Lọai phòng"} />
            <ItemOption width={"calc(100% / 3)"} title={"*Giá phòng"} />
            <ItemOption width={"calc(100% / 3)"} title={"*Số lượng giường"} />
            <ItemOption width={"calc(100% / 3)"} title={"*Diện tích"} />
        </div>
    )
}

const Tab2= (props)=> {
    return (
        <div className={"fkjjjasjaskjasj"} style={{width: "100%", padding: 10, borderTop: "1px solid #000"}}>
            <TitleItem title={"Tiện nghi và nội quy"} />
            <div className={"fgjkkdkldskldkla"} style={{width: "100%", display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap"}}>
                <ItemOption2 type={"checkbox"} title={"Wifi"} />
                <ItemOption2 type={"checkbox"} title={"Máy lạnh"} />
                <ItemOption2 type={"checkbox"} title={"WC"} />
                <ItemOption2 type={"checkbox"} title={"Chỗ để xe"} />
            </div>
            <br />
            <TitleItem title={"Hướng nhìn"} />
            <div className={"fgjkkdkldskldkla"} style={{width: "100%", display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap"}}>
                <ItemOption2 type={"checkbox"} title={"Núi"} />
                <ItemOption2 type={"checkbox"} title={"Biển"} />
                <ItemOption2 type={"checkbox"} title={"Sông"} />
            </div>
            <br />  
            <TitleItem title={"Phòng tắm"} />
            <div className={"fgjkkdkldskldkla"} style={{width: "100%", display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap"}}>
                <ItemOption2 title={"Đồ vệ sinh cá nhân"} />
                <ItemOption2 title={"Dép"} />
            </div>
            <br />
        </div>
    )
}

export const ItemOption= (props) => {
    return (
        <div className={"fjkdksdfadsladas"} style={{width: props.width, paddingRight: 20, marginBottom: 20}}>
            <div className={"fkdjsgkfkdsasfd"} style={{marginBottom: 12}}>{props.title}</div>
            <div className={"fajfjdkdksdksasa"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <InputTemplate type={props.type} onChange={()=> props.onChange} value={props.value} placeholder={props.placeholder} style={{width: "100%", height: 40, background: "#d9d9d9", padding: 10, border: "none", outlineColor: "#2e89ff"}} />
            </div>
        </div>
    )
}

export const ItemOption2= (props)=> {
    return (
        <div className={"fjsdjkskaskldkla"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 12}}>
            <div className={"fkjsdkkkasasasa"} style={{fontSize: 16}}>
                {props.title}
            </div>
            <div className={"fdjlfklaklsdka"} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <InputTemplate type={props.type} onChange={()=> props.onChange} value={props.value} placeholder={props.placeholder} style={{width: 16, height: 16, background: "#d9d9d9", border: "none"}} />
            </div>
        </div>
    )
}

export const TitleItem= (props)=> {
    return (
        <div className={"aklklakklalkakra"} style={{fontWeight: 600, marginBottom: 20}}>
            {props.title}
        </div>
    )
}

const BtnCreate= (props)=> {
    return (
        <div className={"fkaskldkldklska"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', margin: "20px 0"}}>
            <button className={"mdlkdskldklkaa"} style={{padding: "10px 30px", background: "#2e89ff", cursor: "pointer", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", color: "#fff"}}>
                Lưu
            </button>
        </div>
    )
}

export default AddRoomForHotel