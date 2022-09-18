import React, { useState, useContext, useEffect } from 'react';
import api from '../../service/api';

import { 
  Container,
  GameInfos,
  GameTurn,
  Draws,
  DrawName,
  DrawPoints,
  Player,
  Player1Name,
  Player2Name,
  PlayerPoints,
  ButtonCloseRoom
} from './styles';

import UserContext from '../../context/UserContext';
import { Chat } from '../../components/Chat';

export const Game = () => {

  const { room, usuario, isMyTurn, backToMenu, cliente, setRoom, chat } = useContext(UserContext);

  const [isP1Turn, setIsP1Turn] = useState();
  const [isP2Turn, setIsP2Turn] = useState();

  useEffect(() => {
    setIsP1Turn(room.game.playerTurn ? room.game.playerTurn.playerId === room.game.player1.player.playerId ? true : false : false);
    setIsP2Turn(room.game.player2 ? room.game.playerTurn.playerId === room.game.player2.player.playerId ? true : false : false);
  }, [room])

  const handleDisconnectRoom = () => {
    
    api.post(`/room/disconnect/${room.roomId}/${usuario.playerId}`)
    .then((response) => {
      cliente.unsubscribe(`/topic/game-progress/${room.roomId}`);
      setRoom(null);
      backToMenu();
    })
    .catch((error) => {
    })

  };

  return (
    <>
    
    <ButtonCloseRoom
      onClick={handleDisconnectRoom}
    >
      <div className="hover-message">{"Sair da sala"}</div>
      X
    </ButtonCloseRoom>

    <GameTurn>
      { room.game.playerTurn && 
        <p>{isMyTurn ? "É sua vez..." : `Esperando ${room.game.playerTurn.nome} jogar...` }</p>
      }
    </GameTurn>
   
    <Container>
      

      <GameInfos>

        <Player>
          <Player1Name isP1Turn={isP1Turn} >
            {room.game.player1.player.playerId === usuario.playerId ? "Você" : room.game.player1.player.nome}
          </Player1Name>
          <PlayerPoints>
            {room.game.player1.wins}
          </PlayerPoints>
        </Player>

        <Draws>
          <DrawName>
            Empates
          </DrawName>
          <DrawPoints>
            {room.game.draws}
          </DrawPoints>
        </Draws>

        <Player>
          <Player2Name isP2Turn={isP2Turn}>
            {room.game.player2 ? room.game.player2.player.playerId === usuario.playerId ? "Você" : room.game.player2.player.nome : "Esperando..."}
          </Player2Name>
          <PlayerPoints>
            {room.game.player2 ? room.game.player2.wins : ""}
          </PlayerPoints>
        </Player>

      </GameInfos>

    </Container>

    <Chat chat={chat} usuario={usuario} roomId={room.roomId} />
     
    </>
      
  );
}