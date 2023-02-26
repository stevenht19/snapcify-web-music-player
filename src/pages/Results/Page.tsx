import { Song } from '@/models/Song'
import { List } from '@/components/layout/SongList'
import { Search } from '@/components/layout/Search'
import { useLoaderData } from 'react-router-dom'
import { useMusicPlayer } from '@/hooks'
import { useEffect } from 'react'

type Response = {
  results: Song[],
  query: string
}

export default function ResultsPage() {
  const { results, query } = useLoaderData() as Response

  return <>
    <Search />
    <List 
      items={results}
      category={query}
      title={`Results of ${query}`}
    />
  </>
}
