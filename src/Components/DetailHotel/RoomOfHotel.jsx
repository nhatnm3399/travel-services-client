import React from 'react'

const RoomOfHotel = (props) => {
  return (
    <div className={"dkslklsaklasa"} style={{width: "100%", marginBottom: 20, display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 20}}>
        <Image />
        <ParametersRoom />
    </div>
  )
}

const Image= (props)=> {
    return (
        <div className={"sjjaksjiwjewawa"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <div role={"img"} className={"fkdkjdfkaskaawaw"} style={{width: 250, height: 250, background: "#d9d9d9"}}></div>
        </div>
    )
}

const ParametersRoom= (props)=> {
    return (
        <div className={"fkslkalkrkoawlaw"} style={{flex: 1, padding: 10, backgroundColor: "#d9d9d9", minHeight: 250}}>
            <div className={"ksdaskalsklasasa"} style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>
                Phòng cao cấp
            </div>
            <div className={"dksalsklsjfjassa"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <div className={"djsakdkasjksaksa"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 40}}>
                    <div className={"skafaksdskkasa"}>2 Giường</div>
                    <div className={"fksjkdjskdjskew"}>2 Khách</div>
                </div>
                <div className={"dksakjsaksjkeawwaw"}>3 Phòng trống</div>
            </div>
            <div className={"djksjkjdkasjieawwaw"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <div className={"sdksaskasklasas"}>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Miễn phí bữa sáng</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Wifi miễn phí</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không hút thuốc</div>
                </div>
                {/*  */}
                <div className={"sdksaskasklasas"}>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không hoàn tiền</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không áp dụng đổi lịch</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Xem chính sách hủy phòng</div>
                </div>
                {/*  */}
                <div className={"sdksaskasklasas"}>
                    <div className={"jrjawjalwlkeawa"} style={{direction: "rtl",height: 30, margin: "8px 0"}}>968.946 VND</div>
                    <div className={"jrjawjalwlkeawa"} style={{direction: "rtl", height: 30, margin: "8px 0"}}>1 / phòng 1 / đêm</div>
                    <div className={"jrjawjalwlkeawa"} style={{direction: "rtl", height: 30, margin: "8px 0"}}>
                        <button className={"cksdsjkasjakeaw"} style={{padding:  10, background: "#fff", color: "#000", fontWeight: 600, fontSize: 20}}>
                            Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomOfHotel