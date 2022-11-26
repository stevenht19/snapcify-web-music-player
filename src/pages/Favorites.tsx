import { useMusicPlayer } from '@/hooks'
import { Paginator } from '@/components/layout/Paginator'
import { FavoriteIcon } from '@/components/atoms/Icon'
import { SongList } from '@/components/layout/SongList'

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
    <SongList 
      items={favorites}
      title={title}
      category='FAVORITE'
      message={`You dont't have favorites yet`}
    />
  </>
}