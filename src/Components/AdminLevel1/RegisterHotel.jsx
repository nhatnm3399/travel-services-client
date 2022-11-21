import React, { useState } from "react";
import InputTemplate from "../Common/InputTemplate";
import GoogleMapPlugin from "../Plugin/GoogleMap";
import { Title } from "./ListHotel";
import TimePicker from "react-time-picker";
import { GrAdd } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";
import { uploadImageClient } from "../../firebase/config";
import { Button } from "react-bootstrap";

const RegisterHotel = (props) => {
  return (
    <div
      className={"jsjakljsakjsakeawa"}
      style={{ width: "100%"}}
    >
      <Title is_edit={props?.is_edit} title={props?.is_edit===true ? "Sửa khách sạn" : "Đăng ký khách sạn"} title1={props?.is_edit=== true ? "Sửa phòng" : "Đăng ký phòng"} />
      <MainRegister />
    </div>
  );
};

const MainRegister = (props) => {
  const [payload, setPayload]= useState()
  // 
  const [hotelName, setHotelName]= useState()
  const [phoneNumber, setPhoneNumber]= useState()
  const [address, setAddress]= useState()
  const [description, setDescription]= useState()
  const [convenient, setConvenient]= useState()
  const [checkIn, setCheckIn]= useState()
  const [checkOut, setCheckOut]= useState()
  const [isPaymentCard, setIsPaymentCard]= useState()
  const [image, setImage]= useState()
  return (
    <div
      className={"djksjajerkjawwawa"}
      style={{ width: "100%", padding: 10, background: "#d9d9d9" }}
    >
      <div
        className={"fjskdljskdfjeaaawa"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          marginBottom: 30,
        }}
      >
        {/*  */}
        <div
          className={"fjkjaklwjkrlawawaw"}
          style={{
            flex: "1 1 0",
            minHeight: 250,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            className={"fjejksljaklea"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              gap: 30,
            }}
          >
            <div className={"dsjaajwjalkwawwa"} style={{ flex: "1 1 0" }}>
              <TitleItem title={"Tên khách sạn *"} />
              <InputTemplate
                onChange={() => {}}
                style={{
                  width: "100%",
                  height: 40,
                  padding: 10,
                  outlineColor: "#2e89ff",
                  background: "#fff",
                  border: "none",
                }}
              />
            </div>
            <div className={"dsjaajwjalkwawwa"} style={{ flex: "1 1 0" }}>
              <TitleItem title={"Số điện thoại *"} />
              <InputTemplate
                onChange={() => {}}
                style={{
                  width: "100%",
                  height: 40,
                  padding: 10,
                  outlineColor: "#2e89ff",
                  background: "#fff",
                  border: "none",
                }}
              />
            </div>
          </div>
          <div className={"dsjaajwjalkwawwa"} style={{ width: "100%" }}>
            <TitleItem title={"Địa chỉ *"} />
            <InputTemplate
              onChange={() => {}}
              style={{
                width: "100%",
                height: 40,
                padding: 10,
                outlineColor: "#2e89ff",
                background: "#fff",
                border: "none",
              }}
            />
          </div>
        </div>
        {/* intergrate map */}
        <div
          className={"fksedkawjrkjakwawwaw"}
          style={{ width: 250, height: 250 }}
        >
          <div
            className={"fjklejkjkeawawae"}
            style={{ width: "100%", height: "100%" }}
          >
            <GoogleMapPlugin />
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className={"dsjaajwjalkwawwa"}
        style={{ width: "100%", marginBottom: 30 }}
      >
        <TitleItem title={"Mô tả *"} />
        <textarea
          onChange={() => {}}
          style={{
            width: "100%",
            height: 200,
            padding: 10,
            outlineColor: "#2e89ff",
            background: "#fff",
            fontSize: 16,
            resize: "none",
            border: "none",
          }}
        />
      </div>
      <Convenient />
      <br />
      <SetRule />
      <br />
      <ImageIllustation />
    </div>
  );
};

const TitleItem = (props) => {
  return (
    <div
      className={"fgdjskljeklajkwawaw"}
      style={{ fontWeight: 600, marginBottom: 12 }}
    >
      {props.title}
    </div>
  );
};

const SetRule = (props) => {
  return (
    <div className={"fjkejklajkwljaklwwajaw"} style={{ width: "100%" }}>
      <TitleItem title={"Quy tắc chung"} />
      <div
        className={"fkajkawakwawaew"}
        style={{ width: "100%", padding: 20, background: "#fff" }}
      >
        <Label label={"Thời gian nhận phòng: "} component={<TimePicker />} />
        <Label label={"Thời gian trả phòng: "} component={<TimePicker />} />
        <Label
          label={"Hủy đặt phòng / Trả trước"}
          component={<YesNoOptions />}
        />
        {/* <Label label={"Trẻ em và giường"} />
        <Label label={"Độ tuổi đặt phòng"} />
        <Label label={"Vật nuôi"} />
        <Label label={"Hình thức thanh toán"} /> */}
      </div>
    </div>
  );
};

