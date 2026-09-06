import { useEffect, useState } from "react";
import { GolemSprite, RobotSprite } from "../sprites/PixelSprites";

const FULL_NAME = "anubhav rawat.";
const TAGLINE = "I build things for the web - fast, clean, and purposeful.";

const socialLinks = [
  { label: "github", href: "https://github.com/Anubhavrawat18" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/anubhav-rawat-263051288/",
  },
  { label: "X", href: "https://x.com/_rawatanubhav_" },
  { label: "email", href: "mailto:anubhavrawat444@gmail.com" },
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i === FULL_NAME.length) {
        clearInterval(interval);
        setTimeout(() => setDoneTyping(true), 500);
      }
    }, 120);
    const startDelay = setTimeout(() => {}, 600);
    return () => {
      clearInterval(interval);
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-12"
    >
      <div
        className="mb-6 text-xs tracking-widest border border-green text-green px-3 py-1 inline-flex items-center gap-2"
        style={{ opacity: doneTyping ? 1 : 0, transition: "opacity 0.6s" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green inline-block animate-pulse" />
        open to work
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-6">
        {displayed}
        {!doneTyping && <span className="cursor" />}
      </h1>

      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-20">
        <div className="flex items-center justify-center">
          <div
            style={{
              position: "relative",
              width: 200,
              height: 200,
              border: "2px solid var(--green-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 0 0 2px var(--bg), 0 0 0 4px var(--green-border), 0 0 28px var(--green-faint)",
              opacity: doneTyping ? 1 : 0,
            }}
          >
            {/* corner brackets */}
            {[
              { pos: { top: -8, left: -8 }, char: "⌜" },
              { pos: { top: -8, right: -8 }, char: "⌝" },
              { pos: { bottom: -8, left: -8 }, char: "⌞" },
              { pos: { bottom: -8, right: -8 }, char: "⌟" },
            ].map(({ pos, char }) => (
              <span
                key={char}
                style={{
                  position: "absolute",
                  ...pos,
                  color: "var(--green)",
                  fontSize: 22,
                  fontFamily: "var(--font-pixel)",
                }}
              >
                {char}
              </span>
            ))}
            <div style={{ textAlign: "center" }}>
              <GolemSprite color="#00ff41" size={240} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p
            className="text-muted text-sm md:text-base mb-3 tracking-wide"
            style={{ opacity: doneTyping ? 1 : 0, transition: "opacity 0.6s" }}
          >
            <span className="text-green">//</span> full-stack developer &amp; cs
            student
          </p>

          <p
            className="text-[#444] text-xs md:text-sm max-w-md mb-10 leading-relaxed"
            style={{
              opacity: doneTyping ? 1 : 0,
              transition: "opacity 0.7s 0.1s",
            }}
          >
            {TAGLINE}
          </p>

          <div
            className="flex items-center gap-6"
            style={{
              opacity: doneTyping ? 1 : 0,
              transition: "opacity 0.7s 0.2s",
            }}
          >
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label !== "email" ? "_blank" : undefined}
                rel="noreferrer"
                className="text-muted hover:text-green text-xs tracking-widest transition-colors duration-200"
              >
                ./{label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
