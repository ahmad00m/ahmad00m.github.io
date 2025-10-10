import { portfolioData } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <Section
      id="education"
      title="Educational Background"
      subtitle="The academic foundation of my technical expertise."
    >
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-6">
              {portfolioData.education.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
