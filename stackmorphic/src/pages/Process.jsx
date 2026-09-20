import { useEffect, useRef } from "react";
import { processSteps, siteMeta } from "../data/siteData";

function Process() {
  const stepsRef = useRef([]);

  useEffect(() => {
    document.title = siteMeta.process.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.process.description);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            stepsRef.current.forEach((step, stepIndex) => {
              step.classList.toggle("active", stepIndex <= index);
            });
          }
        });
      },
      { threshold: 0.6 },
    );

    stepsRef.current.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Development Process</span>
          <h1>From Idea to Launch</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container process-layout">
          <div
            className="process-timeline"
            aria-label="Project development timeline"
          >
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="process-step"
                ref={(node) => {
                  stepsRef.current[index] = node;
                }}
                data-index={index}
              >
                <div className="process-line" aria-hidden="true" />
                <div className="step-badge">{step.number}</div>
                <div className="step-copy">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Process;
