"use client"

import styled from "styled-components"

export const Container = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;

position: fixed;
right: 0;
bottom: 0;
margin: 1rem;

background-color:transparent;
 
  border-radius:50px;
  box-shadow: 0 0 8px #25D366, inset 0 0 8px #25D366;
  -webkit-animation: pulse 3s linear 1s infinite;


@-webkit-keyframes pulse {
  0% { box-shadow:0 0 0px #25D366, inset 0 0 8px #25D366; }
  15% { box-shadow:0 0 8px #25D366, inset 0 0 8px #25D366; }
  30% { box-shadow:0 0 16px #25D366, inset 0 0 8px #25D366; }
  45% { box-shadow:0 0 32px #25D366, inset 0 0 8px #25D366; }
  60% { box-shadow:0 0 16px #25D366, inset 0 0 8px #25D366; }
  75% { box-shadow:0 0 8px #25D366, inset 0 0 14px #25D366; }
  100% { box-shadow:0 0 0px #25D366, inset 0 0 8px #25D366; }
}


` 