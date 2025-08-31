import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
// Import Swiper React components
import { Swiper } from 'swiper/react'
export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto max-h-[600px] rounded-xl"
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="Banner 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="Banner 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} alt="Banner 6" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
