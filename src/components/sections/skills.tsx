import { portfolioData } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Proficiency"
      subtitle="A summary of the technical stack I’ve developed through research and engineering projects."
    >
      <div className="mx-auto max-w-4xl">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap justify-center gap-2">
              {portfolioData.skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="px-4 py-2 text-base">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
