import { createContext, useEffect } from 'react'
import getConnection from '@/config/client'

export const IndexedDBContext = createContext(null)

export default function IndexedProvider({ children }: {
  children: React.ReactNode
}) {

  useEffect(() => {
    getConnection()
  }, [])

  return (
    <IndexedDBContext.Provider value={null}>
      {children}
    </IndexedDBContext.Provider>
  )
}
