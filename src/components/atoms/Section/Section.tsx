import SongList from './SongList'
import './style.css'

type Props = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <section>
      <h2>{title}</h2>
      <SongList>
        {children}
      </SongList>
    </section>
  )
}

export default Section