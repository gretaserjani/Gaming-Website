import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import SignIn from './pages/SignIn.jsx';
import AboutUs from './pages/AboutUs.jsx';
import GamesListView from './pages/GamesListView.jsx';
import SingleGameView from './pages/SingleGameView.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/games",
            element: <GamesListView/>,
          },
      ]
    },
    {
      path: "/games/:gamesId",
      element: <SingleGameView/>,
    },
    {
            path: "/signin",
            element: <SignIn/>,
    },
    {
            path: "/aboutus",
            element: <AboutUs/>,
    },

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
