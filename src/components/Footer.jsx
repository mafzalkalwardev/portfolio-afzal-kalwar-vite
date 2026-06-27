import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 0 24px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22d3ee, #34d399)" }}>
                <Terminal size={14} color="#020817" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>
                Afzal<span style={{ color: "#22d3ee" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, maxWidth: 260 }}>
              Building systems that automate workflows, scale operations, and solve real-world business problems.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 11, color: "#475569", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Quick Links</div>
            <div className="flex flex-col gap-2">
              {[["#about","About"],["#projects","Projects"],["#stack","Tech Stack"],["#journey","Journey"],["#contact","Contact"]].map(([href, label]) => (
                <a key={href} href={href} onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ fontSize: 13, color: "#475569", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "#22d3ee"}
                  onMouseLeave={(e) => e.target.style.color = "#475569"}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div style={{ fontSize: 11, color: "#475569", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Connect</div>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/mafzalkalwardev" target="_blank" rel="noreferrer" className="flex items-center gap-3"
                style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#22d3ee"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#475569"}>
                <Github size={14} /> github.com/mafzalkalwardev
              </a>
              <a href="https://www.linkedin.com/in/muhammad-afzal-2670b527b/" target="_blank" rel="noreferrer" className="flex items-center gap-3"
                style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#22d3ee"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#475569"}>
                <Linkedin size={14} /> Muhammad Afzal
              </a>
              <a href="mailto:kalwarmuhammadafzal3@gmail.com" className="flex items-center gap-3"
                style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#22d3ee"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#475569"}>
                <Mail size={14} /> kalwarmuhammadafzal3@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 12, color: "#334155" }}>
            © {year} Muhammad Afzal Kalwar. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5" style={{ fontSize: 12, color: "#334155" }}>
            Built with <Heart size={11} color="#f472b6" fill="#f472b6" /> using React + Vite + Tailwind + Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
