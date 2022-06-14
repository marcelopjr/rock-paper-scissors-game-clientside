import React, { useState, useContext } from 'react';

import api from '../../service/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CreateRoomComponent } from '../CreateRoomComponent';
import { RoomsComponent } from '../RoomsComponent';

import { 
  Container,
  Menu,
  MenuButton,
} from './styles';

import UserContext from '../../context/UserContext';

export const MenuComponent = () => {
  
  const { 
    usuario, 
    cliente, 
    handleLogout, 
    inGame, 
    setRoom, 
    setIsMyTurn, 
    backToMenu,
    showCreateRoomComponent,
    showEnterRoomComponent,
    showGameComponent,
    menuIsVisible,
    createRoomIsVisible,
    enterRoomIsVisible,
  } = useContext(UserContext);

  const alertWin = (playerWin) => {
    if(playerWin.playerId === usuario.playerId){

      toast('🦄 Essa você ganhou, parabéns! :D', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } else {

      toast('aaa... Essa você perdeu! :( ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
  }

  const onGameProgressRoom = (data) => {
    const dataBody = data.body;
    if(dataBody.includes("GAMECLOSE")){
      let gameId = dataBody.split("/");
      cliente.unsubscribe(`/topic/game-progress/${gameId[1]}`);
      backToMenu();
    }else {
      const room = JSON.parse(data.body);
      let myTurn = room.game.playerTurn ? room.game.playerTurn.playerId === usuario.playerId ? true : false : false
      setIsMyTurn(myTurn);
      setRoom(room);
      if(room.game.hasAWinner && room.game.status === "INGAME"){
        alertWin(room.game.lastWinner);
      }else if(room.game.hasADraw && room.game.status === "INGAME") {
        toast('Dessa vez houve um empate!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      }
    }
  }
  

  const handleCreateRoom = (roomName) => {
    api.post(`/room/create/${roomName}`, usuario)
    .then((response) => {
        setRoom(response.data);
        cliente.subscribe(`/topic/game-progress/${response.data.roomId}`, onGameProgressRoom);
        showGameComponent();
    })
    .catch((error) => {
    })
    
  };

  const handleConnectRoom = (roomId) => {
    api.post(`/room/connect/${roomId}`, usuario)
    .then((response) => {
        setRoom(response.data);
        cliente.subscribe(`/topic/game-progress/${response.data.roomId}`, onGameProgressRoom);
        showGameComponent();
    })
    .catch((error) => {
      toast.error(`${error.response.data.erros[0]}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
  };

  return (
    <Container>

    

      {menuIsVisible && !inGame && 
      <>
      <h3>Bem vindo, {usuario.nome}</h3>
      <Menu>
        <MenuButton onClick={showCreateRoomComponent}>
          Criar Sala
        </MenuButton>

        <MenuButton onClick={showEnterRoomComponent}>
          Entrar em uma sala
        </MenuButton>

        <MenuButton onClick={() => handleLogout(cliente)}>
          Sair
        </MenuButton>
      </Menu>
      </>
      }

      {createRoomIsVisible &&
        <CreateRoomComponent
          back={backToMenu}
          handleCreateRoom={handleCreateRoom}
        />
      }

      {enterRoomIsVisible &&
        <RoomsComponent 
          back={backToMenu}
          handleConnectRoom={handleConnectRoom}
        />
      }

    </Container>
  );
}
