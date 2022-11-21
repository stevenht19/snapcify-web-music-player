import Favorites from '@/components/layout/Favorites'
import { Paginator } from '@/components/layout/Paginator'
import { FavoriteIcon } from '@/components/atoms/Icon'
import { useMusicPlayer } from '@/hooks'

export default function FavoritesPage() {
  const { favorites } = useMusicPlayer()
  
  return <>
    <Paginator
      title='Favorites'
      icon={
        <FavoriteIcon 
          color='var(--white)' 
          width={18} 
          height={18} 
        />
      }
    />
    <Favorites favorites={favorites} />
  </>
}