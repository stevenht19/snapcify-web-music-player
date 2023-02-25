import { MusicPlayerProvider, PlaylistsProvider } from '@/context'
import { Aside } from './Aside'
import { Main } from './Main'
import { Player } from './Player'
import './style.css'

export default function Layout() {
  return (
    <div className='app'>
      <MusicPlayerProvider>
        <PlaylistsProvider>
          <Aside />
          <Main />
        </PlaylistsProvider>
        <Player />
      </MusicPlayerProvider>
    </div >
  )
}
