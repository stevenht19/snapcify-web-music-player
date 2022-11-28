import { useBoolean, usePlaylists } from '@/hooks'
import { PlaylistIcon } from '@/components/atoms/Icon'
import { Form } from './PlaylistForm'
import { NavItem } from './NavItem'
import ModalForm from './PlaylistForm/ModalForm'

export const Playlists = () => {
  const { playlists, addPlaylist } = usePlaylists()
  const { boolean, onOpen, onClose } = useBoolean()

  return <>
    <ModalForm
      show={boolean}
      onClose={onClose}
    >
      <Form
        onClose={onClose}
        onSubmitAction={addPlaylist}
      />
    </ModalForm>
    <NavItem isNotLink onClick={onOpen}>
      <PlaylistIcon color={'var(--gray500)'} />
      Playlist
      <PlusIcon />
    </NavItem>
    {
      playlists.length ?
        <>
          <li className='nav__section'>PLAYLISTS</li>
          {
            playlists?.map(({ id, name }) => (
              <NavItem
                key={id}
                path={`playlist/${id}`}
              >
                <PlaylistIcon color={'var(--gray500)'} />
                {name}
              </NavItem>
            ))
          }
        </>
      : null
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