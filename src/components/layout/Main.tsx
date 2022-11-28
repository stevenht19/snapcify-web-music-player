import { Outlet } from 'react-router-dom'

let n = 0
export const Main = () => {
  return (
    <main className='app__main'>
      <Outlet />
    </main>
  )
}