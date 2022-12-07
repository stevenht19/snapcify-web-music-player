import { useBoolean, usePlaylists } from '@/hooks'
import { AlertDialog } from '@/components/atoms/AlertDialog'
import { Playlist } from '@/models/Playlist'
import { Routes } from '@/utils/routes'
import { NavItem } from '../NavItem'

type VoidFunction = () => void

type Props = {
  playlist: Playlist
  onEdit: VoidFunction
}

export const PlaylistItem = ({ 
  playlist,
  onEdit 
}: Props) => {
  const { id, name } = playlist
  const { onDelete } = usePlaylists()

  const { boolean, onOpen, onClose } = useBoolean()

  const onConfirm = () => {
    onDelete(playlist.id, onClose)
  }

  return <>
    <AlertDialog
      isOpen={boolean} 
      onConfirm={onConfirm} 
      onClose={onClose} 
    />
    <NavItem path={`${Routes.PLAYLIST}/${id}`}>
      {name}
      <div className='icons'>
        <EditIcon onEdit={onEdit} />
        <DeleteIcon onDelete={onOpen} />
      </div>
    </NavItem>
  </>
}

const EditIcon = (props: { onEdit: VoidFunction }) => (
  <button className='icon' onClick={props.onEdit}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
    >
      <path d="M16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
    </svg>
  </button>
)

const DeleteIcon = (props: { onDelete: VoidFunction }) => (
  <button 
    className='icon' 
    onClick={props.onDelete}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
    >
      <path 
        d="M6 7H5v13a2 2 0 002 2h10a2 2 0 002-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z">
      </path>
    </svg>
  </button>
)
