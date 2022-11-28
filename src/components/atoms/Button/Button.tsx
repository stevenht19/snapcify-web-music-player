import './style.css'

const Button = ({
  children,
  isDisabled,
  isRed,
  onClick
}: {
  children: React.ReactNode
  isDisabled: boolean
  isRed?: boolean
  onClick?: () => void
}) => {
  return (
    <button 
      disabled={isDisabled} 
      className={'button' + (isRed ? ' button--red' : '') + (isDisabled ? ` button--disabled` : '')}
      {...(onClick && { onClick })}
    >
      {children}
    </button>
  )
}

export default Button