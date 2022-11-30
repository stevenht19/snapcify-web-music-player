import { useForm } from '@/hooks'
import { Button } from '@/components/atoms/Button'
import { FormInput } from '@/components/atoms/Input'
import { Playlist } from '@/models/Playlist'
import './style.css'

type Inputs = {
  name?: string
  description?: string
}

type Props = Inputs & {
  id?: number
  onClose: () => void
  handleSubmit: (_p: Playlist, onClose: Props['onClose']) => void
}

const PlaylistForm = ({
  id,
  name,
  description, 
  onClose,
  handleSubmit
}: Props) => {

  const { formValues, onChange } = useForm<Inputs>({
    name: name || '',
    description: description || '',
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit({ id: id || Date.now(), ...formValues } as Playlist, onClose)
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
          onChange={onChange}
          value={formValues.name!}
        />
      </div>
      <div>
        <textarea
          className={'input form__description'}
          placeholder={'Type an optional description'}
          name={'description'}
          spellCheck={false}
          onChange={onChange}
          value={formValues.description}
        />
      </div>
      <Button isDisabled={false}>
        Add
      </Button>
    </form>
  )
}

export default PlaylistForm