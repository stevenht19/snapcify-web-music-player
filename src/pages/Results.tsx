import {
  useLoaderData,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom'
import { Song } from '@/models/Song'
import { searchSongsByQuery } from '@/services'
import { SongList } from '@/components/layout/SongList'
import { Search } from '@/components/layout/Search'
import { Routes } from '@/utils/routes'

type Response = {
  results: Song[],
  query: string
}

export default function ResultsPage() {
  const { results, query } = useLoaderData() as Response

  return <>
    <Search />
    <SongList 
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
    results: await searchSongsByQuery(),
    query
  }
}