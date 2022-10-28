import { Swiper } from 'swiper/react'
import 'swiper/css'

type Props = {
  children: React.ReactNode
}

const Carousel = ({ children }: Props) => {
  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={5.5}
      loop={true}
    >
      {children}
    </Swiper>
  )
}

export default Carousel