import { Swiper } from 'swiper/react'
import 'swiper/css'

type Props = {
  children: React.ReactNode
}

const Carousel = ({ children }: Props) => {
  return (
    <Swiper
      slidesPerView={2.2}
      breakpoints={{
        632: {
          slidesPerView: 3.3
        },
        1250: {
          slidesPerView: 5.5
        }
      }}
      spaceBetween={25}
      loop={true}
    >
      {children}
    </Swiper>
  )
}

export default Carousel