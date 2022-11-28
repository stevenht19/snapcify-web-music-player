import { useSearch } from '@/hooks'
import { Song } from '@/models/Song'
import { SearchInput } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { SongCard } from '@/components/atoms/Card'
import { ModalHeader, ModalFooter } from '@/components/atoms/Modal'
import { usePlaylist } from '../context/SinglePlaylistProvider'

export const SearchSong = ({
  onClose
}: {
  onClose: () => void
}) => {
  const { isTyping, searchTerm, results, onChange, onSelect } = useSearch()

  const { songs, onAdd } = usePlaylist()

  const onClick = (song: Song) => {
    onSelect(song)
    onAdd(song)
  }

  return <>
    <ModalHeader>
      Search Songs {isTyping && '...Loading'}
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
                onSelect={onClick}
              />
            ))
          } 
        </div>
      ) : null
    }
    <ModalFooter>
      <Button
        isDisabled={false}
        onClick={onClose}
        isRed
      >
        Cancel
      </Button>
      <Button isDisabled={songs.length === 0}>
        Save
      </Button>
    </ModalFooter>
  </>
}
