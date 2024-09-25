import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import ErrorPage from '../SignUp/ErrorPage'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'

import RoomDetails from '../pages/RoomDetails/RoomDetails'
import Home from '../Component/Home/Home'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <RoomDetails />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])