import Head from 'next/head';
import { SideBar } from '../widgets';
import { MainContent } from '../components';
import { useAuthSession } from '../hooks';

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
          <SideBar />
        </section>

        <section className="h-full w-[calc(100%-260px)] p-[2rem] ">
          <MainContent />
        </section>
      </main>
    </div>
  );
}
export default Home;
