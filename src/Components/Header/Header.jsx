import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.sass"

const Header = (prosp) => {
  const [loggedIn, setLoggedIn]= useState(()=> false)
  return (
    <>
        <div className={"fixed-header-main"}>
            <LeftHeader />
            {
                loggedIn=== true && <RightHeaderLoggedIn />
            }
            {
                loggedIn=== false && <RightHeaderNotLoggedIn />
            }
        </div>
        <div className={"header-main"}>
            
        </div>
    </>
  )
}

export default Header

const LeftHeader= (props)=> {
    return (
        <div className={"left-header-fixed"}>
            <NavLink className={({isActive})=> isActive ? "active-link-header link-left-header-fixed" : "link-left-header-fixed"} to={"/"}>Trang chủ</NavLink>
        </div>
    )
}

const RightHeaderLoggedIn= (props)=> {
    return (
        <div className={"right-header-fixed-logged"}>

        </div>
    )
}

const RightHeaderNotLoggedIn= (props)=> {
    return (
        <div className={"right-header-fixed-not-logged"}>
            <div className={"wrap-link-to-auth-user"}>
                <NavLink to={"/signup"} className={({isActive})=> isActive ? "active-link-header to-signup-auth-user navigate-to-auth-user" : "to-signup-auth-user navigate-to-auth-user"}>Đăng ký</NavLink>
            </div>
            <div className={"wrap-link-to-auth-user"}>
                <NavLink to={"/login"} className={({isActive})=> isActive ? "active-link-header to-login-auth-user navigate-to-auth-user" : "to-login-auth-user navigate-to-auth-user"}>Đăng nhập</NavLink>
            </div>
        </div>
    )
}