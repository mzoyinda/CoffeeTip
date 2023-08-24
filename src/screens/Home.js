import React from "react";
import Navbar from "../components/HomeNav";
import Footer from "../components/Footer";
import coffee from "../assets/coffee.gif";
import {BsArrowRight} from "react-icons/bs"
import { BtnContainer, HeroContainer, HomeContainer } from "../assets/styles";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar status="offline" />
      <section>
        <h2>
          "Send a warm cup of coffee to your special friend on Twitter & make
          their day brighter!"
          <img src={coffee} alt="animated coffee cup" />
        </h2>
      </section>
        <BtnContainer>
          <button>
            <p>Get Started</p> 
            <BsArrowRight/> 
          </button>

        </BtnContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
