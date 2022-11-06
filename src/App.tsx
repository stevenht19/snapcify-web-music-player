import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} from 'react-router-dom'
import { Layout } from './components/layout'
import Home from './pages/Home'
import Search, { loader } from './pages/Search'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route 
        path='/search' 
        element={<Search />} 
        loader={loader}
      />
    </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}