import Head from "next/head";
import { SideDrawer } from "../widgets";
import { MainContent } from "../components";
import AuthRouter from "../routers/AuthRouter";

function Home() {
  return (
    <div>
      <Head>
        <title>Smart Docs</title>
        <meta name="description" content="My page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-catskillWhite overflow-hidden flex">
        <section className="w-[260px]">
          <SideDrawer />
        </section>

        <section className="h-full w-[calc(100%-260px)] p-[2rem] ">
          <MainContent />
        </section>
      </main>
    </div>
  );
}
export default AuthRouter(Home);
