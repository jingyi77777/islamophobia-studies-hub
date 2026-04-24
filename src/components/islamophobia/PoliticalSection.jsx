import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { politicalFigures } from "@/lib/siteData";

function PoliticalCard({ figure, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
    >
      <div className="h-1 bg-gradient-to-r from-destructive/60 to-accent" />
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground">{figure.name}</h3>
            <p className="text-accent text-sm font-medium mt-0.5">{figure.party}</p>
            <p className="text-muted-foreground text-xs mt-1">{figure.role}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground shrink-0"
          >
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {/* Key quotes - always visible */}
        <div className="space-y-3 mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Documented Rhetoric</p>
          {figure.rhetoric.slice(0, expanded ? figure.rhetoric.length : 1).map((quote, i) => (
            <div key={i} className="flex items-start gap-2.5 bg-destructive/5 border border-destructive/10 rounded-lg p-3">
              <Quote className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground italic">{quote}</p>
            </div>
          ))}
          {!expanded && figure.rhetoric.length > 1 && (
            <button onClick={() => setExpanded(true)} className="text-accent text-xs hover:underline">
              + {figure.rhetoric.length - 1} more statements
            </button>
          )}
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Electoral Impact</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{figure.electoralImpact}</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Sources:</span> {figure.source}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function PoliticalSection() {
  return (
    <SectionWrapper
      id="political"
      title="Political Figures & Electoral Islamophobia"
      subtitle="How anti-Muslim rhetoric has been deployed by politicians across the political spectrum to mobilize votes and shift national discourse."
    >
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 dark:bg-amber-900/10 dark:border-amber-800/30">
        <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          <strong>Analytical Note:</strong> The following figures span from the far-right (Le Pen, Zemmour) to the center-right (Sarkozy) and center-left (Valls),
          demonstrating that Islamophobic rhetoric in France is not confined to fringe parties but has become a cross-partisan electoral strategy.
          This supports the argument that Islamophobia is structural rather than episodic.
        </p>
      </div>

      <div className="space-y-6">
        {politicalFigures.map((figure, i) => (
          <PoliticalCard key={i} figure={figure} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}