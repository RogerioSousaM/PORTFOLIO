import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-base sm:text-lg font-bold tracking-[0.2em] text-foreground hover:text-portfolio-accent transition-colors duration-300 cursor-pointer">
            PORTFÓLIO
          </div>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-portfolio-text-dim hover:text-portfolio-accent transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-left text-sm font-medium tracking-[0.15em] transition-all duration-300 hover:text-portfolio-accent py-2 ${
                  activeSection === "home" ? "text-portfolio-accent" : "text-portfolio-text-dim"
                }`}
              >
                INÍCIO
              </button>
              
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-left text-sm font-medium tracking-[0.15em] transition-all duration-300 hover:text-portfolio-accent py-2 ${
                  activeSection === "projects" ? "text-portfolio-accent" : "text-portfolio-text-dim"
                }`}
              >
                PROJETOS
              </button>
              
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left text-sm font-medium tracking-[0.15em] transition-all duration-300 hover:text-portfolio-accent py-2 ${
                  activeSection === "contact" ? "text-portfolio-accent" : "text-portfolio-text-dim"
                }`}
              >
                CONTATO
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;