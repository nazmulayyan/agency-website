import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Service from "../Pages/Service/Service";

export const router = createBrowserRouter([
    {
        path: "/",
<<<<<<< HEAD
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
=======
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
                element: <Service/>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
        ],
    },
]);

>>>>>>> 78f6a5c1a660b35d39c5f4b64f6648ad846f4b02
