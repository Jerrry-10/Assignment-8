import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Secondpage from './components/debit';
import Navbar from './components/Navbar';
import Third from './components/credit';
import axios from 'axios';
import LogIn from "./components/Login";
import { useState,useEffect } from 'react';
import UserProfile from './components/UserProfile';
import Balance from './components/Balance';
function App() {
  let [accdebits, setaccDebits] = useState(0);
  let [acccredits, setaccCredits] = useState(0);
  let [balance, setBalance] = useState(0);
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([]);
  const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })
  const getDebits = async () => {
    const response = await axios("https://moj-api.herokuapp.com/debits");
    setDebits(response.data);
  };

  const getCredits = async () => {
    const response = await axios("https://moj-api.herokuapp.com/credits");
    setCredits(response.data);
  };
  // const Balanceset = () =>{
  //   setBalance(0)
  // }
  useEffect(() => {
    getDebits();
    getCredits();
    // Balanceset();
  }, []);
  debits.map((e) => {
    accdebits +=  e.amount
    //  console.log(e.amount);
    // console.log(balance);
  });
  credits.map((e) => {
    acccredits +=  e.amount
    //  console.log(e.amount);
    // console.log(balance);
  });
balance = acccredits - accdebits
const mockLogIn = (logInInfo) => {
  const newUser = {...currentUser}
  newUser.userName = logInInfo.userName
  setCurrentUser(newUser)
}
  
  return (
    <BrowserRouter>
     <Navbar/>
    
      <div>
        {/* <Balance bal = {balance}/> */}
        <Routes>
          <Route path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
          <Route exact path = "/" element = { <Home bal = {balance}/> }  />
          <Route exact path = "/debit" element = { <Secondpage bal = {accdebits}/> }  />
          <Route exact path = "/credit" element = { <Third bal = {acccredits}/> }  />
          <Route exact path = "/userProfile" element = { <UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}/> }  />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;