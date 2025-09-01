import { FaStar } from 'react-icons/fa'
import img from '../../assets/images/products/1.png'

export default function PopularProductsCard() {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure className="bg-[#F3F3F3]">
          <img src={img} alt="Electrical System" className="w-60 " />
        </figure>
        <div className="card-body text-center">
          <div className="flex justify-center text-[#FF912C]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h2 className="">Electrical System</h2>
          <p className="text-[#FF3811] font-bold">$20.00</p>
        </div>
      </div>
    </>
  )
}
