import React from 'react';
import { styled } from 'styled-components';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';

const Home = () => {
  return (
    <Container>
     <Navbar/>
     <Herosection/>
    </Container>
  )
}

const Container = styled.main`
background: #fff;
height: 100vh;

@media (min-width: 700px){
  width: 95%;
  margin: 0 auto;
}
`;

export default Home