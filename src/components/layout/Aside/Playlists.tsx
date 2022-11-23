import { Form } from '@/components/layout/PlaylistForm'
import { PlaylistIcon } from '@/components/atoms/Icon'
import { useBoolean, usePlaylists } from '@/hooks'

const Playlists = () => {
  const { playlists, addPlaylist } = usePlaylists()
  const { boolean, onOpen, onClose } = useBoolean() 
  
  return <>
    {
      boolean ? (
        <Form
          onClose={onClose}
          onSubmitAction={addPlaylist} 
        />
      ) : null
    }
    <li className='navbar__item'>
      <PlaylistIcon color={'var(--gray500)'} />
      Create Playlist
      <button className='item__add' onClick={onOpen}>
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
          {playlist.name}
        </li>
      ))
    }
  </>
}

export default Playlists