"use client"
import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 13px auto 34px;

h1{
    font-size: 27px;
    margin-bottom: 10px;
}
p{
    margin-top: 21px;
    font-size: 18px;
}

span{
    font-size: 18px;
    color: #CDB97A;
}

h2{
    margin: 13px auto;
}








@media(min-width: 720px) {
    width: 80vw;
    
    h1{
        font-size: calc(10px + 4vw);
        line-height: 102%;

    }

    p,span{
        font-size: calc(5px + 1.5vw);
        margin-top: 1vw;
        text-align: left;
        
    }

    h2{
        font-size: calc(10px + 2vw);
        margin-top: 1vw;

    }
    #tiposAtendimento{
        margin-top: 3vw;

    }


    }

`

