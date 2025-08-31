import aboutImg from '../../assets/images/about_us/person.jpg'

export default function AboutUs() {
  return (
    <>
      <div className="container mx-auto my-20 flex flex-col-reverse lg:flex-row justify-between gap-10">
        <div>
          <img
            src={aboutImg}
            alt="About Us"
            className="w-[320px] lg:w-[600px] h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h6 className="text-xs text-[#FF3811] font-bold mb-3">About Us</h6>
          <h1 className="text-3xl font-extrabold max-w-[300px] mb-3">
            We are qualified & of experience in this field
          </h1>
          <p className="mt-2 text-[#737373] font-extralight max-w-xl mb-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="mt-2 text-[#737373] font-extralight max-w-xl mb-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </>
  )
}
