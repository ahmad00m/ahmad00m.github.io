import {
  Github,
  Linkedin,
  FileText,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Book,
  User,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/shared/icons';

export const portfolioData = {
  name: 'Ahmad Mersaghian',
  title: 'Data Science Student & Researcher',
  resumeUrl: 'website_resume.pdf',
  contact: {
    email: 'amers005@ucr.edu',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/ahmad00m',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ahmad-mersaghian/',
        icon: LinkedInIcon,
      },
    ],
  },
  navLinks: [
    {
      label: 'About',
      href: '#about',
      icon: User,
    },
    {
      label: 'Skills',
      href: '#skills',
      icon: Code,
    },
    {
      label: 'Projects',
      href: '#projects',
      icon: Briefcase,
    },
    {
      label: 'Experience',
      href: '#experience',
      icon: Book,
    },
    {
      label: 'Education',
      href: '#education',
      icon: GraduationCap,
    },
    {
      label: 'Awards',
      href: '#awards',
      icon: Award,
    },
    {
      label: 'Resume',
      href: '#resume',
      icon: FileText,
    },
  ],
  hero: {
    heading: "Crafting Digital Excellence, One Line of Code at a Time.",
    summary:
      "I’m a machine learning researcher and data scientist focused on developing and evaluating models that learn from complex, high-dimensional data. My work spans deep learning, graph-based methods, and statistical modeling to advance scientific and data-driven discovery.",
  },
  skills: [
  // Programming
  { name: 'Python' },
  { name: 'SQL' },
  { name: 'JavaScript' },
  { name: 'Bash' },

  // Frameworks & Libraries
  { name: 'FastAPI & Flask' },
  { name: 'React & Next.js' },
  { name: 'PyTorch' },
  { name: 'scikit-learn' },
  { name: 'RDKit' },

  // Systems & Data
  { name: 'PySpark & BigQuery' },
  { name: 'System Design' },

  // Research & AI
  { name: 'Graph Neural Networks (GNNs)' },
  { name: 'Retrieval-Augmented Generation (RAG)' },
  ],
  projects: [
  {
    id: 'project-1',
    title: 'AI Student Tutor (RAG)',
    description:
      'Built a Retrieval-Augmented Generation system that answers questions over uploaded PDFs. Implemented model routing (LLaMA vs DeepSeek) using a perplexity-based selector exposed in the UI; observed that short queries favored LLaMA ~2/3 of the time with lower latency and energy use.',
    technologies: [
      'Python',
      'JavaScript',
      'RAG',
      'LLaMA',
      'DeepSeek',
      'Vector Database',
      'PDF Parsing'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/ahmad00m/EE260-project',
  },
  {
    id: 'project-2',
    title: 'End-to-End Data Pipeline with PySpark, PostgreSQL, and Flask',
    description:
      'Designed a full pipeline to clean/transform large datasets with PySpark, load them into a tuned PostgreSQL schema with indexes, and expose query results via a Flask web interface for interactive exploration.',
    technologies: [
      'PySpark',
      'PostgreSQL',
      'Flask',
      'Python',
      'SQL',
      'HTML/CSS',
      'JavaScript'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/ahmad00m/CS236-project',
  },
  {
    id: 'project-3',
    title: 'SchedulAI — AI-Driven Course Scheduling Assistant',
    description:
      'An intelligent assistant that builds personalized, conflict-free schedules via a chatbot + calendar UI. Uses a multi-agent backend with Google ADK to interpret preferences, fetch course data, and generate optimized schedules in real time.',
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Python',
      'FastAPI',
      'Google ADK',
      'Google BigQuery'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/ahmad00m/Schedule-recommender',
    },
  ],
  experience: [
  {
    role: 'Graduate Student Researcher',
    company: 'University of California, Riverside',
    period: 'Oct 2024 – Present',
    description:
      'Evaluated neural & graph neural networks for MS/MS modification-site localization; retrained top models on NIST-20; built custom metrics and a Product-of-Experts ensemble to improve localization robustness and interpretability.',
  },
  {
    role: 'Data Science Fellow',
    company: 'University of California, Riverside',
    period: 'Jun 2025 – Aug 2025',
    description:
      'Built an intelligent multi-agent system with Google ADK + FastAPI for personalized course planning; integrated BigQuery data to auto-generate conflict-free schedules; shipped a React/Next.js UI with real-time calendar and chatbot.',
  },
  {
    role: 'Intermediate Data Structures & Algorithms Grader',
    company: 'University of California, Riverside',
    period: 'Jan 2025 – Aug 2025',
    description:
      'Graded coding assignments and exams, authored feedback on algorithmic correctness and complexity, and supported students asynchronously to improve problem-solving skills.',
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'Loyola Marymount University',
    period: 'Jan 2021 – May 2023',
    description:
      'Assisted in testing and improving a gene-regulatory network visualization web app; integrated new datasets into PostgreSQL and automated data processing workflows using Python and JavaScript.',
  },
  {
    role: 'Undergraduate Student Researcher',
    company: 'Loyola Marymount University',
    period: 'Aug 2021 – May 2023',
    description:
      'Led field work and eDNA sampling (PECO); analyzed sediment grain size/composition; produced publication-ready figures in R to characterize West Coast seagrass ecosystems.',
  },
  {
    role: 'Student Intern',
    company: 'Los Angeles County Department of Public Health',
    period: 'May 2021 – Sep 2021',
    description:
      'Scheduled vaccine appointments for COVID-19 cases/contacts; coordinated interviews using translation services; collaborated via Microsoft Teams to meet daily outreach targets.',
  },
  {
    role: 'Teaching & Grading (Physics, Marine Biology, General Biology)',
    company: 'Loyola Marymount University',
    period: 'Aug 2020 – May 2023',
    description:
      'TA and grader across lab/lecture courses; facilitated sections, prepared materials, and provided structured feedback to improve student understanding and course outcomes.',
  },
  ],
  education: [
    {
      degree: 'M.S. in Computational Data Science',
      institution: 'University of California, Riverside',
      period: '2025',
    },
    {
      degree: 'B.S. in Biology & minor in Computer Science',
      institution: 'Loyola Marymount University',
      period: '2023',
    },
  ],
  awards: [
    {
      name: 'Data Science Summer Fellowship',
      // issuer: 'Innovatech Solutions',
      year: 'Summer 2025',
    },
    {
      name: 'William McLaughlin Scholarship Recipient',
      // issuer: 'GitHub',
      year: '2021-2023',
    },
    {
      name: 'Seaver College Summer Opportunities for Advanced Research (SOAR)',
      // issuer: 'The Webby Awards',
      year: 'Summer 2022',
    },
    {
      name: 'Dean’s List',
      // issuer: 'The Webby Awards',
      year: '2019-2023',
    },
  ],
};

export const getPortfolioAsString = (): string => {
  let content = `Name: ${portfolioData.name}\nTitle: ${portfolioData.title}\n\n`;

  content += "## Summary\n";
  content += `${portfolioData.hero.summary}\n\n`;

  content += "## Skills\n";
  portfolioData.skills.forEach(skill => {
    content += `- ${skill.name}\n`;
  });
  content += "\n";

  content += "## Projects\n";
  portfolioData.projects.forEach(project => {
    content += `### ${project.title}\n`;
    content += `${project.description}\n`;
    content += `Technologies: ${project.technologies.join(', ')}\n\n`;
  });

  content += "## Professional Experience\n";
  portfolioData.experience.forEach(exp => {
    content += `### ${exp.role} at ${exp.company} (${exp.period})\n`;
    content += `${exp.description}\n\n`;
  });

  content += "## Education\n";
  portfolioData.education.forEach(edu => {
    content += `- ${edu.degree}, ${edu.institution} (${edu.period})\n`;
  });
  content += "\n";

  content += "## Awards and Recognition\n";
  portfolioData.awards.forEach(award => {
    // content += `- ${award.name} from ${award.issuer} (${award.year})\n`;
    content += `- ${award.name} (${award.year})\n`;
  });

  return content;
}
