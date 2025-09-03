import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ServiceDetailsPage from '../pages/ServiceDetailsPage'

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
    ],
  },
])

export default router
