import ServiceCard from './ServiceCard'

export default function Service() {
  return (
    <>
      <div className="container mx-auto my-20">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h6 className="text-[#FF3811] text-xs font-bold">Service</h6>
          <h1 className="text-3xl font-extrabold">Our Service Area</h1>
          <p className="mt-2 text-[#737373] font-extralight">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div className="text-center mt-10">
          <button className="btn btn-outline border-[#FF3811] text-[#FF3811]">
            More Services
          </button>
        </div>
      </div>
    </>
  )
}
