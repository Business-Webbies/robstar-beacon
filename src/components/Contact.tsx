import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Let's Start a
            <span className="block text-accent">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to transform your business? Reach out to discuss how we can help 
            you achieve your strategic objectives.
          </p>
        </div>

        <Button 
          asChild
          size="lg"
          className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold tracking-wide"
        >
          <a href="mailto:info@robstarconsulting.com" className="inline-flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
