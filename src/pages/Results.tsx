import {
  useLoaderData,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom'
import { Song } from '@/models/Song'
import { searchSongsByQuery } from '@/services'
import Results from '@/components/layout/Results'

type Response = {
  results: Song[],
  query: string
}

export default function ResultsPage() {
  const { results, query } = useLoaderData() as Response

  return (
    <Results
      parsedQuery={query}
      items={results}
    />
  )
}
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')
  if (!query?.trim().length) return redirect('/')

  return {
    results: await searchSongsByQuery(),
    query
  }
}