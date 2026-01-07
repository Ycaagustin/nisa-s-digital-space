import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-inventory.jpg';
import project2 from '@/assets/project-library.jpg';
import project3 from '@/assets/project-dashboard.jpg';

const projects = [
  {
    title: 'Inventory Management System',
    description: 'A comprehensive system for tracking and managing inventory, featuring real-time stock updates, low-stock alerts, and detailed reporting capabilities.',
    image: project1,
    tags: ['PHP', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Digital Library System',
    description: 'An online library management platform enabling book cataloging, member registration, borrowing management, and return tracking with fine calculation.',
    image: project2,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    title: 'Student Information Dashboard',
    description: 'A centralized dashboard for managing student data, academic records, and generating performance reports with data visualization.',
    image: project3,
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            My Work
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A collection of Information System projects I've worked on during my studies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-background border-border/50 overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="gap-1">
                      <ExternalLink size={14} />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-1">
                      <Github size={14} />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
