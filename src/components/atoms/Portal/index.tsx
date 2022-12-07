import ReactDOM from 'react-dom'

export const ReactPortal = ({ children }: {
  children: React.ReactNode
}) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('portal')!
  )
}
