
import './App.css';
import Layout from './Layout/Layout';
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Statistics from './components/Statistics/Statistics'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },

        {
          path: '/statistics',
          element: <Statistics></Statistics>
        }
        ,
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
