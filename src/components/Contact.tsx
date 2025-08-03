import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    
    // Resetar formulário
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.2em] text-portfolio-text-dim mb-4 uppercase">
              VAMOS CONVERSAR
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CONTATO
            </h2>
            <div className="w-16 h-0.5 bg-portfolio-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Informações</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-portfolio-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">E-mail</h4>
                    <p className="text-portfolio-text-dim">contato@seudominio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-portfolio-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-portfolio-text-dim">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-portfolio-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Localização</h4>
                    <p className="text-portfolio-text-dim">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-card border border-border rounded-lg">
                <p className="text-sm text-portfolio-text-dim leading-relaxed">
                  Estou sempre aberto a novas oportunidades e projetos interessantes. 
                  Se você tem uma ideia em mente ou precisa de ajuda com desenvolvimento, 
                  não hesite em entrar em contato.
                </p>
              </div>
            </div>
            
            {/* Formulário de contato */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Enviar Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
                
                <Input
                  name="subject"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-card border-border"
                />
                
                <Textarea
                  name="message"
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-card border-border resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent-glow text-white"
                >
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;