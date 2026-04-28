import React from "react";
import { motion } from "framer-motion";

export default function ConclusionSection() {
  return (
    <section id="conclusion" className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3 text-center">Final Analysis</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10">
            Islamophobia as a System of Governance
          </h2>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-7 md:p-10">
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Islamophobia in France cannot be understood as a series of isolated incidents or individual prejudices. Rather, it operates as a <strong className="text-white">coherent system</strong> in which law, media, political rhetoric, and security practices reinforce one another to produce and sustain the marginalization of Muslim communities. From the legal regulation of religious expression to the economic exclusion of Muslim-coded identities and the expansion of surveillance regimes, each domain reflects a broader logic of <strong className="text-white">racialized governance</strong>.
            </p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mt-5">
              As this project has shown, resistance movements not only challenge these structures but also reveal the extent to which the state actively manages and suppresses dissent. Understanding Islamophobia in France, therefore, requires recognizing it not as a deviation from republican values, but as a <strong className="text-white">product of how those values are interpreted and enforced</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}