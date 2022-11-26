import { Modal, ModalHeader } from '@/components/atoms/Modal'
import { useBoolean } from '@/hooks'
import { SearchSong } from './SearchSong'
import './style.css'

export const AddSong = () => {
  const { boolean, onOpen, onClose } = useBoolean()

  return <>
    <button onClick={onOpen} className='icon-button'>
      Add song
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      </svg>
    </button>
    {
      boolean ?
      <Modal>
        <ModalHeader onClose={onClose}>
          Search Songs
        </ModalHeader>
        <SearchSong />
      </Modal>
      : null
    }
  </>
}
