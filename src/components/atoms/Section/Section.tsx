import SongList from './SongList'
import './style.css'

type Props = {
  title?: string
  children: React.ReactNode
}

const Section = ({ 
  title, 
  children 
}: Props) => {
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      <SongList>
        {children}
      </SongList>
    </section>
  )
}

export default Section