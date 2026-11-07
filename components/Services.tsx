import { ArrowUpRight, BrainCircuit, Code2, Database, FlaskConical, GitBranch, Search } from "lucide-react";

import ServiceTilt from "./ui/ServiceTilt";
import BorderBeam from "./ui/BorderBeam";

const services = [
  {
    id: "ai-research",
    number: "01",
    icon: BrainCircuit,
    eyebrow: "APPLIED AI RESEARCH",
    title: "AI Research & RAG",
    description: "Connect your knowledge to AI. We research, prototype, and evaluate intelligent systems around your data and business needs.",
    capabilities: [
      { icon: Database, title: "RAG & knowledge systems", text: "Retrieval-augmented generation grounded in your documents, with source references and access-aware retrieval." },
      { icon: Search, title: "Semantic search & agents", text: "Embedding-based search, conversational assistants, and AI agents connected to business tools." },
      { icon: FlaskConical, title: "Experiments & evaluation", text: "Model and prompt evaluation, retrieval experiments, and feasibility prototypes before production investment." },
    ],
    deliverable: "From research question to validated prototype.",
    cta: "Discuss AI research",
    subject: "AI research and RAG consultation",
  },
  {
    id: "ai-development",
    number: "02",
    icon: Code2,
    eyebrow: "AI-INTEGRATED SOFTWARE DEVELOPMENT",
    title: "AI Software Development",
    description: "Build software that works with your business. We integrate AI into custom applications, existing platforms, and everyday workflows.",
    capabilities: [
      { icon: Code2, title: "Custom web apps & platforms", text: "Business applications, dashboards, and internal tools with AI features shaped around your workflows." },
      { icon: GitBranch, title: "Integration & automation", text: "Connect AI with your APIs, CRM, ERP, and data sources to automate document processing and operational tasks." },
      { icon: Database, title: "Delivery & ongoing improvement", text: "Discovery, UX design, development, testing, deployment, and monitoring, with privacy and access controls in mind." },
    ],
    deliverable: "From business requirement to integrated software.",
    cta: "Discuss your project",
    subject: "AI-integrated software development inquiry",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing relative border-y border-card-border bg-foreground/[0.015]">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 lg:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono tracking-widest text-neon-amber mb-4">OUR EXPERTISE</p>
            <h2 className="section-title mb-0">AI research.<br /><span className="text-neon-amber">Software that connects.</span></h2>
          </div>
          <p className="text-base text-foreground/70 max-w-sm">Alongside TotO-L and Orbit-Trace, we partner with teams on applied AI research and custom software development.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service) => (
            <ServiceTilt key={service.id}>
              <article id={service.id} data-service={service.id} className="service-tilt-card service-panel">
                <BorderBeam showInLight size={280} duration={9} delay={service.number === "01" ? 0 : 4.5} borderWidth={1.5} colorFrom="var(--service-beam-from)" colorTo="var(--service-beam-to)" className="service-border-beam" />
                <div className="service-panel-heading">
                  <div className="service-card-depth flex items-center justify-between gap-4 mb-7">
                    <div className="service-icon-sculpture">
                      <span className="service-icon-orbit" aria-hidden="true" />
                      <service.icon size={26} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="service-panel-number" aria-hidden="true">{service.number}</span>
                  </div>
                  <p className="service-panel-eyebrow">{service.number === "01" ? "RESEARCH & DISCOVERY" : "ENGINEERING & DELIVERY"}</p>
                  <h3 className="service-card-depth service-panel-title">{service.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
                <ul className="service-panel-capabilities">
                  {service.capabilities.map((capability) => (
                    <li key={capability.title} className="service-panel-capability">
                      <span className="service-capability-symbol"><capability.icon size={17} strokeWidth={1.5} aria-hidden="true" /></span>
                      <div>
                        <h4 className="font-sans text-sm font-semibold mb-1.5">{capability.title}</h4>
                        <p className="text-sm text-foreground/65 leading-relaxed">{capability.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="service-panel-footer">
                  <p className="text-xs text-foreground/60 mb-4">{service.deliverable}</p>
                  <a href={`mailto:hello@beevora.com?subject=${encodeURIComponent(service.subject)}`} className="service-card-cta service-panel-button">
                    {service.cta}<ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </ServiceTilt>
          ))}
        </div>
        <p className="text-sm text-foreground/60 mt-6">Need a ready-to-use platform? <a href="#products" className="font-medium text-foreground underline underline-offset-4">Explore our SaaS products</a>.</p>
      </div>
    </section>
  );
}
