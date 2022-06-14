import React, { useContext } from 'react';

import LoginComponent from '../../components/LoginComponent';
import { MenuComponent } from '../../components/MenuComponent';

import UserContext from '../../context/UserContext';

export const Main = () => {

  const { isLoged } = useContext(UserContext);

  return (
      <>
        
        {isLoged ? 

        <MenuComponent /> 

        : 

        <LoginComponent />

        }
      </>
      
  );
};
