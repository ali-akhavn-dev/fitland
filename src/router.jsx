import { createBrowserRouter } from "react-router";

import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
