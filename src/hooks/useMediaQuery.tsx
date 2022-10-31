import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const mediaQ = window.matchMedia(query)
    if (mediaQ.matches !== matches) {
      setMatches(mediaQ.matches)
    }
    const listener = () => setMatches(mediaQ.matches)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [matches, query])

  return matches
}

export default useMediaQuery