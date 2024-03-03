"use client"

import styled from "styled-components"

export const Container = styled.div`
width: 90vw;
margin: 21px auto;

padding-bottom: 5%;

display: flex;
flex-direction: column;

align-items: center;
justify-content: space-evenly;

border-radius: 4px;
border: 0.2px solid var(--Stroke-services, #000);
background: var(--Backgorund-primary, #212529);
box-shadow: 0px 4px 10px 0px rgba(218, 165, 32, 0.75);

p{
    width: 90%;
    display: flex;
    justify-content: center;
    text-align: left;
}

@media(min-width: 720px) {
  width: 65vw;
  margin-bottom: 2vw;
  padding: 0;

  p{
    display: flex;
    justify-content: center;
    text-align: left;
    margin-bottom: 1.25vw;
  }

}

` 