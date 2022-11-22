import React, { useEffect, useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import AddRoomForHotel from "../AdminLevel1/AddRoomForHotel";
import "./AdminLevel2.sass";
import DisabledHotel from "./DisabledHotel";
import ListHotel from "../AdminLevel1/ListHotel";
import ManageRoom from "./ManageRoom";
import PendingHotel from "./PendingHotel";
import RegisterHotel from "../AdminLevel1/RegisterHotel";
import RequestBookingRoom from "./RequestBookingRoom";
import VerfiedHotel from "./VerfiedHotel";
import manage_list_hotel from "../../api/admin/manage_list_hotel";
import ListCommentReport from "./ListCommentReport";
import ManageEvent from "./ManageEvent";
import AddNewEvent from "./AddNewEvent";
import { Stats } from "./Stats";

const AdminLevel2 = (props) => {
  return (
    <div className={"sjfkljdkjaskasas"} style={{ width: "100%" }}>
      <div
        className={"sdkljdakldjkas"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Navigation />
        <MainAdminLevel2 />
      </div>
    </div>
  );
};

const Navigation = (props) => {
  return (
    <div
      className={"jaksjakdslkdass"}
      style={{
        background: "#d9d9d9",
        minHeight: "100vh",
        width: 300,
        padding: 20,
      }}
    >
      <NavigationHeritage
        textLv1={"Danh sách khách sạn"}
        textLv2={"Thông tin chung"}
        array_link={[
          { link: "/admin/hotel/manage/verified", text: "Đã xác thực" },
          { link: "/admin/hotel/manage/pending", text: "Chờ xác thực" },
          { link: "/admin/hotel/manage/disabled", text: "Đã bị vô hiệu hóa" },
        ]}
        linkLv1={"/admin/hotel/manage"}
        linkLv2={"/admin/hotel/manage/general"}
      />
      <NavigationHeritage
        textLv1={"List comment bị report"}
        textLv2={"Thông tin chung"}
        linkLv1={"/admin/reported/comment/manage"}
      />
      <NavigationHeritage
        textLv1={"Quản lý sự kiện"}
        textLv2={"Thông tin chung"}
        linkLv1={"/admin/event/manage"}
        linkLv2={"/admin/event/new/manage/room"}
      />
      <NavigationHeritage
        textLv1={"Thống kê"}
        textLv2={"Thông tin chung"}
        linkLv1={"/admin/stats/manage"}
        linkLv2={"/admin/stats/manage/general"}
      />
    </div>
  );
};

const MainAdminLevel2 = (props) => {
    const [data, setData]= useState([])
    useEffect(()=> {
      manage_list_hotel(setData)
    }, [])
  return (
    <div className={"alksjklrjwkeawsa"} style={{ flex: "1 1 0" }}>
      <Routes>
        {/* <Route path={"/admin/"} /> */}
        <Route path={"  "} element={<RequestBookingRoom />} />
        <Route path={"/manage/hotel/list"} element={<ListHotel />} />
        <Route path={"/manage/hotel/register"} element={<RegisterHotel />} />
        <Route
          path={"/manage/hotel/:hotelId/new/room"}
          element={<AddRoomForHotel />}
        />
        <Route path={"/manage/room/detail"} element={<ManageRoom />} />
        <Route path={"/hotel/manage/"} element={<Navigate to={"/admin/hotel/manage/verified"} />} />
        <Route path={"/hotel/manage/verified"} element={<VerfiedHotel data={data} />} />
        <Route path={"/hotel/manage/pending"} element={<PendingHotel data={data} />} />
        <Route path={"/hotel/manage/disabled"} element={<DisabledHotel data={data} />} />
        {/*  */}
        <Route path={"/reported/comment/manage"} element={<ListCommentReport />} />
        <Route path={"/event/manage"} element={<ManageEvent />} />
        <Route path={"/event/manage/add/new"} element={<AddNewEvent />} />
        <Route path={"/stats/manage"} element={<Stats />} />
      </Routes>
    </div>
  );
};

export default AdminLevel2;

export const NavigationHeritage = (props) => {
  return (
    <div className={"dlfjskldjksdjesiwawa"} style={{ marginBottom: 8 }}>
      <div className={"dsjkjkawjsfseaw"}>
        <NavLink
          to={props.linkLv1}
          className={({ isActive }) =>
            isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"
          }
          style={{ color: "#000", textDecoration: "none", fontWeight: 600 }}
        >
          {props.textLv1}
        </NavLink>
      </div>

      {props?.array_link?.map((item, key) => (
        <div
          key={key}
          className={"dkskalkflkeseseaw"}
          style={{ marginTop: 16, marginLeft: 12 }}
        >
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"
            }
            style={{ color: "#000", textDecoration: "none", fontWeight: 600 }}
          >
            {item.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
