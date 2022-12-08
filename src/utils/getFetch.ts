/*
fetch(`${import.meta.env.VITE_RAPID_API_URL}${route}`, {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
  }
})*/

const getFetch = async (route: string) => {
  return fetch(import.meta.env.VITE_API + route)
    .then(res => res.json())
}
export default getFetch