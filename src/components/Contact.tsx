import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-portfolio-surface relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-32 h-32 border border-portfolio-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-portfolio-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="mb-8">
              <p className="text-xs font-medium tracking-[0.3em] text-portfolio-text-dim uppercase mb-4">
                CONECTE-SE
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                CONTATO
              </h2>
            </div>
            
            <div className="w-24 h-px bg-portfolio-accent mx-auto mb-8 opacity-60"></div>
            
            <p className="text-lg text-portfolio-text-dim max-w-2xl mx-auto leading-relaxed">
              Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração.
            </p>
          </div>
          
          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* E-mail */}
            <div className="text-center group">
              <div className="bg-portfolio-accent/10 p-6 rounded-2xl mb-6 mx-auto w-fit group-hover:bg-portfolio-accent/20 transition-all duration-300">
                <Mail className="w-8 h-8 text-portfolio-accent" />
              </div>
              <h4 className="font-semibold mb-3 text-lg">E-mail</h4>
              <p className="text-portfolio-text-dim">doug7t@hotmail.com</p>
            </div>
            
            {/* Telefone */}
            <div className="text-center group">
              <div className="bg-portfolio-accent/10 p-6 rounded-2xl mb-6 mx-auto w-fit group-hover:bg-portfolio-accent/20 transition-all duration-300">
                <Phone className="w-8 h-8 text-portfolio-accent" />
              </div>
              <h4 className="font-semibold mb-3 text-lg">Telefone</h4>
              <p className="text-portfolio-text-dim">(34) 99821-3827</p>
            </div>
            
            {/* Localização */}
            <div className="text-center group">
              <div className="bg-portfolio-accent/10 p-6 rounded-2xl mb-6 mx-auto w-fit group-hover:bg-portfolio-accent/20 transition-all duration-300">
                <MapPin className="w-8 h-8 text-portfolio-accent" />
              </div>
              <h4 className="font-semibold mb-3 text-lg">Localização</h4>
              <p className="text-portfolio-text-dim">Uberlândia - MG</p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto p-12 bg-card/50 border border-border/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8 tracking-tight">Vamos trabalhar juntos!</h3>
              <p className="text-portfolio-text-dim leading-relaxed mb-8 text-lg">
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Se você tem uma ideia em mente ou precisa de ajuda com desenvolvimento, 
                não hesite em entrar em contato através dos canais acima.
              </p>
              <div className="w-16 h-px bg-portfolio-accent mx-auto opacity-60"></div>
              <p className="text-sm text-portfolio-text-dim mt-6 font-medium">
                Respondo todas as mensagens em até 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;