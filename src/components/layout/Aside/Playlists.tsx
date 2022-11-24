import { useBoolean, usePlaylists } from '@/hooks'
import { Form } from '@/components/layout/PlaylistForm'
import { PlaylistIcon } from '@/components/atoms/Icon'
import { NavItem } from './NavItem'

export const Playlists = () => {
  const { playlists, addPlaylist } = usePlaylists()
  const { boolean, onOpen, onClose } = useBoolean()

  return <>
    <Form
      show={boolean}
      onClose={onClose}
      onSubmitAction={addPlaylist}
    />
    <NavItem isNotLink onClick={onOpen}>
      <PlaylistIcon 
        color={'var(--gray500)'} 
      />
      Playlist
      <PlusIcon />
    </NavItem>
    <li className='nav__section'>PLAYLISTS</li>
    {
      playlists.map((playlist) => (
        <NavItem path={`playlist/${playlist.id}`}>
          <PlaylistIcon color={'var(--gray500)'} />
          {playlist.name}
        </NavItem>
      ))
    }
  </>
}

const PlusIcon = () => (
  <div className='item__add'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>
  </div>
)