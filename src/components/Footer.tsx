import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-xl font-bold tracking-wider mb-4">
              OBRIGADO POR VISITAR!
            </h3>
            <p className="text-portfolio-text-dim max-w-md mx-auto">
              Sempre em busca de novos desafios e oportunidades para criar 
              soluções digitais incríveis.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-portfolio-surface hover:bg-portfolio-accent/20 rounded-lg transition-colors group"
            >
              <Github className="w-5 h-5 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-portfolio-surface hover:bg-portfolio-accent/20 rounded-lg transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
            <a
              href="mailto:contato@seudominio.com"
              className="p-3 bg-portfolio-surface hover:bg-portfolio-accent/20 rounded-lg transition-colors group"
            >
              <Mail className="w-5 h-5 text-portfolio-text-dim group-hover:text-portfolio-accent transition-colors" />
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-sm text-portfolio-text-dim">
              © {currentYear} Portfólio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;