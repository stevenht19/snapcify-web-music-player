const getFetch = async (url: string) => {
  return fetch(url)
    .then(res => res.json())
}

export default getFetch