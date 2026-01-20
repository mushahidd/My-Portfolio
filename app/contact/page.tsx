'use client';

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, MessageCircle, FileDown } from 'lucide-react';

export default function ContactPage() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mushahidd',
      icon: Github,
      description: 'Check out my code and projects',
      color: 'hover:shadow-primary/30',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mushahid19/',
      icon: Linkedin,
      description: 'Connect with me professionally',
      color: 'hover:shadow-secondary/30',
    },
    {
      name: 'Email',
      href: 'mailto:mushahidhussain451@gmail.com',
      icon: Mail,
      description: 'mushahidhussain451@gmail.com',
      color: 'hover:shadow-accent/30',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background dark:bg-background">
      <Navbar />
      
      <PageTransition>
        {/* Header */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Let's <span className="text-primary dark:text-secondary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm open to collaboration, questions, or just a friendly chat about tech and projects!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-card border border-border rounded-xl p-8 text-center hover:border-secondary/50 transition-all hover:shadow-lg ${link.color}`}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                    <link.icon size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{link.name}</h3>
                  <p className="text-muted-foreground text-sm">{link.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Get In Touch Message */}
        <section className="py-16 px-4 md:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
            >
              <MessageCircle size={48} className="mx-auto mb-6 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Have a project idea?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just have a conversation about technology and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:mushahidhussain451@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  <Send size={20} />
                  Send Me an Email
                </a>
                <a
                  href="/Mushahid_CV.pdf"
                  download
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card border-2 border-primary dark:border-secondary text-primary dark:text-secondary rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  <FileDown size={20} />
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground text-sm">Available for remote work worldwide</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                  <p className="text-muted-foreground text-sm">Usually within 24 hours</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 md:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Mushahid Portfolio. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, React, Tailwind CSS, and Framer Motion.</p>
          </div>
        </footer>
      </PageTransition>
    </div>
  );
}
