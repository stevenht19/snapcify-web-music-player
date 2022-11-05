import { useMediaQuery } from '@/hooks'
import MusicPlayerProvider from '@/context/PlayerContext'
import Aside from '@/components/layout/Aside'
import Player from '@/components/layout/Player'
import Header from '@/components/layout/Header'
import Top from '@/components/layout/Top'
import Popular from '@/components/layout/Popular'

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 52em)')

  return <MusicPlayerProvider>
    {
      isDesktop ? (
        <Aside />
      ) : null
    }
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflowX: 'hidden',
      overflowY: 'scroll'
    }}>
      <Header />
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        flex: 1,
        paddingBottom: '12rem'
      }}>
        <Top />
        <section style={{ paddingRight: '5rem' }}>
          <Popular />
        </section>
      </main>
    </div>
    <Player />
  </MusicPlayerProvider>
}