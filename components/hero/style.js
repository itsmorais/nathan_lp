"use client"
import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 83px auto 34px;
p{
    margin: 21px auto;
    font-size: 18px;
}

svg{
    margin: 13px 0;
    cursor: pointer;
}
#Whatsapp{
    display: none;
}

@media(min-width: 900px) {
    margin: 6vw auto 10vw;

    display: flex;
    width: 80vw;
    div#containerElements{
        width: 50vw;
        margin: auto;
       
    }
    #mobileWhatsapp{
        display: none;
    }
    #Whatsapp{
        width: 35rem;
        display: block;

        margin: 3rem 0;
        
        a>div{
        float: left;
        }
     >a>div>span{
        font-size: 24px;
        font-weight: 500;
     }   
    }

    h1,p{
        text-align: left;
        margin-right: 50px;
    }

    h1{
        font-size: calc(10px + 4vw);
        line-height: 102%;

    }

    p{
        font-size: calc(5px + 1.5vw);
        margin-top: 3vw;
        
    }
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

    @media(min-width: 900px) {
        div{      
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        margin: 1.5rem 0 auto;
        background: linear-gradient(180deg, rgba(18, 13, 2, 0.05) 0%, rgba(18, 13, 2, 0.25) 28.7%, rgba(18, 13, 2, 0.50) 54.69%, rgba(18, 13, 2, 0.75) 77.09%, #120D02 100%);

    }

    h3,h4{
        font-size:2vw;
    }
    }
 

`