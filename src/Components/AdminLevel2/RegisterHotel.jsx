import React from 'react'
import InputTemplate from '../Common/InputTemplate'
import GoogleMapPlugin from '../Plugin/GoogleMap'
import { Title } from './ListHotel'
import TimePicker from 'react-time-picker';
import {GrAdd} from "react-icons/gr"

const RegisterHotel = (props) => {
  return (
    <div className={"jsjakljsakjsakeawa"} style={{width: "100%", marginTop: 20, padding: 20}}>
        <Title title={"Đăng ký khách sạn"} />
        <MainRegister />
    </div>
  )

}

const MainRegister= (props)=> {
    return (
        <div className={"djksjajerkjawwawa"} style={{width: "100%", padding: 10, background: "#d9d9d9"}}>
            <div className={"fjskdljskdfjeaaawa"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, marginBottom: 30}}>
                {/*  */}
                <div className={"fjkjaklwjkrlawawaw"} style={{flex: "1 1 0", minHeight: 250, display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                    <div className={"fjejksljaklea"} style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: 30}}>
                        <div className={"dsjaajwjalkwawwa"} style={{flex: "1 1 0"}}>
                            <TitleItem title={"Tên khách sạn *"} />
                            <InputTemplate onChange={()=> {}} style={{width: "100%", height: 40, padding: 10, outlineColor: "#2e89ff", background: "#fff", border: "none"}} />
                        </div>
                        <div className={"dsjaajwjalkwawwa"} style={{flex: "1 1 0"}}>
                            <TitleItem title={"Số điện thoại *"} />
                            <InputTemplate onChange={()=> {}} style={{width: "100%", height: 40, padding: 10, outlineColor: "#2e89ff", background: "#fff", border: "none"}} />
                        </div>
                    </div>
                    <div className={"dsjaajwjalkwawwa"} style={{width: "100%"}}>
                        <TitleItem title={"Địa chỉ *"} />
                        <InputTemplate onChange={()=> {}} style={{width: "100%", height: 40, padding: 10, outlineColor: "#2e89ff", background: "#fff", border: "none"}} />
                    </div>
                </div>
                {/* intergrate map */}
                <div className={"fksedkawjrkjakwawwaw"} style={{width: 250, height: 250}}>
                    <div className={"fjklejkjkeawawae"} style={{width: '100%', height: "100%"}}>
                        <GoogleMapPlugin />
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={"dsjaajwjalkwawwa"} style={{width: "100%", marginBottom: 30}}>
                <TitleItem title={"Mô tả *"} />
                <textarea onChange={()=> {}} style={{width: "100%", height: 200, padding: 10, outlineColor: "#2e89ff", background: "#fff", fontSize: 16, resize: "none", border: "none"}} />
            </div>
            <SetRule />
            <br />
            <ImageIllustation />
        </div>
    )
}

const TitleItem= (props)=> {
    return (
        <div className={"fgdjskljeklajkwawaw"} style={{fontWeight: 600, marginBottom: 12}}>
            {props.title}
        </div>
    )
}

const SetRule= (props)=> {
    return (
        <div className={"fjkejklajkwljaklwwajaw"} style={{width: "100%"}}>
            <TitleItem title={"Quy tắc chung"} />
            <div className={"fkajkawakwawaew"} style={{width: "100%", padding: 20, background: "#fff"}}>
                <Label label={"Thời gian nhận phòng: "} component={<TimePicker />} />
                <Label label={"Thời gian trả phòng: "} component={<TimePicker />} />
                <Label label={"Hủy đặt phòng / Trả trước"} component={<YesNoOptions />} />
                <Label label={"Trẻ em và giường"} />
                <Label label={"Độ tuổi đặt phòng"} />
                <Label label={"Vật nuôi"} />
                <Label label={"Hình thức thanh toán"} />
            </div>
        </div>
    )
}

const Label= (props)=> {
    return (
        <div className={"skdkeljakwjkawawa"} style={{display: 'flex', alignItems: "center", gap: 20, marginBottom: 32}}>
            <div className={"kldkalkaelkeawaa"} style={{maxWidth: 200, width: 200}}>
                {props.label}
            </div>
            <div className={"fjsekjakajwkawjwaeaaw" } style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                {props.component}
            </div>
        </div>
    )
}

const YesNoOptions= (props)=> {
    return (
        <div className={"fkakwklfaseaa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 30}}>
            <ComponentYesNo text={"Có"} name={"deposit"} />
            <ComponentYesNo text={"Không"} name={"deposit"} />
        </div>
    )
}

const ComponentYesNo= (props)=> {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10, height: 24}}>
            <span style={{}}>{props.text}</span>
            <div className={"fjiidjdjksteawsa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", height: 'inherit'}}>
                <InputTemplate type={"radio"} name={props.name} value={props.value} style={{width: 16, height: 16}} />
            </div>
        </div>
    )
}

const ImageIllustation= (props)=> {
    return (
        <div className={"fskjakejakwjaklawwa"} style={{width: "100%",}}>
            <TitleItem title={"Hình ảnh *"} />
            <div className={"fjajkjsklajraeweaa"} style={{width: '100%', padding: 20, display: "flex", justifyContent: 'center', alignItems: "center", position: "relative", background: "#fff", height: 400}}>
                <div className={"fkdjksjakwjawawas"} style={{width: 80, height: 80, display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", position: "relative", background: "#d9d9d9", cursor: "pointer"}}>
                    <div className={"fjdadjkwljeakwawa"} style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 12}}>
                        <GrAdd style={{width: 24, height: 24}} />
                    </div>
                    <div style={{textAlign: "center", fontWeight: 600, fontSize: 14}}>
                        Upload
                    </div>
                    <input type="file" multiple style={{position: "absolute", opacity: 0, width: "100%", height: "100%", zIndex: 9, cursor: "pointer", top: 0, left: 0}} />
                </div>
                {/* rule */}
                <div className={"djkjaksjkajraeaw"} style={{position: "absolute", bottom: 0, textAlign: "center", fontSize: 12, fontWeight: 600}}>Vui lòng đăng tải 5 hình ảnh trở lên</div>
            </div>
        </div>
    )
}
export default RegisterHotel