import { MapPin, GraduationCap, Heart } from 'lucide-react';
import profileImage from '@/assets/profile-nisa.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl -rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl rotate-3" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={profileImage}
                  alt="Nisa Agustin - IT Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
              About Me
            </span>
            <h2 className="section-title">
              Get to Know Me Better
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am an undergraduate student currently pursuing a Bachelor's degree in Informatics in Bogor. 
              I am highly adaptable to new environments and enjoy creating motivational content in my spare time.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              I have a strong interest in nature, particularly in learning about plants, animals, and humans. 
              This curiosity drives me to explore the intersection of technology and the natural world, 
              seeking innovative ways to create meaningful digital solutions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Bogor, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Education</p>
                  <p className="text-sm font-medium text-foreground">Informatics</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Interests</p>
                  <p className="text-sm font-medium text-foreground">Nature & Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
