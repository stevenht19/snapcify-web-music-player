const headers = {
  'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
}

const getFetch = async (route: string) => {
  const songs = await fetch(import.meta.env.VITE_API + route, {
    method: 'GET',
    headers
  }).then(res => res.json())
  return songs
}
export default getFetch