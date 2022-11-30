import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import delete_hotel from '../../api/admin/delete_hotel'
import get_list_hotel from '../../api/manage/get_list_hotel'
import Snackbar from '../Snackbar/Snackbar'
import "./ListHotel.sass"

const ListHotel = (props) => {
  const [data, setData]= useState([])
  useEffect(()=> {
    get_list_hotel(setData)
  }, [])
  return (
    <div className={"hjfjhdkjlajsaksa"}>
        <Title title={"Danh sách khách sạn của bạn"} is_add_new_hotel={true} />
        <Main data={data} setData={setData} />
    </div>
  )
}

export const Title= (props)=> {
    const navigate= useNavigate()

    return (
        <div className={"aksdkjasksalasas"} style={{width: "100%", padding: "20px", borderBottom: "1px solid #e7e7e7", marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
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
                    <Button color={"primary"} onClick={()=> navigate("/manage/hotel/add/new/hotel")} >
                        Thêm mới khách sạn
                    </Button>
                </div>
            }
            {
                props.is_search_by_id_hotel=== true && 
                <div className={"fjsdkjkjdksassa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
                    <div>Tìm theo tên khách sạn</div>
                    <div>
                        <select onChange={(e)=> props?.setIdHotel(e.target.value)} value={props?.idHotel || ""} name="" id="">
                            {
                                props?.data?.map((item, key)=> <option key={key} value={item.id}>{item?.title}</option>)
                            }
                        </select>
                    </div>
                </div>
            }
        </div>
    )
}

const Main= (props)=> {
    const [loading, setLoading]= useState(false)
  // eslint-disable-next-line
    const [data, setData]= useState()
    const navigate= useNavigate()
    const edit_hotel= (id)=> {
        navigate("/manage/hotel/manage/edit/hotel?idHotel="+ id, {state: {is_edit: true, idHotel: id}})
    }
    const deleteHotel= (id)=> {
        delete_hotel(id, setData, setLoading)
        props?.setData(props?.data?.filter(item=> parseInt(item?.id) !== parseInt(id)))
    }
    if(props?.data?.length > 0) {

        return (
                <div className={"fdjakjsaklejawawaw"} style={{width: "100%", padding: 10}}>
                    <table className={"fkjkajkawawaww"} style={{width: "100%"}} cellSpacing={20}>
                        <thead className={"fjjaklsjkafjakljedas"} style={{width: '100%', borderBottom: "1px solid #e7e7e7"}}>
                            <tr className={"fkdjkasjkasjkledaw"}>
                                <th style={{marginLeft: 50}}>Tên khách sạn</th>
                                <th>Địa chỉ</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody className={"fkasajskajskawjakwaw"} style={{width: "100%"}}>
                            {
                                props?.data?.map((item ,key)=> <tr key={key} className={"djjaklwjrkjlekawwa"}>
                                <td style={{marginLeft: 50}}>{item?.title}</td>
                                <td>{item?.address}</td>
                                <td>
                                    <div style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 10}}>
                                        <button onClick={()=> edit_hotel(item?.id)} className={"fjkjsaksjakwaww"} style={{padding: "5px 10px", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", backgroundColor: "#2DB83B"}}>
                                            Chỉnh sửa
                                        </button>
                                        <button onClick={()=> deleteHotel(item.id)} className={"fjkjsaksjakwaww"} style={{padding: "5px 10px", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", backgroundColor: "#E0111D"}}>
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                    {loading=== true && <Snackbar show={loading} setShow={setLoading} title={"Thông báo"} description={"Xóa khách sạn thành công !"}/>}
                </div>
        )
    }
    else {
        return (
            <div style={{textAlign: "center", fontWeight :600, fontSize: 20}}>Bạn không có khách sạn nào !</div>
        )
    }
}

export default ListHotel