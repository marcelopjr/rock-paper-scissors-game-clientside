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

    margin-right: 30px;
`

export const RoomCard = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;

    background-color: #FFF;

    border: 0.5px solid #000;

    p {
        margin: 0;
    }
`

export const Part = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    justify-content: center;
`

export const ButtonEnter = styled.button`
    width: 100px;
    height: 30px;
`