import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src="/rs-infinity-logo.png"
                alt="R & S Consulting logo"
                className="w-16 h-16 object-contain"
              />
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
        
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
            Disclaimer: The information provided on this website is for general informational purposes only and does not constitute financial, legal, or professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
