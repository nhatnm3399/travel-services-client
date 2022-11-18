import Cookies from 'js-cookie';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import get_info_user from './api/auth/user/get_info_user';
import AdminLevel1 from './Components/AdminLevel1/AdminLevel1';
import AdminLevel2 from './Components/AdminLevel2/AdminLevel2';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import DetailHotel from './Components/DetailHotel/DetailHotel';
import DetailRoom from './Components/DetailRoom/DetailRoom';
import DetailSubRoom from './Components/DetailSubRoom/DetailSubRoom';
import Footer from './Components/Footer/Footer';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ListBooking from './Components/ListBooking/ListBooking';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Signup from './Components/Signup/Signup';
import LoadingSpinner from './Loading/LoadingSpinner';

export const AppContext= createContext()
function App() {
  const [user, setUser]= useState()
  const [auth, setAuth]= useState(undefined)
  useEffect(()=> {
    if(Cookies.get("uid")) {
      get_info_user(setUser, setAuth)
    }
    else {
      setUser(undefined)
      setAuth(false)
    }
  }, [])
  return (
    <AppContext.Provider value={{user, auth}}>
      <Router>
        <Header />
          {
            auth=== undefined && <LoadingSpinner style={{width: "100%", height: 500, display: "flex", justifyContent: "center", alignItems: "center", background: "#1b1b1b"}} />
          }
        <Routes>
          <Route path={"/"} element={<Home />} />
          {
            auth=== true && <>
              <Route path={"/login"} element={<Navigate to={"/"} />} />
              <Route path={"/signup"} element={<Navigate to={"/"} />} />
              <Route path={"/forgot/password"} element={<Navigate to={"/"} />} />
              <Route path={"/"} element={<Home />} />
              <Route path={"/user/profile"} element={<Profile />} />
              <Route path={"/change/password"} element={<ChangePassword />} />
              <Route path={"/booking/search"} element={<Search />} />
              <Route path={"/hotel/detail/:idHotel"} element={<DetailHotel />} />
              <Route path={"/booking/payment"} element={<Payment />} />
              <Route path={"/room/detail"} element={<DetailRoom />} />
              <Route path={"/sub/room/detail"} element={<DetailSubRoom />} />
              <Route path={"/booking/order/*"} element={<ListBooking />} />
              <Route path={"/manager/*"} element={<AdminLevel1 />} />
              <Route path={"/admin/*"} element={<AdminLevel2 />} />
            </>
          }
          {
            auth=== false && <>
            <Route path={"/login"} element={<Login />} />
              <Route path={"/signup"} element={<Signup />} />
              <Route path={"/forgot/password"} element={<ForgotPassword />} />
              <Route path={"/"} element={<Home />} />
              <Route path={"/user/profile"} element={<Navigate to={"/login"} />} />
              <Route path={"/change/password"} element={<Navigate to={"/login"} />} />
              <Route path={"/booking/search"} element={<Navigate to={"/login"}  />} />
              <Route path={"/hotel/detail"} element={<DetailHotel />} />
              <Route path={"/booking/payment"} element={<Navigate to={"/login"}  />} />
              <Route path={"/room/detail"} element={<DetailRoom />} />
              <Route path={"/sub/room/detail"} element={<DetailSubRoom />} />
              <Route path={"/booking/order/*"} element={<Navigate to={"/login"}  />} />
              <Route path={"/manager/*"} element={<AdminLevel1 />} />
              <Route path={"/admin/*"} element={<AdminLevel2 />} />
            </>
          }
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
