import styled from "styled-components";

export const Input = styled.input`
    color:#888;
    font-size:2rem;
    padding:5px;
    outline:none;
    border: 1px solid grey;
    border-radius:15px;
    padding-left:15px;
    
`

export const ButtonSend = styled.button`
    color:black;
    font-size:2rem;
    padding:5px;
    border:1px solid black;
    margin-left:1rem;
    border-radius:15px;
    width:4em;
`

export const listContainer = styled.div`
    display:block;
    width:100%;
    border-radius:15px;
    margin:15px;
    min-height:40vh;
    max-height:70vh;
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 10px 1px #4d4d4d36;
    overflow:hidden;
`

export const header = styled.header`
    width:auto;
    height:10%;
    background-color:#4d4d4da0;
    padding:5px;
`
export const msgSpace = styled.div`
    width:100%;
    height:100%;
`
export const mensagem = styled.div`
    background-color:#d3d3d39f;
    border-radius:15px;
    width:auto;
    margin:5px 10px;
    text-align:start;
    padding-left:15px;
    animation: start 1s forwards ease;
    position:relative;

    @keyframes start {
        from{
            left:-5%;
            opacity:0;

        }   to{
            left:0%;
            opacity:1;
        }
    }
`