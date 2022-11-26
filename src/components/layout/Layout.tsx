import { MusicPlayerProvider, PlaylistProvider } from '@/context'
import { Outlet } from 'react-router-dom'
import { Aside } from './Aside'
import { Player } from './Player'
import './style.css'

export default function Layout() {
  return (
    <div className='app'>
      <PlaylistProvider>
        <Aside />
        <MusicPlayerProvider>
          <main className='app__main'>
            <Outlet />
          </main>
          <Player />
        </MusicPlayerProvider>
      </PlaylistProvider >
    </div >
  )
}
