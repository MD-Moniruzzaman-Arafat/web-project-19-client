import { IoMdArrowForward } from 'react-icons/io'
import img from '../../assets/images/services/1.jpg'

export default function ServiceCard() {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={img} alt="Electrical System" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Electrical System</h2>
          <div className="card-actions justify-end items-center text-[#FF3811]">
            <p>Price : $20.00</p>
            <button>
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
