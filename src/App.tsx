import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route
} from 'react-router-dom'
import { Layout } from '@/components/layout'
import HomePage from '@/pages/Home'
import ResultsPage, { loader } from '@/pages/Results'
import Favorites from '@/pages/Favorites'
import Playlist from '@/pages/Playlist'
import Readme from './pages/Readme'
import { Routes } from './utils/routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Routes.HOME} element={<Layout />}>
      <Route 
        index
        element={<HomePage />}
      />
      <Route 
        path={Routes.SEARCH}
        element={<ResultsPage />} 
        loader={loader}
      />
      <Route
        path={Routes.FAVORITE}
        element={<Favorites />}
      />
      <Route 
        path={Routes.README}
        element={<Readme />}
      />
      <Route 
        path={`${Routes.PLAYLIST}/:id`}
        element={<Playlist />}
      />
    </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}