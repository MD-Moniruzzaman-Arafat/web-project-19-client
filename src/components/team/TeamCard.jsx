import fb from '../../assets/fb.svg'
import img from '../../assets/images/team/1.jpg'
import ln from '../../assets/in.svg'
import tw from '../../assets/tw.svg'

export default function TeamCard() {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-xl">Car Engine Plug</h2>
          <p>Engine Expert</p>
          <div className="flex justify-center gap-4">
            <img src={fb} alt="Facebook" />
            <img src={ln} alt="LinkedIn" />
            <img src={tw} alt="Twitter" />
          </div>
        </div>
      </div>
    </>
  )
}
