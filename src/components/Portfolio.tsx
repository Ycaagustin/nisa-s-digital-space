import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-inventory.png';
import project3 from '@/assets/project-dashboard.png';

const projects = [
  {
    title: 'Sistem Informasi Penjualan',
    description: 'Ini adalah dashboard dari Toko Niscare untuk memperkenalkan produk-produk skincare dan saat pelanggan ingin membeli mereka akan diarahkan lewat WhatsApp',
    image: project1,
    tags: ['PHP', 'MySQL'],
  },
 
  {
    title: 'Sistem Informasi Kasir',
    description: 'ini untuk mengelola penjualan sebuah toko kelontong, seperti pada stok barang dan laporan penjualan. Dengan menghasilkan Struk belanja dalam bentuk teks yang dikirimkan melalui WhatsApp',
    image: project3,
    tags: ['Bootstrap', 'PHP Native', 'MySQL'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Proyek Saya
          </span>
          <h2 className="section-title">Proyek Unggulan</h2>
          <p className="section-subtitle mx-auto">
            Kumpulan proyek Sistem Informasi yang telah saya kerjakan selama studi saya
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
