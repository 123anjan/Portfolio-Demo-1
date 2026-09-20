import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { projectCategories, projects, siteMeta } from "../data/siteData";

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = siteMeta.projects.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription)
      metaDescription.setAttribute("content", siteMeta.projects.description);
  }, []);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      const normalized = category.charAt(0).toUpperCase() + category.slice(1);
      setActiveFilter(
        projectCategories.includes(normalized) ? normalized : "All",
      );
    }
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setSearchParams({});
      return;
    }
    setSearchParams({ category: category.toLowerCase().replace(/\s+/g, "-") });
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Concept Work</span>
          <h1>Projects</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="filter-bar" aria-label="Project categories">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip ${activeFilter === category ? "active" : ""}`}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="card-grid projects-grid compact-grid">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="project-card reveal-up"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ")
                    setSelectedProject(project);
                }}
              >
                <div className="project-badge">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span>Concept</span>
                  <span>{project.category}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="project-badge">{selectedProject.category}</div>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <p className="modal-lead">{selectedProject.description}</p>
            <div className="modal-columns">
              <div>
                <h3>Features</h3>
                <ul>
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Technology</h3>
                <ul>
                  {selectedProject.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="project-meta">
              <span>Project type: {selectedProject.type}</span>
              <span>{selectedProject.concept}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;
