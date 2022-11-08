import { useState } from 'react'

const useBoolean = (bool = false) => {
  const [boolean, setBoolean] = useState<boolean>(bool)

  const onToggle = () => setBoolean(b => !b)
  
  return {
    boolean,
    onToggle
  }
}

export default useBoolean