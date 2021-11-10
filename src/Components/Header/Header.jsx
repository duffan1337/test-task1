import React from "react";
import "./Header.css"
import { useSelector, useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";

const Header = ()=>{
    
    const {isAuth}=useSelector((state)=>{
        return{
            isAuth:state.auth.isAuth
        };
      });
      console.log(isAuth)

      
    return(
        <div className="Header">
          <ul>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/">Profile</NavLink></li>
          </ul>
          <button>{isAuth ? "Выйти" : "Войти"}</button>
        </div>
    )
}

export default Header