import skeleton from '@/assets/skeleton.png'
import SkeletonText from './SkeletonText'
import './style.css'

const AlbumSkeleton = () => {
  return (
    <div className='album-skeleton'>
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

export default AlbumSkeleton