'use client';

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { Timeline } from "@/components/ui/timeline";
import { Github, ExternalLink, Globe } from 'lucide-react';

export default function ProjectsPage() {
  const timelineData = [
    {
      title: "AI Exam Generator",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A modern full-stack web application for teachers and administrators to create, manage, and export professional exam papers with AI assistance. Features AI-powered question generation using Shifu AI (DeepSeek), Question Bank management, PDF export, user management with Google OAuth, and a fully responsive design.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🤖 AI-Powered</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">📄 PDF Export</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🔐 Google OAuth</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">📱 Responsive</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a 
              href="https://ai-exam-gen.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a 
              href="https://github.com/mushahidd/AI-Exam-Gen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Github size={18} />
              View Code
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> React, TypeScript, Vite, TailwindCSS, Node.js, Express.js, PostgreSQL, Prisma, OpenRouter API (DeepSeek), JWT, Google OAuth
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Remote Laptop Control",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A remote control system that lets you lock or unlock your laptop from anywhere. Features a secure admin authentication system, clean modern UI with smooth animations, and a simple one-click control panel for seamless device management.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🔐 Secure Auth</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">💻 Remote Control</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🎨 Modern UI</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">📱 Responsive</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a 
              href="https://695a4e89b07f32c4a99f2525--remote-laptop-on-off.netlify.app/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a 
              href="https://github.com/mushahidd/Remote_Laptop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Github size={18} />
              View Code
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> React, JavaScript, React Router, CSS3, Local Storage Auth
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Business Platform",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 break-words">
            Created a Business Platform that handles complex backend operations with vibe code methodology. Designed with modern architecture patterns and database optimization.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a 
              href="https://network-production-9ac3.up.railway.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a 
              href="https://github.com/mushahidd/network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Github size={18} />
              View Code
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> Vibe Code, Python, FastAPI, Jinja, PostgreSQL
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "ERP",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 break-words">
            Developed an ERP (Enterprise Resource Planning) system using Java. Implemented complex business logic and enterprise-level architecture patterns using OOP principles.
          </p>
          <a 
            href="https://github.com/mushahidd/ERP_Java" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 font-semibold"
          >
            <Github size={18} />
            View Code
            <ExternalLink size={16} />
          </a>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> Java, OOP, Enterprise Patterns, MySQL Database
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Management System",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 break-words">
            Built a comprehensive Hospital Management System in C. This project introduced me to system design, data management, and building functional applications from scratch.
          </p>
          <a 
            href="https://github.com/mushahidd/C-Project-Hospital-Management-System" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 font-semibold"
          >
            <Github size={18} />
            View Code
            <ExternalLink size={16} />
          </a>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> C, Database Concepts, System Design
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background dark:bg-background">
      <Navbar />
      
      <PageTransition>
        {/* Header */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              My <span className="text-primary dark:text-secondary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out the projects I've built throughout my computer science studies. 
              Click on any project to see the code on GitHub.
            </p>
          </div>
        </section>

        {/* Projects Timeline */}
        <Timeline data={timelineData} />
      </PageTransition>
    </div>
  );
}
