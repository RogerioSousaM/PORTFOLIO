const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
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
          
          {/* Stats section */}
          <div className="flex items-center justify-center space-x-12 md:space-x-16">
            <div className="text-center group">
              <div className="text-3xl font-bold text-portfolio-accent mb-2 group-hover:scale-110 transition-transform duration-300">03+</div>
              <div className="text-xs font-medium text-portfolio-text-dim tracking-[0.2em] uppercase">ANOS</div>
            </div>
            
            <div className="w-px h-16 bg-border opacity-40"></div>
            
            <div className="text-center group">
              <div className="text-3xl font-bold text-portfolio-accent mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-xs font-medium text-portfolio-text-dim tracking-[0.2em] uppercase">PROJETOS</div>
            </div>
            
            <div className="w-px h-16 bg-border opacity-40"></div>
            
            <div className="text-center group">
              <div className="text-3xl font-bold text-portfolio-accent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-xs font-medium text-portfolio-text-dim tracking-[0.2em] uppercase">DEDICAÇÃO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;