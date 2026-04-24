import React from "react";
import { teamMembers } from "@/lib/siteData";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-playfair font-bold text-lg">I</span>
              </div>
              <span className="font-playfair font-bold text-xl">
                Islamophobia Around the World
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              An academic research project examining the origins, manifestations,
              and counter-strategies to Islamophobia through an interdisciplinary lens.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Research Team
            </h4>
            <div className="flex flex-wrap gap-2">
              {teamMembers.map((name, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-primary-foreground/10 text-primary-foreground/80 text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Islamophobia Research Project. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-primary-foreground/60 text-sm">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for academic purposes
          </div>
        </div>
      </div>
    </footer>
  );
}