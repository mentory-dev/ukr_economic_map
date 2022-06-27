import React from 'react'

import styled from "styled-components";
import { PopupContent } from '../popup';
import {UKRAINE_RESULTS} from '../../data/Ukraine'

const StyledInfoContainer = styled.div`
  min-width: 200px;
  min-height: 200px;
  padding: 15px;
  background: #ffffff;
  position: absolute;
  left: 0px;
  bottom: 0px;
`;

const StyledProgress = styled.div`
  width: 100%;
  height: 10px;
  margin: 10px 0px;
  background: #4264fb;
  background: linear-gradient(90deg,rgb(66 100 251 / 1%) 0%,rgb(66 100 251 / 78%) 35%,rgb(66 100 251) 100%); 
`

const StyledPgrogressMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledProgressName = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 10px;
  font-weight: bold;
`

export const TestInfo = () => {
  return (
    <StyledInfoContainer>
        <PopupContent content={JSON.stringify(UKRAINE_RESULTS)} />
        <StyledProgressName>Соціально-економічне становище області (ПОКАЗНИКИ)</StyledProgressName>
        <StyledProgress/>
        <StyledPgrogressMap>
            <span>Проблемне</span>
            <span>Благополучне</span>
        </StyledPgrogressMap>
    </StyledInfoContainer>
  )
}

