import { useSearch } from '@/hooks'
import { Song } from '@/models/Song'
import { ModalHeader, ModalFooter } from '@/components/atoms/Modal'
import { SearchInput } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { SongCard } from '@/components/atoms/Card'
import { usePlaylist } from '../hooks'
import { TailSpin } from '@/components/atoms/Spinner'

export const SearchSong = ({ onClose }: {
  onClose: () => void
}) => {
  const { 
    isTyping, 
    searchTerm, 
    results,
    onChange, 
    onSelect 
  } = useSearch()
  
  const {
    songsSize,
    handleAddSong,
    onSaveSongs,
    clearSongs
  } = usePlaylist()

  const onClickItem = (song: Song) => {
    onSelect(song)
    handleAddSong(song)
  }

  const onCloseSearch = () => {
    clearSongs()
    onClose()
  }

  const onSave = () => {
    onSaveSongs(onClose)
  }

  return <>
    <ModalHeader text='Search songs'>
      {
        isTyping ? (
          <TailSpin />
        )
        : null
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
        onClick={onCloseSearch}
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
