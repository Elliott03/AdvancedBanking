import React from "react";
import NavbarCSS from "./Navbar.module.css";
import Logo from "./img/bankimg.png";
import {Link} from "react-router-dom";

export default function Navbar(props) {


    if(props.isLoggedIn === true) {
        return (
            <div className={NavbarCSS.navbar}>
                <div className={NavbarCSS.flexbox}>
                    <div className={`${NavbarCSS.flexleft} ${NavbarCSS.subflex}`}>
                        <img className={`${NavbarCSS.logo} ${NavbarCSS.flexleftsubitem}`} src={Logo} alt="logo"/>
                        <Link className={NavbarCSS.flexleftsubitem} to="/">Advanced Banking</Link>
                    </div>
                    <div className={`${NavbarCSS.subflex} ${NavbarCSS.flexright}`}>
    
                        <Link className={NavbarCSS.subflexitem} to="/deposit">Deposit</Link>
                        <Link className={NavbarCSS.subflexitem} to="/withdrawal">Withdrawal</Link>
                        <Link className={NavbarCSS.subflexitem} to="transfer">Transfer</Link>
                        <Link className={NavbarCSS.subflexitem} to="profile">Profile</Link>
    
    
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={NavbarCSS.navbar}>
                <div className={NavbarCSS.flexbox}>
                    <div className={`${NavbarCSS.flexleft} ${NavbarCSS.subflex}`}>
                        <img className={`${NavbarCSS.logo} ${NavbarCSS.flexleftsubitem}`} src={Logo} alt="logo"/>
                        <Link className={NavbarCSS.flexleftsubitem} to="/">Advanced Banking</Link>
                    </div>

                </div>
            </div>
        );
    }

}