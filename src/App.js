import React from 'react';
import { UserProvider } from './context/UserContext';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <UserProvider>
      <ToastContainer />
      <Home />
    </UserProvider>
  );
}

export default App;
