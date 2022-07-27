import React, {useState} from "react";
import TransferCSS from "./Transfer.module.css";
import Signup from "./Signup";

export default function Transfer(props) {
    
    const [transferUsername, setTransferUsername] = useState('');
    const [transferAmount, setTransferAmount] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const thisUsername = props.username;
        const thisAmount = props.balance;

        const sendUser = {
            "thisUser": {
                "username" : thisUsername,
                "balance" : thisAmount
            },
            "transferUser" : {
                "username" : transferUsername,
                "balance" : transferAmount
            }
        }

        props.setBalance(Number(thisAmount) - Number(transferAmount));
        fetch("/api/transfer", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendUser)
        }).then( response => response.json() )
        .then(response => {
            
            if(response === true) {
                alert("Success")
            } else {
                alert("User does not exist")
            }
        })
    }

    if (props.isLoggedIn === true) {
        return (
            <form onSubmit={handleSubmit}className={TransferCSS.flex}>
                <h1 className={TransferCSS.flexitem} >Transfer</h1>
                <h2 className={TransferCSS.flexitem}>Current Balance: ${props.balance}</h2>
                <h3 className={TransferCSS.flexitem}>User:  </h3>
                <input 
                className={TransferCSS.input} 
                type="text" 
                required
                value={transferUsername}
                onChange={(e) => setTransferUsername(e.target.value)}
                />
                <h3 className={TransferCSS.flexitem}>Amount: </h3>
                <input 
                className={TransferCSS.input} 
                type="text" 
                required
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                />
                <input className={`${TransferCSS.flexitem} ${TransferCSS.button}`} value="Send" type="submit" />
             </form>
        );
    } else {
        return <Signup />
    }
    
}