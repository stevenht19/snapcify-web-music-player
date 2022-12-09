const headers = {
  'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
}

const getFetch = async (route: string) => {
  return fetch(import.meta.env.VITE_API + route, {
    method: 'GET',
  }).then(res => res.json())
}
export default getFetch