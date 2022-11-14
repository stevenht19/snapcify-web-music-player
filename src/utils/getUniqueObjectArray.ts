import { Song } from '@/models';

type Hash = {
  [key: Song['id']]: number
}

const getUniqueObjectArray = (array: Song[]) => {
  let repeated = false
  let hash: Hash = {};

  for (let i in array) {
    if (typeof hash[array[i].id] === 'number') {
      array[i] = array[hash[array[i].id]]
      array[hash[array[i].id]] = {...array[hash[array[i].id]], id: ""}
      repeated = true
    } else {
      hash[array[i].id] = Number(i)
    }
  }
  return {
    array: array.filter(song => song.id.length > 0),
    repeated
  }
}

export default getUniqueObjectArray