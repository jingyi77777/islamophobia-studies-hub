import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Scale, Users } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("country-profile");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
            <BookOpen className="w-4 h-4" />
            Academic Research Project
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Islamophobia
            <br />
            <span className="text-accent">Around the World</span>
          </h1>

          <p className="mt-6 md:mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            An academic exploration of the origins, manifestations, and impacts of
            Islamophobia through the lens of critical race theory, media studies,
            and policy analysis.
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToNext}
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Explore Research
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("theoretical-framework");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="px-8 py-3.5 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              View Framework
            </button>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-lg mx-auto">
            {[
              { icon: BookOpen, label: "4 Theories", sub: "Analyzed" },
              { icon: Scale, label: "4+ Policies", sub: "Examined" },
              { icon: Users, label: "12+ Sources", sub: "Referenced" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-muted flex items-center justify-center mb-2">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <p className="font-semibold text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}