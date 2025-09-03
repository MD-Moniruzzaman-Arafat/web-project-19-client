import img from '../assets/images/checkout/checkout.png'

export default function AddNewService() {
  return (
    <>
      <div className="container mx-auto my-20">
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            height: '300px',
          }}
          className="max-w-6xl mx-auto flex items-center px-10"
        >
          <h1 className="text-3xl font-extrabold text-center text-white">
            Add New Service
          </h1>
        </div>

        <form className="max-w-6xl mx-auto my-20 p-10 bg-amber-100 rounded-xl">
          <div className="flex flex-col lg:flex-row justify-center gap-5 my-5">
            <input type="text" placeholder="Service Name" className="input" />
            <input type="text" placeholder="Service Price" className="input" />
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-5 my-5">
            <input type="text" placeholder="Text here" className="input" />
            <input type="text" placeholder="Service Type" className="input" />
          </div>
          <div className="flex justify-center gap-10 my-5">
            <textarea
              className="textarea w-[660px]"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="flex justify-center my-5">
            <button className="btn bg-[#FF3811] lg:w-[660px] text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
