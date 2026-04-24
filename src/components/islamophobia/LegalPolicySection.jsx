import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Calendar, CheckCircle, XCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CollapsibleCard from "./CollapsibleCard";
import { legalPolicies } from "@/lib/siteData";

export default function LegalPolicySection() {
  return (
    <SectionWrapper
      id="legal-policy"
      title="Legal & Policy Analysis"
      subtitle="Examining how legislation and government policies have targeted, surveilled, and discriminated against Muslim communities."
    >
      <div className="space-y-5">
        {legalPolicies.map((policy, i) => (
          <CollapsibleCard
            key={i}
            title={policy.title}
            badge={policy.year}
            defaultOpen={i === 0}
          >
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{policy.description}</p>

              <div className="bg-destructive/5 border border-destructive/15 rounded-lg p-4">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Social Impact</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{policy.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium text-foreground">Status:</span>
                <span className="text-muted-foreground">{policy.status}</span>
              </div>
            </div>
          </CollapsibleCard>
        ))}
      </div>

      {/* Timeline visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm"
      >
        <h3 className="font-playfair text-xl font-bold text-foreground mb-6">
          Policy Timeline
        </h3>
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
          {[
            { year: "2001", event: "9/11 attacks lead to PATRIOT Act and mass surveillance", type: "negative" },
            { year: "2002", event: "NSEERS registration program targets Muslim-majority nationals", type: "negative" },
            { year: "2004", event: "France bans religious symbols in public schools", type: "negative" },
            { year: "2010", event: "Anti-Sharia legislation wave begins across U.S. states", type: "negative" },
            { year: "2016", event: "NSEERS officially dismantled", type: "positive" },
            { year: "2017", event: "Executive Order 13769 ('Muslim Ban') signed", type: "negative" },
            { year: "2021", event: "Muslim Ban revoked by President Biden", type: "positive" },
          ].map((item, i) => (
            <div key={i} className="relative pl-12 md:pl-16 pb-8 last:pb-0">
              <div
                className={`absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${
                  item.type === "positive"
                    ? "bg-green-500 border-green-300"
                    : "bg-destructive border-destructive/50"
                }`}
              />
              <span className="text-xs font-bold text-accent">{item.year}</span>
              <p className="text-sm text-muted-foreground mt-0.5">{item.event}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}