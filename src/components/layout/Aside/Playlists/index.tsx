import { MdOutlineFolderOpen } from 'react-icons/md'
import { HiPlus } from 'react-icons/hi'
import { useBoolean, usePlaylists } from '@/hooks'
import { Playlist } from '@/models/Playlist'
import { Modal, ModalHeader } from '@/components/atoms/Modal'
import { Form } from './Form'
import { NavItem } from '../NavItem'
import { ListOfPlaylists } from './ListOfPlaylists'

export const Playlists = () => {
  const { 
    boolean, 
    onOpen, 
    onClose 
  } = useBoolean()
  
  const { addPlaylist } = usePlaylists()

  const handleSubmit = (playlist: Playlist) => {
    addPlaylist(playlist, onClose)
  }

  return <>
    <Modal show={boolean}>
      <ModalHeader 
        text='Create a new Playlist' 
        onClose={onClose} 
      />
      <Form handleSubmit={handleSubmit} />
    </Modal>
    <NavItem 
      isNotLink 
      onClick={onOpen}
    >
      <MdOutlineFolderOpen className='item__icon' />
      Playlist
      <HiPlus className='action--right' size={'1.8rem'}/>
    </NavItem>
    <ListOfPlaylists />
  </>
}
