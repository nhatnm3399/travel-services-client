import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./ListHotel.sass"

const ListHotel = (props) => {
  return (
    <div className={"hjfjhdkjlajsaksa"}>
        <Title title={"Danh sách khách sạn của bạn"} is_add_new_hotel={true} />
        <Main />
    </div>
  )
}

export const Title= (props)=> {
    const navigate= useNavigate()

    return (
        <div className={"aksdkjasksalasas"} style={{width: "100%", padding: "20px", borderBottom: "1px solid #000", marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
            <div className={"fkdjfkljhklsdjkasas"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
                <NavLink className={({ isActive }) => isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} to={props?.is_edit=== true ? "/manage/hotel/manage/edit/hotel" : "/manage/hotel/add/new/hotel"} style={{fontSize: 20, fontWeight: 600,textDecoration: "none"}}>
                    {props.title}
                </NavLink>
                {props?.title1 && <NavLink className={({ isActive }) => isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} to={props?.is_edit=== true ? "/manage/hotel/manage/edit/room" : "/manage/hotel/add/new/room"} style={{fontSize: 20, fontWeight: 600,textDecoration: "none"}}>
                    {props.title1}
                </NavLink>}
            </div>
            {
                props.is_add_new_hotel=== true &&
                <div className={"snkdljkasksalsalas"}>
                    <button onClick={()=> navigate("/manage/hotel/add/new")} style={{padding: 10, outline: "none", border: "none", cursor: "pointer", background: "#d9d9d9"}}>
                        Thêm mới khách sạn
                    </button>
                </div>
            }
        </div>
    )
}

const Main= ()=> {
    return (
        <div className={"fdjakjsaklejawawaw"} style={{width: "100%"}}>
            <table className={"fkjkajkawawaww"} style={{width: "100%"}} cellSpacing={20}>
                <thead className={"fjjaklsjkafjakljedas"} style={{width: '100%', borderBottom: "1px solid #000"}}>
                    <tr className={"fkdjkasjkasjkledaw"}>
                        <th>Tên khách sạn</th>
                        <th>Địa chỉ</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody className={"fkasajskajskawjakwaw"} style={{width: "100%"}}>
                    <tr className={"djjaklwjrkjlekawwa"}>
                        <td>Mường thanh</td>
                        <td>60 Lê Văn Hiến, Ngũ Hành Sơn, Đà Nẵng</td>
                        <td>
                            <div style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 10}}>
                                <button className={"fjkjsaksjakwaww"} style={{padding: "5px 10px", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", backgroundColor: "#2DB83B"}}>
                                    Thêm
                                </button>
                                <button className={"fjkjsaksjakwaww"} style={{padding: "5px 10px", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", backgroundColor: "#E0111D"}}>
                                    Xóa
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListHotel