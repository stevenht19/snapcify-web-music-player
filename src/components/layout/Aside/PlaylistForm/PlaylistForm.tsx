import { useNavigate } from 'react-router-dom'
import { Playlist } from '@/models/Playlist'
import { Button } from '@/components/atoms/Button'
import { FormInput } from '@/components/atoms/Input'
import './style.css'

type Props = {
  onClose: () => void
  onSubmitAction: (_p: Playlist) => void
}

type Inputs = {
  name: string
  description: string
}

const PlaylistForm = ({
  onClose,
  onSubmitAction
}: Props) => {
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    const entries = new FormData(e.target as HTMLFormElement)
    const { name, description } = Object.fromEntries(entries) as Inputs
    
    if (!name.trim().length) return

    let id = Date.now()
    onSubmitAction({
      id,
      name,
      ...(description && { description })
    })
    onClose()
    navigate(`/playlist/${id}`)
  }

  return (
    <form
      className='form__content'
      onSubmit={onSubmit}
    >
      <div>
        <FormInput
          placeholder={'Type a name (required)'}
          name={'name'}
        />
      </div>
      <div>
        <textarea
          className={'input form__description'}
          placeholder={'Type an optional description'}
          name={'description'}
          spellCheck={false}
        />
      </div>
      <Button isDisabled={false}>
        Add
      </Button>
    </form>
  )
}

export default PlaylistForm