import React from "react";
import { motion } from "framer-motion";
import { Eye, AlertCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CollapsibleCard from "./CollapsibleCard";
import { surveillanceData } from "@/lib/siteData";

export default function SurveillanceSection() {
  return (
    <SectionWrapper
      id="surveillance"
      title="Surveillance & Security Policies"
      subtitle="How counter-terrorism and national security frameworks have been used to place Muslim communities under systematic state surveillance."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-5 mb-8"
      >
        <AlertCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">UN Warning</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The UN Special Rapporteur on Counter-Terrorism and Human Rights warned in 2016 (A/71/384) that French
            security measures risk "normalizing emergency governance" and disproportionately impact Muslim communities,
            with "insufficient evidence of effectiveness in preventing terrorism." Counter-terrorism frameworks are
            being used as governance tools for managing a religious minority.
          </p>
        </div>
      </motion.div>

      <div className="space-y-4">
        {surveillanceData.map((item, i) => (
          <CollapsibleCard key={i} title={item.title} badge={i === 0 ? "Intelligence" : i === 1 ? "Database" : i === 2 ? "Education" : "Emergency Powers"} defaultOpen={i === 0}>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                <span className="font-medium">Sources:</span> {item.sources}
              </p>
            </div>
          </CollapsibleCard>
        ))}
      </div>

      {/* Visual timeline of security expansion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm"
      >
        <h3 className="font-playfair text-xl font-bold text-foreground mb-6">Security Apparatus Expansion</h3>
        <div className="relative space-y-0">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
          {[
            { year: "2001", label: "9/11 triggers first wave of counter-terrorism legislation", severity: "high" },
            { year: "2006", label: "Intelligence services expand mosque monitoring programs", severity: "high" },
            { year: "2012", label: "Mohammed Merah attacks: expanded individual surveillance powers", severity: "high" },
            { year: "2015", label: "Paris attacks: State of Emergency declared, 4,400+ warrantless searches", severity: "critical" },
            { year: "2016", label: "FSPRT radicalization database created — 18,000 individuals", severity: "high" },
            { year: "2017", label: "Emergency powers permanently incorporated into law", severity: "critical" },
            { year: "2020", label: "CCIF civil rights organization dissolved by decree", severity: "critical" },
            { year: "2021", label: "Anti-Separatism law grants sweeping powers over Muslim associations", severity: "critical" },
          ].map((item, i) => (
            <div key={i} className="relative pl-12 md:pl-16 pb-7 last:pb-0">
              <div
                className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                  item.severity === "critical"
                    ? "bg-destructive border-destructive/50"
                    : "bg-amber-500 border-amber-300"
                }`}
              />
              <span className={`text-xs font-bold ${item.severity === "critical" ? "text-destructive" : "text-amber-600 dark:text-amber-400"}`}>
                {item.year}
              </span>
              <p className="text-sm text-muted-foreground mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}