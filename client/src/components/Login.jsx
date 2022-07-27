import React, {useState} from "react";

import LoginCSS from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";

export default function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/profile'; 
      navigate(path);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const login = {username, password};
        fetch('/api/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(login),
        }).then(response => response.json() )
        .then( response => {
            if (response.password === "") {
                alert("Unsuccesful Login Attempt")
                return
            }
            props.passUsername(response.username);
            props.passBalance(response.balance);
            props.passIsLoggedIn(true);
            routeChange();
        } );

    }

        return (

            <form onSubmit={handleSubmit} className={LoginCSS.flex}>
                <h1 className={LoginCSS.flexitem} >Login</h1>
                <h2 className={LoginCSS.flexitem}>Username: </h2>
                <input 
                className={LoginCSS.input} 
                type="text" 
                required
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <h3 className={LoginCSS.flexitem}>Password: </h3>
                <input 
                className={LoginCSS.input} 
                type="password" 
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <input className={`${LoginCSS.flexitem} ${LoginCSS.button}`} value="Login" type="submit" />

                <Link to="/signup" className={LoginCSS.flexitem}>or Signup</Link>
            </form>

    );

    
}