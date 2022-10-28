import Aside from '@/components/layout/Aside'
import Player from '@/components/layout/Player'
import Popular from '@/components/layout/Popular'
import Top from '@/components/layout/Top'

export default function App() {
  return <>
    <Aside />
    <main>
      <Top />
      <Popular />
    </main>
    <Player />
  </>
}