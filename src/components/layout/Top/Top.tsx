import { SwiperSlide } from 'swiper/react'
import { useMusicPlayer } from '@/hooks'
import Album from '@/components/atoms/Album'
import Carousel from '@/components/atoms/Carousel'
import { AlbumSkeleton } from '@/components/atoms/Skeleton'

const Top = () => {
  const { isLoading } = useMusicPlayer()

  return (
    <div>
      <h2>Top Songs</h2>
      <Carousel>
        {
          [1, 2, 3, 4, 5, 6, 7].map(() => (
            <SwiperSlide>
              {
                isLoading ?
                <AlbumSkeleton />
                : <Album />
              }
            </SwiperSlide>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Top