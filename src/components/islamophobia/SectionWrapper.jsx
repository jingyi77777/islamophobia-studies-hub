import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-accent rounded-full" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Section</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-muted-foreground text-lg max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}