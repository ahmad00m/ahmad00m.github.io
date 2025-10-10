import { portfolioData } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function Awards() {
  return (
    <Section
      id="awards"
      title="Awards & Recognition"
      subtitle="Honors recognizing academic and research excellence."
    >
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-6">
              {portfolioData.awards.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.issuer}</p>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
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
