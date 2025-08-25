import { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold tracking-[0.2em] text-foreground hover:text-portfolio-accent transition-colors duration-300 cursor-pointer">
            PORTFÓLIO
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium tracking-[0.15em] transition-all duration-300 hover:text-portfolio-accent relative group ${
                activeSection === "home" ? "text-portfolio-accent" : "text-portfolio-text-dim"
              }`}
            >
              INÍCIO
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent transition-all duration-300 group-hover:w-full ${
                activeSection === "home" ? "w-full" : ""
              }`}></span>
            </button>
            
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-medium tracking-[0.15em] transition-all duration-300 hover:text-portfolio-accent relative group ${
                activeSection === "projects" ? "text-portfolio-accent" : "text-portfolio-text-dim"
              }`}
            >
              PROJETOS
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent transition-all duration-300 group-hover:w-full ${
                activeSection === "projects" ? "w-full" : ""
              }`}></span>
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium tracking-[0.15em] transition-all duration-300 hover:text-portfolio-accent relative group ${
                activeSection === "contact" ? "text-portfolio-accent" : "text-portfolio-text-dim"
              }`}
            >
              CONTATO
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent transition-all duration-300 group-hover:w-full ${
                activeSection === "contact" ? "w-full" : ""
              }`}></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;