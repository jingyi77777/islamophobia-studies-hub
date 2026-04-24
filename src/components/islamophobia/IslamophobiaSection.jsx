import React from "react";
import { motion } from "framer-motion";
import { Quote, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { islamophobiaFramework, islamophobiaIncidentsData } from "@/lib/siteData";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function IslamophobiaSection() {
  return (
    <SectionWrapper
      id="islamophobia"
      title="Islamophobia in France"
      subtitle="Understanding the structural, racialized, and gendered dimensions of anti-Muslim discrimination in the French Republic."
    >
      {/* Central Argument */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-primary text-primary-foreground rounded-xl p-6 md:p-8 mb-10"
      >
        <Quote className="absolute top-4 right-4 w-10 h-10 opacity-20" />
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Analytical Claim</p>
        <p className="text-primary-foreground/90 leading-relaxed md:text-lg">
          {islamophobiaFramework.centralArgument}
        </p>
        <p className="mt-4 text-primary-foreground/50 text-sm">— Drawing on Hajjat & Mohammed, <em>Islamophobie</em> (2013)</p>
      </motion.div>

      {/* Course materials callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Course Materials Applied</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This section draws directly on our course readings: <strong className="text-foreground">Said's <em>Orientalism</em> (1978)</strong> for the construction of the Muslim 'Other'; <strong className="text-foreground">Omi & Winant's Racial Formation Theory (1986)</strong> for structural racialization; <strong className="text-foreground">Cainkar's Social Construction of Difference (2006)</strong> for comparative Arab/Muslim racialization; <strong className="text-foreground">Ali's Shariah and Citizenship (2012)</strong> for citizenship deprivation; <strong className="text-foreground">the CAIR-CA Bullying Report (2015)</strong> for institutional discrimination; <strong className="text-foreground">Noor's War on Terror (2006)</strong> for global Islamophobia; and <strong className="text-foreground">the ISPU Equal Treatment Report (2018)</strong> for differential legal treatment. The course lecture on "Racism Properly Understood" (individual/institutional/structural) provides the organizing framework.
        </p>
      </motion.div>

      {/* Three frameworks */}
      <div className="space-y-5 mb-12">
        {islamophobiaFramework.manifestations.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Incidents chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm"
      >
        <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
          Recorded Islamophobic Incidents in France
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Annual anti-Muslim acts documented by CCIF and CNCDH (2013–2020). Sharp spike in 2015 follows Paris attacks.
        </p>
        <div className="h-64 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={islamophobiaIncidentsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 13 }}
                formatter={(value) => [value, "Incidents"]}
              />
              <Line type="monotone" dataKey="incidents" stroke="hsl(var(--destructive))" strokeWidth={2.5} dot={{ fill: "hsl(var(--destructive))", r: 5 }} activeDot={{ r: 7 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Sources: CCIF Annual Reports (2013–2020); CNCDH Annual Report on Racism (2021).</p>
      </motion.div>
    </SectionWrapper>
  );
}