import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      number: ".01",
      title: "E-COMMERCE MODERNO",
      description: "Plataforma completa de e-commerce com design responsivo, carrinho de compras e integração de pagamentos. Construída com React, Node.js e PostgreSQL.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ", // Exemplo de ID do YouTube
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/usuario/projeto",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      number: ".02",
      title: "APP MÓVEL NATIVO",
      description: "Aplicativo móvel para gerenciamento de tarefas com sincronização em tempo real e interface intuitiva. Desenvolvido com React Native e Firebase.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ",
      liveUrl: "https://exemplo2.com",
      githubUrl: "https://github.com/usuario/projeto2",
      tags: ["React Native", "Firebase", "TypeScript", "Redux"]
    },
    {
      number: ".03",
      title: "DASHBOARD ANALÍTICO",
      description: "Interface de análise de dados em tempo real com gráficos interativos e relatórios customizáveis. Implementado com Vue.js e D3.js.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ",
      liveUrl: "https://exemplo3.com",
      githubUrl: "https://github.com/usuario/projeto3",
      tags: ["Vue.js", "D3.js", "Python", "FastAPI"]
    },
    {
      number: ".04",
      title: "SITE INSTITUCIONAL",
      description: "Website corporativo com CMS personalizado, otimização SEO e performance excepcional. Criado com Next.js e Strapi.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveUrl: "https://exemplo4.com",
      githubUrl: "https://github.com/usuario/projeto4",
      tags: ["Next.js", "Strapi", "GraphQL", "Vercel"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-32 right-20 w-40 h-40 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase mb-4">
              TRABALHOS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              PROJETOS
            </h2>
          </div>
          
          <div className="w-24 h-px bg-portfolio-accent mx-auto mb-8 opacity-60"></div>
          
          <p className="text-lg text-portfolio-text-dim max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus projetos mais relevantes, demonstrando 
            diferentes tecnologias e abordagens criativas.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/* Footer link */}
        <div className="text-center mt-20">
          <p className="text-sm text-portfolio-text-dim">
            Mais projetos disponíveis no meu{" "}
            <a 
              href="https://github.com/RogerioSousaM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-accent hover:text-portfolio-accent-glow transition-colors duration-300 underline decoration-2 underline-offset-4"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;