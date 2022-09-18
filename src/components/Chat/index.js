import React, { useState } from 'react';
import api from '../../service/api';

import {
    Container,
    MessagesDiv,
    MessageInputDiv,
    MessageInput,
    MessageSendButton
} from './styles';

export function Chat({chat, usuario, roomId}) {

    const [messageContent, setMessageContent] = useState();

    const onSendMessage = () => {
        console.log(chat)

        const model = {
            author: usuario.nome,
            content: messageContent
        }

        api.post(`/chat/message/${roomId}`, model)
        .then((response) => {
        })
        .catch((error) => {
        })
    }

    return (
        <Container> 
            <MessagesDiv>
                {chat?.mensagens?.map(mensagem => {
                    return (
                        <p>{mensagem.author +": "+ mensagem.content}</p>
                    );
                })}
            </MessagesDiv>

            <MessageInputDiv>
                <MessageInput 
                    autoComplete='false' 
                    placeholder='Digite a mensagem' 
                    onChange={(e) => {
                        setMessageContent(e.target.value);
                    }} 
                />

                <MessageSendButton onClick={onSendMessage}>
                    {'>'}
                </MessageSendButton>
            </MessageInputDiv>
        </Container>
    );
}