import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { systems } from "../data";

export default function Systems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="systems" ref={ref} className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">// What I Build</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Systems I Architect
          </h2>
          <p style={{ color: "#64748b", marginTop: 12, fontSize: 15, maxWidth: 480, margin: "12px auto 0" }}>
            Not just code — operational systems that replace entire workflows.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((sys, i) => (
            <motion.div
              key={sys.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-hover rounded-xl p-6"
              style={{
                background: `linear-gradient(135deg, ${sys.color})`,
                border: `1px solid ${sys.border}`,
                cursor: "default",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{sys.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 8, lineHeight: 1.4 }}>
                {sys.title}
              </div>
              <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>{sys.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
