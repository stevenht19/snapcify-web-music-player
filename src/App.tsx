import { Suspense, lazy } from 'react'
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route
} from 'react-router-dom'
import { Layout } from '@/components/layout'
import { Routes } from '@/utils/routes'
import { loader } from '@/pages/Results/loader'
import HomePage from '@/pages/Home'

const Favorites = lazy(() => import('@/pages/Favorites'))
const Playlist = lazy(() => import('@/pages/Playlist'))
const Readme = lazy(() => import('@/pages/Readme'))
const Results = lazy(() => import('@/pages/Results/Page'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path={Routes.HOME} 
      element={<Layout />}
    >
      <Route 
        index
        element={<HomePage />}
      />
      <Route 
        path={Routes.SEARCH}
        element={
          <Suspense fallback={null}>
            <Results />
          </Suspense>
        } 
        loader={loader}
      />
      <Route
        path={Routes.FAVORITE}
        element={
          <Suspense fallback={null}>
            <Favorites />
          </Suspense>
        }
      />
      <Route 
        path={Routes.README}
        element={
          <Suspense fallback={null}>
            <Readme />
          </Suspense>
        }
      />
      <Route 
        path={`${Routes.PLAYLIST}/:id`}
        element={
          <Suspense fallback={null}>
            <Playlist />
          </Suspense>
        }
      />
    </Route>
))

export default function App() {
  return <RouterProvider router={router} />
}