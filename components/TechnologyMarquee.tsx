"use client";

import { useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js",
  "Python", "FastAPI", "LangChain", "LangGraph", "LangSmith",
  "PyTorch", "Hugging Face Transformers", "LoRA", "QLoRA", "PEFT", "TRL",
  "bitsandbytes", "Accelerate", "Sentence Transformers", "vLLM", "Ollama",
  "NumPy", "pandas", "scikit-learn", "Jupyter",
  "PostgreSQL", "pgvector", "MySQL", "MongoDB", "SQLite", "Redis",
  "Node.js", "NestJS", "Express.js", "Docker",
  "ESP32", "ESP8266", "Arduino", "Raspberry Pi", "MQTT", "PlatformIO", "MicroPython",
];

export default function TechnologyMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="mt-10 pt-6 border-t border-card-border/60">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-4">
        <p className="text-center text-xs uppercase tracking-widest text-foreground/65">ENGINEERED WITH INDUSTRY-STANDARD TECHNOLOGIES</p>
        <button type="button" onClick={() => setPaused((value) => !value)} className="tech-marquee-toggle" aria-label={paused ? "Resume technology animation" : "Pause technology animation"} aria-pressed={paused}>
          {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
        </button>
      </div>
      <div className="tech-marquee" data-paused={paused}>
        <div className="tech-marquee-track" style={{ "--marquee-duration": `${technologies.reduce((seconds, tech) => seconds + 1.5 + tech.length * 0.2, 0)}s` } as CSSProperties}>
          {[0, 1].map((copy) => (
            <ul key={copy} className="tech-marquee-group" aria-label={copy === 0 ? "Our technology stack" : undefined} aria-hidden={copy === 1 ? true : undefined}>
              {technologies.map((tech) => (
                <li key={tech} className="tech-marquee-item"><span aria-hidden="true" />{tech}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
