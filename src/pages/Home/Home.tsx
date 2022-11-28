import { Search } from '@/components/layout/Search'
import { Top } from './layout/Top'
import { Popular } from './layout/Popular'

export default function Home() {
  return <>
    <Search />
    <Top />
    <Popular />
  </>
}