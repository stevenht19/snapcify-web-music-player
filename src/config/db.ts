import { Playlist } from '@/models/Playlist'
import { Song } from '@/models/Song'
import Dexie, { Table } from 'dexie'

export class Database extends Dexie {
  public favorites!: Table<Song>
  public playlists!: Table<Playlist>
  public songs!: Table<Song>
  
  constructor() {
    super('SnapcifySongs')
    this.version(1).stores({
      favorites: 'id, title, artist, image, url, isPlaying',
      playlists: 'id, name, description',
      songs: '++songId, id, title, artist, image, url, playlist_id',
    })
  }

  getSongs() {
    return this.favorites.toArray()  
  }

  addSong(song: Song) {
    return this.favorites.add({
      ...song,
      isPlaying: false,
      isFavorite: true
    })
  }

  deleteSong(song: Song) {
    return db.favorites.where('id')
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
  
  editPlaylist(playlist: Playlist) {
    return db.playlists.where('id').equals(playlist.id).modify(playlist)
  }

  deletePlaylist(id: Playlist['id']) {
    return db
      .playlists
      .where('id')
      .equals(id)
      .delete()
  }

  addSongsToPlaylist(songs: Song[]) {
    return db.songs.bulkAdd(songs)
  }

  deleteSongFromPlaylist(playlistId: Playlist['id'], songId: Song['id']) {
    return db
      .songs
      .where('playlist_id')
      .equals(playlistId)
      .and((song) => song.id === songId)
      .delete()
  }
}

const db = new Database()
export default db
