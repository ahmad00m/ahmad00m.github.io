import { cn } from '@/lib/utils';
import type React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  id: string;
}

export function Section({
  title,
  subtitle,
  id,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('space-y-8 py-16 md:py-8', className)}
      {...props}
    >
      <div className="max-w-3xl">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
