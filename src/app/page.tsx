import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative w-full bg-[#121212] selection:bg-white/20">
      {/* 
        The ScrollyCanvas and Overlay components handle the 500vh sticky scroll section.
        They must be siblings within the same relative container to overlap correctly 
        if we don't handle positioning within them, but here they both use absolute/sticky strategies.
      */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* 
        The About component introduces the user before their projects.
      */}
      <About />

      {/* 
        The Projects component sits below the scrolly section in the DOM flow. 
      */}
      <Projects />
      <Contact />
    </main>
  );
}
