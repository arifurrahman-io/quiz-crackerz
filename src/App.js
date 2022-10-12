
import './App.css';
import Layout from './Layout/Layout';
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Statistics from './components/Statistics/Statistics'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuizData from './components/QuizData/QuizData';
import ErrorPage from './components/ErrorPage/ErrorPage';

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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        }
        ,
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizdata/:quizID',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
          },
          element: <QuizData></QuizData>
        }
      ]
    },
    {
      path: '*', element: <ErrorPage></ErrorPage>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
