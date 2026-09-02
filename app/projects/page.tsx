"use client";

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { Footer } from "@/components/footer";
import { Timeline } from "@/components/ui/timeline";
import { ProjectCard } from "@/components/project-card";
import { Github, ExternalLink, Globe } from "lucide-react";

export default function ProjectsPage() {
  const timelineData = [
    {
      title: "StandupBot",
      content: (
        <ProjectCard
          title="StandupBot"
          kicker="React 19 · FastAPI · OpenRouter"
          image="/projects/standupbot.png"
          url="shu-standup-bot.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            AI-powered async standups for student project teams. Each teammate answers 3 questions in 90 seconds — the AI reads everyone's updates together and writes one brief that flags blockers, cross-person dependencies, new joiners, and missing members. Built for Iterate '26 Hackathon.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🤖 AI Brief Generation</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🔗 Cross-Person Blocker Detection</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">👥 Team Invite Links</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">⚡ Real-Time Streaming</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://shu-standup-bot.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />Live Demo<ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mushahidd/Standup-Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Github size={18} />View Code<ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> React 19, TypeScript, Vite, TanStack Router, TanStack Query, Tailwind CSS v4, shadcn/ui, FastAPI, Python, SQLite, Google OAuth, OpenRouter
            </p>
          </div>
        </ProjectCard>
      ),
    },    
    {
      title: "Fluxnote",
      content: (
        <ProjectCard
          title="Fluxnote"
          kicker="Next.js 16 · Yjs · Groq AI"
          image="/projects/fluxnote.png"
          url="fluxnote-devday.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A real-time collaborative canvas that turns sticky notes, decisions, and questions into a structured task board — with AI intent detection, live cursors, node-level permissions, and Yjs-powered CRDT sync. Brainstorm together, leave with action not chaos.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🎨 Infinite Canvas</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">⚡ Real-Time Collaboration</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🤖 AI Intent Detection</span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">🔐 Node-Level RBAC</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://fluxnote-devday.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />Live Demo<ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mushahidd/Fluxnote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Github size={18} />View Code<ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Yjs, WebSockets, Node.js, Express, Supabase, Prisma, Groq AI
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "KhataLens",
      content: (
        <ProjectCard
          title="KhataLens"
          kicker="React 18 · FastAPI · Gemini 2.0"
          image="/projects/khatalens.png"
          url="khata-lens.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            An AI-powered ledger management system for shopkeepers and small
            business owners. Snap a photo of your handwritten Khata notebook and
            Gemini AI extracts names, amounts, and statuses instantly — with a
            RAG chatbot that answers questions in English or Roman Urdu, all
            stored locally for full privacy.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📸 AI-Powered OCR
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              💬 RAG ChatBot
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📊 Recovery Analytics
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🔒 Local-First Privacy
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://khata-lens.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/Asadjafri9/KhataLens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Github size={18} />
              View Code
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span> React
              18, TypeScript, Vite, Tailwind CSS, Framer Motion, FastAPI,
              Python, SQLite, Supabase Auth, Gemini 2.0 Flash, OpenRouter
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "ChainPass",
      content: (
        <ProjectCard
          title="ChainPass"
          kicker="Next.js 14 · Solidity · Hardhat"
          image="/projects/chainpass.png"
          url="chain-pass-psl.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A blockchain-powered ticketing platform built for PSL-style events.
            NFT tickets (ERC-721) eliminate fake tickets and scalping through
            on-chain resale caps and automatic royalty routing — all backed by a
            neon cyberpunk Next.js frontend and Solidity smart contracts.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🎟️ NFT Ticketing
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              ⛓️ On-Chain Anti-Scalping
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              💸 Auto Royalty Split
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🏪 Resale Marketplace
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://chain-pass-psl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mushahidd/ChainPass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Github size={18} />
              View Code
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-neutral-900/50 dark:bg-neutral-900 border border-secondary/30 rounded-lg">
            <p className="text-neutral-200 dark:text-neutral-100 text-xs md:text-sm break-words">
              <span className="font-semibold text-secondary">Tech:</span>{" "}
              Next.js 14, React 18, Ethers.js 6, Solidity 0.8.24, Hardhat,
              OpenZeppelin, WireFluid Testnet
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "AI Financial Co-Pilot",
      content: (
        <ProjectCard
          title="AI Financial Co-Pilot"
          kicker="React 18 · FastAPI · Gemini API"
          image="/projects/financial-copilot.png"
          url="monetra-copilot.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            An AI-powered financial management platform built for
            micro-businesses, freelancers, and solo entrepreneurs. It provides
            real-time dashboards, automated transaction categorization,
            AI-driven financial insights, and a conversational assistant to help
            users understand and optimize their cash flow with data-backed
            recommendations.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📊 Real-Time Analytics
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🤖 AI Insights
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              💬 Conversational Assistant
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📁 Smart CSV Processing
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://monetra-copilot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mushahidd/AI-Financial-Co-Pilot"
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
              <span className="font-semibold text-secondary">Tech:</span> React
              18, Vite, Framer Motion, GSAP, FastAPI, Python, PostgreSQL
              (Supabase), Google Gemini API
            </p>
          </div>
        </ProjectCard>
      ),
    },

    {
      title: "SyncScript",
      content: (
        <ProjectCard
          title="SyncScript"
          kicker="Next.js 14 · Prisma · Pusher"
          image="/projects/syncscript.png"
          url="sync-script-iba.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A modern SaaS research management platform that enables teams to
            organize academic sources, upload and parse PDFs, generate
            AI-powered APA citations, and collaborate in real time. Built with
            scalable architecture and secure authentication, SyncScript
            streamlines collaborative research workflows with intelligent
            automation.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📚 Research SaaS
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🤖 AI Citations
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              ⚡ Real-Time Sync
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              ☁️ Cloud PDF Storage
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://sync-script-iba.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mushahidd/sync-script"
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
              <span className="font-semibold text-secondary">Tech:</span>{" "}
              Next.js 14 (App Router), TypeScript, TailwindCSS, PostgreSQL,
              Prisma, NextAuth.js, OpenRouter API, Cloudinary, Pusher
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "AI Exam Generator",
      content: (
        <ProjectCard
          title="AI Exam Generator"
          kicker="React · Express · PostgreSQL"
          image="/projects/qraft.png"
          url="qraft-gen.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A modern full-stack web application for teachers and administrators
            to create, manage, and export professional exam papers with AI
            assistance. Features AI-powered question generation using Shifu AI
            (DeepSeek), Question Bank management, PDF export, user management
            with Google OAuth, and a fully responsive design.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🤖 AI-Powered
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📄 PDF Export
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🔐 Google OAuth
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📱 Responsive
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://qraft-gen.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mushahidd/Qraft"
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
              <span className="font-semibold text-secondary">Tech:</span> React,
              TypeScript, Vite, TailwindCSS, Node.js, Express.js, PostgreSQL,
              Prisma, OpenRouter API (DeepSeek), JWT, Google OAuth
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "Student Utility Hub",
      content: (
        <ProjectCard
          title="Student Utility Hub"
          kicker="React · TypeScript · Vite"
          image="/projects/student-utility-hub.png"
          url="student-utility-hub.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A productivity web app designed for students to manage their
            academic schedules and resources efficiently.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📅 Timetable
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🎓 Student Tools
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              ⚡ Fast & Responsive
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🌐 Web App
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://student-utility-hub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-secondary/50 transition-all duration-300 font-semibold"
            >
              <Globe size={18} />
              Live Demo
              <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/mushahidd/timetable-summary"
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
              <span className="font-semibold text-secondary">Tech:</span> React,
              TypeScript, TailwindCSS, Vite, Vercel
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "Remote Laptop Control",
      content: (
        <ProjectCard
          title="Remote Laptop Control"
          kicker="React · JavaScript · React Router"
          image="/projects/remote-laptop.svg"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 break-words">
            A remote control system that lets you lock or unlock your laptop
            from anywhere. Features a secure admin authentication system, clean
            modern UI with smooth animations, and a simple one-click control
            panel for seamless device management.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🔐 Secure Auth
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              💻 Remote Control
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              🎨 Modern UI
            </span>
            <span className="px-2 py-1 text-xs bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary-foreground rounded-full font-medium">
              📱 Responsive
            </span>
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
              <span className="font-semibold text-secondary">Tech:</span> React,
              JavaScript, React Router, CSS3, Local Storage Auth
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "Business Platform",
      content: (
        <ProjectCard
          title="Business Platform"
          kicker="Python · FastAPI · PostgreSQL"
          image="/projects/business-platform.png"
          url="v0-community-network.vercel.app"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 break-words">
            Created a Business Platform that handles complex backend operations
            with vibe code methodology. Designed with modern architecture
            patterns and database optimization.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://v0-community-network.vercel.app/"
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
              <span className="font-semibold text-secondary">Tech:</span> Vibe
              Code, Python, FastAPI, Jinja, PostgreSQL
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "ERP",
      content: (
        <ProjectCard
          title="ERP"
          kicker="Java · OOP · MySQL"
          image="/projects/erp.png"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 break-words">
            Developed an ERP (Enterprise Resource Planning) system using Java.
            Implemented complex business logic and enterprise-level architecture
            patterns using OOP principles.
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
              <span className="font-semibold text-secondary">Tech:</span> Java,
              OOP, Enterprise Patterns, MySQL Database
            </p>
          </div>
        </ProjectCard>
      ),
    },
    {
      title: "Management System",
      content: (
        <ProjectCard
          title="Management System"
          kicker="C · Database Concepts · System Design"
          image="/projects/hms.png"
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 break-words">
            Built a comprehensive Hospital Management System in C. This project
            introduced me to system design, data management, and building
            functional applications from scratch.
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
              <span className="font-semibold text-secondary">Tech:</span> C,
              Database Concepts, System Design
            </p>
          </div>
        </ProjectCard>
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
              My{" "}
              <span className="text-primary dark:text-secondary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out the projects I've built throughout my computer science
              studies. Click on any project to see the code on GitHub.
            </p>
          </div>
        </section>

        {/* Projects Timeline */}
        <Timeline data={timelineData} />

        <Footer />
      </PageTransition>
    </div>
  );
}
