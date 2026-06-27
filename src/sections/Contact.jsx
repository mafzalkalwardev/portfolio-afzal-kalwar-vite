import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Send, ExternalLink, GitBranch, Star, Code2 } from "lucide-react";

export function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { icon: <GitBranch size={18} color="#22d3ee" />, value: "27+", label: "Repositories", color: "#22d3ee" },
    { icon: <Code2 size={18} color="#34d399" />, value: "5+", label: "Languages Used", color: "#34d399" },
    { icon: <Star size={18} color="#fbbf24" />, value: "100+", label: "Commits", color: "#fbbf24" },
    { icon: <ExternalLink size={18} color="#a78bfa" />, value: "4+", label: "Tech Domains", color: "#a78bfa" },
  ];

  const categories = [
    { label: "Automation & Scraping", count: 10, color: "#22d3ee" },
    { label: "AI / ML Projects", count: 4, color: "#34d399" },
    { label: "Full-Stack Apps", count: 8, color: "#60a5fa" },
    { label: "Logistics Tech", count: 3, color: "#fb923c" },
    { label: "Desktop Tools", count: 2, color: "#a78bfa" },
  ];

  return (
    <section id="github" ref={ref} className="relative py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="section-label mb-4">// Open Source</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            GitHub Portfolio
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex justify-center mb-2">{s.icon}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: s.color, fontFamily: "'Syne', sans-serif" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="rounded-xl p-6 mb-8"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#94a3b8", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>Repository Breakdown</h3>
          <div className="flex flex-col gap-4">
            {categories.map((cat) => (
              <div key={cat.label}>
                <div className="flex justify-between mb-1.5">
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>{cat.label}</span>
                  <span style={{ fontSize: 12, color: cat.color, fontFamily: "'JetBrains Mono', monospace" }}>{cat.count} repos</span>
                </div>
                <div style={{ height: 3, borderRadius: 3, background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(cat.count / 27) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: 3, background: cat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <a href="https://github.com/mafzalkalwardev" target="_blank" rel="noreferrer" className="btn-primary">
            <Github size={16} /> Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:kalwarmuhammadafzal3@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-28">
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(34,211,238,0.03), transparent)" }} />
      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="section-label mb-4">// Get In Touch</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Let's Build Something
          </h2>
          <p style={{ color: "#64748b", marginTop: 12, fontSize: 15 }}>
            Have an automation problem? Need a scraping system? Building a SaaS? Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="flex flex-col gap-5">
            {[
              { icon: <Mail size={18} color="#22d3ee" />, label: "Email", value: "kalwarmuhammadafzal3@gmail.com", href: "mailto:kalwarmuhammadafzal3@gmail.com" },
              { icon: <Github size={18} color="#94a3b8" />, label: "GitHub", value: "github.com/mafzalkalwardev", href: "https://github.com/mafzalkalwardev" },
              { icon: <Linkedin size={18} color="#60a5fa" />, label: "LinkedIn", value: "Muhammad Afzal", href: "https://www.linkedin.com/in/muhammad-afzal-2670b527b/" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl p-4 glass-hover"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.06)" }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 500 }}>{item.value}</div>
                </div>
              </a>
            ))}

            <div className="rounded-xl p-5 mt-2" style={{ background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.15)" }}>
              <div style={{ fontSize: 13, color: "#22d3ee", fontWeight: 600, marginBottom: 6 }}>Currently Available</div>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>
                Open to freelance projects, automation contracts, and full-time engineering roles. Based in Pakistan, available for remote work globally.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Muhammad Ali" },
                { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ fontSize: 11, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, display: "block" }}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    style={{
                      width: "100%", padding: "10px 14px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8, color: "#e2e8f0", fontSize: 14,
                      outline: "none", fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 11, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, display: "block" }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  style={{
                    width: "100%", padding: "10px 14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8, color: "#e2e8f0", fontSize: 14,
                    outline: "none", resize: "vertical", fontFamily: "'Space Grotesk', sans-serif",
                  }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                {sent ? "Opening Email Client..." : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
