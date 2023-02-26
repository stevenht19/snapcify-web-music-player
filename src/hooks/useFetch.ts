import useSWR from 'swr'

const useFetch = <T>(
  url: string, 
  fetcher: (args: string) => Promise<T[]>
) => {
  const { data, error } = useSWR<T[]>(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })

  return {
    data,
    isLoading: !error && !data
  }
}

export default useFetch