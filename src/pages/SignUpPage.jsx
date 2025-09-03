import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'
import img from '../assets/images/login/login.svg'

export default function SignUpPage() {
  return (
    <>
      <div className="container mx-auto my-20 p-10 bg-amber-100 rounded-xl">
        <div className="flex flex-col lg:flex-row justify-center">
          <img src={img} alt="Sign Up" className="" />
          <div className="space-y-1 rounded-xl p-5 lg:p-15 shadow-2xl">
            <h1 className="text-3xl font-extrabold text-center text-gray-900">
              Sign Up
            </h1>
            <form action="">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input type="text" className="input" placeholder="Type here" />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input type="text" className="input" placeholder="Type here" />
              </fieldset>
              <button className="w-full py-2 mt-5 font-semibold text-white bg-[#FF3811] rounded-md shadow-md hover:bg-blue-600">
                Sign Up
              </button>
            </form>
            <p className="text-center text-xs my-5">Or Sign Up with</p>
            <div className="flex justify-center space-x-4">
              <button className="text-[#3B5998]">
                <FaFacebookF />
              </button>
              <button className="text-[#0A66C2]">
                <FaLinkedinIn />
              </button>
              <button>
                <FcGoogle />
              </button>
            </div>
            <p className="text-center text-xs my-5">
              Already have an account?{' '}
              <Link to="/login" className="text-[#FF3811]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
