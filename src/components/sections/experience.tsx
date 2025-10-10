import { portfolioData } from '@/lib/data';
import { Section } from '@/components/shared/section';

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Career Journey"
      subtitle="Highlights of my roles, projects, and contributions across research and data science."
    >
      <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
        {portfolioData.experience.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-primary ring-8 ring-background" />
            <p className="text-sm font-medium text-primary">{item.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{item.role}</h3>
            <p className="text-md text-muted-foreground">{item.company}</p>
            <p className="mt-2 text-foreground/80">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
