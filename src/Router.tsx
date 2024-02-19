import { createBrowserRouter } from "react-router-dom";
import Adminpage from "./pages/AdminPage";
import Bookingpage from "./pages/BookingPage";
import Contactpage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Menupage from "./pages/MenuPage";
import StylesPage from "./pages/StylesPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          index: true,
          element: <Homepage />,
        },
        {
          path: "/contact",
          element: <Contactpage />,
        },
        {
          path: "/booking",
          element: <Bookingpage />,
        },
        {
          path: "/menu",
          element: <Menupage />,
        },
        {
          path: "/admin",
          element: <Adminpage />,
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
