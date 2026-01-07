import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4 animate-slide-up">
            Hi, I'm <span className="gradient-text">Nisa Agustin</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            IT Student & Creative Enthusiast
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Passionate about technology, nature, and creating meaningful digital experiences.
            Currently pursuing a Bachelor's degree in Informatics in Bogor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="gap-2 shadow-soft hover:shadow-hover transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
              <ArrowDown size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 hover:bg-secondary transition-all duration-300"
              onClick={() => {
                // Trigger CV download
                const link = document.createElement('a');
                link.href = '/cv-nisa-agustin.pdf';
                link.download = 'CV-Nisa-Agustin.pdf';
                link.click();
              }}
            >
              <Download size={18} />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
