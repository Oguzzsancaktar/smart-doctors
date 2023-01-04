import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Docs</title>
        <meta name="description" content="My page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-screen  bg-slate-500">
        <main className="h-full">
          <h1 className="text-purple-200 text-6xl font-UbuntuRegular">Test</h1>
        </main>
      </section>
    </div>
  );
}
