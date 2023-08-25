import React from "react";
import Navbar from "../../components/HomeNav";
import Footer from "../../components/Footer";
import {HomeContainer } from "../../assets/styles";
import { useNavigate } from "react-router-dom";
import UserProfile from "./ProfileCard";

const Index = () => {
  
  const Navigate = useNavigate();

  return (
    <HomeContainer>
      <Navbar status="online" />
            <UserProfile/>
      <Footer />
    </HomeContainer>
  );
};

export default Index;
