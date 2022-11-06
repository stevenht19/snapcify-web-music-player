import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route
} from 'react-router-dom'
import { Layout } from '@/components/layout'
import HomePage from '@/pages/Home'
import ResultsPage, { loader } from '@/pages/Results'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route 
        index
        element={<HomePage />}
      />
      <Route 
        path='/search' 
        element={<ResultsPage />} 
        loader={loader}
      />
    </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}