"use client"
import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 13px auto 34px;

h1{
    font-size: 27px;
}
p{
    margin-top: 21px;
    font-size: 18px;
}

@media(min-width: 720px) {

    width: 80%;
   
    h1,p{
        text-align: left;
    }
    h1{
        font-size: calc(10px + 4vw);
        line-height: 102%;    }

    p{
        font-size: calc(5px + 1.5vw);
    }
}
`

