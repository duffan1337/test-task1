import './App.css';
import React from 'react';
import {Navigate, Route} from "react-router";
import LoginBody from './Components/Login/LoginBody.jsx';
import Profile from './Components/Profile/Profile';
import {Routes} from 'react-router-dom'
import News from './Components/News/News';
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';

function App() {

    
  const {isAuth}=useSelector((state)=>{
    return{
        isAuth:state.auth.isAuth
    };
  });

  return (
    
      <div className="App">
        <Header/>
        <Routes>
           {/* <Route exact path="/" element={<Profile />}  /> */}
           <Route exact path="/login" element = {!isAuth ? <LoginBody /> :<Navigate to="/"/>}  />
           <Route exact path="/news"  element = {isAuth ? <News /> :<Navigate to="/login"/>}/>
           <Route exact path="/" element = {isAuth ? <Profile /> :<Navigate to="/login"/>}/>
        </Routes>
      </div>
  );
}

export default App;
