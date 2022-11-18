import { songAdapter } from '@/adapters'

const getSongs = async (args: string) => {
  return fetch(args).then(res => res.json()).then(res => res.map(songAdapter))
}

export default getSongs