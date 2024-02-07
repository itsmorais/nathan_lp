"use client"

import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: fit-content;
margin: 21px auto;
padding-bottom: 5%;


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
  width: 90%;

 
  div>p{
    font-size: 12px;
    text-align: left;
    margin: 13px 0 0 ;
    font-weight: bold;
  
  }
}

` 