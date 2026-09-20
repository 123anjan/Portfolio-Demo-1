import { useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { services, siteMeta } from "../data/siteData";

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = siteMeta.services.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.services.description);
  }, []);

  const serviceCards = useMemo(() => services, []);

  const handleDiscuss = (serviceType) => {
    navigate("/contact", { state: { projectType: serviceType } });
  };

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">What We Build</span>
          <h1>What We Build</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container service-grid">
          {serviceCards.map((service, index) => (
            <article
              className="service-detail-card reveal-up"
              key={service.id}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="service-head">
                <span className="service-number">{service.number}</span>
                <span className="service-kicker">{service.category}</span>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleDiscuss(service.type)}
              >
                {service.cta}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;
