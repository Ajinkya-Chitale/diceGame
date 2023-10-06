import './App.css'
import GameStart from './components/GameStart/GameStart'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound.jsx'
import Landing from './components/Landing/Landing.jsx'
import Layout from './components/Layout/Layout'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element: <GameStart />
      },
      {
        path:'GameStarted',
        element: <Landing />
      }
    ],
    errorElement: <NotFound />
  }
])

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
