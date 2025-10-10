import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Sidebar() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <aside className="sticky top-0 h-screen w-full max-w-xs flex-col space-y-6 border-r bg-secondary/30 p-8 hidden md:flex">
      {heroImage && (
        <div className="mx-auto">
          <Image
            src={heroImage.imageUrl}
            alt={portfolioData.name}
            width={160}
            height={160}
            className="rounded-full shadow-lg"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="text-center">
        <h1 className="font-headline text-2xl font-bold">
          {portfolioData.name}
        </h1>
        <p className="text-sm text-muted-foreground">{portfolioData.title}</p>
      </div>

      <nav className="flex flex-col space-y-2">
        {portfolioData.navLinks.map((link) => (
          <Button key={link.label} variant="ghost" asChild className="justify-start">
            <a href={link.href}>
              <link.icon className="mr-2 h-4 w-4" />
              {link.label}
            </a>
          </Button>
        ))}
      </nav>

      <div className="flex-grow" />

      <div className="flex items-center justify-center space-x-2">
        {portfolioData.contact.social.map((social) => (
          <Button key={social.name} variant="outline" size="icon" asChild>
            <a href={social.url} aria-label={social.name} target="_blank" rel="noopener noreferrer">
              <social.icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
      </div>

      <div className='flex justify-center'>
        <ThemeToggle />
      </div>

      <p className="text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {portfolioData.name}
      </p>
    </aside>
  );
}
