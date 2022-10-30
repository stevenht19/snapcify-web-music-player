import MusicPlayerProvider from '@/context/PlayerContext'
import Aside from '@/components/layout/Aside'
import Player from '@/components/layout/Player'
import Search from '@/components/layout/Search'
import Top from '@/components/layout/Top'
import Popular from '@/components/layout/Popular'

export default function App() {

  return <MusicPlayerProvider>
    <Aside />
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem'
    }}>
      <Search />
      <Top />
      <section style={{ paddingRight: '5rem'}}>
        <Popular />
      </section>
    </main>
    <Player />
  </MusicPlayerProvider>
}