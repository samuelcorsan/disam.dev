import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 md:px-12">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
