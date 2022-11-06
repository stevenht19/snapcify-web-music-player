import { Suspense } from 'react'
import { useLoaderData, defer, LoaderFunctionArgs, Await } from 'react-router-dom'
import { searchSongsByQuery } from '@/services'

type Response = {
  results: any,
  query: any
}

export default function Search() {
  const { results, query } = useLoaderData() as Response

  return (
    <div>
      <h2>Results of {query}</h2>
      <Suspense fallback={<div>Loading</div>}>
        <Await resolve={results}>
          {
            (loadedResults) => (
              <div>
                Results!!
              </div>
            )
          }
        </Await>
      </Suspense>
    </div>
  )
}
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')
  return defer({ results: searchSongsByQuery(), query })
}