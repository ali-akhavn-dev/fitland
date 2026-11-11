import { RouterProvider } from "react-router";
import "./App.css";

import router from "./router";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{ classNames: { toast: "font-IRANSansX-Medium" } }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
