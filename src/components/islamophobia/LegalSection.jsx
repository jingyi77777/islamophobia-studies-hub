import React from "react";
import { motion } from "framer-motion";
import { Scale, AlertTriangle, Gavel, Calendar } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CollapsibleCard from "./CollapsibleCard";
import { legalRestrictions } from "@/lib/siteData";

const typeColors = {
  "Direct Restriction": "bg-destructive/10 text-destructive border-destructive/20",
  "Broad Structural Restriction": "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400",
  "Security/Surveillance Framework": "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400",
  "Immigration Restriction": "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400",
};

export default function LegalSection() {
  return (
    <SectionWrapper
      id="legal"
      title="Legal Restrictions"
      subtitle="Legislation that directly or indirectly restricts the religious, civil, and civic rights of Muslims in France."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-3 bg-muted/50 rounded-xl p-5 mb-8 border border-border"
      >
        <Scale className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Legal Framework Analysis:</strong> The following laws are analyzed not in isolation but as an interconnected system.
          Together they construct a legal architecture in which Muslim religious identity — particularly female dress — is systematically
          subjected to state regulation, while ostensibly neutral universalist principles justify targeted enforcement.
        </p>
      </motion.div>

      <div className="space-y-5">
        {legalRestrictions.map((law, i) => (
          <CollapsibleCard key={i} title={law.title} badge={law.year} defaultOpen={i === 0}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[law.type] || "bg-muted text-muted-foreground"}`}>
                  {law.type}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Description</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{law.description}</p>
              </div>

              <div className="bg-destructive/5 border border-destructive/15 rounded-lg p-4">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Documented Impact</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{law.impact}</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <div className="flex items-start gap-2.5">
                  <Gavel className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Legal Challenges</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{law.legalChallenge}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Sources:</span> {law.sources}
              </p>
            </div>
          </CollapsibleCard>
        ))}
      </div>
    </SectionWrapper>
  );
}