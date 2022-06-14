import styled from 'styled-components';

export const Content = styled.div`
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    
    align-items: center;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: flex-start;
    width: 100%;

    margin-bottom: 60px;
`

export const ButtonBack = styled.button`
    width: 40px;
    height: 50px;

    margin-right: 80px;

    border-radius : 5px;

    background-color: yellow;
    color: #000;

    font-weight: bold;
`

export const Input = styled.input`
    
    height: 35px;
    margin-bottom: 10px;
`

export const ButtonCreate = styled.button`
    height: 40px;
    width: 150px;

    border-radius : 5px;

    background-color: yellow;
    color: #000;

    font-weight: bold;
`