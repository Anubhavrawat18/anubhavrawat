import { useState } from "react";
import useFadeIn from "../hooks/useFadeIn";

const projects = [
  {
    id: 1,
    name: "BEAM - A Real-time Chat Application",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Daisy UI"],
    description:
      "Beam is a real-time chat application built with React, Node.js, MongoDB, and Socket.io. It features user authentication, private messaging. The frontend is styled with Daisy UI for a sleek and responsive design. I built this project to explore how real-time communication works using websockets.",
    demo: "#",
    source: "https://github.com/Anubhavrawat18/BEAM.git",
  },
  {
    id: 2,
    name: "HireOn - AI powered mock interview platform",
    tags: ["Next.js", "PostgreSQL", "Google AI Studio"],
    description:
      "HireOn is an AI-powered platform for conducting mock interviews. It allows users to practice technical interviews with an AI interviewer that can ask questions, evaluate answers, and provide feedback. The backend is built with Next.js API routes and firebase for data storage. Made for job seekers to prepare for technical interviews in a realistic environment.",
    demo: "#",
    source: "https://github.com/Anubhavrawat18/mock-interview.git",
  },
  {
    id: 3,
    name: "Fractal Chaotic Auth - A secure authentication system",
    tags: [
      "React.js",
      "FastAPI",
      "Argon2id",
      "Behavioral Biometrics",
      "Chaos Theory",
    ],
    description:
      "A behavioral authentication system that generates one-time passwords through deterministic chaos. Instead of fixed secrets or TOTP counters, each OTP is computed by feeding a seed - derived from your password, a behavioral fingerprint, and the current timestamp - through Mandelbrot, Julia, and logistic map functions. The result is a time-bound, user-bound token that is practically impossible to replicate without matching both the credential and the behavior.",
    demo: "#",
    source: "https://github.com/Anubhavrawat18/Fractal-Chaotic-Auth.git",
  },
  // {
  //   id: 4,
  //   name: "HireOn - AI powered mock interview platform",
  //   tags: ["Next.js", "PostgreSQL", "Google AI Studio"],
  //   description:
  //     "HireOn is an AI-powered platform for conducting mock interviews. It allows users to practice technical interviews with an AI interviewer that can ask questions, evaluate answers, and provide feedback. The backend is built with Next.js API routes and firebase for data storage. Made for job seekers to prepare for technical interviews in a realistic environment.",
  //   demo: "#",
  //   source: "https://github.com/Anubhavrawat18/air-resume-analyzer.git",
  // },
  {
    id: 4,
    name: "Subscription Tracking API",
    tags: ["Node.js", "Express", "MongoDB"],
    description:
      "A REST API for tracking subscriptions. Built with Node.js, Express, and MongoDB, it features user authentication, CRUD operations for subscriptions, and integration with a payment gateway.",
    demo: "#",
    source: "https://github.com/Anubhavrawat18/Subscription-Tracker-API.git",
  },
];

function ProjectItem({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border transition-colors duration-200 mb-px ${
        open ? "border-green" : "border-[#222] hover:border-[#333]"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-green text-xs">▶</span>
          <span
            className={`font-semibold text-sm transition-colors duration-200 ${
              open ? "text-green" : "text-white"
            }`}
          >
            {project.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 border border-[#222] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <span
            className={`text-lg leading-none transition-transform duration-250 ${
              open ? "rotate-45 text-green" : "text-muted"
            }`}
          >
            +
          </span>
        </div>
      </button>

      <div
        className={`transition-all duration-350 ${
          open
            ? "max-h-[70vh] overflow-y-auto overscroll-contain [touch-action:pan-y]"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-5 pb-5 border-t border-[#222]">
          <p className="text-sm text-[#bbb] leading-relaxed mt-4 mb-4">
            {project.description}
          </p>
          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1.5 border border-green text-green hover:bg-green hover:text-black transition-all duration-200"
            >
              ./live_demo
            </a>

            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1.5 border border-[#333] text-muted hover:border-[#aaa] hover:text-[#aaa] transition-all duration-200"
            >
              ./source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-28">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-green text-xs tracking-widest mb-1">// 02</p>
        <h2 className="text-2xl font-bold text-white mb-10 pb-4 border-b border-[#222]">
          projects
        </h2>

        <div>
          {projects.map((p) => (
            <ProjectItem key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
