const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-portfolio-text-dim mb-6 uppercase">
            PORTFÓLIO
          </p>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="block">DESENVOLVEDOR</span>
            <span className="block text-portfolio-accent">CRIATIVO</span>
          </h1>
          
          <div className="w-16 h-0.5 bg-portfolio-accent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-portfolio-text-dim leading-relaxed max-w-2xl mx-auto">
            Criando experiências digitais únicas através de código limpo, 
            design elegante e soluções inovadoras.
          </p>
          
          <div className="flex items-center justify-center mt-12 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent">03+</div>
              <div className="text-sm text-portfolio-text-dim tracking-wider">ANOS</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent">15+</div>
              <div className="text-sm text-portfolio-text-dim tracking-wider">PROJETOS</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent">100%</div>
              <div className="text-sm text-portfolio-text-dim tracking-wider">DEDICAÇÃO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;