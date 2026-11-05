import { Outlet, ScrollRestoration, useMatches } from "react-router";

import Topbar from "@/components/ui/Topbar";
import Footer from "@/components/common/Footer/Footer";

function AppLayout() {
  const matches = useMatches();
  const hasTopbar = matches.some((match) => match.handle?.hasTopbar);

  return (
    <>
      <ScrollRestoration />
      {hasTopbar && (
        <Topbar>
          <p>با عضویت در فیت لند اولین ارسال را مهمون ما باش :)</p>
        </Topbar>
      )}
      <div className="flex flex-col h-screen justify-between">
        {/* <Header /> */}

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
