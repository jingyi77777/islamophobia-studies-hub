import React from "react";
import { teamMembers, navLinks } from "@/lib/siteData";
import { BookOpen } from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">IF</span>
              </div>
              <span className="font-playfair font-bold text-lg">Islamophobia in France</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              A group project examining how the French Republic's interpretation of laïcité
              structures anti-Muslim discrimination as a state-sanctioned practice.
            </p>
            <p className="text-primary-foreground/40 text-xs mt-2">
              ASAMST 132AC — Islamophobia and Constructing Otherness<br />
              American Cultures · Spring 2026 · Instructor: Dr. Hatem Bazian
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider mb-4 text-primary-foreground/60">Navigation</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider mb-4 text-primary-foreground/60">
              Research Team
            </h4>
            <div className="space-y-2.5">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-xs font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-primary-foreground/80 text-sm font-medium">{member.name}</p>
                    <p className="text-primary-foreground/40 text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Academic Research Project. All sources cited in APA format.
          </p>
          <div className="flex items-center gap-1.5 text-primary-foreground/40 text-sm">
            <BookOpen className="w-4 h-4" />
            For academic use only
          </div>
        </div>
      </div>
    </footer>
  );
}