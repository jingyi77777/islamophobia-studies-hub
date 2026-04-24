import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import CollapsibleCard from "./CollapsibleCard";
import { countryProfile } from "@/lib/siteData";

export default function CountryProfileSection() {
  return (
    <SectionWrapper
      id="country-profile"
      title="Country Profile: France"
      subtitle="Historical, demographic, and structural context for understanding Islamophobia in the French Republic."
    >
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {countryProfile.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl p-5 md:p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Religious diversity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8"
      >
        <h3 className="font-semibold text-foreground mb-2">Religious & Ethnic Diversity</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">{countryProfile.religiousDiversity}</p>
      </motion.div>

      {/* History cards */}
      <div className="space-y-4">
        <h3 className="font-playfair text-xl font-bold text-foreground">Historical Background</h3>
        {countryProfile.history.map((section, i) => (
          <CollapsibleCard key={i} title={section.title} defaultOpen={i === 0}>
            <p className="text-muted-foreground leading-relaxed text-sm">{section.content}</p>
          </CollapsibleCard>
        ))}
      </div>
    </SectionWrapper>
  );
}