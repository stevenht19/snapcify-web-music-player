import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <main className='app__main'>
      <Outlet />
    </main>
  )
}