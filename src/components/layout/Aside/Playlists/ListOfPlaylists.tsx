import { useParams } from 'react-router-dom'
import { Playlist } from '@/models/Playlist'
import { useBoolean, usePlaylists } from '@/hooks'
import { Modal, ModalHeader } from '@/components/atoms/Modal'
import { Form } from './Form'
import { PlaylistItem } from './PlaylistItem'
import { Divider } from './Divider'

export const ListOfPlaylists = () => {
  const { id } = useParams()
  const { boolean: isOpen, onOpen, onClose } = useBoolean()
  const { playlists, onEdit } = usePlaylists()

  const playlist = playlists.find(p => p.id === Number(id))
  
  const handleSubmit = (playlist: Playlist) => {
    onEdit(playlist, onClose)
  }

  return <>
    <Modal show={isOpen}>
      <ModalHeader 
        text='Edit Playlist' 
        onClose={onClose} 
      />
      <Form
        textButton='Edit'
        id={playlist?.id}
        name={playlist?.name}
        description={playlist?.description}
        handleSubmit={handleSubmit}
      />
    </Modal>
    <Divider text='Playlists' />
    {
      playlists?.map((playlist) => (
        <PlaylistItem
          key={playlist.id}
          playlist={playlist}
          action={onOpen}
        />
      ))
    }
  </>
}
