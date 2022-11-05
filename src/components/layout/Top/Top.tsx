import { SwiperSlide } from 'swiper/react'
import { useMusicPlayer } from '@/hooks'
import { TopSongSkeleton } from '@/components/atoms/Skeleton'
import Album from '@/components/atoms/TopSong'
import Carousel from '@/components/atoms/Carousel'

const Top = () => {
  const { topSongs, isLoading } = useMusicPlayer()

  return (
    <div>
      <h2>Top Songs</h2>
      <Carousel>
        {
          isLoading ? 
          [1, 2, 3, 4, 5, 6, 7].map((n) => (
            <SwiperSlide>
              <TopSongSkeleton key={n} />
            </SwiperSlide>
          )) : 
          topSongs.map((props) => (
            <SwiperSlide>
              <Album 
                key={props.id} 
                {...props} 
              />
            </SwiperSlide>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Top