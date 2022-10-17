import React from 'react'
import styled from '@emotion/styled';

// quando você cria uma aplicação com create-react-app
// ele tem um exemplo de imagem, é um SVG. import logo from './logo.svg';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    background-image: url('/barco.jpg');
    background-repeat: no-repeat;
    background-size: cover;	
`;

export default function RegisterPage() {
  return (
    <Container>register</Container>
  )
}
