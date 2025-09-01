import AboutUs from '../components/aboutUs/AboutUs'
import Carousel from '../components/carousel/Carousel'
import PopularProducts from '../components/popularProducts/PopularProducts'
import Service from '../components/service/Service'

export default function HomePage() {
  return (
    <>
      <Carousel />
      <AboutUs />
      <Service />
      <PopularProducts />
    </>
  )
}
