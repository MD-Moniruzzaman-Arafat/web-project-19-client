import { Link } from 'react-router'
import img2 from '../assets/images/banner/3.jpg'
import img from '../assets/images/checkout/checkout.png'

export default function ServiceDetailsPage() {
  return (
    <>
      <div className="container mx-auto my-20 ">
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            height: '300px',
          }}
          className="max-w-6xl mx-auto flex items-center px-10"
        >
          <h1 className="text-3xl font-extrabold text-center text-white">
            Service Details
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto my-20">
          <div className="col-span-2">
            <img src={img2} alt="" className="rounded-lg" />
            <div className="my-10 ">
              <h1 className="text-2xl font-bold">Unique Car Engine Service</h1>
              <p className="text-justify mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{' '}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 my-10">
              <div className="border-y-2 border-red-800 rounded-xl p-5">
                <h1 className="text-xl font-bold">Instant Car Services</h1>
                <p className="text-justify mt-2 font-extralight">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
              <div className="border-y-2 border-red-800 rounded-xl p-5">
                <h1 className="text-xl font-bold">24/7 Quality Service</h1>
                <p className="text-justify mt-2 font-extralight">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
              <div className="border-y-2 border-red-800 rounded-xl p-5">
                <h1 className="text-xl font-bold">Easy Customer Service</h1>
                <p className="text-justify mt-2 font-extralight">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
              <div className="border-y-2 border-red-800 rounded-xl p-5">
                <h1 className="text-xl font-bold">Quality Cost Service</h1>
                <p className="text-justify mt-2 font-extralight">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
            </div>
            <div className="my-10">
              <p className="text-justify">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{' '}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">
                3 Simple Steps to Process
              </h2>
              <p className="text-justify">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text
              </p>
            </div>
          </div>
          <div className=" col-span-1">
            <div>
              <h2 className="text-xl font-bold mb-2">Price $250.00</h2>
              <Link to="/checkout" className="btn bg-[#FF5733] text-white">
                Proceed Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
