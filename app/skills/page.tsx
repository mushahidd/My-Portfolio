'use client';

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const programmingLanguages = [
    { name: 'Python', level: 85, description: 'Backend, AI/ML, automation, FastAPI' },
    { name: 'C', level: 90, description: 'System programming, data structures' },
    { name: 'C++', level: 85, description: 'OOP, competitive programming' },
    { name: 'Java', level: 85, description: 'Enterprise applications, OOP' },
    { name: 'MySQL', level: 80, description: 'Database queries, DBMS' },
  ];

  const specializations = [
    'Artificial Intelligence',
    'LLM Integration & RAG',
    'AI Agents & Automation',
    'Full-Stack Development',
    'Data Structures',
    'Object Oriented Programming',
    'Database Systems (DBMS)',
    'Information Security',
  ];

  const aiTools = [
    { name: 'Claude Code', category: 'Agentic Coding' },
    { name: 'Cursor', category: 'AI IDE' },
    { name: 'Codex', category: 'AI Coding Agent' },
    { name: 'Devin', category: 'Autonomous Agent' },
    { name: 'GitHub Copilot', category: 'AI Assistant' },
    { name: 'Antigravity', category: 'Agentic IDE' },
    { name: 'OpenCode', category: 'AI Coding Agent' },
    { name: 'Kiro', category: 'Agentic IDE' },
  ];

  const tools = [
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'FastAPI', category: 'Backend Framework' },
    { name: 'React / Next.js', category: 'Frontend' },
    { name: 'PostgreSQL / SQLite', category: 'Database' },
    { name: 'Supabase', category: 'Backend as a Service' },
    { name: 'Vercel / Railway', category: 'Hosting' },
  ];

  return (
    <div className="min-h-screen w-full bg-background dark:bg-background">
      <Navbar />
      
      <PageTransition>
        {/* Header */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Skills & <span className="text-primary dark:text-secondary">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies, languages, and specializations I've developed throughout my academic journey.
            </p>
          </div>
        </section>

        {/* Programming Languages */}
        <section className="py-16 px-4 md:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Programming Languages
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programmingLanguages.map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-foreground">{lang.name}</h3>
                    <span className="text-secondary font-semibold">{lang.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">{lang.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Specializations */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Core Specializations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specializations.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 text-center hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all"
                >
                  <div className="w-3 h-3 rounded-full bg-secondary mx-auto mb-3" />
                  <p className="text-foreground font-medium text-sm">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Development Tools */}
        <section className="py-16 px-4 md:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              AI Development Tools
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              AI-native IDEs and coding agents I use to ship products faster.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aiTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors"
                >
                  <p className="text-foreground font-semibold mb-1">{tool.name}</p>
                  <p className="text-muted-foreground text-sm">{tool.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {tools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors"
                >
                  <p className="text-foreground font-semibold mb-1">{tool.name}</p>
                  <p className="text-muted-foreground text-sm">{tool.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </PageTransition>
    </div>
  );
}
