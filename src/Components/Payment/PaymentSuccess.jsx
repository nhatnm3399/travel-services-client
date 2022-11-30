import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const PaymentSuccess = () => {
  const navigate= useNavigate()

  return (
    <div className={"dfjsKdjkdjksdas"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>

      <div className="wrapperAlert" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>

    <div className="contentAlert" style={{}}>

      <div className="topHalf">

        <p style={{textAlign: "center"}}><svg viewBox="0 0 512 512" width="100" title="check-circle">
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
          </svg></p>
        <h1 style={{textAlign: "center"}}>Chúc mừng</h1>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>

      <div className="bottomHalf">

        <p style={{textAlign :"center", fontSize: 20, fontWeight: 600}}>Bạn đã thanh toán thành công</p>

        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 30}}> 
          <button style={{borderRadius: 10, color: "#fff", fontWeight: 600, marginBottom: 16}} onClick={()=> navigate("/")} id="alertMO">Trở về trang chủ</button>
          <button onClick={()=> navigate("/bill/payment/booking")} id="alertMO" style={{orderRadius: 10, color: "#fff", fontWeight: 600,marginBottom: 16}}>Đi tới lịch sử giao dịch</button>
        </div>

    <br />
      </div>

      </div>        

    </div>
      </div>
  )
}

export default PaymentSuccess
