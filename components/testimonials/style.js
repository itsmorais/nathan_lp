"use client"
import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 0px auto 34px;


    
    
    >h2{
        margin-bottom: 13px;
    }
    >p{
    margin: 21px auto;
    font-size: 13px;
    font-weight: 400;
}

.testimonial{
        width: 100%;
        text-align: left;

        margin-bottom:31px;

        

    }

span.swiper-pagination-bullet{
    background-color: rgba(218, 165, 32, 0.75);
    }

    .swiper{
        border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(218, 165, 32, 0.75);
    background: var(--Backgorund-primary, #141212);

    }
.swiper-slide{
    padding: 0 5%;
}
`

export const Avatar = styled.div`
    width: 100%;
    margin-bottom: 2.5%;
    margin-top: 5%;


    div.avatar{
        width: 70%;
        display: flex;
        margin: 5% auto;


    }

    div{      
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
     

    }
    div>div{
        background-image: url(${({ imageurl }) => imageurl}) ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

    }

`