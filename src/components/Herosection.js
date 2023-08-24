import React from 'react';
import coffee from "../assets/coffee.gif";
import { HeroContainer } from '../assets/styles';

const Herosection = () => {
  return (
    <HeroContainer>
    <h2>"Send a warm cup of coffee to your special friend on Twitter & make their day brighter! "  <img src={coffee} alt="animated coffee cup" /> </h2>
   
    </HeroContainer>
  )
}



export default Herosection