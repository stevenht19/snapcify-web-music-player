import { Playlist } from '@/models/Playlist'
import { Song } from '@/models/Song'
import Dexie, { Table } from 'dexie'

export class Database extends Dexie {
  public favorites!: Table<Song>
  public playlists!: Table<Playlist>
  
  constructor() {
    super('SnapcifySongs')
    this.version(1).stores({
      favorites: 'id, title, artist, image, url, isPlaying',
      playlists: 'id, name, description'
    })
  }

  getSongs() {
    return this.favorites.toArray()  
  }

  async addSong(song: Song) {
    await this.favorites.add({
      ...song,
      isPlaying: false,
      isFavorite: true
    })
  }

  async deleteSong(song: Song) {
    db.favorites.where('id')
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

  getPlaylists() {
    return db.playlists.toArray()
  }

  addPlaylist(playlist: Playlist) {
    return db.playlists.add(playlist)
  }

}

const db = new Database()
export default db
