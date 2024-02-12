import Adminpage from "./pages/Adminpage";
import Bookingpage from "./pages/Bookingpage";
import Contactpage from "./pages/Contactpage";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Menupage from "./pages/Menupage";
import {createBrowserRouter} from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [

      {
      path: "/",
      element: <Homepage />,
      errorElement: <Errorpage />
    },
    {
      path: "/contact",
      element: <Contactpage />,
      errorElement: <Errorpage />
    },
    {
      path: "/booking",
      element: <Bookingpage />,
      errorElement: <Errorpage />
    },
    {
      path: "/menu",
      element: <Menupage />,
      errorElement: <Errorpage />
    },
    {
      path: "/admin",
      element: <Adminpage />,
      errorElement: <Errorpage />
    }
    ],
  }
]);