import Head from "next/head";
import Link from "next/link";
import { SideDrawer } from "../widgets";
import { useAuth } from "../contexts/authContext";

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

        <div className="p-[40px]">
          <Link href="/login">login</Link>
          <button onClick={() => logout()}>logout</button>
        </div>
      </main>
    </div>
  );
}
export default Home;
