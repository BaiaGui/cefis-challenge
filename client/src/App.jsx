import { useState } from 'react';
import './App.css'
import { NavBarMenu } from './components/NavBarMenu'
import { HomePage } from './routes/HomePage'
import { LoginPage } from './routes/LoginPage';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


function App() {

  const [loggedUser, setLoggedUser] = useState(null);
  const userId = sessionStorage.getItem("loggedUser");



  if(userId || loggedUser){
  
    return (
      <div className='w-screen h-screen'>
      <NavBarMenu/>
      <HomePage/>
      </div>
  
    )
  }else {
    return (
      <div className='w-screen h-screen'>
        <LoginPage setLoggedUser={setLoggedUser}/>
      </div>
    );
  }

 
}

export default App
