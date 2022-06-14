import React, { useState, useContext } from 'react';

import {
    Container,
    InputDiv,
    Input,
    Button
} from './styles.js';

import UserContext from '../../context/UserContext';
import { Loading } from '../Loading/index.js';

const LoginComponent = () => {

	const { handleLogin, loginIsLoading } = useContext(UserContext);

	const [username, setUsername] = useState();

  return (
    <Container>

        <h2>Coloque seu Nick e bora!</h2>

        <InputDiv>
            <Input 
                placeholder='Apelido'
                type={'text'}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />

        <Button onClick={() => handleLogin(username)} disabled={loginIsLoading}>
            {loginIsLoading ? <Loading size={15} /> : ">" }
            
        </Button>

        </InputDiv>



    </Container>
  );
}

export default LoginComponent;