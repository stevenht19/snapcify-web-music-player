export const RightIcon = ({ children, onClick }: {
  children: React.ReactNode,
  onClick: () => void
}) => {
  return (
    <button 
      className='right-icon' 
      onClick={onClick}
    >
      {children}
    </button>
  )
}