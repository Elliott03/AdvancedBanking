import React, {useState} from "react";
import WithdrawalCSS from "./Withdrawal.module.css";
import Signup from "./Signup";

export default function Withdrawal(props) {

    const [withdrawInput, setWithdrawInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const username = props.username;
        const balance = Number(props.balance) - Number(withdrawInput);
        const user = {username, balance};

        props.setBalance(Number(props.balance) - Number(withdrawInput));

        fetch("/api/update", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
    }
    if (props.isLoggedIn === true) {
        return (
            <form onSubmit={handleSubmit} className={WithdrawalCSS.flex}>
                <h1 className={WithdrawalCSS.flexitem} >Withdrawal</h1>
                <h2 className={WithdrawalCSS.flexitem}>Current Balance: ${props.balance}</h2>
                <h3 className={WithdrawalCSS.flexitem}>Withdrawal Amount:</h3>
                <input 
                className={WithdrawalCSS.input} 
                name="withdrawInput"
                required
                type="text" 
                value={withdrawInput}
                onChange={(e) => setWithdrawInput(e.target.value)}
                />
                <input className={`${WithdrawalCSS.flexitem} ${WithdrawalCSS.button}`} value="Withdrawal" type="submit" />
            </form>
        );
    } else {
        return <Signup />
    }
    
}