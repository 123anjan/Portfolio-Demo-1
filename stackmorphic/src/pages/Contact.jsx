import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { siteMeta } from "../data/siteData";

const projectTypes = [
  "Business Website",
  "Landing Page",
  "E-Commerce",
  "Web Application",
  "Website Redesign",
  "Maintenance",
  "Other",
];
const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not Sure",
];

const initialForm = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  projectType: "Business Website",
  budget: "Not Sure",
  projectDescription: "",
};

function Contact() {
  const location = useLocation();
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const locationRef = useRef(false);

  useEffect(() => {
    document.title = siteMeta.contact.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.contact.description);
  }, []);

  useEffect(() => {
    if (location.state?.projectType && !locationRef.current) {
      setFormValues((prev) => ({
        ...prev,
        projectType: location.state.projectType,
      }));
      locationRef.current = true;
    }
  }, [location]);

  const typedLength = formValues.projectDescription.length;

  const projectGuidance = useMemo(() => {
    const map = {
      "Business Website":
        "Focus on your services, value proposition, and clear conversion points for local or business visitors.",
      "Landing Page":
        "Keep the message focused: offer, audience, benefits, and a single strong conversion goal.",
      "E-Commerce":
        "Think through product browsing, trust signals, checkout flow and customer journey.",
      "Web Application":
        "Define the user flows, account access, data handling and required interactions.",
      "Website Redesign":
        "Review current content, user experience pain points and the new business direction.",
      Maintenance:
        "Share the current website issues, updates needed and support expectations.",
      Other: "Tell us what kind of digital solution or update you need.",
    };
    return map[formValues.projectType] || map["Business Website"];
  }, [formValues.projectType]);

  const budgetGuidance = useMemo(() => {
    const map = {
      "Under ₹10,000":
        "This works best for a focused small website or landing page.",
      "₹10,000 – ₹25,000":
        "A strong fit for a polished business website or single-page campaign.",
      "₹25,000 – ₹50,000":
        "This can support a broader website with richer content and design detail.",
      "₹50,000+":
        "This is suitable for more complex digital projects and application work.",
      "Not Sure":
        "Share your goals and timeline and Stackmorphic can help estimate the right scope.",
    };
    return map[formValues.budget] || map["Not Sure"];
  }, [formValues.budget]);

  const validateField = (name, value) => {
    const nextErrors = { ...errors };

    switch (name) {
      case "fullName":
        nextErrors.fullName = value.trim() ? "" : "Full name is required.";
        break;
      case "email":
        nextErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email address.";
        break;
      case "phone":
        nextErrors.phone =
          value.trim().length >= 8
            ? ""
            : "Enter a valid phone or WhatsApp number.";
        break;
      case "projectDescription":
        nextErrors.projectDescription =
          value.trim().length >= 40 ? "" : "Please add at least 40 characters.";
        break;
      default:
        break;
    }

    setErrors(nextErrors);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formValues.fullName.trim())
      nextErrors.fullName = "Full name is required.";
    if (!formValues.businessName.trim())
      nextErrors.businessName = "Business name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email))
      nextErrors.email = "Enter a valid email address.";
    if (formValues.phone.trim().length < 8)
      nextErrors.phone = "Enter a valid phone or WhatsApp number.";
    if (formValues.projectDescription.trim().length < 40)
      nextErrors.projectDescription = "Please add at least 40 characters.";

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitState("loading");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitState("success");
    }, 1500);
  };

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Contact</span>
          <h1>Let’s Build Something That Works for Your Business.</h1>
        </div>
      </section>

      <section className="page-section contact-wrap">
        <div className="container contact-grid">
          <aside className="contact-card reveal-up">
            <h2>Connect</h2>
            <ul className="contact-list">
              <li>
                <strong>Phone</strong>
                <br />
                <a href="tel:+919330492466">+91 9330492466</a>
              </li>
              <li>
                <strong>WhatsApp</strong>
                <br />
                <a
                  href="https://wa.me/919330492466?text=Hello%20Stackmorphic%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noreferrer"
                >
                  Start on WhatsApp
                </a>
              </li>
              <li>
                <strong>Location</strong>
                <br />
                Badu Rd, Sreenagar, Madhyamgram, Kolkata, West Bengal 700129,
                India
              </li>
            </ul>
          </aside>

          <form
            className="contact-form reveal-up"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-progress">
              <span>Step 1 of 2</span>
              <div className="progress-bar">
                <span
                  style={{
                    width: `${Math.min((Object.values(formValues).filter(Boolean).length / 7) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>

            <div className="field-grid">
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? "invalid" : ""}
                />
                {errors.fullName && <small>{errors.fullName}</small>}
              </label>

              <label>
                <span>Business Name</span>
                <input
                  type="text"
                  name="businessName"
                  value={formValues.businessName}
                  onChange={handleInputChange}
                  className={errors.businessName ? "invalid" : ""}
                />
                {errors.businessName && <small>{errors.businessName}</small>}
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={errors.email ? "invalid" : ""}
                />
                {errors.email && <small>{errors.email}</small>}
              </label>

              <label>
                <span>Phone / WhatsApp</span>
                <input
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? "invalid" : ""}
                />
                {errors.phone && <small>{errors.phone}</small>}
              </label>

              <label>
                <span>Project Type</span>
                <select
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleInputChange}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <small className="help-text">{projectGuidance}</small>
              </label>

              <label>
                <span>Estimated Budget</span>
                <select
                  name="budget"
                  value={formValues.budget}
                  onChange={handleInputChange}
                >
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                <small className="help-text">{budgetGuidance}</small>
              </label>
            </div>

            <label>
              <span>Project Description</span>
              <textarea
                name="projectDescription"
                value={formValues.projectDescription}
                onChange={handleInputChange}
                rows="6"
                className={errors.projectDescription ? "invalid" : ""}
              />
              <div className="input-row">
                <small>{typedLength} / 500</small>
                {errors.projectDescription && (
                  <small>{errors.projectDescription}</small>
                )}
              </div>
            </label>

            <div className="submit-row">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request a Quote"}
              </button>
              {submitState === "success" && (
                <span className="success-message">
                  Form is frontend-ready. Connect this submission to your
                  preferred email or CRM endpoint.
                </span>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
