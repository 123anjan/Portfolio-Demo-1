import { useEffect, useMemo, useState } from "react";
import { technologyCards, siteMeta } from "../data/siteData";

const categories = [
  "All",
  "Frontend",
  "JavaScript",
  "Backend",
  "Database",
  "API",
  "Tools",
];

function Technology() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedTech, setSelectedTech] = useState(null);

  useEffect(() => {
    document.title = siteMeta.technology.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.technology.description);
  }, []);

  const filteredTech = useMemo(() => {
    if (activeFilter === "All") return technologyCards;
    return technologyCards.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && selectedTech) {
        setSelectedTech(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedTech]);

  useEffect(() => {
    if (!selectedTech) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedTech]);

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Technology</span>
          <h1>Technology Behind the Experience</h1>
          <p>
            Modern tools and technologies used to design, build and maintain
            scalable digital experiences.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="filter-bar" aria-label="Technology categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip ${activeFilter === category ? "active" : ""}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="tech-grid">
            {filteredTech.map((tech) => (
              <article
                key={tech.id}
                className="tech-card reveal-up"
                onClick={() => setSelectedTech(tech)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ")
                    setSelectedTech(tech);
                }}
              >
                <div className="tech-label">{tech.category}</div>
                <h3>{tech.name}</h3>
                <p>{tech.purpose}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-panel">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">Powered by JavaScript</span>
            <h2>Interactive frontend engineering</h2>
          </div>

          <div className="demo-grid">
            <div className="demo-box reveal-up">
              <h3>Interactive UI</h3>
              <button type="button" className="demo-button" data-demo-button>
                Toggle Interface State
              </button>
              <div className="demo-state" data-demo-state>
                Ready for launch
              </div>
            </div>

            <div className="demo-box reveal-up">
              <h3>Live Form Validation</h3>
              <input
                type="email"
                className="demo-input"
                placeholder="you@example.com"
                data-email-input
              />
              <div className="demo-message" data-email-message>
                Waiting for input
              </div>
            </div>

            <div className="demo-box reveal-up">
              <h3>Dynamic Filtering</h3>
              <div className="demo-tags">
                <button
                  type="button"
                  className="tag active"
                  data-demo-tag="All"
                >
                  All
                </button>
                <button type="button" className="tag" data-demo-tag="Business">
                  Business
                </button>
                <button type="button" className="tag" data-demo-tag="Marketing">
                  Marketing
                </button>
              </div>
              <div className="demo-results" data-demo-results>
                <span>Business Website</span>
                <span>Service Landing</span>
              </div>
            </div>

            <div className="demo-box reveal-up">
              <h3>Modal System</h3>
              <button type="button" className="demo-button" data-open-modal>
                Open Demo Modal
              </button>
            </div>

            <div className="demo-box reveal-up">
              <h3>Theme Controller</h3>
              <div className="theme-swatches">
                <button
                  className="swatch active"
                  data-theme="default"
                  aria-label="Default theme"
                />
                <button
                  className="swatch cyan"
                  data-theme="cyan"
                  aria-label="Cyan theme"
                />
                <button
                  className="swatch violet"
                  data-theme="violet"
                  aria-label="Violet theme"
                />
              </div>
            </div>

            <div className="demo-box reveal-up">
              <h3>Counter Animation</h3>
              <div className="big-counter" data-counter>
                0
              </div>
              <div>Projects launched</div>
            </div>

            <div className="demo-box reveal-up">
              <h3>Tabs</h3>
              <div className="tab-list">
                <button type="button" className="tab active" data-tab="design">
                  Design
                </button>
                <button type="button" className="tab" data-tab="dev">
                  Dev
                </button>
                <button type="button" className="tab" data-tab="launch">
                  Launch
                </button>
              </div>
              <div className="tab-panel" data-tab-panel>
                Design-first thinking drives the user journey.
              </div>
            </div>

            <div className="demo-box reveal-up">
              <h3>Accordion</h3>
              <div className="accordion-item open">
                <button type="button" className="accordion-trigger">
                  What makes a website high-converting?
                </button>
                <div className="accordion-content">
                  <p>
                    Clear messaging, strong hierarchy and user-focused flows.
                  </p>
                </div>
              </div>
            </div>

            <div className="demo-box reveal-up">
              <h3>Search</h3>
              <input
                type="search"
                className="demo-input"
                data-search-input
                placeholder="Search technologies"
              />
              <ul className="search-list" data-search-list>
                <li>JavaScript</li>
                <li>React</li>
                <li>Django</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="demo-box reveal-up">
              <h3>Interactive JSON Data</h3>
              <div className="json-cards" data-json-cards />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading reveal-up">
            <h2>Core JavaScript</h2>
          </div>
          <div className="tech-detail-grid">
            {[
              "Variables",
              "Functions",
              "Objects",
              "Arrays",
              "ES6+",
              "Modules",
              "Destructuring",
              "Spread/rest",
              "Template literals",
              "Promises",
              "Async/Await",
              "Error handling",
            ].map((item) => (
              <span className="detail-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-panel">
        <div className="container">
          <div className="section-heading reveal-up">
            <h2>DOM &amp; Browser APIs</h2>
          </div>
          <div className="tech-detail-grid">
            {[
              "DOM manipulation",
              "Event handling",
              "Event delegation",
              "Form APIs",
              "Fetch API",
              "LocalStorage",
              "SessionStorage",
              "URL APIs",
              "IntersectionObserver",
            ].map((item) => (
              <span className="detail-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading reveal-up">
            <h2>Application Patterns</h2>
          </div>
          <div className="tech-detail-grid">
            {[
              "Component-oriented architecture",
              "Reusable functions",
              "State management",
              "Dynamic rendering",
              "API integration",
              "Client-side validation",
              "Error handling",
            ].map((item) => (
              <span className="detail-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-panel">
        <div className="container">
          <div className="section-heading reveal-up">
            <span className="eyebrow">API Integration</span>
            <h2>Frontend demonstration</h2>
          </div>
          <div className="api-demo">
            <div className="status-pill">GET /api/projects</div>
            <button type="button" className="btn btn-primary" data-fetch-button>
              Fetch Data
            </button>
            <div className="api-output" data-api-output>
              200 OK
            </div>
          </div>
        </div>
      </section>

      {selectedTech && (
        <div className="modal-backdrop" onClick={() => setSelectedTech(null)}>
          <div
            className="modal-card tech-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="tech-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close technology modal"
              onClick={() => setSelectedTech(null)}
            >
              ×
            </button>
            <div className="project-badge">{selectedTech.category}</div>
            <h2 id="tech-modal-title">{selectedTech.name}</h2>
            <p>
              <strong>Purpose:</strong> {selectedTech.purpose}
            </p>
            <p>
              <strong>Typical use:</strong> {selectedTech.use}
            </p>
            <p>
              <strong>Related technologies:</strong>{" "}
              {selectedTech.related.join(" • ")}
            </p>
            <p>
              <strong>Example application:</strong> {selectedTech.example}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Technology;
