import { useState, useEffect } from 'react'
import { useBoolean } from '@/hooks'
import { Song } from '@/models/Song'
import { searchSongsByQuery } from '@/services'

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<Song[]>([])
  const { 
    boolean: isTyping, 
    onOpen: setIsTyping, 
    onClose: setIsNotTyping 
  } = useBoolean()

  useEffect(() => {
    if (!searchTerm.trim().length) {
      setIsNotTyping()
      return
    }

    let id = setTimeout(() => {
      setIsNotTyping()
      searchSongsByQuery(searchTerm)
        .then(setResults)
    }, 1200)
    
    return () => clearInterval(id)

  }, [searchTerm])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    if (searchTerm.trim().length < 2) return
    setIsTyping()
  }

  const onSelect = (song: Song) => {
    setResults(results.map((s) => s.id === song.id ? ({...s, isSelected: !s.isSelected }) : s))
  }

  return {
    isTyping,
    searchTerm,
    results,
    onChange,
    onSelect
  }
}
export default useSearch
