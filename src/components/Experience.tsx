import { Calendar, Award, BookOpen } from 'lucide-react';

const experiences = [
  {
    year: '2024',
    title: 'Mahasiswa Informatika',
    organization: 'BSD, Tangerang',
    description: 'Mengikuti acara Indocomtech yakni pameran teknologi dan gedget yang memamerkan teknologi terkini ',
    icon: BookOpen,
    type: 'Kegiatan',
  },
  {
    year: '2024',
    title: 'Mahasiswa',
    organization: 'STIKOM El Rahma',
    description: 'Mengikuti kegiatan workshop yang diadakan oleh IT-16 yang bertema "Laravel: First Appearance - A Simple First App"',
    icon: Award,
    type: 'project',
  },
  {
    year: '2025',
    title: 'Mahasiswa',
    organization: 'Universitas Pakuan',
    description: 'Mengikuti kegiatan yang diadakan oleh GDG Bogor yang bertema "Safer, Smarter, and Scalable with Cloud and AI"',
    icon: Award,
    type: 'project',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Perjalananku
          </span>
          <h2 className="section-title">Perjalanan dan Pengalaman di Bidang Teknologi</h2>
          <p className="section-subtitle mx-auto">
            Pengalaman dan keterlibatan saya dalam berbagai kegiatan dan pembelajaran di bidang teknologi
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 animate-slide-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-card border border-border/50 rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow duration-300 ${
                    index % 2 === 0 ? '' : ''
                  }`}>
                    {/* Date Badge */}
                    <div className={`inline-flex items-center gap-2 text-primary text-sm font-medium mb-3 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <Calendar size={14} />
                      {exp.year}
                    </div>

                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary/80 text-sm font-medium mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
