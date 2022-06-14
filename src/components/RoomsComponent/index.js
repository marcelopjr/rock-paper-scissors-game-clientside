import React, { useEffect, useContext } from 'react';
import api from '../../service/api';

import { 
  Content,
  Header,
  ButtonBack,
  RoomCard,
  Part,
  ButtonEnter,
} from './styles';

import { toast } from 'react-toastify';

import UserContext from '../../context/UserContext';

export const RoomsComponent = ({ back, handleConnectRoom }) => {

  const { rooms, setRooms } = useContext(UserContext);

  useEffect(() => {
    
    api.get(`/room`)
    .then((response) => {
      setRooms(response.data);
    })
    .catch((error) => {
      toast.error(`Ocorreu um erro ao buscar as salas!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })

  }, [])

  return (
    <Content>
    <Header>
      <ButtonBack onClick={back}>{"<"}</ButtonBack>
      <p>Salas</p>
    </Header>
    
    {rooms.map(room => {
      return (
        <RoomCard key={room.roomId}>
          <Part>
            <p>Sala</p>
            <p>{room.name}</p>
          </Part>

          <Part>
            <p></p>
            <p>{room.game.quantityPlayer}/{2}</p>
          </Part>
          
          <ButtonEnter onClick={() => handleConnectRoom(room.roomId)}>
            Entrar
          </ButtonEnter>
        </RoomCard>
      )
    })}


  </Content>
  );
}