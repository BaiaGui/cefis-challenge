import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CoursePanel } from './routes/CoursePanel.jsx'
import { UserPanel } from './routes/UserPanel.jsx'
import {QuestionPanel} from './routes/QuestionPanel.jsx'
import { AnswerQuestionModal } from './routes/modalPages/AnswerQuestionModal.jsx'
import { AddUserModal } from './routes/modalPages/AddUserModal.jsx'
import { AddCourseModal } from './routes/modalPages/AddCourseModal.jsx'
import { CourseDetailPage } from './routes/CourseDetailPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "course/:courseId",
        element: <CourseDetailPage/>
      },
    ]
  },
  {
    path: "userpanel",
    element: <UserPanel/>,
    children: [
      {
        path: "newuser",
        element: <AddUserModal/>,
      },
      {
        path: "edituser/:userId",
        element:<AddUserModal editMode={true}/>,
      },
    ]
  },
  {
    path: "coursepanel",
    element: <CoursePanel/>,
    children: [
      {
        path: "newcourse",
        element: <AddCourseModal/>,
      },
      {
        path: "editcourse/:courseId",
        element:<AddCourseModal editMode={true}/>,
      },
    ]
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
