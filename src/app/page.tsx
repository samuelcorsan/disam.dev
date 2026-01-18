import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import CodingStats from "@/components/coding-stats";
import Projects from "@/components/projects";
import PromptInput from "@/components/prompt-input";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 md:px-12 pb-32">
        <Hero />
        <About />
        <CodingStats />
        <Projects />
      </main>
      <PromptInput />
    </div>
  );
}
