import { RiAddFill } from 'react-icons/ri'
import { useBoolean } from '@/hooks'
import { Modal } from '@/components/atoms/Modal'
import { SearchSongs } from './SearchSong'
import '../style.css'

export const AddSong = () => {
  const { boolean, onOpen, onClose } = useBoolean()

  return <>
    <button 
      onClick={onOpen} 
      className='icon-button'
    >
      <RiAddFill fontSize={'1.7rem'} />
      Add songs
    </button>
    <Modal show={boolean}>
      <SearchSongs onClose={onClose} />
    </Modal>
  </>
}
