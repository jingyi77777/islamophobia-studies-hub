import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Globe, Users, Award } from "lucide-react";
import { teamMembers } from "@/lib/siteData";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium border border-white/20">
              <BookOpen className="w-4 h-4" />
              Islamophobia and Constructing Otherness
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium border border-accent/30">
              ASAMST 132AC · American Cultures · Spring 2026 · Dr. Hatem Bazian
            </div>
          </div>

          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Islamophobia
            <br />
            <span className="text-accent">in France</span>
          </h1>

          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            How the French Republic's weaponization of <em>laïcité</em> has constructed its Muslim
            minority as a permanent threat to national identity — and what resistance looks like.
          </p>

          {/* Thesis callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 max-w-3xl mx-auto bg-white/10 border border-white/20 rounded-xl p-5 md:p-6 text-left"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Central Argument</p>
            <p className="text-white/85 text-sm md:text-base leading-relaxed">
              Islamophobia in France is not incidental or episodic, but <strong className="text-white">structurally embedded</strong> in the state's
              interpretation of secularism (<em>laïcité</em>), reproducing racial and religious hierarchy
              under the guise of republican universalism.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("country-profile")}
              className="px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Begin Research
            </button>
            <button
              onClick={() => scrollTo("references")}
              className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              View References
            </button>
          </div>

          {/* Course readings note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-4 text-left"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent/80 mb-1.5">Islamophobia and Constructing Otherness · Instructor: Dr. Hatem Bazian</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Said's <em>Orientalism</em> (1978) · Omi & Winant Racial Formation (1986) · Cainkar Social Construction (2006) · Ali, Shariah & Citizenship (2012) · CAIR-CA Bullying Report (2015) · Noor, War on Terror (2006) · ISPU Equal Treatment (2018) · Abu-Zayd, From Phobia to Understanding (2010) · Runnymede Trust (1997)
            </p>
          </motion.div>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Globe, label: "Country Focus", val: "France" },
              { icon: BookOpen, label: "Sources Cited", val: "25+" },
              { icon: Users, label: "Research Areas", val: "6 Sections" },
              { icon: Award, label: "Framework", val: "Multi-Theory" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-white/10 border border-white/15 rounded-xl p-4 text-center"
              >
                <item.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="text-white font-bold text-base">{item.val}</p>
                <p className="text-white/60 text-xs mt-0.5">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team members */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 text-center"
        >
          <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Research Team — Group 1</p>
          <div className="flex flex-wrap justify-center gap-3">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-4 py-2">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">{member.name.charAt(0)}</span>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-medium">{member.name}</p>
                  <p className="text-white/50 text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("country-profile")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}