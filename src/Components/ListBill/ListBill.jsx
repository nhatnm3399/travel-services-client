import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ListBill = (props) => {
  return (
    <div className={"fjsahjdksdjkldadsa"} style={{width: "100%", minHeight: "100vh"}}>
        <div className={"fdjkdjkfjkdass flexCenterItem"} style={{width: "100%", padding: 10}}>
            <div className={"fkklsdklgkklaskdas"} style={{width: '100%', maxWidth: 1200}}>
                <table className={"dfjksfjkdjgfkkdas"} style={{width: "100%"}} cellSpacing={28} cellPadding={20}>
                    <thead className={"dfdmksdjkgjdsas"} style={{width: "100%"}}>
                        <tr className={"fjkldjkgjdksldssd"}>
                            <th className={"fkdldkfdjskdljksa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Hóa đơn</th>
                            <th className={"fjkdjfdkjdskjsaksa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Trạng thái hóa đơn</th>
                            <th className={"fsklfjdkdjskjkaeaw"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Hình thức thanh toán</th>
                            <th className={"djdsjkkjfkjaskasjsa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Tổng tiền</th>
                            <th className={"fjkdjksdjskdsjkasjsa"} style={{fontWeight: 600, textAlign: "center", paddingBottom: 10}}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody className={"fkdjsdjkshfjdhajlsas"} style={{width: "100%"}}>
                        <ItemListBill x1={"819237"} x2={"Đã thanh toán"} x3={"VN Pay"} x4={"1.500.000"} x5={"Xem hóa đơn"} />
                        <ItemListBill x1={"819237"} x2={"Đã thanh toán"} x3={"VN Pay"} x4={"1.500.000"} x5={"Xem hóa đơn"} />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ListBill

const ItemListBill= (props)=> {
    const navigate= useNavigate()

    return (
        <tr className={"fdjsdjkskjsdkdgjsdas"}>
            <td className={"fjsklgjkfjkjakasjaks"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x1}</td>
            <td className={"fnjdhjkhajsdhjashjas"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x2}</td>
            <td className={"fileuyehskjskhajkssa"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x3}</td>
            <td className={"bvncjknbjaksbagawawa"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>{props.x4}</td>
            <td className={"tjioeuyuhrsjksahdjka"} style={{textAlign: "center", fontWeight: 600, paddingBottom: 10}}>
                <Button onClick={()=> navigate("/booking/payment?id_payment=1")} variant={"primary"}>{props.x5}</Button>
            </td>
        </tr>
    )
}