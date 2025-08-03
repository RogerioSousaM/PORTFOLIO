import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.2em] text-portfolio-text-dim mb-4 uppercase">
              VAMOS CONVERSAR
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CONTATO
            </h2>
            <div className="w-16 h-0.5 bg-portfolio-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* E-mail */}
            <div className="text-center">
              <div className="bg-portfolio-accent/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <Mail className="w-6 h-6 text-portfolio-accent" />
              </div>
              <h4 className="font-medium mb-2">E-mail</h4>
              <p className="text-portfolio-text-dim">doug7t@hotmail.com</p>
            </div>
            
            {/* Telefone */}
            <div className="text-center">
              <div className="bg-portfolio-accent/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <Phone className="w-6 h-6 text-portfolio-accent" />
              </div>
              <h4 className="font-medium mb-2">Telefone</h4>
              <p className="text-portfolio-text-dim"> (34) 99821-3827</p>
            </div>
            
            {/* Localização */}
            <div className="text-center">
              <div className="bg-portfolio-accent/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <MapPin className="w-6 h-6 text-portfolio-accent" />
              </div>
              <h4 className="font-medium mb-2">Localização</h4>
              <p className="text-portfolio-text-dim">Uberlândia - MG</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-card border border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Vamos trabalhar juntos!</h3>
              <p className="text-portfolio-text-dim leading-relaxed mb-6">
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Se você tem uma ideia em mente ou precisa de ajuda com desenvolvimento, 
                não hesite em entrar em contato através dos canais acima.
              </p>
              <p className="text-sm text-portfolio-text-dim">
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