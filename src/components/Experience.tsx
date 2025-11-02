import React from "react";

const experiences = [
  {
    title: "Desenvolvedor Fullstack",
    company: "Grupo Luta pela Vida",
    period: "Atual",
    bullets: [
      "Desenvolvimento e manutenção de aplicações utilizando Angular (Frontend), Java (Backend) e Ionic (Mobile).",
      "Implementação de novas funcionalidades e refatoração de código, garantindo performance, escalabilidade e segurança.",
      "Colaboração com equipes multidisciplinares para entrega contínua e melhoria de processos.",
    ],
  },
  {
    title: "Analista de Suporte / Automação",
    company: "Algar Tech",
    period: "Período anterior",
    bullets: [
      "Desenvolvimento e implementação de automações usando VBA para processos internos, reduzindo tempo de execução.",
      "Análise de dados para identificar gargalos e propor melhorias que aumentaram a eficiência operacional.",
    ],
  },
  {
    title: "Suporte Técnico",
    company: "TV Paranaíba (Afiliada Record)",
    period: "Período anterior",
    bullets: [
      "Atuação em suporte técnico a usuários com foco em resolução rápida de problemas de software e hardware.",
      "Manutenção preventiva e corretiva de equipamentos de TI, garantindo estabilidade da operação.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-0 relative z-10">
        <div className="mb-12 sm:mb-15 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="block mb-1">ROGÉRIO</span>
            <span className="block text-portfolio-accent">SOUSA MOREIRA</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase mb-3 sm:mb-4">EXPERIÊNCIA</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Experiência Profissional</h2>
          <div className="w-16 sm:w-24 h-px bg-portfolio-accent mx-auto mb-4 sm:mb-6 opacity-60 mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="p-6 bg-card/50 border border-border/50 rounded-2xl">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-portfolio-text-dim">{exp.period}</span>
              </div>
              <p className="text-portfolio-accent font-medium mt-1">{exp.company}</p>
              <ul className="list-disc list-inside mt-3 text-portfolio-text-dim space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Formação e Idiomas (resumo) */}
          <div className="p-6 bg-card/50 border border-border/50 rounded-2xl">
            <h3 className="text-lg font-semibold">Formação</h3>
            <p className="text-portfolio-text-dim mt-2">Redes de Computadores — Universidade Cidade de São Paulo (UNICID)</p>

            <h3 className="text-lg font-semibold mt-4">Idiomas</h3>
            <p className="text-portfolio-text-dim mt-2">Inglês: Básico</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
