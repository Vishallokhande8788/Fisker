"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";

function Home() {
  const [state, setState] = useState({
    exterior: "Black Pearl",
    wheel: "Aerostealth",
    interior: "Black",
  });

  const handleStateChange = (option, value) => {
    setState((prevState) => ({
      ...prevState,
      [option]: value,
    }));
  };

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="mb-5 min-h-screen"
    >
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-2 md:flex-row md:gap-4">
        <section className="w-full md:w-3/4">
          <Preview {...state} />
        </section>
        <aside className="w-full md:w-1/4">
          <Configurator onChange={handleStateChange} {...state} />
        </aside>
      </main>
    </div>
  );
}

export default Home;
