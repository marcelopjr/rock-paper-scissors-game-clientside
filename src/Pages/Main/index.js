import React, { useContext } from 'react';

import LoginComponent from '../../components/LoginComponent';
import { MenuComponent } from '../../components/MenuComponent';

import UserContext from '../../context/UserContext';

export const Main = () => {

  const { isLoged, onMenu } = useContext(UserContext);

  return (
      <>
        
        {isLoged ? 

        <MenuComponent /> 

        : 
        onMenu && <LoginComponent />

        }
      </>
      
  );
};
