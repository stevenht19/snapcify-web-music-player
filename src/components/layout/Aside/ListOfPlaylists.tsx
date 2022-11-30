import { useParams } from 'react-router-dom'
import { useBoolean, usePlaylists } from '@/hooks'
import { PlaylistIcon } from '@/components/atoms/Icon'
import { NavItem } from './NavItem'
import { ModalForm } from './PlaylistForm/ModalForm'
import { Form } from './PlaylistForm'

export const ListOfPlaylists = () => {
  const { id } = useParams()

  const { boolean, onOpen, onClose } = useBoolean()
  const { playlists, onEdit, onDelete } = usePlaylists()

  const playlist = playlists.find(p => p.id === Number(id))

  const onEdition = () => {
    onOpen()
  }

  return <>
    <ModalForm
      title='Edit Playlist'
      show={boolean}
      onClose={onClose}
    >
      <Form
        id={playlist?.id}
        name={playlist?.name} 
        description={playlist?.description}
        onClose={onClose} 
        handleSubmit={onEdit}
      />
    </ModalForm>
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
                <div>
                  <PlaylistIcon color={'var(--gray500)'} />
                </div>
                {name}
                <div className='icons'>
                  <EditIcon onEdition={onEdition} />
                  <DeleteIcon onDelete={() => onDelete(id)} />
                </div>
              </NavItem>
            ))
          }
        </>
        : null
    }
  </>
}

const EditIcon = ({ onEdition }: { onEdition: () => void }) => (
  <button className='icon' onClick={onEdition}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
    >
      <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3l1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
    </svg>
  </button>
)

const DeleteIcon = ({ onDelete }: { onDelete: () => void}) => (
  <button className='icon' onClick={onDelete}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
    >
      <path d="M6 7H5v13a2 2 0 002 2h10a2 2 0 002-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
    </svg>
  </button>
)