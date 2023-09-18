import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
<<<<<<< HEAD
import Blog from "../Pages/Blog/Blog";
=======
import Service from "../Pages/Service/Service";
>>>>>>> 03850770e535f48884d0ff2fc750e7cb34558177

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element:<Blog/>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
