import React, { createContext, useEffect, useState} from 'react';

import api from "../service/api"
import config from "../config"

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [menuIsVisible, setMenuIsVisible] = useState(true);
    const [createRoomIsVisible, setCreateRoomIsVisible] = useState(false);
    const [enterRoomIsVisible, setEnterRoomIsVisible] = useState(false);

    const [inGame, setInGame] = useState(false);
    const [room, setRoom] = useState({});
  
    const [usuario, setUsuario] = useState({});
    const [isLoged, setIsLoged] = useState(false);
    const [cliente, setCliente] = useState();
    const [rooms, setRooms] = useState([]);
    const [isMyTurn, setIsMyTurn] = useState(false);

    const [loginIsLoading, setLoginIsLoading] = useState(false);

    var client;

 

    const backToMenu = () => {
        setEnterRoomIsVisible(false);
        setCreateRoomIsVisible(false);
        setInGame(false);
        setMenuIsVisible(true);
    };

    const showCreateRoomComponent = () => {
        setCreateRoomIsVisible(true);
        setMenuIsVisible(false);
    };
    
    const showEnterRoomComponent = () => {
        setEnterRoomIsVisible(true);
        setMenuIsVisible(false);
    };
    
    const showGameComponent = () => {
        backToMenu()
        setInGame(true);
    }

    const onNewRoom = (data) => {
        const returnObj = JSON.parse(data.body);
        setRooms(returnObj);
        console.log(returnObj);
    }

    const handleDisconnectRoom = () => {
    
        api.post(`/room/disconnect/${room.roomId}/${usuario.playerId}`)
        .then((response) => {
          cliente.unsubscribe(`/topic/game-progress/${room.roomId}`);
          backToMenu();
        })
        .catch((error) => {
        })
    
      };

    const onSuccesOnConnectToWS = (client, response) => {
        client.subscribe("/topic/newrooms", onNewRoom);
        setCliente(client);
        localStorage.setItem("@usuario", JSON.stringify(response.data));
        setUsuario(response.data);
        setIsLoged(true);
        setLoginIsLoading(false);
    };

    const onErrorOnConnectToWS = () => {
        alert("Houve um problema para conectar-se WS");
        setLoginIsLoading(false);
    };
  
    const handleWS = async (response) => {
        const Stomp = require('stompjs');
        var SockJS = require('sockjs-client');
  
        SockJS = new SockJS(`${config.baseUrl}/game`);
        client = Stomp.over(SockJS);
        
        await client.connect({}, () => onSuccesOnConnectToWS(client, response), onErrorOnConnectToWS);
  
    }
  
    const handleLogin = (username) => {

        setLoginIsLoading(true);

        api.post(`/player/create/${username}`)
        .then((response) => {
            handleWS(response);
            
        })
        .catch((error) => {
            alert("Houve um problema para conectar-se");
            setLoginIsLoading(false);
        })
    }
  
    const handleLogout = () => {
        
        if(room){
            handleDisconnectRoom();
        } 
        cliente.disconnect();
        setUsuario({});
        setIsLoged(false);
        localStorage.clear();
          
    }
  
    const handleGamePlay = (move) => {
  
      const gamePlay = {
        playerId: usuario.playerId,
        playerMove: move
      }
      
      api.post(`game/gameplay/${room.roomId}`, gamePlay)
      .then((response) => {
      })
      .catch((error) => {
        alert(error.response.data.erros[0])
      });
    }

    window.onunload = function () {
        return handleLogout();
    }

    return (
        <UserContext.Provider
            value={{
                isLoged,
                cliente,
                room,
                setRoom,
                usuario,
                loginIsLoading,
                inGame,
                setInGame,
                handleGamePlay,
                handleLogin,
                handleLogout,
                rooms,
                setRooms,
                isMyTurn,
                setIsMyTurn,
                backToMenu,
                showCreateRoomComponent,
                showEnterRoomComponent,
                showGameComponent,
                menuIsVisible,
                createRoomIsVisible,
                enterRoomIsVisible
            }}
        >
            {children}
        </UserContext.Provider>
    );

}

export default UserContext;