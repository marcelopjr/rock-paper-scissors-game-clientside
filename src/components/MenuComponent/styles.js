import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    width: 400px;
    height: 40%;

    background-color: #FFF;

    box-shadow: 0px 6px 24px 1px #000000;

    border-radius: 5px;
    border: 0.5px solid #000;

    padding: 10px;
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 60%;

    justify-content: space-evenly;

`

export const MenuButton = styled.button`
    height: 40px;
    width: 150px;

    border-radius : 5px;

    background-color: yellow;
    color: #000;

    font-weight: bold;
`