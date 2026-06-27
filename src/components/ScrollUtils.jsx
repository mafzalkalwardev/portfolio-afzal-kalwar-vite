import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      style={{ width: `${width}%` }}
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "rgba(34,211,238,0.1)",
            border: "1px solid rgba(34,211,238,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 100,
            transition: "all 0.2s",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={18} color="#22d3ee" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function FloatingSocials() {
  return (
    <div
      style={{
        position: "fixed",
        left: 20,
        bottom: "50%",
        transform: "translateY(50%)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 100,
      }}
      className="hidden lg:flex"
    >
      {[
        { href: "https://github.com/mafzalkalwardev", label: "GH", color: "#94a3b8" },
        { href: "https://www.linkedin.com/in/muhammad-afzal-2670b527b/", label: "LI", color: "#60a5fa" },
        { href: "mailto:kalwarmuhammadafzal3@gmail.com", label: "EM", color: "#22d3ee" },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noreferrer"
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 700,
            color: s.color,
            textDecoration: "none",
            fontFamily: "'JetBrains Mono', monospace",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = `${s.color}15`; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
        >
          {s.label}
        </a>
      ))}
      <div style={{ width: 1, height: 60, background: "linear-gradient(180deg, rgba(255,255,255,0.1), transparent)", margin: "0 auto" }} />
    </div>
  );
}
