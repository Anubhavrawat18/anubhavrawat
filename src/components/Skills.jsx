import useFadeIn from "../hooks/useFadeIn";
import { GolemSprite, RobotSprite } from "../sprites/PixelSprites";

const skillGroups = [
  {
    category: "// frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "// backend",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
  },
  {
    category: "// databases & infra",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Git", "Linux"],
    // skills: ["PostgreSQL", "MongoDB", "SQLite", "Docker", "Git", "Linux"],
  },
];

export default function Skills() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-28">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p className="text-green text-xs tracking-widest mb-1">// 03</p>
        <h2 className="text-2xl font-bold text-white mb-10 pb-4 border-b border-[#222]">
          skills
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="border-green pt-20">
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
          <div className="box1">
            <p className="text-green text-xs mb-8">$ skills --list --grouped</p>

            <div className="space-y-8">
              {skillGroups.map(({ category, skills }) => (
                <div key={category}>
                  <p className="text-muted text-xs tracking-widest mb-3">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 border border-[#222] text-[#bbb] hover:border-green hover:text-green transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
