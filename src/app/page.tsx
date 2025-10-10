import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Awards from '@/components/sections/awards';
import Sidebar from '@/components/layout/sidebar';
import Resume from '@/components/sections/resume';
import { Separator } from '@/components/ui/separator';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <About />
          <Separator className="my-16" />
          <Skills />
          <Separator className="my-16" />
          <Projects />
          <Separator className="my-16" />
          <Experience />
          <Separator className="my-16" />
          <Education />
          <Separator className="my-16" />
          <Awards />
          <Separator className="my-16" />
          <Resume />
          <Separator className="my-16" />
          <Contact />
        </div>
      </main>
    </div>
  );
}
