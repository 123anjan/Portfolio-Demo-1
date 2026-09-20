import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  homeProjects,
  homeServices,
  homeFaq,
  siteMeta,
} from "../data/siteData";

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setIsReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (isReducedMotion || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;
      setMousePosition({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isReducedMotion]);

  const heroStyle = useMemo(
    () => ({
      transform: isReducedMotion
        ? "none"
        : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    }),
    [mousePosition, isReducedMotion],
  );

  useEffect(() => {
    document.title = siteMeta.home.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.home.description);
  }, []);

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy reveal-up">
            <span className="eyebrow">FULL-STACK WEB DEVELOPMENT STUDIO</span>
            <h1>We Build Digital Experiences That Move Businesses Forward.</h1>
            <p>
              Modern websites and web applications designed around your
              business, your customers, and your goals.
            </p>
            <div className="cta-row">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <a
                href="https://wa.me/919330492466?text=Hello%20Stackmorphic%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Talk on WhatsApp
              </a>
            </div>
            <div className="hero-meta">
              <span>Business-first strategy</span>
              <span>Responsive design</span>
              <span>Technical depth</span>
            </div>
          </div>

          <div className="hero-visual" ref={heroRef}>
            <div className="visual-shell" style={heroStyle}>
              <div className="browser-window">
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-body">
                  <aside className="console-panel">
                    <div className="terminal-label">stackmorphic.js</div>
                    <div className="code-lines">
                      <span>const goal = 'growth'</span>
                      <span>const strategy = 'clarity'</span>
                      <span>const design = 'conversion'</span>
                    </div>
                    <div className="status-row">
                      <span className="status-dot" />
                      <span>Live build</span>
                    </div>
                  </aside>

                  <div className="main-panel">
                    <div className="panel-header">
                      <div className="chip chip-blue">Traffic</div>
                      <div className="chip chip-violet">+32%</div>
                    </div>
                    <div className="stats-grid">
                      <div className="stat-card">
                        <label>Engagement</label>
                        <strong>89%</strong>
                      </div>
                      <div className="stat-card">
                        <label>Load</label>
                        <strong>1.2s</strong>
                      </div>
                    </div>
                    <div className="card-rows">
                      <div className="mini-card light" />
                      <div className="mini-card dark" />
                      <div className="mini-card accent" />
                    </div>
                    <div className="chart-proxy">
                      <span className="bar one" />
                      <span className="bar two" />
                      <span className="bar three" />
                      <span className="bar four" />
                      <span className="bar five" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section no-top-pad">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Built for the Modern Web</span>
            <h2>Built for the Modern Web</h2>
            <p>
              From professional business websites to custom web applications,
              Stackmorphic combines thoughtful design, modern development and
              performance-focused engineering.
            </p>
          </div>

          <div className="feature-grid">
            {[
              [
                "Modern Design",
                "Professional interfaces designed around your brand and audience.",
              ],
              [
                "Responsive Experience",
                "Designed for mobile, tablet and desktop.",
              ],
              ["Performance", "Fast and optimized user experiences."],
              [
                "Business Focused",
                "Web solutions designed around real business goals.",
              ],
            ].map(([title, description], index) => (
              <article
                className="feature-card reveal-up"
                key={title}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="feature-icon">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-panel">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">What We Build</span>
            <h2>Services that support business growth</h2>
          </div>
          <div className="card-grid services-grid">
            {homeServices.map((service, index) => (
              <article
                className="service-card reveal-up"
                key={service.id}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/services" className="text-link">
                  Explore service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Why Stackmorphic</span>
            <h2>Why Businesses Choose Stackmorphic</h2>
          </div>
          <div className="reason-grid">
            {[
              "Business-first thinking",
              "Custom solutions",
              "Responsive by default",
              "Performance-focused",
              "Modern technology",
              "Direct communication",
            ].map((reason, index) => (
              <div
                className="reason-box reveal-up"
                key={reason}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="reason-mark">✓</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-panel">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Process</span>
            <h2>From idea to launch</h2>
          </div>
          <div className="timeline-preview">
            {[
              "Discovery",
              "Strategy",
              "UI/UX Design",
              "Development",
              "Testing",
              "Launch",
            ].map((step, index) => (
              <div
                className="timeline-step reveal-up"
                key={step}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Featured Projects</span>
            <h2>Concept projects</h2>
          </div>
          <div className="card-grid projects-grid">
            {homeProjects.map((project, index) => (
              <article
                className="project-card reveal-up"
                key={project.id}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="project-badge">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span>{project.type}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-panel">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Technology</span>
            <h2>Technology behind the experience</h2>
          </div>
          <div className="tech-inline">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Django",
              "MongoDB",
            ].map((tech) => (
              <span className="tech-pill reveal-up" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Industries</span>
            <h2>Built for different business types</h2>
          </div>
          <div className="industry-grid">
            {[
              "Local Businesses",
              "Startups",
              "E-Commerce",
              "Restaurants",
              "Salons & Beauty",
              "Jewellery",
              "Real Estate",
              "Professional Services",
              "Personal Brands",
              "Service Businesses",
            ].map((industry, index) => (
              <div
                className="industry-card reveal-up"
                key={industry}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-panel faq-panel">
        <div className="container faq-home-wrap">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Questions clients ask early</h2>
          </div>
          <div className="faq-compact">
            {homeFaq.map((item) => (
              <div className="faq-item faq-static" key={item.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded="false"
                  onClick={() => setActiveTab((prev) => (prev === 0 ? 1 : 0))}
                >
                  {item.question}
                </button>
                <div className="faq-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section finale-cta">
        <div className="container cta-panel reveal-up">
          <div>
            <span className="eyebrow">Ready to begin?</span>
            <h2>
              Let’s build a digital presence that works for your business.
            </h2>
          </div>
          <div className="cta-row btn-stack">
            <Link to="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <a
              href="https://wa.me/919330492466?text=Hello%20Stackmorphic%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
