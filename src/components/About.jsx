import useFadeIn from "../hooks/useFadeIn";

const meta = [
  { key: "status", value: "open to work", green: true },
  { key: "location", value: "Chennai, India" },
  { key: "studying", value: "B.Tech CSE — final year" },
  { key: "interests", value: "web, systems & coffee " },
  {
    key: "currently",
    value:
      "ill be either building something or overthinking about my leftover work",
  },
];

export default function About() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-28">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p className="text-green text-xs tracking-widest mb-1">// 01</p>
        <h2 className="text-2xl font-bold text-white mb-10 pb-4 border-b border-[#222]">
          about_me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-sm text-[#bbb] leading-relaxed">
            <p>
              Hey — I'm <strong className="text-white">Anubhav</strong>. I like
              building things and obsessing over food.
            </p>
            <p>
              Currently studying Computer Science, spending most of my time
              understanding, breaking things, and hitting my head trying to
              figure out why they broke in the first place.
            </p>
            <p>
              I care about good architecture, readable code, and fewer “why did
              I write this?” moments.
            </p>
          </div>

          <div>
            {meta.map(({ key, value, green }) => (
              <div
                key={key}
                className="flex gap-4 py-2.5 border-b border-[#1a1a1a] text-xs"
              >
                <span className="text-muted w-24 shrink-0">{key}</span>
                <span className={green ? "text-green" : "text-[#bbb]"}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
