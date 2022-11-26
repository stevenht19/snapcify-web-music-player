export const ErrorMessage = ({ children, error }: {
  children: React.ReactNode,
  error: boolean
}) => {
  if (error) return null

  return (
    <p className='form__error'>{children}</p>
  )
}