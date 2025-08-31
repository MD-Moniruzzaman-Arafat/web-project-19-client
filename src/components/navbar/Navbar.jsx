import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoSearchOutline } from 'react-icons/io5'
import logo from '../../assets/logo.svg'
import Menu from './Menu'

export default function Navbar() {
  return (
    <>
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Menu />
            </ul>
          </div>
          <a className="btn btn-ghost">
            <img src={logo} alt="Logo" className="h-10" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Menu />
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a href="">
            <IoSearchOutline />
          </a>
          <a href="">
            <HiOutlineShoppingBag />
          </a>
          <a className="btn btn-outline text-[#FF3811] border-[#FF3811] text-xs hidden lg:flex">
            Appointment
          </a>
        </div>
      </div>
    </>
  )
}
