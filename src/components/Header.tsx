import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src="/rs-infinity-logo.png"
              alt="R & S Consulting logo"
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div>
            <div className="uppercase text-sm tracking-[0.18em] font-semibold text-foreground">
              R &amp; S Consulting
            </div>
            <div className="text-xs text-muted-foreground">
              RobStar Consulting, LLC
            </div>
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-secondary transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
