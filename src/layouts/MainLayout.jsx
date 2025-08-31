import { Outlet } from 'react-router'
import Navbar from '../components/navbar/Navbar'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
