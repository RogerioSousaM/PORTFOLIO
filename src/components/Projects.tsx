import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      number: ".01",
      title: "Site de músicas e notícias",
      description: "(OBS: em andamento.)O projeto oferece uma experiência completa com portal público para ouvintes e painel administrativo robusto para gestão de conteúdo.",
      image: "/Mo.png",
      videoId: "pr8awus6knY",
      githubUrl: "https://github.com/RogerioSousaM/morden-metal-radio",
      tags: ["React", "Node.js", "SQLite"]
    },
    {
      number: ".02",
      title: "Conversor de fotos",
      description: "Conversor HEIC (Formato de fotos Iphone) para JPG é uma aplicação desktop desenvolvida em Python que converte fotos HEIC para o formato JPG.",
      image: "/Co.png",
      videoId: "ldWE8cweYYo",
      githubUrl: "https://github.com/usuario/projeto2",
      tags: ["Python"]
    },
    {
      number: ".03",
      title: "CRUD com Angular",
      description: "CRUD completo desenvolvido com Angular, NestJS e SQL Server, arquitetura moderna com TypeORM e sistema de migrations.",
      image: "/An.png",
      videoId: "yaojrzdMiTc",
      githubUrl: "https://github.com/RogerioSousaM/estudo_angular",
      tags: ["Angular", "NestJS", "SQL Server"]
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-background relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-32 right-4 sm:right-20 w-20 sm:w-40 h-20 sm:h-40 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-32 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 sm:mb-8">
            <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase mb-3 sm:mb-4">
              TRABALHOS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              PROJETOS
            </h2>
          </div>
          
          <div className="w-16 sm:w-24 h-px bg-portfolio-accent mx-auto mb-6 sm:mb-8 opacity-60"></div>
          
          <p className="text-base sm:text-lg text-portfolio-text-dim max-w-3xl mx-auto leading-relaxed px-4">
            Uma seleção dos meus projetos mais relevantes, demonstrando 
            diferentes tecnologias e abordagens criativas.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/* Footer link */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg sm:text-xl md:text-2xl text-portfolio-text-dim px-4">
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