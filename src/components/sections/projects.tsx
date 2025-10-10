import { portfolioData } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected projects showcasing my work in data science, AI, and software development."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {portfolioData.projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {/* <Button variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe />
                    Live Demo
                  </a>
                </Button> */}
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
        ))}
      </div>
    </Section>
  );
}
