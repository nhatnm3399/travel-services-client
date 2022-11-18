import React, { useCallback, useEffect, useRef, useState } from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import InputTemplate from '../Common/InputTemplate'
import "./Home.sass"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import OutsideClickHandler from 'react-outside-click-handler';
// import DatePickerPlugin from '../Plugin/DatePicker'
// import {BsCalendar3 } from "react-icons/bs"
// import {FaUserAlt } from "react-icons/fa"
// import moment from "moment"
// import ChooseGuest from '../Plugin/ChooseGuest'
import {BiBed} from "react-icons/bi"
// import {GoLocation }from "react-icons/go"
import SuggestSearch from '../SuggestSearch/SuggestSearch'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  useEffect(()=> {
    
  }, [])
  return (
    <div className={"home-page-site"}>
      {/* <BannerHome /> */}
      <FeaturePhoto />
      <BookingHome />
      <OutstandingDestination />
      <NearlyPlace />
      <SuggestHotel />
    </div>
  )
}

export const BannerHome = () => {
  return (
    <div className={"banner-site-home"} style={{width: "100%", height :100, display: "flex", alignItems: 'center', padding: "0 40px"}}>
      <div className={"wrap-banner-component-items-home"} style={{fontSize: 40, fontWeight: 700}}>
        F-Travel
      </div>
    </div>
  )
}

