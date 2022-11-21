import { PlaylistIcon } from '@/components/atoms/Icon'
import { usePlaylists } from '@/hooks'

const Playlists = () => {
  const { playlists, addPlaylist } = usePlaylists()
  
  return <>
    <li className='navbar__item'>
      <PlaylistIcon color={'var(--gray500)'} />
      Create Playlist
      <button className='item__add'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className='item__icon'
        >
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
        </svg>
      </button>
    </li>
    {
      playlists.map((playlist) => (
        <li>

        </li>
      ))
    }
  </>
}

export default Playlists