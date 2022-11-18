import { SwiperSlide } from 'swiper/react'
import { useSongs } from '@/hooks'
import { Carousel } from '@/components/atoms/Carousel'
import { TopSongSkeleton } from '@/components/atoms/Skeleton'
import { TopSong } from '@/components/atoms/Card'
import { getNumericArray } from '@/utils'

const API = import.meta.env.VITE_API + '/songs'

const Top = () => {
  return (
    <div>
      <h2>Top Hits</h2>
      <TopCarousel />
    </div>
  )
}

const TopCarousel = () => {
  const { 
    songs, 
    isLoading, 
    handlePlay,
    handleFavorite
  } = useSongs('TOP', API)

  return (
    <Carousel>
      {
        isLoading ? (
          getNumericArray().map((n) => (
            <SwiperSlide key={n}>
              <TopSongSkeleton />
            </SwiperSlide>
          ))
        ) : (
          songs?.map((song) => (
            <SwiperSlide key={song.id}>
              <TopSong
                category='CAROUSEL'
                handlePlay={handlePlay}
                song={song}
              />
            </SwiperSlide>
          ))
        )
      }
    </Carousel>
  )
}

export default Top