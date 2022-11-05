import MusicPlayerProvider from '@/context/PlayerContext'
import Aside from './Aside'
import Header from './Header'
import Player from './Player'
import './style.css'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='app'>
      <Aside />
      <MusicPlayerProvider>
        <main className='app__main'>
          <Header />
          {children}
        </main>
        <Player />
      </MusicPlayerProvider>
    </div>
  )
}
