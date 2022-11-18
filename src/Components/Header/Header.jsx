import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsPower}from "react-icons/bs"
import "./Header.sass"
import { useContext } from 'react'
import { AppContext } from '../../App'
import logout from '../../api/auth/user/logout'

const Header = (prosp) => {
  const {auth}= useContext(AppContext)
  return (
    <>
        <div className={"fixed-header-main"}>
            <LeftHeader />
            {
                auth=== true && <RightHeaderLoggedIn />
            }
            {
                auth=== false && <RightHeaderNotLoggedIn />
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
            <NavLink className={({isActive})=> isActive ? "active-link-header link-left-header-fixed" : "link-left-header-fixed"} to={"/"}>F Travel</NavLink>
        </div>
    )
}

const RightHeaderLoggedIn= (props)=> {
    const {user }= useContext(AppContext)

    return (
        <div className={"right-header-fixed-logged"}>
            <div className={"dljsjaklsjkldfasa"} style={{display :"flex", justifyContent: 'center', alignItems: 'center', gap: 20}}>
                {   
                    <Link to={"/user/profile"} className={"jklasjkalsjadas"} style={{textDecoration: "none", color: "#000", fontSize: 16}}>
                        <div className={"shdkhajksdhjasassa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
                            <div className={"jklsdjaklsjkalsasf"} style={{display: "flex", justifyContent: 'center', alignItems: "center", width :40, height: 40, borderRadius: "50%", overflow: "hidden"}}>
                                {
                                    user?.avatar?.length > 0 &&<img src={user?.avatar} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                }
                                {
                                    user?.avatar=== null && <img src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png" alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                }
                            </div>
                            <div className={"njkshajksjlkasasas"} style={{fontWeight: 600}}>
                                {user?.full_name ? user?.full_name : "Unset"}
                            </div>
                        </div>
                    </Link>
                } 
                {
                    // Logout
                    <div className={"dljksjakjskladjassasas"} style={{display: "flex", justifyContent: 'center',alignItems: "center", gap: 5, cursor: "pointer"}}>
                        <div className={"sjdklasjksjadfsas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center',}}>
                            <BsPower style={{width: 16,height: 16,color :"#333"}} />
                        </div>
                        <div onClick={logout} className={"djksdjalksdjkfsads"} style={{fontSize: 14, fontWeight: 600}}>
                            Logout
                        </div>
                    </div>
                }
            </div>
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