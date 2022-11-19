const getArtists = async () => {
  return fetch(import.meta.env.VITE_API + '/artists').then((res) => res.json())
}

export default getArtists