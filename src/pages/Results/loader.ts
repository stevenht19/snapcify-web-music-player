import { searchSongsByQuery } from '@/services'
import { Routes } from '@/utils/routes'
import { LoaderFunctionArgs, redirect } from 'react-router-dom'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')

  if (!query?.trim().length) return redirect(Routes.HOME)

  return {
    results: await searchSongsByQuery(query),
    query
  }
}