import * as React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { removeCookieToken } from "../../function/handleCookie";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN } from "../../redux/Auth/tokenSlice";
import axios from "axios";
import { USER_LOGOUT } from "../../redux/Login/loginSlice";

const Navibar = () => {
    const dispatch = useDispatch();
    const email = useSelector((state: any) => state.persistedReducer.loginSlice.email);

    const onLogout = () => {
        dispatch(DELETE_TOKEN());
        dispatch(USER_LOGOUT());
        removeCookieToken();
        axios.post("http://localhost:8000/api/v1/logout/" , {email: email}).then(res => console.log(res)).catch(err => console.log(err));
        window.location.href = "/";
    };

    return (
            <div className="header">
                <img className="logo" src="img/Logo.png" alt="이미지오류"></img>
                <div className="header_nav">
                    <div className="fishlist">{<Link to="/fishlist">fishlist</Link>}</div>
                    <div className="profile" onClick={onLogout}>{<Link to="/">logout</Link>}</div>
                </div>
            </div>
    );
  };
  
  export default Navibar;