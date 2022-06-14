import React, { useContext } from 'react';

import {
    Container,
    GamePlay,
    Button,
    Logo,
} from './style'

import rock from '../../images/rock.png'
import paper from '../../images/paper.png'
import scissor from '../../images/scissor.png'

import UserContext from '../../context/UserContext'

import { Game } from '../Game'
import { Main } from '../Main'

const Home = () => {
	const { inGame, handleGamePlay } = useContext(UserContext);

  return (
    <Container >
			
    <GamePlay inGame={inGame}>

      <Button disabled={!inGame} inGame={inGame} onClick={() => handleGamePlay("Rock")}>
        <Logo src={rock}  />
      </Button>

      <Button disabled={!inGame} inGame={inGame} onClick={() => handleGamePlay("Paper")}>
        <Logo src={paper}  />
      </Button>

      <Button disabled={!inGame} inGame={inGame} onClick={() => handleGamePlay("Scissor")}>
        <Logo src={scissor}  />
      </Button>

    </GamePlay>

    
    {inGame ? 

      	<Game /> 
    	
    : 

      <Main />

    }
    
  </Container>
  );
}

export default Home;