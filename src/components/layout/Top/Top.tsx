import { SwiperSlide } from 'swiper/react'
import { useMusicPlayer } from '@/hooks'
import { TopSongSkeleton } from '@/components/atoms/Skeleton'
import Carousel from '@/components/atoms/Carousel'
import TopSong from '@/components/atoms/TopSong'

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
          topSongs.map((song) => (
            <SwiperSlide>
              <TopSong 
                key={song.id} 
                song={song}
              />
            </SwiperSlide>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Top