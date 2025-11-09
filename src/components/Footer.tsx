import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-primary p-[2px]">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-[0.65rem] font-bold tracking-[0.12em] bg-gradient-primary bg-clip-text text-transparent">
                  R&S
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                RobStar Consulting, LLC
              </div>
              <div className="text-xs text-muted-foreground">
                Strategic Business Solutions
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {currentYear} RobStar Consulting, LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
