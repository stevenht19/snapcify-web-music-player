import { useForm, SubmitHandler } from 'react-hook-form'
import { Playlist } from '@/models/Playlist'
import { Modal, ModalHeader } from '@/components/atoms/Modal'
import { ErrorMessage } from './ErrorMessage'
import { Inputs } from './types'
import './style.css'
import { useNavigate } from 'react-router-dom'

type Props = {
  show: boolean
  onClose: () => void
  onSubmitAction: (_p: Playlist) => void
}

const PlaylistForm = ({ show, onSubmitAction, onClose }: Props) => {
  const navigateTo = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  if (!show) return null

  const error = errors.name?.type.length

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let id = Date.now()
    onSubmitAction({...data, id})
    onClose()
    navigateTo(`playlist/${id}`)
  }
  
  return (
    <Modal>
      <form 
        className='form' 
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModalHeader onClose={onClose}>
          Create a new playlist
        </ModalHeader>
        <div className='form__content'>
          <div>
            <input
              type='text'
              spellCheck={false}
              autoComplete='off'
              placeholder='Type a name'
              className={'form__input' + (error ? ' form__input--error' : '')}
              {...register('name', { required: true })}
            />
            {
              error ? ( 
                <ErrorMessage>
                  Playlist name is required
                </ErrorMessage> 
              ) : null
            }
          </div>
          <div>
            <textarea
              className='form__description'
              placeholder='Type an optional description'
              spellCheck={false}
              {...register('description')}
            />
          </div>
          <button className='form__button'>
            Add
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default PlaylistForm