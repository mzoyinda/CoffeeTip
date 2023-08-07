import React from 'react'
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <p>Made with <span class="love"> ❤️ </span> by <a href="https://www.linkedin.com/in/oyin-dawodu/" class="dev" target="_blank" rel="noreferrer">Oyin Dawodu</a></p>
    </Container>
  )
}


const Container = styled.footer`
position: absolute;
bottom: 0;
text-align: center;
background-color:#76520e;
width: 100%;
a{ 
     color: #fff;
      font-style:cursive;
      font-weight: 600;
    text-decoration: underline;
    }
p{
    color: #fff;
    font-size: 14px;
    padding: 10px 0;
    font-weight: 500;
}
`;

export default Footer