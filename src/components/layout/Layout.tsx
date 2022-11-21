import { Outlet } from 'react-router-dom'
import { MusicPlayerProvider, PlaylistProvider } from '@/context'
import Aside from './Aside'
import Player from './Player'
import './style.css'

export default function Layout() {
  return (
    <div className='app'>
      <Aside />
      <PlaylistProvider>
        <MusicPlayerProvider>
          <main className='app__main'>
            <Outlet />
          </main>
          <Player />
        </MusicPlayerProvider>
      </PlaylistProvider>
    </div>
  )
}
