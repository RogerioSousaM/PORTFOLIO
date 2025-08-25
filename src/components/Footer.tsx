import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-1/4 w-24 h-24 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center">
          {/* Main content */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold tracking-[0.2em] mb-6">
              OBRIGADO POR VISITAR!
            </h3>
            <p className="text-portfolio-text-dim max-w-lg mx-auto leading-relaxed">
              Sempre em busca de novos desafios e oportunidades para criar 
              soluções digitais incríveis.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-portfolio-surface/50 hover:bg-portfolio-accent/20 rounded-2xl transition-all duration-300 group hover:scale-110"
            >
              <Github className="w-6 h-6 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-portfolio-surface/50 hover:bg-portfolio-accent/20 rounded-2xl transition-all duration-300 group hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
            <a
              href="mailto:doug7t@hotmail.com"
              className="p-4 bg-portfolio-surface/50 hover:bg-portfolio-accent/20 rounded-2xl transition-all duration-300 group hover:scale-110"
            >
              <Mail className="w-6 h-6 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
          </div>
          
          {/* Decorative line */}
          <div className="w-32 h-px bg-portfolio-accent mx-auto mb-8 opacity-40"></div>
          
          {/* Copyright */}
          <div className="border-t border-border/30 pt-8">
            <p className="text-sm text-portfolio-text-dim font-medium">
              © {currentYear} Rogério Sousa Moreira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;