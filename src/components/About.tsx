import React from "react";
import { Card } from "./ui/card";
import teamImage from "@/assets/team-collaboration.jpg";
import { TrendingUp, Users, Target } from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "We drive measurable results and sustainable growth for your organization"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work alongside your team as trusted partners in transformation"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Our strategies are designed for real-world impact and ROI"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-2xl" />
            <img 
              src={teamImage} 
              alt="RobStar Consulting team collaboration"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
                Empowering Organizations
                <span className="block text-primary">Since Day One</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                RobStar Consulting brings together decades of combined expertise in strategic 
                planning, operational excellence, and digital transformation. We partner with 
                forward-thinking organizations to unlock potential and drive meaningful change.
              </p>
            </div>

            <div className="grid gap-4 pt-4">
              {values.map((value, index) => (
                <Card key={index} className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <value.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