const FeaturePhoto= ()=> {
  return (
    <div className={"feature-photo-site-home"} style={{width: "100%", height: 628, background: "#D9D9D9", backgroundImage: "url(https://globalgrasshopper.com/wp-content/uploads/2011/11/Top-10-of-the-most-beautiful-places-to-visit-in-Vietnam.jpg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div style={{position: "relative", top: 100, left: 45, width: 580, fontSize: 64, color: "#fff", fontWeight: 700, textShadow: "1px 1px 1px #000  "}}>Du lịch Việt Nam hơn bao giờ hết</div>
    </div>
  )
}

const BookingHome= (props)=> {
  const [destination, setDestination]= useState(()=> undefined)
  const [openDestination, setOpenDestination]= useState(()=> false)
  // const [openTime, setOpenTime]= useState(()=> false)
  // const [openGuest, setOpenGuest]= useState(()=> false)
  // const [startDate, setStartDate]= useState(new Date())
  // const [endDate, setEndDate]= useState(null)
  
  // const [adult, setAdult]= useState(()=> 1)
  // const [children,setChildren]= useState(()=> 0)
  // const [room, setRoom]= useState(()=> 1)
  const navigate= useNavigate()
  const execSearch= ()=> {
    navigate(`/booking/search?spec=${destination}`)
  }
  
  return (
    <div className={"booking-home"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", position: "relative"}}>
      <div className={"c-booking-home"} style={{width: "100%", maxWidth: 1200, position: "absolute", height: 250, borderRadius: 10, background: "#fff", display: "flex", flexDirection: "column", justifyContent: 'space-between', padding: "10px 20px", zIndex: 100, boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        {/* S1 */}
        <div className={"title-c-booking-home"}>
          <div className={"title-c-booking-home-c-1"} style={{fontSize: 32, fontWeight: 700}}>
            Đặt chỗ của bạn 
          </div>
          <div className={"title-c-booking-home-c-2"} style={{fontSize: 32, fontWeight: 700}}>
            Điểm đến du lịch tiếp tục
          </div>
        </div>
        {/* S2 */}
        <div className={"choose-option-to-booking-home"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
          <div className={"choose-option-to-booking-home-destination"} style={{width: "85%"}}>
            <Label title={"Điểm đến"} />
            <OutsideClickHandler onOutsideClick={()=> setOpenDestination(()=> false)}>
              <div className={"wrap-inp-choose-booking-op"} style={{position: "relative"}}>
                <InputTemplate value={destination && destination} placeholder={"Bạn muốn đặt phòng ?"} onChange={e=> setDestination(e.target.value)} style={{padding: "0 32px", fontSize: 18}} className={"inp-choose-booking-op-ii"} onClick={()=> setOpenDestination(prev=> !prev)} />
                <div className={"dkskalkasass"} style={{position: "absolute", top: 0, left: 0}}>
                  <BiBed style={{width: 22, height: 22, color: "#333"}} />
                </div>
                <div className={"dsklasklasksasa"} style={{position: "absolute", top: "100%", left: 0, width: "100%", display: openDestination=== true ? "block" : "none"}}>
                  {
                    <SuggestSearch setOpen={setOpenDestination} setValue={setDestination} />
                  }
                </div>
              </div>
            </OutsideClickHandler>
          </div>
          
          {/* <div className={"choose-option-to-booking-home-guest"} style={{width: "40%"}}>
            <Label title={"Khách"} />
            <OutsideClickHandler onOutsideClick={()=> setOpenGuest(()=> false)}>
              <div className={"wrap-inp-choose-booking-op"} style={{position: "relative"}}>
                <InputTemplate value={`${adult} người lớn - ${children} trẻ em - ${room} phòng`} className={"inp-choose-booking-op-ii"} readOnly={true} style={{padding: "0 32px", fontSize: 18}} onClick={()=> setOpenGuest((prev)=> !prev)} /> 
                <div className={"dkskalkasass"} style={{position: "absolute", top: 0, left: 0}}>
                  <FaUserAlt style={{width: 22, height: 22, color: "#333  "}} />
                </div> 
                <div className={"dsklasklasksasa"} style={{position: "absolute", top: "100%", left: 0, width: "100%", display: openGuest=== true ? "block" : "none"}}>
                  {
                    <div className={"dsjkdjkajskasasad"} style={{width: "100%", background: "#fff", borderRadius: 5}}>
                      <ChooseGuest title={"Người lớn"} amount={adult} setAmount={setAdult} />
                      <ChooseGuest title={"Trẻ em"} amount={children} setAmount={setChildren} />
                      <ChooseGuest title={"Phòng"} amount={room} setAmount={setRoom} />
                      <div className={"ksajksjdkasasasa"} style={{width: "100%", marginTop: 16, flexDirection: "row", justifyContent: "space-between", padding: 20, display: "flex"}}>
                        <div></div>
                        <button onClick={()=> setOpenGuest(()=> false)} className={"djkasajkkjssdaas"} style={{display: "flex", justifyContent: 'center', alignItems: "center", color: "#fff", background: "#2e89ff", border: "none", outline: "none", padding: "10px 30px", cursor: 'pointer'}}>
                          Xong
                        </button>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </OutsideClickHandler>
          </div> */}
          <div className={"choose-option-to-booking-home-search"} style={{width: "15%", height: 40}}>
            <ButtonTemplate onClick={execSearch} className={"btn-choose-option-to-booking-home-search"}><span style={{color: "#fff"}}>Tìm</span><AiOutlineArrowRight /></ButtonTemplate>
          </div>
        </div>
      </div>
    </div>
  )
}

const Label= (props)=> {
  return (
    <div className={"label-booking-home"} style={{color: "#6B6B6B", textTransform: "uppercase", marginBottom: 8}}>
      {props.title}
    </div>
  )
}

const OutstandingDestination= ()=> {
  return (
    <div className={"outstanding-destination-v"} style={{width: "100%", marginTop: 200}}>
      <Title title={"Các địa điểm nổi bật Việt Nam"} />
      <ContainerSuggestOutstanding />
    </div>
  )
}

const Title= (props)=> {
  return (
    <div className={"title-place-booking-home"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", marginBottom: 10}}>
      <p className={"title-place-booking-home-p"} style={{fontWeight: 700, fontSize: 36, padding: 20}}>
        {props.title}
      </p>
    </div>
  )
}

const ContainerSuggestOutstanding= (props)=> {
  return (
    <div className={"container-suggest-outstanding"} style={{width: "100%", display:" flex", justifyContent: 'center'}}>
      <div className={"wrap-1-container-suggest-outstanding"} style={{width: "100%", maxWidth: 1200, display: "flex", justifyContent: 'center', alignItems: 'center', flexWrap: "wrap", gap: 30, marginTop: 30}}>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Đà Nẵng</div>
          <img src="https://i.pinimg.com/736x/8d/4b/8e/8d4b8e64ad231b3904fd232a18fbc4ab.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Thành phố Hồ Chí Minh</div>
          <img src="https://i.pinimg.com/564x/9f/a2/9d/9fa29d971d0e2d59e9f4b61e7281e98e.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Hà Nội</div>
          <img src="https://i.pinimg.com/564x/31/cd/20/31cd208a13e78d68d8835e8435f0b005.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Đà Lạt</div>
          <img src="https://i.pinimg.com/564x/49/61/c4/4961c45f5411a2dc19a9e57918742e48.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Cần Thơ</div>
          <img src="https://i.pinimg.com/564x/b0/b3/c6/b0b3c6f97c80edc863b64ca57b3c9475.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Quảng Ninh</div>
          <img src="https://i.pinimg.com/736x/e5/c8/53/e5c853b71f925d20a2b15525d98ceaff.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Bangkok - Thailand</div>
          <img src="https://i.pinimg.com/564x/a8/a5/61/a8a5619a67d3502ff7eb1057137a784f.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Nha Trang</div>
          <img src="https://i.pinimg.com/564x/0f/94/20/0f9420e868c7fdd8eb920a94305d7e8b.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#fff", padding: 20, borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", color: "#fff", position: "relative", overflow: "hidden", cursor: "pointer"}}>
          <div style={{position: "relative", zIndex: 2, color: "#fff", fontWeight: 600, fontSize: 24}}>Phú Quốc</div>
          <img src="https://i.pinimg.com/564x/8d/50/58/8d5058f5c26275ffb27308417abc3b7c.jpg" alt="Can't open" style={{width: '100%', height: "100%", objectFit: 'cover', position: "absolute", top: 0, left: 0}} />
        </div>
      </div>
    </div>
  )
}

const NearlyPlace= (props)=> {
  return (
    <div className={"nearly-place-booking-home"} style={{marginTop: 100}}>
      <Title title={"Gợi ý những sự kiện quanh đây"} />
      <div className={"container-suggest-outstanding"} style={{width: "100%", display:" flex", justifyContent: 'center', marginTop: 30}}>
        <div className={"wrap-1-container-suggest-outstanding"} style={{width: "100%", maxWidth: "100%", height: 530, padding: "50px 20px", background: "#D9D9D9"}}>
        <Swiper
            modules={[Navigation]}
            className="list-nearly-place-suggest"
            navigation={true}
            style={{width: "100%", height: "100%"}}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 0
              }
            }}
          >
            <SwiperSlide style={{background: "#fff"}}>Slide 1</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 2</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 3</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 4</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 5</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 6</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 7</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 8</SwiperSlide>
            <SwiperSlide style={{background: "#fff"}}>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

const SuggestHotel= (props)=> {

  
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={"suggest-hotel-booking-home"} style={{marginTop: 100}}>
      <Title title={"Khách sạn gần đây"} />
      <div className={"container-suggest-outstanding"} style={{width: "100%", display:" flex", justifyContent: 'center', marginTop: 30}}>
        <div className={"wrap-1-container-suggest-outstanding"} style={{width: "100%", maxWidth: "100%", height: 530, padding: "50px 20px", background: "#fff"}}>
          <Swiper
            ref={sliderRef}
            modules={[Navigation]}
            className="list-nearly-place-suggest"
            style={{width: "100%", height: "100%"}}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 0
              }
            }}
          >
            <SwiperSlide className={"fsjdjkslfjksjass"} style={{background: "url(https://i.pinimg.com/564x/a0/fb/38/a0fb38a030da2a14a39767bfd21d48d2.jpg)", padding: 16, fontSize: 24, fontWeight: 600, color: "#fff", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>Slide 1</SwiperSlide>
            <SwiperSlide className={"fsjdjkslfjksjass"} style={{background: "url(https://i.pinimg.com/564x/fb/a5/e4/fba5e4299475e36bd03eeefc73f980d1.jpg)", padding: 16, fontSize: 24, fontWeight: 600, color: "#fff", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>Slide 2</SwiperSlide>
            <SwiperSlide className={"fsjdjkslfjksjass"} style={{background: "url(https://i.pinimg.com/564x/18/ea/f0/18eaf0653a05e534a40243b16e38118a.jpg)", padding: 16, fontSize: 24, fontWeight: 600, color: "#fff", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>Slide 3</SwiperSlide>
            <SwiperSlide className={"fsjdjkslfjksjass"} style={{background: "url(https://i.pinimg.com/564x/d6/a3/d0/d6a3d059a0bd7b9c159609a4fb94226d.jpg)", padding: 16, fontSize: 24, fontWeight: 600, color: "#fff", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>Slide 4</SwiperSlide>
            <SwiperSlide className={"fsjdjkslfjksjass"} style={{background: "url(https://i.pinimg.com/564x/ba/f7/40/baf740ffac1f3d942f9ec51a3488c531.jpg)", padding: 16, fontSize: 24, fontWeight: 600, color: "#fff", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>Slide 5</SwiperSlide>
            <SwiperSlide className={"fsjdjkslfjksjass"} style={{background: "url(https://i.pinimg.com/736x/62/50/7d/62507ddd26f7d22c736eee0f30543fbb.jpg)", padding: 16, fontSize: 24, fontWeight: 600, color: "#fff", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>Slide 6</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={"navigation-s-nearly-hotel"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", gap: 30, marginBottom: 30}}>
        <div onClick={handlePrev} className={"prev-navigation-s-nearly-hotel"} style={{width: 32, height: 32, borderRadius: "50%", background: "#d9d9d9", cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: "center"}}>
          <AiOutlineArrowLeft color={"#fff"} />
        </div>
        <div onClick={handleNext} className={"next-navigation-s-nearly-hotel"} style={{width: 32, height: 32, borderRadius: "50%", background: "#d9d9d9", cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: "center"}}>
          <AiOutlineArrowRight color={"#fff"} />
        </div>
      </div>
    </div>
  )
}


export default Home