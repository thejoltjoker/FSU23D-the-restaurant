import { createBrowserRouter } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MenuPage from "./pages/MenuPage";
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
          element: <HomePage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/booking",
          element: <BookingPage />,
        },
        {
          path: "/menu",
          element: <MenuPage />,
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
        {
          path: "/styles",
          element: <StylesPage />,
        },
      ],
    },
  ],
  { basename: "/FSU23D-the-restaurant/" },
);
