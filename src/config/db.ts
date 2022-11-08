import { Song } from '@/models'
import Dexie, { Table } from 'dexie'

export class Database extends Dexie {
  favorites!: Table<Song>

  constructor() {
    super('SnapcifySongs')
    this.version(1).stores({
      favorites: 'id, title, artist, image, url'
    })
  }
}
export const db = new Database()