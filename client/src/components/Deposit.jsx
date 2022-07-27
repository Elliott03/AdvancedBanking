import React, {useState} from "react";
import DepositCSS from "./Deposit.module.css";
import Signup from "./Signup";

export default function Deposit(props) {


    const [depositInput, setDepositInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const username = props.username;
        const balance = Number(props.balance) + Number(depositInput);
        const user = {username, balance};

        props.setBalance(Number(props.balance) + Number(depositInput));

        fetch("/api/update", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })

    }
    if (props.isLoggedIn === true) {
        return (
            <form onSubmit={handleSubmit} className={DepositCSS.flex}>
                <h1 className={DepositCSS.flexitem} >Deposit</h1>
                <h2 className={DepositCSS.flexitem}>Current Balance: ${props.balance}</h2>
                <h3 className={DepositCSS.flexitem}>Deposit Amount:</h3>
                <input 
                className={DepositCSS.input} 
                type="text" 
                required
                name="depositInput"
                value={depositInput}
                onChange={(e) => setDepositInput(e.target.value)}
                />
                <input className={`${DepositCSS.flexitem} ${DepositCSS.button}`} value="Deposit" type="submit" />
            </form>
        );
    } else {
        return <Signup />
    }
    

}