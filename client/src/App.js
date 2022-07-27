import React, {useState} from "react";

import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Withdrawal from "./components/Withdrawal";
import Deposit from "./components/Deposit";
import Transfer from "./components/Transfer";
import Profile from "./components/Profile";

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {

  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />}/>
          <Route path="/login" element={<Login passIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} passUsername={setUsername} passBalance={setBalance}/>}/>
          <Route path="/signup" element={<Signup passIsLoggedIn={setIsLoggedIn}/>}/>
          
          <Route path="/withdrawal" element={<Withdrawal passIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUsername={setUsername} setBalance={setBalance} username={username} balance={balance}/>}/>
          <Route path="/deposit" element={<Deposit passIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUsername={setUsername} setBalance={setBalance} username={username} balance={balance}/>}/>
          <Route path="/transfer" element={<Transfer passIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUsername={setUsername} setBalance={setBalance} username={username} balance={balance}/>}/>
          <Route path="/profile" element={<Profile passIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} username={username} balance={balance}/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
