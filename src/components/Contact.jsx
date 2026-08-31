import useFadeIn from "../hooks/useFadeIn";

const contacts = [
  {
    label: "github",
    value: "anubhavrawat18",
    href: "https://github.com/Anubhavrawat18",
  },
  {
    label: "linkedin",
    value: "Anubhav Rawat",
    href: "https://www.linkedin.com/in/anubhav-rawat-263051288/",
  },
  {
    label: "X",
    value: "@_rawatanubhav_",
    href: "https://x.com/_rawatanubhav_",
  },
  {
    label: "email",
    value: "anubhavrawat444@gmail.com",
    href: "mailto:anubhavrawat444@gmail.com",
  },
];

export default function Contact() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-28">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p className="text-green text-xs tracking-widest mb-1">// 04</p>
        <h2 className="text-2xl font-bold text-white mb-10 pb-4 border-b border-[#222]">
          contact
        </h2>

        <p className="text-muted text-sm mb-10 max-w-md leading-relaxed">
          Open to internships, freelance, or just a good conversation.
          <span className="text-green">
            {" "}
            Pick a channel and feel free to reach out.
          </span>
        </p>

        <div className="space-y-px">
          {contacts.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "email" ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-4 border border-[#222] hover:border-green group transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <span className="text-green text-xs">▶</span>
                <span className="text-muted text-xs tracking-widest group-hover:text-green transition-colors duration-200">
                  {label}
                </span>
              </div>
              <span className="text-[#444] text-xs group-hover:text-[#888] transition-colors duration-200">
                {value} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
