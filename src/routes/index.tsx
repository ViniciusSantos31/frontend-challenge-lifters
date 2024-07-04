import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "../layouts/root";
import { Checkout } from "../pages/checkout";
import { Home } from "../pages/home";
import { Product } from "../pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "product/:slug",
        element: <Product />,
      },
    ],
  },
]);
