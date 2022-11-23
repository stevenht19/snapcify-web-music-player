export const ErrorMessage = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <p className='form__error'>{children}</p>
  )
}