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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider">
            PORTFÓLIO
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-portfolio-accent ${
                activeSection === "home" ? "text-portfolio-accent" : "text-portfolio-text-dim"
              }`}
            >
              INÍCIO
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-portfolio-accent ${
                activeSection === "projects" ? "text-portfolio-accent" : "text-portfolio-text-dim"
              }`}
            >
              PROJETOS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-portfolio-accent ${
                activeSection === "contact" ? "text-portfolio-accent" : "text-portfolio-text-dim"
              }`}
            >
              CONTATO
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;