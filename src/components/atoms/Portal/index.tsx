import ReactDOM from 'react-dom'

const ReactPortal = ({ children }: {
  children: React.ReactNode
}) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('portal')!
  )
}

export default ReactPortal