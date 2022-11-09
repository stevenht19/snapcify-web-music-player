interface Song {
  id: string
  url: string
  image: string
  title: string
  artist: string
  isPlaying?: boolean
  isFavorite?: boolean
}
export default Song