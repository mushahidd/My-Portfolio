'use client';

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

export default function EducationPage() {
  const academicJourney = [
    {
      year: '2026',
      title: 'Senior',
      institution: 'BS Computer Science',
       description: 'Preparing for the final year of BS Computer Science, with a focus on Final Year Project (FYP), Analysis of Algorithms, and Software Quality Assurance & Software Testing.',
      status: 'ongoing',
    },
    {
      year: '2025',
      title: 'Junior',
      institution: 'BS Computer Science',
      description: 'Advancing into core specializations including Mobile App Development, Operating Systems, Web Technologies, and Computer Architecture.',
      status: 'completed',
    },
    {
      year: '2024',
      title: 'Sophomore',
      institution: 'Sindh Madressatul Islam University',
      description: 'Strengthened foundations in Data Structures, Artificial Intelligence, Database Systems, and Computer Networks.',
      status: 'completed',
    },
    {
      year: '2023',
      title: 'Freshman',
      institution: 'BS Computer Science - Admitted',
      description: 'Started my journey in Computer Science. Built strong fundamentals in Programming, OOP, Mathematics, and Logic Design.',
      status: 'completed',
    },
  ];

  const relevantCourses = [
    { name: 'Compiler Construction', semester: 'Sem 6' },
    { name: 'Parallel & Distributed Computing', semester: 'Sem 6' },
    { name: 'Cyber Security', semester: 'Sem 6' },
    { name: 'Operating Systems', semester: 'Sem 5' },
    { name: 'Mobile App Development', semester: 'Sem 5' },
    { name: 'Advanced DBMS', semester: 'Sem 4' },
    { name: 'Computer Org & Assembly', semester: 'Sem 4' },
    { name: 'Data Structures', semester: 'Sem 3' },
    { name: 'Artificial Intelligence', semester: 'Sem 3' },
    { name: 'Computer Networks', semester: 'Sem 3' },
    { name: 'Information Security', semester: 'Sem 3' },
    { name: 'Object Oriented Programming', semester: 'Sem 2' },
    { name: 'Database Systems', semester: 'Sem 2' },
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently maintained strong academic performance throughout semesters',
      icon: Award,
    },
    {
      title: 'Project-Based Learning',
      description: 'Completed multiple hands-on projects applying theoretical knowledge',
      icon: BookOpen,
    },
    {
      title: 'Continuous Growth',
      description: 'Actively learning new technologies and frameworks beyond curriculum',
      icon: GraduationCap,
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
              My <span className="text-primary dark:text-secondary">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey in Computer Science — courses, achievements, and continuous learning.
            </p>
          </div>
        </section>

        {/* Academic Journey Timeline */}
        <section className="py-16 px-4 md:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Academic Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              {academicJourney.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                    item.status === 'ongoing' 
                      ? 'bg-secondary border-secondary/30 animate-pulse' 
                      : 'bg-primary border-primary/30'
                  }`} />
                  
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-2 text-secondary">
                        <Calendar size={16} />
                        <span className="font-semibold">{item.year}</span>
                        {item.status === 'ongoing' && (
                          <span className="px-2 py-0.5 text-xs bg-secondary/20 text-secondary rounded-full">
                            Ongoing
                          </span>
                        )}
                      </div>
                      {item.gpa && (
                        <div className="px-3 py-1 bg-primary/10 dark:bg-secondary/20 rounded-full">
                          <span className="text-sm font-bold text-primary dark:text-secondary">CGPA: {item.gpa}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.institution}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Relevant Courses */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Relevant Courses
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relevantCourses.map((course, idx) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all"
                >
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
                    {course.semester}
                  </span>
                  <p className="text-foreground font-medium text-sm mt-3">{course.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 px-4 md:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-8 text-center hover:border-secondary/50 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                    <item.icon size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications placeholder */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Certifications
            </h2>
            <p className="text-muted-foreground mb-8">
              Currently focusing on building projects and gaining practical experience. 
              Certifications coming soon as I continue my learning journey!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Learning in progress...
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  );
}
