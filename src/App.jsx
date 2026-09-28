import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import AboutUs from './pages/About-us'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/Contact-us'
import ScrollToTop from './components/ui/ScrollToTop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/services',
    element: <Service />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop />
    </>
  )
}

export default App
