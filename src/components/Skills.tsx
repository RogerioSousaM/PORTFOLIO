import React from "react";

const skills = [
  { category: "Frontend", items: ["Angular", "Angular Material", "TypeScript"] },
  { category: "Backend", items: ["Java", "Spring Boot"] },
  { category: "Mobile", items: ["Ionic"] },
  { category: "Banco de Dados", items: ["Firebird, SQL Server"] },
  { category: "Ferramentas", items: ["IA", "Git", "GitHub","DBeaver"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-background relative">
      <div id="home" className="scroll-mt-20" />

        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase mb-3 sm:mb-4">HABILIDADES</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Habilidades Técnicas</h2>
          <div className="w-16 sm:w-24 h-px bg-portfolio-accent mx-auto mb-4 sm:mb-6 opacity-60 mt-4"></div>
            <p className="text-base sm:text-lg text-portfolio-text-dim max-w-3xl mx-auto leading-relaxed px-4">
              Tecnologias e ferramentas que utilizo. Sempre buscando aprendizado contínuo e aplicação prática em projetos.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((s) => (
            <div key={s.category} className="p-6 bg-card/50 border border-border/50 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">{s.category}</h3>
              <ul className="space-y-2 text-portfolio-text-dim">
                {s.items.map((it) => (
                  <li key={it} className="inline-block mr-3 mb-2 px-3 py-1 bg-background/30 rounded-full text-sm">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
