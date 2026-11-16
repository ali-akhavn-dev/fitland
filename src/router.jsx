import { createBrowserRouter } from "react-router";

import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import LoginForm from "./features/auth/components/LoginForm";
import RegisterForm from "./features/auth/components/RegisterForm";
import ProductsPage from "./pages/Public/Products/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, handle: { hasTopbar: true }, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      {
        path: "category/:categorySlug/:subCategorySlug?/:leafSlug?",
        element: <ProductsPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "login", element: <LoginForm />, handle: { stage: "otp" } },
      {
        path: "register",
        element: <RegisterForm />,
        handle: { stage: "register" },
      },
    ],
  },
]);

export default router;
