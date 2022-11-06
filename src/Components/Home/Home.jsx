import React, { useEffect, useRef, useState } from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import InputTemplate from '../Common/InputTemplate'
import "./Home.sass"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Home = (props) => {
  useEffect(()=> {
  }, [])
  return (
    <div className={"home-page-site"}>
      <BannerHome />
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
  const [destination, setDestination]= useState(()=> "")
  const [timeRange, setTimeRange]= useState(()=> "")
  const [guest, setGuest]= useState(()=> "")
  
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
          <div className={"choose-option-to-booking-home-destination"} style={{width: "25%"}}>
            <Label title={"Điểm đến"} />
            <div className={"wrap-inp-choose-booking-op"}>
              <InputTemplate className={"inp-choose-booking-op-ii"} />
            </div>
          </div>
          <div className={"choose-option-to-booking-home-time-range"} style={{width: "30%"}}>
            <Label title={"Ngày nhận - Ngày trả"} />
            <div className={"wrap-inp-choose-booking-op"}>
              <InputTemplate className={"inp-choose-booking-op-ii"} />
            </div>
          </div>
          <div className={"choose-option-to-booking-home-guest"} style={{width: "30%"}}>
            <Label title={"Khách"} />
            <div className={"wrap-inp-choose-booking-op"}>
              <InputTemplate className={"inp-choose-booking-op-ii"} />  
            </div>
          </div>
          <div className={"choose-option-to-booking-home-search"} style={{width: "15%", height: 40}}>
            <ButtonTemplate className={"btn-choose-option-to-booking-home-search"}><span style={{color: "#fff"}}>Tìm</span><AiOutlineArrowRight /></ButtonTemplate>
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
      <p className={"title-place-booking-home-p"} style={{fontWeight: 700, fontSize: 36}}>
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
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
        </div>
        {/*  */}
        <div className={"element-suggest-outstanding"} style={{height: 450, width: "30%", background: "#D9D9D9"}}>
          Đà Nẵng
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

  const navigationPrevRef= useRef(null)
  const navigationNextRef= useRef(null)

  return (
    <div className={"suggest-hotel-booking-home"} style={{marginTop: 100}}>
      <Title title={"Khách sạn gần đây"} />
      <div className={"container-suggest-outstanding"} style={{width: "100%", display:" flex", justifyContent: 'center', marginTop: 30}}>
        <div className={"wrap-1-container-suggest-outstanding"} style={{width: "100%", maxWidth: "100%", height: 530, padding: "50px 20px", background: "#fff"}}>
          <Swiper
            modules={[Navigation]}
            className="list-nearly-place-suggest"
            style={{width: "100%", height: "100%"}}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current
            }}
            onBeforeInit={(swiper)=> {
              swiper.params.navigation.prevEl= navigationPrevRef.current
              swiper.params.navigation.nextEl= navigationNextRef.current
            }}
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
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 1</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 2</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 3</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 4</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 5</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 6</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 7</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 8</SwiperSlide>
            <SwiperSlide style={{background: "#d9d9d9"}}>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={"navigation-s-nearly-hotel"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", gap: 30, marginBottom: 30}}>
        <div ref={navigationPrevRef} className={"prev-navigation-s-nearly-hotel"} style={{width: 32, height: 32, borderRadius: "50%", background: "#d9d9d9", cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: "center"}}>
          <AiOutlineArrowLeft color={"#fff"} />
        </div>
        <div ref={navigationNextRef} className={"next-navigation-s-nearly-hotel"} style={{width: 32, height: 32, borderRadius: "50%", background: "#d9d9d9", cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: "center"}}>
          <AiOutlineArrowRight color={"#fff"} />
        </div>
      </div>
    </div>
  )
}


export default Home