type Props = {
  placeholder: string
  name: string
}

const FormInput = ({
  placeholder,
  name,
}: Props) => {
  return (
    <input
      type='text'
      autoComplete='off'
      name={name}
      className={'input'}
      placeholder={placeholder}
    />
  )
}

export default FormInput