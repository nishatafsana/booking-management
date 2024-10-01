import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import ErrorPage from '../SignUp/ErrorPage'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'

import RoomDetails from '../pages/RoomDetails/RoomDetails'
import Home from '../Component/Home/Home'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../Layout/DashboardLayout'

import Statistics from '../pages/Dashboard/Common/Statistics'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import Profile from '../pages/Dashboard/Common/Profile'

import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import AdminRoute from './AdminRoute'
import HostRoute from './HostRoute'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'



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
     element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
      </PrivateRoute>,
    children:[
      {
        index:true,
        element:<PrivateRoute>
          <Statistics></Statistics></PrivateRoute>
      },
      {
        path: 'add-room',
        element:<PrivateRoute>
          <HostRoute>
          <AddRoom></AddRoom>
          </HostRoute>
        </PrivateRoute>
      },
      {
        path: 'my-listings',
        element:<PrivateRoute><MyListings></MyListings></PrivateRoute>
      },
      // only read and write for admin
      {
        path: 'manage-users',
        element:<PrivateRoute>
       <AdminRoute>
       <ManageUsers></ManageUsers>
       </AdminRoute>
          </PrivateRoute>
      },
      // guest ar jonno
      {
        path: 'my-bookings',
        element:<PrivateRoute>
             <MyBookings></MyBookings>
          </PrivateRoute>
      },
      // only for host ar jonno
      {
        path: 'manage-bookings',
        element:<PrivateRoute>
         <HostRoute>
         <ManageBookings></ManageBookings>
         </HostRoute>
          </PrivateRoute>
      },
      {
        path: 'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  },
])