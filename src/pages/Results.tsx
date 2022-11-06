import {
  useLoaderData,
  LoaderFunctionArgs,
  Await
} from 'react-router-dom'
import { Suspense } from 'react'
import { Song } from '@/models'
import { searchSongsByQuery } from '@/services'
import TailSpin from '@/components/atoms/Spinner'
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
      {
        <Suspense fallback={<TailSpin />}>
          <Await
            resolve={results}
          >
            {(resolvedResults) => <Results items={resolvedResults} />}
          </Await>
        </Suspense>
      }
    </div>
  )
}
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')
  return { results: await searchSongsByQuery(), query }
}