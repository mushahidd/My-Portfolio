'use client';

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { AnimatedQuote } from "@/components/ui/animated-quote";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background dark:bg-background">
      <Navbar />
      
      <PageTransition>
        {/* Hero Introduction */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Hello, I'm <span className="text-primary dark:text-secondary">Mushahid</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A Computer Science student who loves turning ideas into projects using modern tools and AI-assisted development.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 md:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a 7th-semester BS Computer Science student at SMIU, Karachi. I've built multiple full-stack applications from AI-powered exam generators to real-time collaborative tools and remote device control systems by combining modern AI tools with my core programming skills.                 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in C, C++, Java, Python, and MySQL, I don't just write code I ship working products. I use AI-assisted development as a force multiplier, turning concepts into deployed applications faster while deepening my understanding of real-world software.
                </p>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Currently Exploring</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <span className="text-secondary font-bold">→</span>
                      AI/ML Fundamentals & Model Behavior
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-secondary font-bold">→</span>
                      RAG Systems & AI Agents
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-secondary font-bold">→</span>
                      Applied AI Research
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-secondary font-bold">→</span>
                      Full-Stack AI Engineering
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href="/Mushahid_CV.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Download CV
                  </a>
                </div>
              </div>
              <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border bg-accent/10">
                <AnimatedQuote />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Explore More</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { href: '/projects', title: 'Projects', desc: 'View my academic and personal projects' },
                { href: '/skills', title: 'Skills', desc: 'Languages and specializations' },
                { href: '/education', title: 'Education', desc: 'My academic journey' },
                { href: '/contact', title: 'Contact', desc: 'Get in touch with me' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10"
                >
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary dark:group-hover:text-secondary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  );
}
