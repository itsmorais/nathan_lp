"use client"

import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 140px;
margin: 21px auto;


display: flex;
align-items: center;
justify-content: space-evenly;

border-radius: 4px;
border: 0.2px solid var(--Stroke-services, #000);
background: var(--Backgorund-primary, #212529);
box-shadow: 0px 4px 10px 0px rgba(218, 165, 32, 0.75);

>div.textos{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 65%;

  h1{
    font-size: 120%;
    color: var(--title-color, rgba(218, 165, 32, 0.75));
    width: 100%;
    text-align: left;
  }
  div>p{
    font-size: 12px;
    text-align: left;
    margin: 13px 0 0 ;
    font-weight: bold;
  
  }
}

` 