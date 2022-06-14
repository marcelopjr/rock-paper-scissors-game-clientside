import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

   
    align-items: center;

    width: 350px;
    

    background-color: transparent;

    border-radius: 5px;
    /* border: 0.5px solid #000; */

    padding: 10px;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    

    p{
        margin: 0;
    }
`

export const Input = styled.input`
    width: 150px;
    height: 30px;

    border-radius: 5px;

    padding: 5px;

    :active {

    }
`

export const Button = styled.button`
    background-color: pink;

    width: 40px;
    height: 40px;

    border-radius: 5px;

    border: 1px solid #000;
    margin-left: 5px;

    background-color: #000;

    font-size: 25px;
    font-weight: bold;
    color: #FFF;

    cursor: pointer;
`