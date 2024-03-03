"use client"

import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 13px auto 34px;




    @media(min-width: 900px) {
        h1{
        font-size: calc(10px + 3vw);
        line-height: 102%;
        }
        div#cards {
            margin: 2vw auto;
            display: grid;
            grid-template-columns: 40% 40%;
            grid-auto-rows: 10vw;
            gap: calc(20px + 1vw);
            align-items: center;
            justify-content: center;

        }

      
     

       
    
    }
`

