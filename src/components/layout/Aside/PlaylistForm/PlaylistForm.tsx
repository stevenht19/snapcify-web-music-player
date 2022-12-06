import { useForm } from '@/hooks'
import { Button } from '@/components/atoms/Button'
import { FormInput } from '@/components/atoms/Input'
import { Playlist } from '@/models/Playlist'
import { ModalFooter } from '@/components/atoms/Modal'
import './style.css'

type Inputs = {
  name?: string
  description?: string
}

type Props = Inputs & {
  id?: number
  textButton?: string
  handleSubmit: (_: Playlist) => void
}

const PlaylistForm = ({
  id,
  name,
  description,
  textButton,
  handleSubmit
}: Props) => {

  const { formValues, onChange } = useForm<Inputs>({
    name: name || '',
    description: description || '',
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit({ id: id || Date.now(), ...formValues } as Playlist)
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
      <ModalFooter>
        <Button isDisabled={false}>
          {textButton || 'Add'}
        </Button>
      </ModalFooter>
    </form>
  )
}

export default PlaylistForm