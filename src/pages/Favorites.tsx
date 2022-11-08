import Favorites from '@/components/layout/Favorites/Favorites'

export default function FavoritesPage() {
  return (
    <Favorites />
  )
}
export async function loader() {
  return new Promise((resolve) => setTimeout(resolve, 500))
}