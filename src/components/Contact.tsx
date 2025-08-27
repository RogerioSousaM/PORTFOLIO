import { Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-portfolio-surface relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-20 sm:w-40 h-20 sm:h-40 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="mb-6 sm:mb-8">
              <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase mb-3 sm:mb-4">
                CONECTE-SE
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                CONTATO
              </h2>
            </div>
            
            <div className="w-16 sm:w-24 h-px bg-portfolio-accent mx-auto mb-6 sm:mb-8 opacity-60"></div>
            
            <p className="text-base sm:text-lg text-portfolio-text-dim max-w-2xl mx-auto leading-relaxed px-4">
              Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração.
            </p>
          </div>
          
          {/* Contact methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* E-mail */}
            <div className="text-center group">
              <div className="bg-portfolio-accent/10 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 mx-auto w-fit group-hover:bg-portfolio-accent/20 transition-all duration-300">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-portfolio-accent" />
              </div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">E-mail</h4>
              <p className="text-sm sm:text-base text-portfolio-text-dim">doug7t@hotmail.com</p>
            </div>
            
            {/* WhatsApp */}
            <div className="text-center group">
              <div className="bg-portfolio-accent/10 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 mx-auto w-fit group-hover:bg-portfolio-accent/20 transition-all duration-300">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-portfolio-accent" />
              </div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">WhatsApp</h4>
              <p className="text-sm sm:text-base text-portfolio-text-dim">(34) 99821-3827</p>
            </div>
            
            {/* Localização */}
            <div className="text-center group sm:col-span-2 md:col-span-1">
              <div className="bg-portfolio-accent/10 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 mx-auto w-fit group-hover:bg-portfolio-accent/20 transition-all duration-300">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-portfolio-accent" />
              </div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Localização</h4>
              <p className="text-sm sm:text-base text-portfolio-text-dim">Uberlândia - MG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;