
import { Footer } from 'react-daisyui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
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
        loader: () => fetch('quizzes.json'),
        element: <Topic />
      },
      {
        path: '/statestic',
        element: <Statistic />
      },
      {
        path: '/blog',
        element: <Blog />
      }

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
