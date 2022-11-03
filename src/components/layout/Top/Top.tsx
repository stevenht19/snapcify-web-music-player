import { SwiperSlide } from 'swiper/react'
import { useMusicPlayer } from '@/hooks'
import Album from '@/components/atoms/Album'
import Carousel from '@/components/atoms/Carousel'
import { AlbumSkeleton } from '@/components/atoms/Skeleton'
import './style.css'

const Top = () => {
  const { isLoading } = useMusicPlayer()

  return (
    <div className='top'>
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