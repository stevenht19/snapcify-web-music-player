const indexedDb = self.indexedDB

const getConnection = () => {
  const request = indexedDb.open('FavoritesSnapcifySongs', 1)

  request.onerror = (e) => {
    console.log('error' + e)
  }

  request.onupgradeneeded = () => {
    const db = request.result
    console.log('created')
    if (!db.objectStoreNames.contains('favoriteSongs')) {
      db.createObjectStore('favoriteSongs', {
        keyPath: 'id'
      })
    }
  }

  request.onsuccess = () => {
    console.log('indexed db working')
  }
}
export default getConnection