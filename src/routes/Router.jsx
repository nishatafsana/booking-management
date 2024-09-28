import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import ErrorPage from '../SignUp/ErrorPage'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'

import RoomDetails from '../pages/RoomDetails/RoomDetails'
import Home from '../Component/Home/Home'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../Layout/DashboardLayout'
import { element } from 'prop-types'
import Statistics from '../pages/Dashboard/Common/Statistics'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'



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
        element: <PrivateRoute>
           <RoomDetails />
           </PrivateRoute>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/dashboard',
     element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        index:true,
        element:<Statistics></Statistics>
      },
      {
        path: 'add-room',
        element:<AddRoom></AddRoom>
      },
      {
        path: 'my-listings',
        element:<MyListings></MyListings>
      },
    ]
  },
])