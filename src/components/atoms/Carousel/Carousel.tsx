import { Swiper } from 'swiper/react'
import 'swiper/css'

const Carousel = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Swiper
      slidesPerView={2.2}
      spaceBetween={25}
      loop={true}
      breakpoints={{
        632: {
          slidesPerView: 3.3
        },
        1250: {
          slidesPerView: 5.5
        }
      }}
    >
      {children}
    </Swiper>
  )
}
export default Carousel