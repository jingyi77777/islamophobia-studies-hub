import React from "react";
import { motion } from "framer-motion";
import { Shield, BookOpen, Users, Megaphone, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { countermeasures } from "@/lib/siteData";

const typeIcons = {
  "NGO / Advocacy": Shield,
  "Education": BookOpen,
  "Community": Users,
  "Education / Outreach": Megaphone,
};

export default function CountermeasuresSection() {
  return (
    <SectionWrapper
      id="countermeasures"
      title="Countermeasures"
      subtitle="Organizations, initiatives, and programs working to combat Islamophobia and build bridges of understanding."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {countermeasures.map((item, i) => {
          const Icon = typeIcons[item.type] || Shield;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.type}
                </span>
              </div>

              <h3 className="font-playfair text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Key Initiatives
                </p>
                {item.initiatives.map((init, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{init}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}