"use client"
import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 0px auto 34px;


    
    span{
        color: #CDB97A;
    }
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
        word-wrap: break-word;

    }

span.swiper-pagination-bullet{
    background-color: rgba(218, 165, 32, 0.75);
    }

    .swiper{
    border-radius: 10px;
    box-shadow: 0.25px 0.75px 0.75px 0.25px rgba(218, 165, 32, 0.75);
    background-color:var(--Backgorund-primary, #212529);

    }
.swiper-slide{
    padding: 0 5%;
}

.instagram{
    display: flex;
    width: fit-content;
    gap: 10px;

    margin: 0 auto;

    p>{
        width: fit-content;
        margin: 0;
        padding: 0;
    }
}

h3#relatos{
    width: 100%;
    margin: 21px auto 13px;
}
`

export const Avatar = styled.div`
    width: 100%;
    margin-bottom: 2.5%;
    margin-top: 5%;


    div.avatar{
        width: 100%;
        display:flex;
        gap: 20px;

        margin-bottom:5%;


    }

    div{      
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
     >p{
        width: 100%;
        font-size: 21px;
        font-weight: 700;
     }

    }
    div>div{
        background-image: url(${({ imageurl }) => imageurl}) ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

    }

`