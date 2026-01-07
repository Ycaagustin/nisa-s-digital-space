import { Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display font-bold text-2xl mb-2 block">
              Nisa<span className="text-primary">.</span>
            </a>
            <p className="text-background/60 text-sm">
              © {currentYear} Nisa Agustin. All rights reserved.
            </p>
          </div>

          {/* Download CV Button */}
          <Button
            variant="outline"
            className="gap-2 border-background/30 text-background hover:bg-background hover:text-foreground transition-colors"
            onClick={() => {
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

        {/* Divider */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <p className="text-center text-background/40 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> in Bogor, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
