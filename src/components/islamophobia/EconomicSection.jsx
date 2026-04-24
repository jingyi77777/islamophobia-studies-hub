import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, Building, CreditCard, Plane } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { economicRestrictions, employmentDiscrimData } from "@/lib/siteData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts";

const icons = [TrendingDown, Building, CreditCard, Plane];

export default function EconomicSection() {
  return (
    <SectionWrapper
      id="economic"
      title="Economic Restrictions"
      subtitle="How Islamophobia produces material disadvantage through labor market discrimination, housing segregation, credit exclusion, and everyday economic barriers."
    >
      {/* Employment discrimination chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm mb-10"
      >
        <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
          Callback Rates by Applicant Name (Employment Discrimination Study)
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Index: French name = 100. Results from ISM-CORUM matched-application study (2016) across 48 French cities.
          Lower score = higher discrimination.
        </p>
        <div className="h-56 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={employmentDiscrimData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <XAxis dataKey="group" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis domain={[50, 110]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 13 }}
                formatter={(value) => [value, "Index (French Name = 100)"]}
              />
              <ReferenceLine y={100} stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4" label={{ value: "Baseline (French)", position: "right", fontSize: 11 }} />
              <Bar dataKey="callback" radius={[6, 6, 0, 0]}>
                {employmentDiscrimData.map((entry, i) => (
                  <Cell key={i} fill={i === 0 ? "hsl(var(--chart-3))" : "hsl(var(--destructive))"} opacity={0.85} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Sources: ISM-CORUM testing study (2016); Adida, Laitin & Valfort (2016). Red bars indicate Muslim-coded names.
        </p>
      </motion.div>

      {/* Restriction cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {economicRestrictions.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-md hover:border-accent/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.content}</p>
              <p className="text-xs text-muted-foreground border-t border-border pt-3 mt-3">
                <span className="font-medium">Sources:</span> {item.sources}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}