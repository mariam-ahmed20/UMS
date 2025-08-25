import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AuthLayout from './Components/AuthLayout/AuthLayout'
import NotFound from './Components/NotFound/NotFound'
import Login from './Components/Login/Login'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import UsersList from './Components/UsersList/UsersList'
import AddUser from './Components/AddUser/AddUser'
import Profile from './Components/Profile/Profile'
import Edit from './Components/Edit/Edit'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignOut from './Components/SignOut/SignOut'
function App() {

  const routes = createBrowserRouter([
    {path:"/" , element:<AuthLayout />,
    errorElement: <NotFound />,
    children :[
      {index:true , element:<Login />},
      {path:"login" , element:<Login />}
    ]
    },
    {path:"dashboard" , element:<MasterLayout />,
    errorElement: <NotFound />,
    children :[
      {index:true , element:<Home />},
      {path:"home" , element:<Home />},
      {path:"userslist" , element:<UsersList />},
      {path:"adduser" , element:<AddUser />},
      {path:"profile" , element:<Profile />},
      {path:"edit/:id" , element:<Edit />},
      {path:"signout", element:<SignOut />}

    ]
    },

  ])

  return (
    <>

    <RouterProvider router={routes}>

    </RouterProvider>
    
    <ToastContainer/>

    </>
  )
}

export default App
