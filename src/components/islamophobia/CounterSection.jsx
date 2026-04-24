import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Star, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { counterMovements } from "@/lib/siteData";

const statusColors = {
  "Active": "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/30",
  "Dissolved by Government Decree, 2020": "bg-destructive/10 text-destructive border-destructive/20",
};

export default function CounterSection() {
  return (
    <SectionWrapper
      id="counter"
      title="Counter-Movements & Positive Cases"
      subtitle="Organizations, scholars, and community efforts resisting Islamophobia in France — and the state's efforts to suppress them."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10"
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Success Cases & Structural Analysis:</strong> That the French state dissolved the CCIF — its most effective civil rights monitor —
          before passing its most expansive anti-Muslim legislation is itself analytically significant. Counter-movements are documented here both as
          examples of community resilience and as evidence of the state's active effort to silence dissent. Resistance is real; so is repression.
        </p>
      </motion.div>

      <div className="space-y-6">
        {counterMovements.map((org, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all overflow-hidden"
          >
            <div className="h-1 bg-gradient-to-r from-accent to-chart-3" />
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground">{org.title}</h3>
                  <p className="text-accent text-sm font-medium mt-0.5">{org.type}</p>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${statusColors[org.status] || "bg-muted text-muted-foreground"}`}>
                  {org.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{org.description}</p>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2.5">Methods</p>
                  <div className="space-y-2">
                    {org.methods.map((method, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2.5 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-accent" />
                    Success Cases
                  </p>
                  <div className="space-y-2">
                    {org.successCases.map((c, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
                <span className="font-medium">Sources:</span> {org.sources}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}