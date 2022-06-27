import React from "react";

import styled from "styled-components";

import logo from '../../assets/logo.png'

const StylednavContainer = styled.div`
  width: 100%;
  padding: 5px 25px;
  background: #fbfdff;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 30px;  
  margin-right: 10px;
`

const AppName = styled.p`
  color: #4264fb;
  font-size: 21px;
  font-weight: bold;
  margin: 0px;
`

export const Navigation = () => {

  return(
    <StylednavContainer>
      <StyledLogo src={logo} alt="logo"/>
        <AppName>
          Картографічний модуль з даними економічної діяльності областей
        </AppName>
    </StylednavContainer>
  )

}