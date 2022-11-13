import { Song } from '@/models';

type Hash = {
  [key: Song['id']]: number
}

const getUniqueObjectArray = (array: Song[]) => {
  let hash: Hash = {};
  let repeated = false

  for (let i in array) {
    if (typeof hash[array[i]?.id] === 'number') {
      array[i] = array[hash[array[i]?.id]]
      array = array.filter((_, index) => index !== hash[array[i].id])
      repeated = true
    }
    hash[array[i]?.id] = Number(i)
  }

  return {
    array,
    repeated
  }
}

export default getUniqueObjectArray