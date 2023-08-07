import React from "react";
import styled from "styled-components";
import brand from "../assets/brand.png";
import coin from "../assets/coin.gif";

const Navbar = () => {
  return (
    <Container>
      <div className="desktop">
        <a href="/" className="brand">
          <img src={brand} alt="standage" />
          <h1>Coffee 'Tweet'</h1>
        </a>

        <div className="balance">
          <img src={coin} alt="coin" />
          <p>Balance:</p>
          <p className="gold" >10,000 Chimoney</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1700px;
  background: #ffffff;
  padding: 17px 24px;
  padding-bottom: 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    font-weight: 500;
    line-height: 20px;
    height: 56px;
    text-align: center;
    display: inline-flex;
    text-decoration: none;
    color: #76520e;
    :hover {
      font-weight: 600;
      cursor: pointer;
      color: #4d4d4d;
    }
  }

  h1 {
    font-size: 20px;
    margin-top: 30px;
  }

  .balance {
    display: flex;
    gap: 10px;
    p{
      font-weight: 600;
     margin-top: 25px;
     display: none;
    }
    .gold{
      display: block;
     color:#76520e;
    }
  }

  /* large screen */
  .desktop {
    display: flex;
    box-shadow: 0px 5px 15px rgba(153, 153, 153, 0.05);
    justify-content: space-between;
    align-items: center;
    height: 66px;
    a + a {
      margin-left: 42px;
    }
    img {
      width: 36px;
      height: 56px;
      object-fit: contain;
      align-self: baseline;
    }
  }

  //maximum screen size
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .desktop {
      width: 1700px;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    padding: 17px 73px;
    padding-bottom: 0;

    .desktop {
      justify-content: space-between;
      align-items: center;

    }
  }
  
  @media (min-width: 550px) {

    .balance p {
      display: block;
    }
  }
`;

export default Navbar;