const Convenient= (props)=> {
  return (
    <div className={"fdjklfjkdgjhklsdas"} style={{width: '100%'}}>
      <div className={"fkljdfdklsjdkfsdsas"} style={{width: "100%", padding: 10, background: "#fff"}}>
        <div className={"dskdjskfjkdjsaksas"} style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>
          Tiện nghi và nội quy
        </div>
        <div className={"fsjdjhkldjdsfdadas"} style={{display: "flex", alignItems: "center", gap: 30, }}>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Wifi</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Máy lạnh</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Wc</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Chỗ để xe</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
        </div>
        <br />
        <br />
        {/*  */}
        <div className={"dskdjskfjkdjsaksas"} style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>
          Hướng nhìn
        </div>
        <div className={"fsjdjhkldjdsfdadas"} style={{display: "flex", alignItems: "center", gap: 30, }}>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Núi</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Biển</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Sông</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
        </div>
        <br />
        <br />
        {/*  */}
        <div className={"dskdjskfjkdjsaksas"} style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>
          Phòng tắm
        </div>
        <div className={"fsjdjhkldjdsfdadas"} style={{display: "flex", alignItems: "center", gap: 30, }}>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Đồ vệ sinh cá nhân</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
          <div className={"fjkslajdfkldsjdafasd"} style={{display: "flex", alignItems: "center", gap: 10}}>
            <span className={"fdjslkadjfksdsjfkdsa"}>Dép</span>
            <input type="checkbox" style={{width: 18, height: 18}} />
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

const Label = (props) => {
  return (
    <div
      className={"skdkeljakwjkawawa"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        marginBottom: 32,
      }}
    >
      <div className={"kldkalkaelkeawaa"} style={{ maxWidth: 200, width: 200 }}>
        {props.label}
      </div>
      <div
        className={"fjsekjakajwkawjwaeaaw"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.component}
      </div>
    </div>
  );
};

const YesNoOptions = (props) => {
  return (
    <div
      className={"fkakwklfaseaa"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <ComponentYesNo text={"Có"} name={"deposit"} />
      <ComponentYesNo text={"Không"} name={"deposit"} />
    </div>
  );
};

const ComponentYesNo = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: 24,
      }}
    >
      <span style={{}}>{props.text}</span>
      <div
        className={"fjiidjdjksteawsa"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "inherit",
        }}
      >
        <InputTemplate
          type={"radio"}
          name={props.name}
          value={props.value}
          style={{ width: 16, height: 16 }}
        />
      </div>
    </div>
  );
};

const ImageIllustation = (props) => {
  const [listImage, setListImage] = useState([]);
  const [result, setResult] = useState([]);
  const isChooseImage = listImage.length > 0 ? true : false;
  const f = (e) => {
    Object.values(e.target.files).map((item) =>
      setListImage((prev) => [
        ...prev,
        {
          img: item,
          imgPreview: URL.createObjectURL(item),
          key: item.lastModified,
        },
      ])
    );
  };

  const a= (e)=> {
    setListImage(prev=> ([...prev, {img: e.target.files[0], imgPreview: URL.createObjectURL(e.target.files[0]), key: e.target.files[0].lastModified}]))
  }
  const testUpload = async () => {
    // listImage.map(item=> )
    const a = await uploadImageClient(listImage[0].img, setResult);
    console.log(a);
  };

  return (
    <div className={"fskjakejakwjaklawwa"} style={{ width: "100%" }}>
      <TitleItem title={"Hình ảnh *"} />
      <div
        className={"fjajkjsklajraeweaa"}
        style={{
          width: "100%",
          padding: 20,
          display: "flex",
          position: "relative",
          background: "#fff",
          height: 400,
          flexWrap: "wrap",
        }}
      >
        {isChooseImage === true &&
          
          <>
            <>
              {listImage.map((item, key) => (
              <div
                key={key}
                className={"dlakjklajwaasas"}
                style={{
                  width: 150,
                  height: 150,
                  padding: 10,
                  position: "relative",
                }}
              >
                <img
                  src={item.imgPreview}
                  alt="open"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "1px solid #e7e7e7",
                  }}
                />
                <div
                  title={"Xóa"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                  onClick={() =>
                    setListImage(
                      listImage.filter(
                        (img) => parseInt(img.key) !== parseInt(item.key)
                      )
                    )
                  }
                >
                  <AiFillCloseCircle style={{ color: "#3a3b3c" }} />
                </div>
              </div>
              ))}
              </>
              <>
              {
                listImage?.length < 5 && <div style={{padding: 10}}><Button color={"primary"} style={{height: 130, width: 130, position: "relative"}}>Thêm
                  <input
                    onChange={a}
                    type="file"
                    multiple
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 9,
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                    }}
                  />
                </Button></div>
              }
              </>
          </>
          }

        {isChooseImage === false && (
          <div
            className={"fkdjksjakwjawawas"}
            style={{
              width: 80,
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "absolute",
              background: "#d9d9d9",
              cursor: "pointer",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)    ",
            }}
          >
            <div
              className={"fjdadjkwljeakwawa"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <GrAdd style={{ width: 24, height: 24 }} />
            </div>
            <div style={{ textAlign: "center", fontWeight: 600, fontSize: 14 }}>
              Upload
            </div>
            <input
              onChange={f}
              type="file"
              multiple
              style={{
                position: "absolute",
                opacity: 0,
                width: "100%",
                height: "100%",
                zIndex: 9,
                cursor: "pointer",
                top: 0,
                left: 0,
              }}
            />
          </div>
        )}
        {/* rule */}
        <div
          className={"djkjaksjkajraeaw"}
          style={{
            position: "absolute",
            bottom: 0,
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            width: "100%",
          }}
        >
          Vui lòng đăng tải 5 hình ảnh
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <button
          onClick={testUpload}
          style={{
            padding: "10px 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "#2e89ff",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Đăng tải
        </button>
      </div>
    </div>
  );
};
export default RegisterHotel;
