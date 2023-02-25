import {
  useLoaderData,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom'
import { Song } from '@/models/Song'
import { List } from '@/components/layout/SongList'
import { Search } from '@/components/layout/Search'
import { searchSongsByQuery } from '@/services'
import { Routes } from '@/utils/routes'

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
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')

  if (!query?.trim().length) return redirect(Routes.HOME)

  return {
    results: await searchSongsByQuery(query),
    query
  }
}