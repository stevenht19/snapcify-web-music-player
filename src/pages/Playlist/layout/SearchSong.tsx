import { SongCard } from '@/components/atoms/Card'
import { SearchInput } from '@/components/atoms/Input'
import { Message } from '@/components/atoms/Message'
import { SongList } from '@/components/atoms/Section'

const song = {
  title: 'Hola',
  artist: 'Hola',
  url: 'ssws',
  image: 'uewwd'
}

export const SearchSong = () => {
  return (
    <div className='playlist__search'>
      <SearchInput
        name='q' 
        placeholder='Type to search a song to add to your playlist'
      />
      {/*<h2 style={{
        color: 'var(--gray50)',
        fontSize: '1.9rem',
        marginTop: '3rem'
      }}>Results</h2>
      <div style={{
        overflowY: 'scroll',
        maxHeight: '25rem'
      }}>
        <SongCard song={{
          title: 'Hola',
          image: 'HOL',
          url: 'hola',
          artist: 'Arctic Monkeys'
        }}/>
        <SongCard song={{
          title: 'Hola',
          image: 'HOL',
          url: 'hola',
          artist: 'Arctic Monkeys'
        }}/>
        <SongCard song={{
          title: 'Hola',
          image: 'HOL',
          url: 'hola',
          artist: 'Arctic Monkeys'
        }}/>
      </div>*/}
    </div>
  )
}
