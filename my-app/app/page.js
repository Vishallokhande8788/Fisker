"use client";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";

function Home() {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="min-h-screen">
      <Header />
      <main 
      <Preview />
      <Configurator />
    </div>
  );
}

export default Home;
