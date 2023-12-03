import './App.css'
import { ModalTemplate } from './components/ModalTemplate'
import { AnswerQuestionModal } from './routes/modalPages/AnswerQuestionModal'
import { CoursePanel } from './routes/CoursePanel'
import { UserPanel } from './routes/UserPanel'
import { AddUserModal } from './routes/modalPages/AddUserModal'
import { NavBarMenu } from './components/navBarMenu'
import { HomePage } from './routes/HomePage'
import { Outlet } from 'react-router-dom'

function App() {

  return (


    <div className='w-screen h-screen'>

    <NavBarMenu/>
    <HomePage/>

    </div>

  )
}

export default App
