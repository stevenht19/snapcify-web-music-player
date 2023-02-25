import { useBoolean, usePlaylists } from '@/hooks'
import { AlertDialog } from '@/components/atoms/AlertDialog'
import { Playlist } from '@/models/Playlist'
import { Routes } from '@/utils/routes'
import { RiEdit2Fill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import { NavItem } from '../NavItem'

type Props = {
  playlist: Playlist
  action(): void
}

export const PlaylistItem = ({ 
  playlist,
  action 
}: Props) => {
  const { id, name } = playlist
  const { onDelete } = usePlaylists()
  const { boolean, onOpen, onClose } = useBoolean()

  const onConfirm = () => {
    onDelete(id, onClose)
  }

  return <>
    <AlertDialog
      isOpen={boolean}
      onClose={onClose}
      onConfirm={onConfirm}
      title='Delete Playlist?'
    />
    <NavItem path={`${Routes.PLAYLIST}/${id}`}>
      {name}
      <div className='icons'>
        <IconButton onClick={action}>
          <RiEdit2Fill className='action' />
        </IconButton>
        <IconButton onClick={onOpen}>
          <AiFillDelete className='action' />
        </IconButton>
      </div>
    </NavItem>
  </>
}

const IconButton = ({ children, onClick }: {
  children: React.ReactNode
  onClick: Props['action']
}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}