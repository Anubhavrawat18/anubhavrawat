import { useEffect, useState } from "react";

const links = ["about", "projects", "skills", "contact"];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const handleNav = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-[#0a0a0a]/95 border-b border-[#222]
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        <span className="text-green font-bold text-sm tracking-wide">
          ~/welcome
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => handleNav(l)}
                className="text-muted hover:text-green text-xs tracking-widest transition-colors duration-200"
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/Anubhav_Resume.pdf"
              download
              className="text-xs tracking-widest border border-green text-green px-3 py-1 hover:bg-green hover:text-black transition-all duration-200"
            >
              resume
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-green transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-green transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-green transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 border-t border-[#222]" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => handleNav(l)}
                className="text-muted hover:text-green text-sm tracking-widest transition-colors w-full text-left"
              >
                ./{l}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-green text-sm tracking-widest"
            >
              ./resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
