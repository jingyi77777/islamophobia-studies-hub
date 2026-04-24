import React from "react";
import { motion } from "framer-motion";
import { Tv, GraduationCap, Heart, AlertCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CollapsibleCard from "./CollapsibleCard";
import { societyCultureData } from "@/lib/siteData";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";

export default function SocietyCultureSection() {
  const { mediaRepresentation, bullying, intersectionality, hateCrimes } = societyCultureData;

  const bullyingChartData = bullying.stats.map((s) => ({
    name: s.label,
    value: s.value,
  }));

  return (
    <SectionWrapper
      id="society-culture"
      title="Society & Culture"
      subtitle="How Islamophobia manifests in everyday life — from media narratives to classroom bullying to gendered experiences."
    >
      {/* Media Representation */}
      <div className="mb-8">
        <CollapsibleCard title={mediaRepresentation.title} badge="Media" defaultOpen={true}>
          <div className="space-y-4">
            <div className="flex items-start gap-3 mb-3">
              <Tv className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <p className="text-muted-foreground leading-relaxed">{mediaRepresentation.content}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {mediaRepresentation.examples.map((ex, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-muted/50 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{ex}</span>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleCard>
      </div>

      {/* Bullying + Chart */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <CollapsibleCard title={bullying.title} badge="Youth" defaultOpen={true}>
          <div className="flex items-start gap-3 mb-3">
            <GraduationCap className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <p className="text-muted-foreground leading-relaxed text-sm">{bullying.content}</p>
          </div>
        </CollapsibleCard>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl border border-border shadow-sm p-6"
        >
          <h4 className="font-semibold text-foreground mb-1">Bullying Statistics</h4>
          <p className="text-xs text-muted-foreground mb-4">% of students experiencing bullying (CAIR 2017)</p>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bullyingChartData} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" domain={[0, 50]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} width={120} />
                <Tooltip
                  contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 13 }}
                  formatter={(value) => [`${value}%`, "Percentage"]}
                />
                <Bar dataKey="value" fill="hsl(var(--accent))" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Intersectionality */}
      <div className="mb-8">
        <CollapsibleCard title={intersectionality.title} badge="Gender" defaultOpen={false}>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <p className="text-muted-foreground leading-relaxed">{intersectionality.content}</p>
            </div>
            <div className="space-y-2">
              {intersectionality.experiences.map((exp, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-sm text-muted-foreground">{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleCard>
      </div>

      {/* Hate Crime Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8"
      >
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-2">
          {hateCrimes.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6">Anti-Muslim hate crime incidents reported to the FBI (2015–2022)</p>
        <div className="h-64 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hateCrimes.data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 13 }}
                formatter={(value) => [value, "Incidents"]}
              />
              <Line
                type="monotone"
                dataKey="incidents"
                stroke="hsl(var(--destructive))"
                strokeWidth={2.5}
                dot={{ fill: "hsl(var(--destructive))", strokeWidth: 0, r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Source: FBI Uniform Crime Reports / CAIR Annual Reports</p>
      </motion.div>
    </SectionWrapper>
  );
}