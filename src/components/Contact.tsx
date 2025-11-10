import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@robstarconsulting.com",
      href: "mailto:info@robstarconsulting.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (770) 818-6698",
      href: "tel:+17708186698"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Global",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Button */}
          <div className="lg:col-span-2 flex flex-col items-center gap-6">
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
            
            <p className="text-sm text-muted-foreground text-center max-w-2xl">
              Please note: RobStar Consulting does not provide legal or financial advice. For such services, please consult a qualified professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
