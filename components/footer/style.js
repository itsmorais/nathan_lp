"use client"
import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    max-width:90vw ;
    margin: 0px auto 34px;

    width: 100%;

div#Logo{
    display: flex;
    align-items: center;
    gap: 20px;

    justify-content: flex-start;
}
p{
    font-size: 13px;
    margin: 21px 0;
}

span{
    font-size: 21px;
    color: #CDB97A;
}

div#socials{
    display: flex;
    width: 100%;
    
    align-items: center;
    justify-content: flex-start;

    gap: 20px;
}

@media(min-width: 720px) {
    width: 80vw;
    

    div#socials{
        justify-content: flex-end;
        margin-top: calc(-10px - 3vw);
    }

    h1{
        font-size: calc(10px + 4vw);
        line-height: 102%;

    }

    p{
        font-size: calc(5px + 0.5vw);
        margin-top: 1vw;
        text-align: left;
        
    }

}

`

