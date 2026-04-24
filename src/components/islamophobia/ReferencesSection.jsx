import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Newspaper, BarChart3, Filter } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { references } from "@/lib/siteData";

const typeIcons = {
  Book: BookOpen,
  Report: FileText,
  "Journal Article": Newspaper,
  "Survey Report": BarChart3,
  "Government Report": FileText,
};

const typeColors = {
  Book: "bg-primary/10 text-primary",
  Report: "bg-accent/10 text-accent",
  "Journal Article": "bg-chart-3/10 text-chart-3",
  "Survey Report": "bg-chart-4/10 text-chart-4",
  "Government Report": "bg-chart-5/10 text-chart-5",
};

export default function ReferencesSection() {
  const types = ["All", ...Array.from(new Set(references.map((r) => r.type)))];
  const [activeType, setActiveType] = useState("All");

  const filtered = activeType === "All" ? references : references.filter((r) => r.type === activeType);

  return (
    <SectionWrapper
      id="references"
      title="References"
      subtitle="Academic sources, reports, and publications referenced throughout this research project."
    >
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Filter className="w-4 h-4 text-muted-foreground mt-2" />
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeType === type
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Reference list */}
      <div className="space-y-3">
        {filtered.map((ref, i) => {
          const Icon = typeIcons[ref.type] || FileText;
          const colorClass = typeColors[ref.type] || "bg-muted text-muted-foreground";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {ref.author} ({ref.year}).{" "}
                    <em>{ref.title}</em>.{" "}
                    <span className="text-muted-foreground">{ref.source}.</span>
                  </p>
                  <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
                    {ref.type}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-muted-foreground text-center">
        {filtered.length} of {references.length} references shown
      </p>
    </SectionWrapper>
  );
}