import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CollapsibleCard({ title, badge, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
      >
        <div className="flex items-center gap-3 pr-4">
          {badge && (
            <span className="shrink-0 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
              {badge}
            </span>
          )}
          <h3 className="font-semibold text-foreground text-base md:text-lg group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}