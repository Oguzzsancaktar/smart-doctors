import Head from "next/head";
import { SideDrawer } from "../widgets";
import { useAuth } from "../contexts/authContext";
import { MainContent } from "../components";

function Home() {
  const { logout } = useAuth();

  return (
    <div>
      <Head>
        <title>Smart Docs</title>
        <meta name="description" content="My page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-catskillWhite overflow-hidden flex">
        <section className="w-[278px]">
          <SideDrawer />
        </section>

        <section className="h-full w-[calc(100%-278px)] p-[40px] ">
          <MainContent />
        </section>
      </main>
    </div>
  );
}
export default Home;
