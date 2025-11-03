import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12 sm:py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-1/4 w-16 sm:w-24 h-16 sm:h-24 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-20 sm:w-32 h-20 sm:h-32 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center">
          {/* Main content */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold tracking-[0.2em] mb-4 sm:mb-6">
              OBRIGADO POR VISITAR!
            </h3>
            <p className="text-sm sm:text-base text-portfolio-text-dim max-w-lg mx-auto leading-relaxed px-4">
              Sempre em busca de novos desafios e oportunidades para criar 
              soluções digitais incríveis.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center space-x-6 sm:space-x-8 mb-8 sm:mb-12">
            <a
              href="https://github.com/RogerioSousaM"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-portfolio-surface/50 hover:bg-portfolio-accent/20 rounded-2xl transition-all duration-300 group hover:scale-110"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rog%C3%A9rio-sousa-moreira-84309486/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-portfolio-surface/50 hover:bg-portfolio-accent/20 rounded-2xl transition-all duration-300 group hover:scale-110"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
            <a
              href="mailto:doug7t@hotmail.com"
              className="p-3 sm:p-4 bg-portfolio-surface/50 hover:bg-portfolio-accent/20 rounded-2xl transition-all duration-300 group hover:scale-110"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
          </div>
          
          {/* Decorative line */}
          <div className="w-24 sm:w-32 h-px bg-portfolio-accent mx-auto mb-6 sm:mb-8 opacity-40"></div>
          
          {/* Copyright */}
          <div className="border-t border-border/30 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-portfolio-text-dim font-medium px-4">
              © {currentYear} Rogério Sousa Moreira.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;