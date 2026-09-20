export function initializeSiteInteractions() {
  if (typeof document === "undefined") return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll(".reveal-up")
    .forEach((element) => revealObserver.observe(element));

  const demoToggle = document.querySelector("[data-demo-button]");
  const demoState = document.querySelector("[data-demo-state]");
  if (demoToggle && demoState) {
    demoToggle.onclick = () => {
      const next =
        demoState.textContent === "Ready for launch"
          ? "Interface updated"
          : "Ready for launch";
      demoState.textContent = next;
    };
  }

  const emailInput = document.querySelector("[data-email-input]");
  const emailMessage = document.querySelector("[data-email-message]");
  if (emailInput && emailMessage) {
    emailInput.oninput = () => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      emailMessage.textContent = valid
        ? "Email looks valid"
        : "Please enter a valid email";
      emailMessage.style.color = valid ? "#66e4b7" : "#ffb86c";
    };
  }

  const demoTags = document.querySelectorAll("[data-demo-tag]");
  const demoResults = document.querySelector("[data-demo-results]");
  if (demoTags.length && demoResults) {
    demoTags.forEach((tag) => {
      tag.onclick = () => {
        demoTags.forEach((item) =>
          item.classList.toggle("active", item === tag),
        );
        const filtered =
          tag.dataset.demoTag === "All"
            ? ["Business Website", "Service Landing", "Brand Website"]
            : tag.dataset.demoTag === "Business"
              ? ["Business Website"]
              : ["Service Landing"];
        demoResults.innerHTML = filtered
          .map((item) => `<span>${item}</span>`)
          .join("");
      };
    });
  }

  const modalTrigger = document.querySelector("[data-open-modal]");
  if (modalTrigger) {
    modalTrigger.onclick = () => {
      const modal = document.createElement("div");
      modal.className = "modal-backdrop";
      modal.innerHTML = `
        <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="demo-title">
          <button type="button" class="modal-close" aria-label="Close demo modal">×</button>
          <div class="project-badge">Demo</div>
          <h2 id="demo-title">JavaScript Modal Demo</h2>
          <p class="modal-lead">This modal demonstrates dynamic UI behavior without reloading the page.</p>
        </div>
      `;

      modal.addEventListener("click", (event) => {
        if (event.target === modal || event.target.closest(".modal-close")) {
          modal.remove();
          document.body.style.overflow = "";
        }
      });

      document.body.appendChild(modal);
      document.body.style.overflow = "hidden";
    };
  }

  const themeButtons = document.querySelectorAll("[data-theme]");
  if (themeButtons.length) {
    themeButtons.forEach((button) => {
      button.onclick = () => {
        const selected = button.dataset.theme;
        const root = document.documentElement;
        if (selected === "cyan") {
          root.style.setProperty("--primary", "#31d9ff");
          root.style.setProperty("--secondary", "#78e3ff");
        } else if (selected === "violet") {
          root.style.setProperty("--primary", "#8d7dff");
          root.style.setProperty("--secondary", "#bca6ff");
        } else {
          root.style.setProperty("--primary", "#7c6bff");
          root.style.setProperty("--secondary", "#43d9ff");
        }
        themeButtons.forEach((item) =>
          item.classList.toggle("active", item === button),
        );
      };
    });
  }

  const counter = document.querySelector("[data-counter]");
  if (counter) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const interval = setInterval(() => {
              current += 1;
              counter.textContent = current;
              if (current >= 24) clearInterval(interval);
            }, 90);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(counter);
  }

  const tabs = document.querySelectorAll("[data-tab]");
  const tabPanel = document.querySelector("[data-tab-panel]");
  if (tabs.length && tabPanel) {
    const labels = {
      design: "Design-first thinking drives the user journey.",
      dev: "Development is shaped around clean architecture and maintainability.",
      launch:
        "Launch readiness includes QA, SEO basics and deployment planning.",
    };
    tabs.forEach((tab) => {
      tab.onclick = () => {
        tabs.forEach((item) => item.classList.toggle("active", item === tab));
        tabPanel.textContent = labels[tab.dataset.tab] || labels.design;
      };
    });
  }

  const accordionTrigger = document.querySelector(".accordion-trigger");
  if (accordionTrigger) {
    accordionTrigger.onclick = () => {
      const item = accordionTrigger.closest(".accordion-item");
      item.classList.toggle("open");
    };
  }

  const searchInput = document.querySelector("[data-search-input]");
  const searchList = document.querySelector("[data-search-list]");
  if (searchInput && searchList) {
    const items = Array.from(searchList.querySelectorAll("li"));
    searchInput.oninput = (event) => {
      const query = event.target.value.toLowerCase();
      items.forEach((item) => {
        const visible = item.textContent.toLowerCase().includes(query);
        item.style.display = visible ? "inline-flex" : "none";
      });
    };
  }

  const jsonCards = document.querySelector("[data-json-cards]");
  if (jsonCards) {
    const data = [
      { title: "Business Website", category: "Business" },
      { title: "Landing Page", category: "Marketing" },
      { title: "Restaurant Concept", category: "Local" },
      { title: "Dashboard UI", category: "Web App" },
    ];
    jsonCards.innerHTML = data
      .map(
        (item) => `
      <div class="json-card">
        <strong>${item.title}</strong>
        <div>${item.category}</div>
      </div>
    `,
      )
      .join("");
  }

  const fetchButton = document.querySelector("[data-fetch-button]");
  const apiOutput = document.querySelector("[data-api-output]");
  if (fetchButton && apiOutput) {
    fetchButton.onclick = async () => {
      apiOutput.textContent = "Loading...";
      try {
        const response = await fetch("/data/mock-api.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const payload = await response.json();
        apiOutput.textContent = `200 OK • ${payload.message || "Mock API loaded"}`;
      } catch (error) {
        apiOutput.textContent = "Error: mock data unavailable";
      }
    };
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion) {
    document
      .querySelectorAll(".reveal-up")
      .forEach((item) => item.classList.add("visible"));
  }
}

export default initializeSiteInteractions;
