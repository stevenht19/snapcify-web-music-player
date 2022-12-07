import { useParams } from 'react-router-dom'
import { Playlist } from '@/models/Playlist'
import { useBoolean, usePlaylists } from '@/hooks'
import { ModalForm } from '../ModalForm'
import { Form } from '../PlaylistForm'
import { PlaylistItem } from './PlaylistItem'

export const ListOfPlaylists = () => {
  const { id } = useParams()
  const { boolean, onOpen, onClose } = useBoolean()
  const { playlists, onEdit } = usePlaylists()

  const playlist = playlists.find(p => p.id === Number(id))
  
  const handleSubmit = (playlist: Playlist) => {
    onEdit(playlist, onClose)
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
        handleSubmit={handleSubmit}
        textButton='Edit'
      />
    </ModalForm>
    <li className='nav__section'>
      PLAYLISTS
    </li>
    {
      playlists.map((playlist) => (
        <PlaylistItem
          key={playlist.id}
          playlist={playlist}
          onEdit={onOpen}
        />
      ))
    }
  </>
}
