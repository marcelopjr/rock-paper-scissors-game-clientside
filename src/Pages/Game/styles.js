import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;

	top: 200px;

	display: flex;
	flex-direction: column;

	justify-self: first baseline;

	justify-content: space-between;

	padding: 20px;

	width: 600px;

`
export const GameInfos = styled.div`


	display: flex;
	flex-direction: row;

	justify-self: first baseline;
	justify-content: space-between;

	width: 100%;
`

export const GameTurn = styled.div`
	position: absolute;
	top: 120px;

	display: flex;
	justify-content: center;
	align-items: center;

	p {
		margin: 0;
		padding: 0;
		font-size: 15px;
	}

`


export const Draws = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
`

export const DrawName = styled.h3``

export const DrawPoints = styled.p``

export const Player = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`

export const Player1Name = styled.h3`
    color: ${props => props.isP1Turn ? '#F00' : '#000'};
`

export const Player2Name = styled.h3`
    color: ${props => props.isP2Turn ? '#F00' : '#000'};
`

export const PlayerPoints = styled.p``

export const ButtonCloseRoom = styled.button`

	display: flex;
	position: absolute;
	right: 40px;
	top: 20px;

	background: none;
	border: none;

	font-weight: bold;
	font-size: 35px;

	cursor: pointer;

  .hover-message {
		font-size: 13px;
		font-weight: 100;
		margin-right: 15px;

    display: block;
    position: absolute;

    top: 10px;
    left: calc(100% + -150px);

    border-radius: 5px;
    white-space: nowrap;

    color: #9f6000;
    background-color: #feefb3;

    transition: all 0.4s cubic-bezier(0, 1.59, 1, 0.81);
    transition: opacity 0.5s ease-in-out;

    height: 0px;
    width: 100px;
    font-size: 0px;
    opacity: 0;
  }

  :hover .hover-message {
    font-size: 15px;
    height: 15px;
    padding: 5px;
    opacity: 1;
  }
`;


