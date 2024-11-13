"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Code2,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
  Terminal,
  Twitter,
} from 'lucide-react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TailwindCSS",
    "Google Gemini"
  ];

  const projects = [
    {
      title: "Portfolio",
      description: "Built an typescript-powered portfolio website.",
      tech: ["TypeScript", "Next.js"],
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed w-full top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <span className="text-primary">Arsh</span>
            <span className="text-muted-foreground">dev</span>
          </motion.div>
          <ThemeToggle />
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arshdeep Singh
              <span className="inline-block ml-2">
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Senior Software Developer
              <span className="text-sm ml-2">with a passion for innovation</span>
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="default">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  {skill}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="max-w-2xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-muted-foreground">© 2024 Arshdeep Singh</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
