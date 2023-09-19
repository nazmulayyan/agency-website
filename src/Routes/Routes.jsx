import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
<<<<<<< HEAD
import Blog from "../Pages/Blog/Blog";
import Service from "../Pages/Service/Service";
=======
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";
import PortfolioDetails from "../Pages/Portfolio/PortfolioDetails/PortfolioDetails";
>>>>>>> 2745f594585006e9d2f5cb6fbe39988f96926478

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
        path: "/details",
        element: <PortfolioDetails />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
