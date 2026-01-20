'use client';

import { Timeline } from "@/components/ui/timeline";
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { AnimatedQuote } from "@/components/ui/animated-quote";

export default function Portfolio() {
  const timelineData = [
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
            View on GitHub
            <ExternalLink size={16} />
          </a>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-300 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> C, Database Concepts, System Design
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
            View on GitHub
            <ExternalLink size={16} />
          </a>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-300 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> Java, OOP, Enterprise Patterns, MySQL Database
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
          <a 
            href="https://github.com/mushahidd/network" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 font-semibold"
          >
            <Github size={18} />
            View on GitHub
            <ExternalLink size={16} />
          </a>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-300 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> Vibe Code, Python, FastAPI, Jinja, PostgreSQL
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background dark:bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary dark:text-secondary hover:opacity-80 transition-opacity">Mushahid</a>
          <div className="hidden md:flex gap-8 text-muted-foreground">
            <a href="#about" className="hover:text-primary dark:hover:text-secondary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary dark:hover:text-secondary transition-colors">Projects</a>
            <a href="#specializations" className="hover:text-primary dark:hover:text-secondary transition-colors">Specializations</a>
            <a href="#contact" className="hover:text-primary dark:hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science undergraduate passionate about building real-world projects and exploring new technologies. My journey through college has taught me the fundamentals of programming and system design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in learning by doing. Every project I build helps me understand concepts deeper and prepares me for the tech industry. I'm always excited to collaborate and learn from others.
              </p>
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">What I'm Learning</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-secondary font-bold">→</span>
                    System design and architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary font-bold">→</span>
                    Data structures
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary font-bold">→</span>
                    Network programming and protocols
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary font-bold">→</span>
                    Building scalable applications
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden border border-border bg-accent/10">
              <AnimatedQuote />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Timeline Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">My Academic Projects</h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Check out the projects I've built throughout my computer science ongoing studies. Click on any project to see the code on GitHub.
          </p>
        </div>
        <Timeline data={timelineData} />
      </section>

      {/* Specializations Section */}
      <section id="specializations" className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Languages & Specializations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card dark:bg-card border border-border rounded-xl p-8 hover:border-secondary/50 dark:hover:border-secondary/50 transition-colors">
              <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-6">Programming Languages</h3>
              <div className="space-y-4">
                {['C', 'C++', 'Java', 'Python'].map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-foreground font-semibold">{lang}</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary rounded-full"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card dark:bg-card border border-border rounded-xl p-8 hover:border-accent/50 dark:hover:border-accent/50 transition-colors">
              <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-6">Core Specializations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Programming Fundamentals', 'Object Oriented Programming', 'Database Systems', 'Artificial Intelligence', 'Computer Networks', 'Data Structures', 'Operating Systems'].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
                    <span className="text-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm open to collaboration, questions, or just a friendly chat about tech and projects!
          </p>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <a 
              href="https://github.com/mushahidd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-110 font-semibold inline-flex items-center gap-2"
            >
              <Github size={24} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/mushahid19/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-secondary/30 transition-all transform hover:scale-110 font-semibold inline-flex items-center gap-2"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a 
              href="mailto:mushahidhussain451@gmail.com" 
              className="p-4 bg-accent text-accent-foreground rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all transform hover:scale-110 font-semibold inline-flex items-center gap-2"
            >
              <Mail size={24} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Mushahid Portfolio. All rights reserved.</p>
          <p>Designed and developed by Mushahid.</p>
          <p>Built with Vibe Code, Next.js, React, Tailwind CSS, and Aceternity UI.</p>
        </div>
      </footer>
    </div>
  );
}
