import React from "react";
import styled from "styled-components";

const TopoSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd21;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
  z-index: 99;
`;

const Logo=styled.h1`
margin: 0;
color: white;
font-weight: 700;
font-size: 55px;
`;

const Slogan=styled.h4`
margin: 0;
color: #fff;
font-weight: 700;
font-size: 30px;
margin-top: 1em;
`;
export function TopSection(){
    return <TopoSectionContainer>
        <Logo>upaupa</Logo>
        <Slogan>Try to create by myself</Slogan>
    </TopoSectionContainer>
}