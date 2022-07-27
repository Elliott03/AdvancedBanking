import React from "react";
import ProfileCSS from "./Profile.module.css";
import {Link} from "react-router-dom";
import Signup from "./Signup";
export default function Profile(props) {


    function logout() {
        props.passIsLoggedIn(false);
    }

    if (props.isLoggedIn === true) {
        return (
            <div className={ProfileCSS.flex}>
                <h1 className={ProfileCSS.flexitem} >Username: {props.username}</h1>
                <h2 className={ProfileCSS.flexitem}>Current Balance: ${props.balance}</h2>
                <Link to="/" >
                    <button onClick={logout} className={`${ProfileCSS.flexitem} ${ProfileCSS.button}`}>Logout</button>
                </Link>
                
            </div>
        );
    } else {
        window.location.href="/signup"
        return <Signup />
    }

}