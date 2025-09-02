import AboutUs from '../components/aboutUs/AboutUs'
import Carousel from '../components/carousel/Carousel'
import PopularProducts from '../components/popularProducts/PopularProducts'
import Service from '../components/service/Service'
import Team from '../components/team/Team'

export default function HomePage() {
  return (
    <>
      <Carousel />
      <AboutUs />
      <Service />
      <PopularProducts />
      <Team />
    </>
  )
}
