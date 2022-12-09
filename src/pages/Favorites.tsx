import { useMusicPlayer } from '@/hooks'
import { Paginator } from '@/components/layout/Paginator'
import { FaRegHeart } from 'react-icons/fa'
import { List } from '@/components/layout/SongList'

const title = 'Favorites'

export default function FavoritesPage() {
  const { favorites } = useMusicPlayer()

  return <>
    <Paginator
      title={title}
      icon={
        <FaRegHeart
          color='var(--white)' 
          size='1.5rem' 
        />
      }
    />
    <List 
      items={favorites}
      title={title}
      message={`You dont't have favorites yet`}
    />
  </>
}