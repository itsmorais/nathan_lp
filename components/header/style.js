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

z-index: 1000   ;
    
nav#menu{
    display: none;
}
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
@media(min-width: 720px) {
    height: 3rem;

    div#logo{
        width: 23rem;
        justify-content: flex-end;

        margin: 0 auto;
        
    }
    #logo h3{
        font-size: 21px;
    }

    #logo svg{
        width: 2rem;
        height: 2rem;
    }

    #mobileMenu{
        display: none;
    }

    nav#menu{
        display: flex;
        justify-content: space-evenly;
        list-style: none;

        cursor: pointer;

        width: 80vw;
        font-size: 13px ;
        font-weight: 500;
    }

    nav#menu li:hover{
        color: #CDB97A;
    }
}
` 