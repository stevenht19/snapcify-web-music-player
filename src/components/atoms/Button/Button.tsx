import './style.css'

const Button = ({
  children,
  isDisabled,
  isGray,
  onClick
}: {
  children: React.ReactNode
  isDisabled?: boolean
  isGray?: boolean
  onClick?: () => void
}) => {
  return (
    <button 
      disabled={isDisabled} 
      className={'button' + (isGray ? ' button--gray' : '') + (isDisabled ? ` button--disabled` : '')}
      {...(onClick && { onClick })}
    >
      {children}
    </button>
  )
}

export default Button