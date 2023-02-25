import { Song } from '@/models/Song'
import { List } from '@/components/layout/SongList'
import { Search } from '@/components/layout/Search'
import { useLoaderData } from 'react-router-dom'

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
      category='RESULTS'
      title={`Results of ${query}`}
    />
  </>
}
