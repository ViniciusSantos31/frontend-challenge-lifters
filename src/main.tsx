import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
