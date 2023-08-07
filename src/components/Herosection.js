import React from 'react';
import coffee from "../assets/coffee.gif";
import { styled } from 'styled-components';

const Herosection = () => {
  return (
    <Container>
    <h2>"Send a warm cup of coffee to your special friend on Twitter & make their day brighter! "  <img src={coffee} alt="animated coffee cup" /> </h2>
   
    </Container>
  )
}


const Container = styled.section`
max-width: 600px;
margin: 0 auto;
margin-top: 160px;
padding:0 24px ;

h2{
    color: #52525b;
    text-align: center;
    font-size: 56px;
    font-weight: 500;
    letter-spacing: 0.03em;
    font-family: 'Cookie', cursive;
    
}

img{
    width: 48px;
    object-fit: cover;
}
`;
export default Herosection