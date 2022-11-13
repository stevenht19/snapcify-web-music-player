import { Song } from '@/models'
import Dexie, { Table } from 'dexie'

export class Database extends Dexie {
  public favorites!: Table<Song>

  constructor() {
    super('SnapcifySongs')
    this.version(1).stores({
      favorites: 'id, title, artist, image, url, isPlaying'
    })
  }

  async getSongs(): Promise<Song[]> {
    return await this.favorites.toArray()  
  }

  async addSong(song: Song) {
    await this.favorites.add({
      ...song,
      isPlaying: false,
      isFavorite: true
    })
  }

  async deleteSong(song: Song) {
    await db.favorites.where('id')
      .equals(song.id)
      .delete()
  }

  toggleSong(song: Song) {
    if (!song.isFavorite) {
      this.addSong(song)
      return
    } 
    this.deleteSong(song)
  }

}

const db = new Database()
export default db
