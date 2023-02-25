import { useState } from 'react'

const useBoolean = (bool: boolean = false) => {
  const [boolean, setBoolean] = useState<boolean>(bool)

  const onToggle = () => setBoolean(b => !b)
  
  const onOpen = () => setBoolean(true)

  const onClose = () => setBoolean(false)

  const onAsyncClose = (n: number) => {
    setTimeout(() => {
      setBoolean(false)
    }, 2000 + n)
  }

  return { 
    boolean, 
    onToggle, 
    onOpen,
    onClose,
    onAsyncClose
  } 
}

export default useBoolean