"use client"
import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 83px auto 0;
p{
    margin: 21px auto;
    font-size: 18px;
}

svg{
    margin: 13px 0;
    cursor: pointer;
}

`

export const ImageNathan = styled.div`

    div{      
        width: 20rem;
        height: 20rem;
        border-radius: 10%;
        margin: 0 auto;
        background: linear-gradient(180deg, rgba(18, 13, 2, 0.05) 0%, rgba(18, 13, 2, 0.25) 28.7%, rgba(18, 13, 2, 0.50) 54.69%, rgba(18, 13, 2, 0.75) 77.09%, #120D02 100%);

    }
    div>div{
        background-image: url('no-bg.png')  ;
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: -4.5rem;

    }
    div>svg{
        position: relative;
        bottom: 0;
        padding: 0;
        margin-bottom: -0.25rem;
    }
    h3,h4{
        color: #CDB97A;
        font-weight: 500;
        line-height: 125%;
        font-size: 18px;
        
    }

 

`