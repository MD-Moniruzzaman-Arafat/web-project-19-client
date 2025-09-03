import { Link } from 'react-router'

export default function Menu() {
  return (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <Link to="/add-new-service">Add New Service</Link>
      </li>
      <li>
        <a className="btn btn-outline text-[#FF3811] border-[#FF3811] text-xs lg:hidden flex">
          Appointment
        </a>
      </li>
    </>
  )
}
