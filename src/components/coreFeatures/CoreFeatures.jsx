import img5 from '../../assets/icons/check.svg'
import img6 from '../../assets/icons/deliveryt.svg'
import img2 from '../../assets/icons/Group 38729.svg'
import img1 from '../../assets/icons/group.svg'
import img3 from '../../assets/icons/person.svg'
import img4 from '../../assets/icons/Wrench.svg'

export default function CoreFeatures() {
  return (
    <>
      <div className="container mx-auto my-20">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h6 className="text-[#FF3811] text-xs font-bold">Core Features</h6>
          <h1 className="text-3xl font-extrabold">Why Choose Us</h1>
          <p className="mt-2 text-[#737373] font-extralight">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">
          <div className="bg-[#FF3811] p-4 rounded-lg shadow flex items-center flex-col gap-4 text-white">
            <img src={img1} alt="" />
            <h5 className="font-bold">Expert Team</h5>
          </div>
          <div className="bg-[#FF3811] p-4 rounded-lg shadow flex items-center flex-col gap-4 text-white">
            <img src={img2} alt="" />
            <h5 className="font-bold">Timely Delivery</h5>
          </div>
          <div className="bg-[#FF3811] p-4 rounded-lg shadow flex items-center flex-col gap-4 text-white">
            <img src={img3} alt="" />
            <h5 className="font-bold">24/7 Support</h5>
          </div>
          <div className="bg-[#FF3811] p-4 rounded-lg shadow flex items-center flex-col gap-4 text-white">
            <img src={img4} alt="" />
            <h5 className="font-bold">Best Equipment</h5>
          </div>
          <div className="bg-[#FF3811] p-4 rounded-lg shadow flex items-center flex-col gap-4 text-white">
            <img src={img5} alt="" />
            <h5 className="font-bold">100% Guranty</h5>
          </div>
          <div className="bg-[#FF3811] p-4 rounded-lg shadow flex items-center flex-col gap-4 text-white">
            <img src={img6} alt="" />
            <h5 className="font-bold">Fast Delivery</h5>
          </div>
        </div>
      </div>
    </>
  )
}
