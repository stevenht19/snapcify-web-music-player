import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Playlist } from '@/models/Playlist'
import { Modal, ModalHeader } from '@/components/atoms/Modal'
import { FormInput } from '@/components/atoms/Input'
import { ErrorMessage } from './ErrorMessage'
import { Inputs } from './types'
import './style.css'

type Props = {
  show: boolean
  onClose: () => void
  onSubmitAction: (_p: Playlist) => void
}

const PlaylistForm = ({ show, onSubmitAction, onClose }: Props) => {
  const navigateTo = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const error = !Boolean(errors.name?.type.length)

  if (!show) return null

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let id = Date.now()
    onSubmitAction({ ...data, id })
    onClose()
    navigateTo(`playlist/${id}`)
  }

  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        Create a new playlist
      </ModalHeader>
      <form 
        className='form__content' 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <FormInput
            register={register}
            error={!error}
            registerName='name'
            placeholder='Type a name'
          />
          <ErrorMessage error={error}>
            Playlist name is required
          </ErrorMessage>
        </div>
        <div>
          <textarea
            className='input form__description'
            placeholder='Type an optional description'
            spellCheck={false}
            {...register('description')}
          />
        </div>
        <button className='form__button'>
          Add
        </button>
      </form>
    </Modal>
  )
}

export default PlaylistForm