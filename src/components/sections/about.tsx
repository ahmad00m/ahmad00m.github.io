import { portfolioData } from '@/lib/data';
import { Section } from '@/components/shared/section';

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      className="pt-0 md:pt-16"
    >
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground">
          {portfolioData.hero.summary}
        </p>
      </div>
    </Section>
  );
}
