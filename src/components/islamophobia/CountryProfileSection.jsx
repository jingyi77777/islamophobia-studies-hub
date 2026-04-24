import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, PieChart, Building } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CollapsibleCard from "./CollapsibleCard";
import { countryProfileData, populationData } from "@/lib/siteData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const iconMap = { Users, Globe, PieChart, Building };

export default function CountryProfileSection() {
  return (
    <SectionWrapper
      id="country-profile"
      title="Country Profile"
      subtitle="Understanding the demographic, historical, and social landscape of the Muslim population in the United States."
    >
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {countryProfileData.stats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 md:p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Collapsible detail cards */}
      <div className="space-y-4 mb-12">
        {countryProfileData.sections.map((section, i) => (
          <CollapsibleCard key={i} title={section.title} defaultOpen={i === 0}>
            <p className="text-muted-foreground leading-relaxed">{section.content}</p>
          </CollapsibleCard>
        ))}
      </div>

      {/* Population chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm"
      >
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-2">
          Muslim Population by Country
        </h3>
        <p className="text-muted-foreground text-sm mb-6">Estimated Muslim population in millions</p>
        <div className="h-72 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={populationData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <XAxis
                dataKey="country"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: 13,
                }}
                formatter={(value) => [`${value}M`, "Population"]}
              />
              <Bar dataKey="population" radius={[6, 6, 0, 0]}>
                {populationData.map((_, idx) => (
                  <Cell
                    key={idx}
                    fill={idx < 6 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                    opacity={0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          * Orange bars represent Western nations for comparative context. Source: Pew Research Center.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}