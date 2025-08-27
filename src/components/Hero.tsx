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