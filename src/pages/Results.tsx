import {
  useLoaderData,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom'
import { Song } from '@/models'
import { searchSongsByQuery } from '@/services'
import Results from '@/components/layout/Results'

type Response = {
  results: Song[],
  query: string
}

export default function ResultsPage() {
  const { results, query } = useLoaderData() as Response

  return (
    <div>
      <h2>Results of {query}</h2>
      <Results items={results} />
    </div>
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