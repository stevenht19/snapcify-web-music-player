import { SwiperSlide } from 'swiper/react'
import { useMusicPlayer } from '@/hooks'
import { TopSongSkeleton } from '@/components/atoms/Skeleton'
import Carousel from '@/components/atoms/Carousel'
import TopSong from '@/components/atoms/Card/TopSong'

const Top = () => {
  const { topSongs, isLoading } = useMusicPlayer()

  return (
    <div>
      <h2>Top Songs</h2>
      <Carousel>
        {
          isLoading ? 
          [1, 2, 3, 4, 5, 6, 7].map((n) => (
            <SwiperSlide key={n}>
              <TopSongSkeleton />
            </SwiperSlide>
          )) : 
          topSongs.map((song) => (
            <SwiperSlide key={song.id}>
              <TopSong
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