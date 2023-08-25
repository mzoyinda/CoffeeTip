import React from "react";
import brand from "../assets/brand.png";
import { Flexbox, NavContainer } from "../assets/styles";
import {FiLogOut} from "react-icons/fi"
import { useNavigate } from "react-router-dom";


const HomeNav = ({status}) => {

  const Navigate = useNavigate();

  return (
    <NavContainer>
      <div className="desktop">
        <a href="/" className="brand">
          <img src={brand} alt="standage" />
          <h1>Coffee 'Tip'</h1>
        </a>

        {status === 'offline' ? 
        <Flexbox>
          <a href="/register">Sign Up</a>
          <a href="/login">Login</a>
        </Flexbox>
        :
        <button onClick={()=> Navigate("/")}>
        <span>Logout </span>
        <FiLogOut/>
      </button>
}
      </div>
    </NavContainer>
  );
};



export default HomeNav;
