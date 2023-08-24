import React from "react";
import brand from "../assets/brand.png";
import { Flexbox, NavContainer } from "../assets/styles";


const HomeNav = () => {
  return (
    <NavContainer>
      <div className="desktop">
        <a href="/" className="brand">
          <img src={brand} alt="standage" />
          <h1>Coffee 'Tweet'</h1>
        </a>

        <Flexbox>
          <a href="/register">Sign Up</a>
          <a href="/login">Login</a>
        </Flexbox>
      </div>
    </NavContainer>
  );
};



export default HomeNav;
