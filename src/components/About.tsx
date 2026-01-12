import { MapPin, GraduationCap, Heart } from 'lucide-react';
import profileImage from '@/assets/profile-nisa.jpeg';

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
              Tentang Saya
            </span>
            <h2 className="section-title">
              Mari Kenali Saya Lebih Baik
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Saya adalah mahasiswa S1 yang saat ini sedang menempuh gelar Sarjana Informatika di Bogor.
Saya sangat mudah beradaptasi dengan lingkungan baru dan senang membuat konten motivasi di waktu luang saya.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Saya memiliki minat yang besar terhadap alam, khususnya dalam mempelajari tumbuhan, hewan, dan manusia.
Rasa ingin tahu ini mendorong saya untuk mengeksplorasi titik temu antara teknologi dan dunia alam,
mencari cara-cara inovatif untuk menciptakan solusi digital yang bermakna.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Lokasi</p>
                  <p className="text-sm font-medium text-foreground">Bogor, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Pendidikan</p>
                  <p className="text-sm font-medium text-foreground">Informatika</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Ketertarikan</p>
                  <p className="text-sm font-medium text-foreground">Alam & Teknologi</p>
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
