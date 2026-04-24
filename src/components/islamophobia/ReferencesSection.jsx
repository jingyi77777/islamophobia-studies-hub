import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Newspaper, BarChart3, Filter, Gavel, Globe, GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { references } from "@/lib/siteData";

const typeConfig = {
  Book: { icon: BookOpen, color: "bg-primary/10 text-primary" },
  Report: { icon: FileText, color: "bg-accent/10 text-accent" },
  "Journal Article": { icon: Newspaper, color: "bg-chart-3/10 text-chart-3" },
  "Survey Report": { icon: BarChart3, color: "bg-chart-4/10 text-chart-4" },
  "Government Report": { icon: FileText, color: "bg-chart-2/10 text-chart-2" },
  "Legal Document": { icon: Gavel, color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" },
  "UN Document": { icon: Globe, color: "bg-chart-5/10 text-chart-5" },
  "Lecture": { icon: GraduationCap, color: "bg-accent/10 text-accent" },
  "Book Chapter": { icon: BookOpen, color: "bg-primary/10 text-primary" },
};

export default function ReferencesSection() {
  const types = ["All", ...Array.from(new Set(references.map((r) => r.type)))];
  const [activeType, setActiveType] = useState("All");

  const filtered = activeType === "All" ? references : references.filter((r) => r.type === activeType);

  // Generate APA citation number
  const sortedRefs = [...references].sort((a, b) => a.author.localeCompare(b.author));

  return (
    <SectionWrapper
      id="references"
      title="Works Cited"
      subtitle="All sources cited in APA format. Filter by source type using the buttons below."
    >
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        <Filter className="w-4 h-4 text-muted-foreground" />
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
            <span className="ml-1.5 text-xs opacity-60">
              ({type === "All" ? references.length : references.filter((r) => r.type === type).length})
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((ref, i) => {
          const config = typeConfig[ref.type] || { icon: FileText, color: "bg-muted text-muted-foreground" };
          const Icon = config.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-card rounded-xl border border-border p-4 md:p-5 hover:shadow-md hover:border-accent/20 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-lg ${config.color} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-foreground leading-relaxed">
                    {ref.author} ({ref.year}). <em>{ref.title}</em>. {ref.source}.
                  </p>
                  <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
                    {ref.type}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-muted-foreground text-center">
        Showing {filtered.length} of {references.length} references · Citation format: APA 7th Edition
      </p>
    </SectionWrapper>
  );
}