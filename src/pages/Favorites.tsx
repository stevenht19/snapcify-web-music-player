import { useMusicPlayer } from '@/hooks'
import { Paginator } from '@/components/layout/Paginator'
import { FavoriteIcon } from '@/components/atoms/Icon'
import { List } from '@/components/layout/SongList'

const title = 'Favorites'

export default function FavoritesPage() {
  const { favorites } = useMusicPlayer()

  return <>
    <Paginator
      title={title}
      icon={
        <FavoriteIcon 
          color='var(--white)' 
          width={18} 
          height={18} 
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