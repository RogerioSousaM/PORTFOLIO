Informação do Currículo
	
Local Sugerido no Portfólio
	
Componente a ser Modificado/Criado
Resumo Profissional
	
Abaixo do seu nome na seção principal (Hero).
	
Hero.tsx (Modificação)
Habilidades Técnicas
	
Em uma nova seção, idealmente após o Hero ou antes dos Projects.
	
Skills.tsx (Novo Componente)
Experiência Profissional
	
Em uma nova seção, após as Skills e antes dos Projects ou Contact.
	
Experience.tsx (Novo Componente)
Formação e Idiomas
	
Pode ser incluído no final da seção Experience ou em uma seção dedicada, se for extensa.
	
Experience.tsx (Modificação/Inclusão)

// ... dentro do div com a classe "max-w-5xl mx-auto"
          {/* Main heading */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block mb-2">ROGÉRIO</span>
              <span className="block text-portfolio-accent">SOUSA MOREIRA</span>
            </h1>
          </div>
          
          {/* NOVO: Resumo Profissional */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xl sm:text-2xl text-portfolio-text-dim leading-relaxed">
              Desenvolvedor Fullstack com 3 anos de experiência em soluções escaláveis (Angular, Java, Ionic). Foco em otimização de processos e entrega de valor, combinando desenvolvimento com expertise em automação.
            </p>
          </div>
          
          {/* Decorative line */}
// ...
B. Criação da Seção de Habilidades (Skills.tsx)
Crie um novo componente chamado Skills.tsx para exibir a tabela de habilidades técnicas (Frontend, Backend, etc.).
Ação Sugerida:

    Crie o arquivo /home/ubuntu/portfolio/PORTFOLIO-main/src/components/Skills.tsx.
    Importe e use este novo componente no Index.tsx, posicionando-o após o Hero.tsx.

Exemplo de Estrutura (Skills.tsx):
Use a tabela de habilidades que criamos no currículo otimizado, transformando-a em um componente visualmente atraente (ex: cards ou barras de progresso).
C. Criação da Seção de Experiência (Experience.tsx)
Crie um novo componente chamado Experience.tsx para listar seus cargos em formato de linha do tempo (timeline) ou lista de blocos, detalhando as responsabilidades e conquistas de cada um.
Ação Sugerida:

    Crie o arquivo src/components/Experience.tsx.
    Importe e use este novo componente no Index.tsx, posicionando-o após o Skills.tsx.

Exemplo de Estrutura (Experience.tsx):
Para cada experiência (Grupo Luta pela Vida, Algar Tech, TV Paranaíba), use um bloco que contenha:

    Título do Cargo (Desenvolvedor Fullstack)
    Empresa e Local (Grupo Luta pela Vida | Uberlândia, MG)
    Período Atual)
    Lista de Responsabilidades/Conquistas (os bullet points do currículo otimizado).
    3. Otimização da Seção de Projetos (Projects.tsx)
O arquivo Projects.tsx já lista seus projetos. Para cada projeto, você tem os campos title, description, tags, etc.
Ação Sugerida:

    Refine as Descrições: Certifique-se de que a description de cada projeto no array projects do Projects.tsx não apenas descreva o que o projeto é, mas também o que você fez e o resultado alcançado. Isso é o que o RH procura.

Resumo das Modificações no Index.tsx
Após a criação dos novos componentes, seu arquivo /home/ubuntu/portfolio/PORTFOLIO-main/src/pages/Index.tsx ficará assim:
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills"; // NOVO
import Experience from "@/components/Experience"; // NOVO
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills /> // NOVO
      <Experience /> // NOVO
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default Index;


hero.tsx:

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 border border-portfolio-accent rounded-full"></div>
        <div className="absolute top-1/2 left-4 sm:left-10 w-8 sm:w-16 h-8 sm:h-16 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Portfolio label */}
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase">
              PORTFÓLIO
            </p>
          </div>
          
          {/* Main heading */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block mb-2">ROGÉRIO</span>
              <span className="block text-portfolio-accent">SOUSA MOREIRA</span>
            </h1>
          </div>
          
          {/* Decorative line */}
          <div className="w-16 sm:w-20 h-px bg-portfolio-accent mx-auto mb-12 sm:mb-16 opacity-60"></div>
          
          {/* Call to action */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto p-6 sm:p-8 md:p-12 bg-card/50 border border-border/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Vamos trabalhar juntos!</h3>
              <p className="text-base sm:text-lg text-portfolio-text-dim leading-relaxed mb-6 sm:mb-8">
                Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia em mente ou precisa de ajuda com desenvolvimento, não hesite em entrar em contato através dos canais abaixo.
              </p>
              
              {/* Contact Button */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-portfolio-accent hover:bg-portfolio-accent-glow text-white font-semibold text-lg tracking-wide rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow border border-portfolio-accent/20 backdrop-blur-sm"
              >
                CONTATOS
              </button>
              
              <div className="w-12 sm:w-16 h-px bg-portfolio-accent mx-auto mt-6 sm:mt-8 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


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

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;


Esse é o meu curriculo:
ROGÉRIO SOUSA MOREIRA

Desenvolvedor Fullstack | Angular, Java, Ionic

**(34) 99821-3827 | doug7t@hotmail.com | LinkedIn | **Portfólio




RESUMO PROFISSIONAL

Focado em soluções escaláveis e eficientes. Com vivência em todo o ciclo de desenvolvimento de software, desde a concepção até a entrega. Forte histórico em otimização de processos e entrega de valor, combinando habilidades de desenvolvimento com experiência em suporte técnico e automação. Busco aplicar minha expertise técnica para impulsionar a inovação e a eficiência em um ambiente desafiador.




EXPERIÊNCIA PROFISSIONAL

Desenvolvedor Fullstack

Grupo Luta pela Vida – Atual

•
Desenvolvimento e manutenção de aplicações utilizando Angular (Frontend), Java (Backend) e Ionic (Mobile).

•
Implementação de novas funcionalidades e refatoração de código, garantindo a performance, escalabilidade e segurança dos sistemas.

Analista de Suporte / Automação

Algar Tech

•
Desenvolvimento e implementação de automações utilizando VBA nos processos internos e redução significativa no tempo de execução.

•
Análise de dados para identificar gargalos e oportunidades de melhoria, desenvolvendo soluções que impulsionaram a eficiência operacional.

Suporte Técnico

TV Paranaíba (Afiliada Record)

•
Suporte técnico abrangente a usuários, com resolução proativa de problemas de software e hardware, garantindo a continuidade operacional.

•
Manutenção preventiva e corretiva em equipamentos de TI, assegurando a estabilidade da infraestrutura.




HABILIDADES TÉCNICAS

Categoria
Tecnologias
Frontend
Angular, Angular Material, TypeScript
Backend
Java
Mobile
Ionic
Banco de Dados
SQL Server
Ferramentas
Inteligencia artificial, Git, GitHub, VBA, Bots





FORMAÇÃO ACADÊMICA

Redes de Computadores Universidade Cidade de São Paulo (UNICID)




IDIOMAS

•
Inglês: Básico

