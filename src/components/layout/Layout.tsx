import { Outlet } from 'react-router-dom'
import { MusicPlayerProvider, IndexedProvider } from '@/context'
import Aside from './Aside'
import Header from './Header'
import Player from './Player'
import './style.css'

export default function Layout() {
  return (
    <div className='app'>
      <Aside />
      <IndexedProvider>
        <MusicPlayerProvider>
          <main className='app__main'>
            <Header />
            <Outlet />
          </main>
          <Player />
        </MusicPlayerProvider>
      </IndexedProvider>
    </div>
  )
}
