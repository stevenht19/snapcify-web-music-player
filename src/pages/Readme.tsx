import { Message } from '@/components/atoms/Message'

export default function Readme() {
  return (
    <section>
      <h2>Application built in React</h2>
      <Message>
        This is a personal project with noncommercial purposes.
      </Message>
      <Message>
        Songs are demos and the data come from a public API, so it could't be used as a music player service.
      </Message>
    </section>
  )
}
