import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import MainLayout from './pages/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/blog' element={<BlogPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App