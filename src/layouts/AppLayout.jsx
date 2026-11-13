import { Outlet, ScrollRestoration, useMatches } from "react-router";

import Topbar from "@/components/ui/Topbar";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { AuthProvider } from "@/context/Auth";

function AppLayout() {
  const matches = useMatches();
  const hasTopbar = matches.some((match) => match.handle?.hasTopbar);

  return (
    <>
      <AuthProvider>
        <ScrollRestoration />
        {hasTopbar && (
          <Topbar>
            <p>با عضویت در فیت لند اولین ارسال را مهمون ما باش :)</p>
          </Topbar>
        )}
        <div className="flex flex-col h-screen justify-between">
          <Header />

          <main>
            <Outlet />
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default AppLayout;
