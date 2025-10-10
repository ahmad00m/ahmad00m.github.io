import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/data';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have a question or want to work together? Feel free to reach out."
    >
      <div className="text-center">
        <Button asChild>
          <a href={`mailto:${portfolioData.contact.email}`}>
            <Mail className="mr-2" />
            Contact Me
          </a>
        </Button>
      </div>
    </Section>
  );
}
