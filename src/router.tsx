import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Favorites } from "./pages/Favorites/Favorites";
import { Dashboard } from "./Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
