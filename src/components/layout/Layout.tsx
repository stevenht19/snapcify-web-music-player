import { MusicPlayerProvider, PlaylistProvider } from '@/context'
import { Aside } from './Aside'
import { Main } from './Main'
import { Player } from './Player'
import './style.css'

export default function Layout() {
  return (
    <div className='app'>
      <PlaylistProvider>
        <MusicPlayerProvider>
          <Aside />
          <Main />
          <Player />
        </MusicPlayerProvider>
      </PlaylistProvider >
    </div >
  )
}
