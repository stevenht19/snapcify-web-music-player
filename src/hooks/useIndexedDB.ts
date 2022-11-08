import { useContext } from 'react'
import { IndexedDBContext } from '@/context/IndexedDBProvider'

const useIndexedDB = () => {
  return useContext(IndexedDBContext)
}

export default useIndexedDB