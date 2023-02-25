import { useMusicPlayer, useSearch } from '@/hooks'
import { Song } from '@/models/Song'
import { ModalHeader, ModalFooter } from '@/components/atoms/Modal'
import { SearchInput } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { SongCard } from '@/components/atoms/Card'
import { TailSpin } from '@/components/atoms/Spinner'
import { usePlaylist } from '../hooks'
import { Counter } from './Counter'

export const SearchSongs = ({ onClose }: {
  onClose(): void
}) => {
  const { 
    isTyping, 
    searchTerm, 
    results,
    onChange, 
    onSelect 
  } = useSearch()

  const { addSongsToQueue, category } = useMusicPlayer()
  
  const {
    songsSize,
    handleAddSong,
    onSaveSongs,
    clearSongs,
    songs
  } = usePlaylist()

  const onClickItem = (song: Song) => {
    const songAlreadyExists = songs.some(({ id }) => id === song.id)

    if (songAlreadyExists && !song.isSelected) return;

    onSelect(song)
    handleAddSong(song, songAlreadyExists)
  }

  const onCancel = () => {
    clearSongs()
    onClose()
  }

  const onSave = () => {
    onSaveSongs(
      onClose, 
      category, 
      addSongsToQueue
    )
  }

  return <>
    <ModalHeader 
      text='Search songs'
    >
      {
        isTyping ? ( 
          <TailSpin /> 
        ) : ( 
          <Counter value={songsSize} />
        ) 
      }
    </ModalHeader>
    <div className='playlist__search'>
      <SearchInput
        name='q'
        value={searchTerm}
        onChange={onChange}
        placeholder='Type to search songs'
      />
    </div>
    {
      results.length ? (
        <div className='search__results'>
          {
            results.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                onSelect={onClickItem}
              />
            ))
          } 
        </div>
      ) : null
    }
    <ModalFooter>
      <Button
        isGray
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        isDisabled={songsSize === 0}
        onClick={onSave}
      >
        Save
      </Button>
    </ModalFooter>
  </>
}
