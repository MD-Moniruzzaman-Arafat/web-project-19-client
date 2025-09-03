import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import AddNewService from '../pages/AddNewService'
import CheckOut from '../pages/CheckOut'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ServiceDetailsPage from '../pages/ServiceDetailsPage'
import SignUpPage from '../pages/SignUpPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/service-details',
        element: <ServiceDetailsPage />,
      },
      {
        path: '/checkout',
        element: <CheckOut />,
      },
      {
        path: '/add-new-service',
        element: <AddNewService />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ],
  },
])

export default router
