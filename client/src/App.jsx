import './App.css'
import { NavBarMenu } from './components/navBarMenu'
import { HomePage } from './routes/HomePage'
import { LoginPage } from './routes/LoginPage';


function App() {

  let userName = sessionStorage.getItem("userName");
  if(userName){
    return (


      <div className='w-screen h-screen'>
      <NavBarMenu/>
      <HomePage/>
      </div>
  
    )
  }else {
    return (
      <div className='w-screen h-screen'>
        <LoginPage/>
      </div>
    );
  }

 
}

export default App
