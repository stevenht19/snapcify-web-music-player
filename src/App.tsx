import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}