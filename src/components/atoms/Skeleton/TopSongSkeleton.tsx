import skeleton from '@/assets/skeleton.png'
import SkeletonText from './SkeletonText'
import './style.css'

const TopSongSkeleton = () => {
  return (
    <div>
      <div>
        <img
          src={skeleton}
          className='skeleton__cover'
          alt='Loading'
        />
      </div>
      <div className='skeleton__body'>
        <div className='skeleton__title'></div>
        <SkeletonText />
      </div>
    </div>
  )
}

export default TopSongSkeleton