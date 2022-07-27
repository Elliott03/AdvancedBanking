import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import SignupCSS from "./Signup.module.css";

export default function Signup(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/login'; 
      navigate(path);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const signup = {username, password}
        if (password.length < 8 || password.length > 16) {
            alert("Password Length Must be Between 8 and 16")
            return
        }
    
        if (confirmPassword === password) {

            fetch('/api/signup', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(signup)
            }).then(response => response.json())
            .then(response => {

                if (response === true) {
                    routeChange()

                } else {
                    alert("Username already exists")
                } 
                
            })
        } else {
            alert("Passwords Don't Match")
        }

    }

    
    return (
        <form onSubmit={handleSubmit} className={SignupCSS.flex}>
            <h1 className={SignupCSS.flexitem} >Signup</h1>
            <h2 className={SignupCSS.flexitem}>Username: </h2>
            <input 
            className={SignupCSS.input} 
            type="text" 
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
            />
            <h3 className={SignupCSS.flexitem}>Password: </h3>
            <input 
            className={SignupCSS.input} 
            type="password" 
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <h3 className={SignupCSS.flexitem}>Confirm Password: </h3>
            <input 
            className={SignupCSS.input} 
            type="password" 
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input className={`${SignupCSS.flexitem} ${SignupCSS.button}`} value="Signup" type="submit" />
            <Link to="/login" className={SignupCSS.flexitem}>or Login</Link>
        </form>
    ) 
}