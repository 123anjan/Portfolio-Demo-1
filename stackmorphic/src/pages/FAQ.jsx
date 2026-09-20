import { useEffect, useState } from "react";
import { faqItems, siteMeta } from "../data/siteData";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    document.title = siteMeta.faq.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.faq.description);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">FAQ</span>
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container faq-list">
          {faqItems.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={openIndex === index}
                onClick={() => toggleItem(index)}
              >
                {item.question}
              </button>
              <div className="faq-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FAQ;
