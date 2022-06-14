import React, { useState } from 'react';

import { 
  Content,
  Header,
  ButtonBack,
  Input,
  ButtonCreate,
} from './styles';

export const CreateRoomComponent = ({ back, handleCreateRoom }) => {

  const [roomName, setRoomName] = useState("");

  const onCreateRoom = () => {
    if(!roomName) return alert("Informe o nome da sala!");

    handleCreateRoom(roomName);
  }

  return (
    <Content>
      <Header>
        <ButtonBack onClick={back}>{"<"}</ButtonBack>
        <p>Criar Sala</p>
      </Header>
      
      <Input
        placeholder='Nome da Sala'
        onChange={(e) => {
          setRoomName(e.target.value);
        }}
      />

      <ButtonCreate onClick={onCreateRoom}>
        Criar Sala
      </ButtonCreate>
      
    </Content>
      
  );
}