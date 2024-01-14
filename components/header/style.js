"use client"

import styled from "styled-components"

export const Container = styled.div`
background: var(--Backgorund-primary, #212529);
box-shadow: 0px 5px 31.1px 0px #000;position: fixed;
display: flex;
left: 2.25rem;
height: 4.25rem;
width: 100vw;
top: 0;
left: 0;
align-items: center;
justify-content: space-around;
-webkit-box-shadow: 0px 15px 45px -9px rgb(0 0 0 / 20%);
-moz-box-shadow: 0px 15px 45px -9px rgb(0 0 0 / 20%);
box-shadow: 0px 15px 45px -9px rgb(0 0 0 / 70%);
    
h3{
color: var(--logo-color, #CDB97A);
text-align: center;
font-size: 21px;
line-height: 130%;
cursor: pointer;
}
svg{
    cursor: pointer;
}

` 