import { useEffect } from "react";
import { siteMeta } from "../data/siteData";

function About() {
  useEffect(() => {
    document.title = siteMeta.about.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.about.description);
  }, []);

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">About</span>
          <h1>About Stackmorphic</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container about-grid">
          <div className="about-copy reveal-up">
            <p>
              Stackmorphic is a modern independent web-development studio
              focused on building practical digital solutions for businesses.
            </p>
            <p>
              The work is centered around useful, responsive and
              performance-conscious experiences that help companies communicate
              clearly, convert more efficiently and operate with modern digital
              tools.
            </p>
          </div>
          <div className="about-card reveal-up">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <span>Understand</span>
              <span>Design</span>
              <span>Develop</span>
              <span>Test</span>
              <span>Launch</span>
              <span>Improve</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
