import styled from "styled-components";

export const Loader = styled.div`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;

    border: 5px solid ${(props) => props.backgroundColor};
    border-radius: 50%;  

    & > div {
        width: ${(props) => props.size}px;
        height: ${(props) => props.size}px;

        background: transparent;
        
        margin-left: -5px;
        margin-top: -5px;
        
        border: 5px solid transparent;
        border-left-color: ${(props) => props.spinnerColor}; 
        border-radius: 50%; 

        animation: loading 1.5s infinite linear;

        @keyframes loading {
            to {transform: rotate(360deg)}
        } 
    }
`;