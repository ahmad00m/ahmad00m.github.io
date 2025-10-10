import { Section } from '@/components/shared/section';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/lib/data';
import { Button } from '../ui/button';
import { Download, Eye } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function Resume() {
  return (
    <Section
      id="resume"
      title="My Resume"
      subtitle="View or download my full resume to learn more about my work and background."
    >
      <div className="mx-auto max-w-4xl text-center mb-8">
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href={portfolioData.resumeUrl} download>
              <Download className="mr-2" />
              Download Resume
            </a>
          </Button>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline">
                <Eye className="mr-2" />
                View Resume
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[1/1] w-full">
                    <iframe
                      src={`${portfolioData.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="h-full w-full border-0"
                      title="Resume"
                    />
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
