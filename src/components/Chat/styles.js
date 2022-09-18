import styled from "styled-components";

export const Container = styled.div`

    position: absolute;

    justify-self: baseline;
    align-self: baseline;

    bottom: 40px;
    left: 40px;
    padding: 5px;

   background-color: black;
   width: 400px;
   height: 180px;
   opacity: 0.6;

   border-radius: 5px;
`;

export const MessagesDiv = styled.div`
    background-color: brown;
    width: 100%;
    height: 85%;
    overflow: auto;
`;

export const MessageInputDiv = styled.div`
    display: flex;
    align-items: center;

    background-color: aliceblue;
    margin-top: 4px;
    width: 100%;
    height: 12%;
`;

export const MessageInput = styled.input`
    background-color: blue;
    width: 90%;
    height: 100%;

    border: none;

    color: #FFF;
`;

export const MessageSendButton = styled.button`
    height: 100%;
    width: 10%;
`;