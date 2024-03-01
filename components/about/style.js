"use client"
import styled from "styled-components"

export const Container = styled.div`

    text-align: center;
    max-width:90vw ;
    margin: 0px auto 34px;

    
   p{
    margin-top: 21px;
    font-size: 18px;
}
    div#desktop{
        display:none;
    }


span.swiper-pagination-bullet{
    background-color: white;
    }


    @media(min-width: 720px) {
        margin: 2vw auto 5vw;
        width: 80vw;

        section#desktopSection{
            display: flex;
            margin: 1vw auto;
            align-items: flex-start;
            
        }
        div#mobile{
            display: none;
        }
        div#desktop{
            display: block;
        }
      

         h1{
        font-size: calc(10px + 4vw);
        line-height: 102%;

    }

    p{
        font-size: calc(5px + 1.5vw);
        margin-top: 1vw;
        text-align: left;
        
    }
    #desktopTextSection{
        width: 200vw;
    }
 
    }
`

export const ImageNathan = styled.div`

    div{      
        position: block;
        width: 20rem;
        height: 35rem;
        border-radius: 10%;
        margin: 2rem auto;
        background: linear-gradient(180deg, rgba(18, 13, 2, 0.05) 0%, rgba(18, 13, 2, 0.25) 28.7%, rgba(18, 13, 2, 0.50) 54.69%, rgba(18, 13, 2, 0.75) 77.09%, #120D02 100%);

    }
    div>div{
        background-image: url(${({ imageurl }) => imageurl}) ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: -4.5rem;

    }

    @media(min-width: 720px) {
        div{
            width: 20vw;
            height:40vw;
            margin: 4vw auto;
        }
    }

  
    

 

`