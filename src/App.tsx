import { Layout } from './components/layout'
import Top from '@/components/layout/Top'
import Popular from '@/components/layout/Popular'

export default function App() {
  return (
    <Layout>
      <Top />
      <Popular />
    </Layout>
  )
}