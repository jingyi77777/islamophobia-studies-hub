import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { theoreticalFramework } from "@/lib/siteData";

export default function TheoreticalFrameworkSection() {
  return (
    <SectionWrapper
      id="theoretical-framework"
      title="Theoretical Framework"
      subtitle="Academic lenses through which Islamophobia can be understood, analyzed, and deconstructed."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {theoreticalFramework.map((theory, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden"
          >
            <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {theory.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-accent mb-4">{theory.author}</p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">{theory.content}</p>
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Key Concepts</p>
                {theory.keyPoints.map((point, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}