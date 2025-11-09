import React from "react";
import { Card } from "./ui/card";
import { Lightbulb, LineChart, Cpu, Shield } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategic Consulting",
      description: "Develop clear roadmaps and actionable strategies that align with your business objectives and market opportunities.",
      features: ["Business Strategy", "Market Analysis", "Growth Planning"]
    },
    {
      icon: LineChart,
      title: "Operational Excellence",
      description: "Streamline processes, optimize performance, and build operational capabilities that scale with your organization.",
      features: ["Process Optimization", "Performance Management", "Change Management"]
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      description: "Leverage technology and innovation to modernize operations, enhance customer experiences, and drive competitive advantage.",
      features: ["Technology Strategy", "Digital Solutions", "Innovation Programs"]
    },
    {
      icon: Shield,
      title: "Risk & Compliance",
      description: "Navigate complex regulatory landscapes and build robust risk management frameworks to protect your organization.",
      features: ["Risk Assessment", "Compliance Strategy", "Governance Frameworks"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Comprehensive Solutions
            <span className="block text-secondary">For Your Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We offer end-to-end consulting services designed to address your unique challenges 
            and unlock new opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="mb-6">
                <div className="inline-block p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
