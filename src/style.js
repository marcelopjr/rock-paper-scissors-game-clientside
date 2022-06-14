import styled, { keyframes } from 'styled-components'

export const moveDown = keyframes`
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(300px);
    } 
`

export const moveUp = keyframes`
    0% {
        transform: translateY(300px);
    }
    100% {
        transform: translateY(0px);
    } 
`

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: yellow;

`;

export const Button = styled.button`
    background: transparent;
    border: none;
    
    transform: translateZ(0);
    transition-duration: 0.5s;

    :hover {
        transform: ${props => props.inGame ? 'scale(1.2)' : null};
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36) ;
    }

`

export const Logo = styled.img`
     
`;

export const GamePlay = styled.div`
    display: flex;
    flex-direction: row;
    
    margin-top: 100px;
    margin-bottom: 50px;

    animation: ${props => props.inGame ? moveDown : moveUp} 0.5s ease-out forwards;

`

