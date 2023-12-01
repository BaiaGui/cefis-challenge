import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CoursePanel } from './routes/CoursePanel.jsx'
import { UserPanel } from './routes/UserPanel.jsx'
import {QuestionPanel} from './routes/QuestionPanel.jsx'
import { AnswerQuestionModal } from './routes/AnswerQuestionModal.jsx'
import { ModalTemplate } from './components/ModalTemplate.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "userpanel",
    element: <UserPanel/>
  },
  {
    path: "coursepanel",
    element: <CoursePanel/>
  },
  {
    path: "questionpanel",
    element: <QuestionPanel/>,
    children: [
      {
        path: "question/:questionId",
        element: <AnswerQuestionModal/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
