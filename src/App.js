
import { Footer } from 'react-daisyui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Quiz from './Component/Quiz/Quiz';
import Statistic from './Component/Statistic/Statistic';
import Topic from './Component/Topic/Topic';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [{
        path: '/',
        loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
        element: <Topic />
      },
      {
        path: '/topic',
        loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
        element: <Topic />
      },
      {
        path: '/topic/:quizID',
        loader: async ({ params }) => {

          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)

        },
        element: <Quiz />
      },
      {
        path: '/statestic',
        element: <Statistic />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      { path: '*', element: <div> Route Not Found</div> }

      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer></Footer>
    </div >
  );
}

export default App;
