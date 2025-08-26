const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-32 h-32 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-portfolio-accent rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Portfolio label */}
          <div className="mb-12">
            <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase">
              PORTFÓLIO
            </p>
          </div>
          
          {/* Main heading */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block mb-2">ROGÉRIO</span>
              <span className="block text-portfolio-accent">SOUSA MOREIRA</span>
            </h1>
          </div>
          
          {/* Decorative line */}
          <div className="w-20 h-px bg-portfolio-accent mx-auto mb-16 opacity-60"></div>
          
          {/* Call to action */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto p-12 bg-card/50 border border-border/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8 tracking-tight">Vamos trabalhar juntos!</h3>
              <p className="text-portfolio-text-dim leading-relaxed mb-8 text-lg">
                Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia em mente ou precisa de ajuda com desenvolvimento, não hesite em entrar em contato através dos canais acima.
              </p>
              <div className="w-16 h-px bg-portfolio-accent mx-auto opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;