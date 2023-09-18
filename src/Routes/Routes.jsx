import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
            
        ]
    },
]);
>>>>>>> 017f1648262380f16b131cb2e034b7e4e6c3bde7
