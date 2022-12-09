import { SwiperSlide } from 'swiper/react'
import { useSongs } from '@/hooks'
import { Carousel } from '@/components/atoms/Carousel'
import { TopSongSkeleton } from '@/components/atoms/Skeleton'
import { TopSong } from '@/components/atoms/Card'
import { getNumericArray } from '@/utils'

const PATH = '/charts/country' 

const Top = () => {
  return (
    <section>
      <h2>Top in Peru</h2>
      <TopCarousel />
    </section>
  )
}

const TopCarousel = () => {
  const { 
    songs, 
    isLoading, 
    handlePlay,
  } = useSongs('TOP', PATH)

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