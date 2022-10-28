import { SwiperSlide } from 'swiper/react'
import Album from '@/components/atoms/Album'
import Carousel from '@/components/atoms/Carousel'

const Top = () => {
  return (
    <div>
      <h2>Top Songs</h2>
      <Carousel>
        {
          [1, 2, 3, 4, 5, 6, 7].map(() => (
            <SwiperSlide>
              <Album />
            </SwiperSlide>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Top