import React from "react";
import { motion } from "framer-motion";
import { Tv, Film, ThumbsUp } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CollapsibleCard from "./CollapsibleCard";
import { mediaData, mediaRepresentationData } from "@/lib/siteData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function MediaSection() {
  return (
    <SectionWrapper
      id="media"
      title="Media & Cultural Representation"
      subtitle="How French media, film, and public culture construct and perpetuate the image of Muslims as an alien and threatening presence."
    >
      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8 mb-10"
      >
        <Tv className="w-7 h-7 text-accent mb-3" />
        <p className="text-primary-foreground/85 leading-relaxed">{mediaData.overview}</p>
        <p className="mt-3 text-primary-foreground/50 text-xs">Sources: CSA Media Audit Reports (2013, 2018)</p>
      </motion.div>

      {/* Media representation chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm mb-10"
      >
        <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
          How French Prime-Time News Covers Muslims
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          % of references to Islam/Muslims by context (CSA Audit, France 2, France 3, TF1 — 2013)
        </p>
        <div className="h-56 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mediaRepresentationData} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" domain={[0, 85]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} unit="%" />
              <YAxis type="category" dataKey="category" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} width={130} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 13 }}
                formatter={(value) => [`${value}%`, "Proportion"]}
              />
              <Bar dataKey="percentage" radius={[0, 6, 6, 0]}>
                {mediaRepresentationData.map((entry, i) => (
                  <Cell key={i} fill={i === 0 ? "hsl(var(--destructive))" : i >= 3 ? "hsl(var(--chart-3))" : "hsl(var(--accent))"} opacity={0.85} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Source: Conseil Supérieur de l'Audiovisuel (CSA), Media Content Audit Report, 2013.
        </p>
      </motion.div>

      {/* Case studies */}
      <div className="space-y-4 mb-10">
        <h3 className="font-playfair text-xl font-bold text-foreground">Case Studies</h3>
        {mediaData.examples.map((ex, i) => (
          <CollapsibleCard key={i} title={ex.title} badge={i === 0 ? "Press" : i === 1 ? "Broadcast" : i === 2 ? "Cinema" : "Public Spectacle"} defaultOpen={i === 0}>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{ex.content}</p>
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                <span className="font-medium">Sources:</span> {ex.source}
              </p>
            </div>
          </CollapsibleCard>
        ))}
      </div>

      {/* Positive examples */}
      <div>
        <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
          <span className="flex items-center gap-2">
            <ThumbsUp className="w-5 h-5 text-accent" />
            Positive Counter-Narratives
          </span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {mediaData.positiveExamples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-chart-3/5 border border-chart-3/20 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <Film className="w-5 h-5 text-chart-3 mb-3" />
              <h4 className="font-semibold text-foreground mb-2">{ex.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{ex.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}