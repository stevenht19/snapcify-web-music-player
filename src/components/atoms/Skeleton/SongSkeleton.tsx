import SkeletonText from './SkeletonText'
import './style.css'

const SongSkeleton = () => {
  return (
    <div className='skeleton'>
      <div className='skeleton__square'></div>
      <div className='song__image song__image--skeleton'></div>
      <div className='skeleton__body'>
        <SkeletonText />
        <SkeletonText />
      </div>
    </div>
  )
}

export default SongSkeleton