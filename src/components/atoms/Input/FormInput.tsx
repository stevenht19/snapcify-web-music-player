import { UseFormRegister } from 'react-hook-form'

type Inputs = {
  name: string
}

type Props = {
  register: UseFormRegister<Inputs>
  registerName: 'name'
  placeholder: string
  error: boolean
}

const FormInput = ({
  registerName,
  placeholder,
  error,
  register,
}: Props) => {
  return (
    <input
      type='text'
      autoComplete='off'
      className={'input' + (error ? ' input--error' : '')}
      placeholder={placeholder}
      {...register(registerName, { required: true })}
    />
  )
}

export default FormInput