"use client";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";

function Home() {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="min-h-screen">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-2 sm:flex-row sm:gap-4">
        <section className="w-full bg-red-300 sm:w-3/4">
          <Preview />
        </section>
        <aside className="w-full bg-green-300 sm:w-1/4">
          <Configurator />
        </aside>
      </main>
    </div>
  );
}

export default Home;
