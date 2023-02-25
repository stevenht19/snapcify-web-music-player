type Props = {
  placeholder: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
  placeholder,
  name,
  value,
  onChange
}: Props) => {
  return (
    <input
      type='text'
      autoComplete='off'
      className={'input'}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default FormInput