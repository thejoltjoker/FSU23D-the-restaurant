import { createBrowserRouter } from "react-router-dom";
import Adminpage from "./pages/AdminPage";
import Bookingpage from "./pages/BookingPage";
import Contactpage from "./pages/ContactPage";
import Errorpage from "./pages/ErrorPage";
import Homepage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Menupage from "./pages/MenuPage";
import StylesPage from "./pages/StylesPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          index: true,
          element: <Homepage />,
          errorElement: <Errorpage />,
        },
        {
          path: "/contact",
          element: <Contactpage />,
          errorElement: <Errorpage />,
        },
        {
          path: "/booking",
          element: <Bookingpage />,
          errorElement: <Errorpage />,
        },
        {
          path: "/menu",
          element: <Menupage />,
          errorElement: <Errorpage />,
        },
        {
          path: "/admin",
          element: <Adminpage />,
          errorElement: <Errorpage />,
        },
        {
          path: "/styles",
          element: <StylesPage />,
        },
      ],
    },
  ],
  { basename: "/the-restaurant-grupp1/" },
);
