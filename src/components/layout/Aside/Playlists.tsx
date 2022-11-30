import { useBoolean, usePlaylists } from '@/hooks'
import { PlaylistIcon } from '@/components/atoms/Icon'
import { Form } from './PlaylistForm'
import { NavItem } from './NavItem'
import { ModalForm } from './PlaylistForm/ModalForm'
import { ListOfPlaylists } from './ListOfPlaylists'

export const Playlists = () => {
  const { boolean, onOpen, onClose } = useBoolean()
  const { addPlaylist } = usePlaylists()

  return <>
    <ModalForm
      title='Create a new Playlist'
      show={boolean}
      onClose={onClose}
    >
      <Form onClose={onClose} handleSubmit={addPlaylist} />
    </ModalForm>
    <NavItem 
      isNotLink 
      onClick={onOpen}
    >
      <PlaylistIcon color={'var(--gray500)'} />
      Playlist
      <PlusIcon />
    </NavItem>
    <ListOfPlaylists />
  </>
}
const PlusIcon = () => (
  <div className='icons item__icon--add'>
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