const body = document.body;
const html = document.documentElement;

const nav = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
const projectButtons = document.querySelectorAll("[data-project-filter]");
const techButtons = document.querySelectorAll("[data-tech-filter]");
const projectCards = document.querySelectorAll("[data-project-card]");
const techCards = document.querySelectorAll("[data-tech-card]");
const contactForm = document.querySelector("#contact-form");
const projectType = document.querySelector("#project-type");
const projectTypeInfo = document.querySelector("#project-type-info");
const budgetInfo = document.querySelector("#budget-info");
const descriptionField = document.querySelector("#project-description");
const descriptionCounter = document.querySelector("#description-counter");
const formStatus = document.querySelector("#form-status");
const submitButton = document.querySelector("#submit-button");
const faqButtons = document.querySelectorAll(".faq-button");
const accordions = document.querySelectorAll(".accordion-trigger");
const serviceCards = document.querySelectorAll("[data-service-card]");
const revealElements = document.querySelectorAll(".reveal");
const observer =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      )
    : null;

const navItems = Array.from(navLinks);

const setActiveNav = () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navItems.forEach((link) => {
    const href = link.getAttribute("href");
    const isHome = href === "index.html" || href === "/";
    const matchesCurrent =
      currentPath === href ||
      (isHome && currentPath === "") ||
      currentPath === "index.html";
    link.classList.toggle("active", matchesCurrent);
  });
};

const handleHeaderScroll = () => {
  if (!nav) return;
  if (window.scrollY > 24) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
};

const toggleMenu = (shouldOpen) => {
  if (!menuToggle || !menu) return;
  const isOpen =
    shouldOpen !== undefined
      ? shouldOpen
      : menu.classList.contains("open") === false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menu.classList.toggle("open", isOpen);
  body.classList.toggle("menu-open", isOpen);
};

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => toggleMenu());

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!menu.contains(target) && !menuToggle.contains(target)) {
      toggleMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") toggleMenu(false);
  });
}

if (nav) {
  setActiveNav();
  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
}

const showProjectModal = (
  title,
  category,
  description,
  features,
  tech,
  type,
) => {
  const backdrop = document.querySelector("#project-modal");
  if (!backdrop) return;

  backdrop.querySelector("#modal-title").textContent = title;
  backdrop.querySelector("#modal-category").textContent = category;
  backdrop.querySelector("#modal-description").textContent = description;
  backdrop.querySelector("#modal-features").innerHTML = features
    .map((item) => `<li>${item}</li>`)
    .join("");
  backdrop.querySelector("#modal-tech").innerHTML = tech
    .map((item) => `<span class="tag purple">${item}</span>`)
    .join("");
  backdrop.querySelector("#modal-type").textContent = type;

  backdrop.classList.add("open");
  body.classList.add("modal-open");
  const closeButton = backdrop.querySelector(".modal-close");
  closeButton.focus();
};

const closeProjectModal = () => {
  const backdrop = document.querySelector("#project-modal");
  if (!backdrop) return;
  backdrop.classList.remove("open");
  body.classList.remove("modal-open");
};

if (projectCards.length) {
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.dataset.projectTitle;
      const category = card.dataset.projectCategory;
      const description = card.dataset.projectDescription;
      const features = JSON.parse(card.dataset.projectFeatures || "[]");
      const tech = JSON.parse(card.dataset.projectTech || "[]");
      const type = card.dataset.projectType;
      showProjectModal(title, category, description, features, tech, type);
    });
  });
}

document.addEventListener("click", (event) => {
  const modalBackdrop = event.target.closest("#project-modal");
  if (modalBackdrop && event.target === modalBackdrop) closeProjectModal();

  const closeButton = event.target.closest(".modal-close");
  if (closeButton) closeProjectModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
    toggleMenu(false);
  }
});

const filterProjects = (filter) => {
  const cards = document.querySelectorAll("[data-project-card]");
  cards.forEach((card) => {
    const matches = filter === "all" || card.dataset.category === filter;
    card.style.display = matches ? "block" : "none";
    card.classList.toggle("hidden", !matches);
  });
};

if (projectButtons.length) {
  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectFilter;
      projectButtons.forEach((btn) =>
        btn.classList.toggle("active", btn === button),
      );
      filterProjects(filter);
      const url = new URL(window.location.href);
      if (filter !== "all") url.searchParams.set("category", filter);
      else url.searchParams.delete("category");
      window.history.replaceState({}, "", url);
    });
  });
}

const filterTech = (filter) => {
  const cards = document.querySelectorAll("[data-tech-card]");
  cards.forEach((card) => {
    const matches = filter === "all" || card.dataset.category === filter;
    card.style.display = matches ? "block" : "none";
    card.classList.toggle("hidden", !matches);
  });
};

if (techButtons.length) {
  techButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.techFilter;
      techButtons.forEach((btn) =>
        btn.classList.toggle("active", btn === button),
      );
      filterTech(filter);
    });
  });
}

if (techCards.length) {
  techCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.dataset.techTitle;
      const category = card.dataset.techCategory;
      const purpose = card.dataset.techPurpose;
      const use = card.dataset.techUse;
      const related = JSON.parse(card.dataset.techRelated || "[]");
      const example = card.dataset.techExample;
      const backdrop = document.querySelector("#tech-modal");
      if (!backdrop) return;
      backdrop.querySelector("#tech-modal-title").textContent = title;
      backdrop.querySelector("#tech-modal-category").textContent = category;
      backdrop.querySelector("#tech-modal-purpose").textContent = purpose;
      backdrop.querySelector("#tech-modal-use").textContent = use;
      backdrop.querySelector("#tech-modal-related").innerHTML = related
        .map((item) => `<span class="tag purple">${item}</span>`)
        .join("");
      backdrop.querySelector("#tech-modal-example").textContent = example;
      backdrop.classList.add("open");
      body.classList.add("modal-open");
    });
  });
}

document.addEventListener("click", (event) => {
  const techBackdrop = event.target.closest("#tech-modal");
  if (techBackdrop && event.target === techBackdrop) {
    techBackdrop.classList.remove("open");
    body.classList.remove("modal-open");
  }

  const techClose = event.target.closest(".tech-modal-close");
  if (techClose) {
    const techModal = document.querySelector("#tech-modal");
    techModal?.classList.remove("open");
    body.classList.remove("modal-open");
  }
});

if (faqButtons.length) {
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("active");
      faqButtons.forEach((btn) =>
        btn.closest(".faq-item").classList.remove("active"),
      );
      if (!isOpen) item.classList.add("active");
    });
  });
}

if (accordions.length) {
  accordions.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.parentElement;
      const panel = item.querySelector(".accordion-content");
      const isOpen = item.classList.contains("open");
      accordions.forEach((btn) => {
        const par = btn.parentElement;
        par.classList.remove("open");
        par.querySelector(".accordion-content").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

if (serviceCards.length) {
  serviceCards.forEach((card) => {
    const serviceLink = card.querySelector(".service-cta");
    const serviceName = card.dataset.serviceTitle;
    if (serviceLink) {
      serviceLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = `contact.html?project=${encodeURIComponent(serviceName)}`;
      });
    }
  });
}

const projectTypeMap = {
  "Business Website":
    "Strong business positioning, clear conversion goals, and brand-focused pages.",
  "Landing Page":
    "Focused on a single offer, strong call-to-action, and clear messaging.",
  "E-Commerce":
    "Product-led design, checkout flow, and trust-building elements.",
  "Web Application":
    "Interactive dashboards, workflows, and business logic tailored to your process.",
  "Website Redesign":
    "A modern visual refresh with clearer structure and better conversion paths.",
  Maintenance:
    "Ongoing support, improvements, updates, and performance checks.",
  Other: "A custom solution designed around your business needs and goals.",
};

if (projectType && projectTypeInfo) {
  projectType.addEventListener("change", () => {
    const value = projectType.value;
    projectTypeInfo.textContent =
      projectTypeMap[value] ||
      "Tell us more about the kind of solution you need.";
  });
}

if (budgetInfo) {
  const budgetSelect = document.querySelector("#budget");
  if (budgetSelect) {
    budgetSelect.addEventListener("change", () => {
      const value = budgetSelect.value;
      const messages = {
        "Under ₹10,000":
          "A lean yet high-impact website or landing page for a focused need.",
        "₹10,000 – ₹25,000":
          "A polished small-business website with essential pages and messaging.",
        "₹25,000 – ₹50,000":
          "A richer project with custom design, structure, and functionality.",
        "₹50,000+":
          "A scalable digital project with more features, depth, and growth potential.",
        "Not Sure":
          "We can help scope the right solution around your goals and priorities.",
      };
      budgetInfo.textContent =
        messages[value] || "We can recommend the best fit based on your goals.";
    });
  }
}

if (descriptionField && descriptionCounter) {
  descriptionField.addEventListener("input", () => {
    const count = descriptionField.value.length;
    descriptionCounter.textContent = `${count} / 500`;
    const field = descriptionField.closest(".field");
    if (count > 500) {
      field.classList.add("invalid");
    } else {
      field.classList.remove("invalid");
    }
  });
}

const setFieldError = (field, message) => {
  const wrapper = field.closest(".field");
  if (!wrapper) return;
  wrapper.classList.add("invalid");
  const error = wrapper.querySelector(".field-error");
  if (error) error.textContent = message;
};

const clearFieldError = (field) => {
  const wrapper = field.closest(".field");
  if (!wrapper) return;
  wrapper.classList.remove("invalid");
  const error = wrapper.querySelector(".field-error");
  if (error) error.textContent = "";
};

const validateEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const validatePhone = (value) => /^[\d+\s-()]{7,}$/.test(value.trim());

const updateProgress = () => {
  const form = document.querySelector("#contact-form");
  const progressFill = document.querySelector("#form-progress");
  const stepIndicator = document.querySelector("#form-step");
  if (!form || !progressFill || !stepIndicator) return;

  const fields = form.querySelectorAll("input, select, textarea");
  const completed = Array.from(fields).filter((field) => {
    if (field.disabled || field.type === "hidden") return true;
    return field.value.trim() !== "";
  }).length;

  const ratio = Math.min((completed / fields.length) * 100, 100);
  progressFill.style.width = `${ratio}%`;
  stepIndicator.textContent = `Step ${Math.min(2, Math.max(1, Math.round(ratio / 50) + 1))} of 2`;
};

if (contactForm) {
  contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", updateProgress);
    field.addEventListener("change", updateProgress);
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    const requiredFields = [
      contactForm.querySelector("#full-name"),
      contactForm.querySelector("#business-name"),
      contactForm.querySelector("#email"),
      contactForm.querySelector("#phone"),
      contactForm.querySelector("#project-type"),
      contactForm.querySelector("#project-description"),
    ];

    requiredFields.forEach((field) => {
      if (!field) return;
      if (!field.value.trim()) {
        valid = false;
        setFieldError(field, "This field is required.");
      } else {
        clearFieldError(field);
      }
    });

    const emailField = contactForm.querySelector("#email");
    if (
      emailField &&
      emailField.value.trim() &&
      !validateEmail(emailField.value)
    ) {
      valid = false;
      setFieldError(emailField, "Please enter a valid email address.");
    }

    const phoneField = contactForm.querySelector("#phone");
    if (
      phoneField &&
      phoneField.value.trim() &&
      !validatePhone(phoneField.value)
    ) {
      valid = false;
      setFieldError(phoneField, "Please enter a valid phone number.");
    }

    const description = contactForm.querySelector("#project-description");
    if (description && description.value.trim().length < 20) {
      valid = false;
      setFieldError(
        description,
        "Please add a bit more detail so we understand your project.",
      );
    }

    if (!valid) return;

    submitButton.disabled = true;
    submitButton.textContent = "Sending Request...";
    submitButton.classList.add("loading");

    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Request a Quote";
      submitButton.classList.remove("loading");
      formStatus.classList.add("visible");
      formStatus.textContent =
        "This form is frontend-ready. Connect it to your email or CRM service to send project inquiries.";
      contactForm.reset();
      updateProgress();
    }, 1200);
  });
}

const applyTheme = (theme) => {
  const root = document.documentElement;
  if (!root) return;
  const colors = {
    violet: ["#8b5cf6", "#22d3ee"],
    cyan: ["#22d3ee", "#60a5fa"],
    emerald: ["#34d399", "#10b981"],
  };

  const [primary, secondary] = colors[theme] || colors.violet;
  root.style.setProperty("--accent", primary);
  root.style.setProperty("--accent-2", secondary);
  if (theme === "cyan") root.style.setProperty("--accent-3", "#7dd3fc");
};

const cardButtons = document.querySelectorAll("[data-theme-switch]");
if (cardButtons.length) {
  cardButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(button.dataset.themeSwitch);
      cardButtons.forEach((btn) =>
        btn.classList.toggle("active", btn === button),
      );
      localStorage.setItem("stackmorphic-theme", button.dataset.themeSwitch);
    });
  });

  const savedTheme = localStorage.getItem("stackmorphic-theme");
  if (savedTheme) applyTheme(savedTheme);
}

const setupCounterAnimation = () => {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const animateCounter = (element) => {
    const target = Number(element.dataset.count || 0);
    const duration = 1200;
    const start = performance.now();
    const step = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * target);
      element.textContent = `${value}${element.dataset.suffix || ""}`;
      if (progress < 1) requestAnimationFrame(step);
      else element.textContent = `${target}${element.dataset.suffix || ""}`;
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 },
  );

  counters.forEach((element) => counterObserver.observe(element));
};

if (revealElements.length) {
  revealElements.forEach((element) => {
    if (observer) observer.observe(element);
    else element.classList.add("visible");
  });
}

setupCounterAnimation();

const demoButtons = document.querySelectorAll("[data-demo-action]");
if (demoButtons.length) {
  demoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const state = document.querySelector("#demo-state");
      if (!state) return;
      state.textContent = `${button.dataset.demoAction} action completed successfully.`;
    });
  });
}

const tabButtons = document.querySelectorAll(".tab-btn");
if (tabButtons.length) {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;
      tabButtons.forEach((btn) =>
        btn.classList.toggle("active", btn === button),
      );
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === tabId);
      });
    });
  });
}

const apiFetchButton = document.querySelector("#api-fetch");
const apiOutput = document.querySelector("#api-output");
if (apiFetchButton && apiOutput) {
  apiFetchButton.addEventListener("click", async () => {
    apiFetchButton.disabled = true;
    apiFetchButton.textContent = "Loading...";
    apiOutput.innerHTML = "<p>Requesting mock data…</p>";

    try {
      const response = await fetch("data/mock-api.json");
      if (!response.ok) throw new Error("Unable to load mock API data");
      const data = await response.json();
      const items = data.projects
        .slice(0, 3)
        .map(
          (item) => `
        <div class="api-item">
          <strong>${item.name}</strong>
          <div>${item.type}</div>
          <small>${item.status}</small>
        </div>
      `,
        )
        .join("");
      apiOutput.innerHTML = `<div class="code-status">GET /api/projects <span class="status-ok">200 OK</span></div>${items}`;
    } catch (error) {
      apiOutput.innerHTML = `<div class="code-status">GET /api/projects <span class="status-ok" style="color:#fca5a5;">ERROR</span></div><p>${error.message}</p>`;
    } finally {
      apiFetchButton.disabled = false;
      apiFetchButton.textContent = "Fetch Data";
    }
  });
}

const searchInput = document.querySelector("#search-demo");
const searchCards = document.querySelectorAll("[data-search-item]");
if (searchInput && searchCards.length) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    searchCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
}

if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (category && projectButtons.length) {
    projectButtons.forEach((button) => {
      const matches = button.dataset.projectFilter === category;
      button.classList.toggle("active", matches);
    });
    filterProjects(category);
  }

  const projectName = params.get("project");
  if (projectName && projectType) {
    projectType.value = projectName;
    projectType.dispatchEvent(new Event("change"));
  }
}

const dynamicScript = document.querySelector("#dynamic-script");
if (dynamicScript) {
  const scriptText = [
    "const buildExperience = () => {",
    '  return "Modern web experiences";',
    "};",
    "console.log(buildExperience());",
  ];

  let lineIndex = 0;
  const typeLine = () => {
    if (lineIndex >= scriptText.length) return;
    dynamicScript.textContent += scriptText[lineIndex] + "\n";
    lineIndex += 1;
    setTimeout(typeLine, 220);
  };
  typeLine();
}

const heroDemo = document.querySelector("#hero-demo");
if (heroDemo) {
  const states = ["Dashboard Layout", "Conversion Flow", "Brand System"];
  let stateIndex = 0;
  setInterval(() => {
    stateIndex = (stateIndex + 1) % states.length;
    const status = heroDemo.querySelector(".demo-state");
    if (status) status.textContent = states[stateIndex];
  }, 1800);
}

if (descriptionField && descriptionCounter) {
  descriptionCounter.textContent = `${descriptionField.value.length} / 500`;
}

if (document.querySelector("#theme-controller")) {
  const themeCards = document.querySelectorAll("[data-theme-switch]");
  const accentDisplay = document.querySelector("#accent-output");
  if (accentDisplay) {
    themeCards.forEach((button) => {
      button.addEventListener("click", () => {
        accentDisplay.textContent = `Accent: ${button.dataset.themeSwitch}`;
      });
    });
  }
}

const assistantWidget = document.querySelector("#assistant-widget");
const assistantToggle = document.querySelector(".assistant-toggle");
const assistantClose = document.querySelector(".assistant-close");
const assistantForm = document.querySelector("#assistant-form");
const assistantInput = document.querySelector("#assistant-input");
const assistantBody = document.querySelector("#assistant-body");
const quickActions = document.querySelectorAll(".quick-action");

const createAssistantMessage = (text, sender = "bot") => {
  const wrap = document.createElement("div");
  wrap.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = text;

  wrap.appendChild(bubble);
  assistantBody.appendChild(wrap);
  assistantBody.scrollTop = assistantBody.scrollHeight;
};

const assistantReplies = {
  pricing:
    "Our website packages typically start with a focused business website and scale based on pages, functionality, and custom features.",
  timeline:
    "Most business websites are delivered in 2–6 weeks depending on scope, content readiness, and required functionality.",
  portfolio:
    "You can explore our concept work across business, e-commerce, and SaaS-style projects on the Projects page.",
  default:
    "Thanks for reaching out. We can help define the right website, landing page, or app based on your goals and timeline.",
};

if (
  assistantWidget &&
  assistantToggle &&
  assistantClose &&
  assistantForm &&
  assistantInput &&
  assistantBody
) {
  assistantToggle.addEventListener("click", () => {
    const isOpen = assistantWidget.classList.toggle("open");
    assistantToggle.setAttribute("aria-expanded", String(isOpen));
    const panel = document.querySelector("#assistant-panel");
    if (panel) panel.setAttribute("aria-hidden", String(!isOpen));
  });

  assistantClose.addEventListener("click", () => {
    assistantWidget.classList.remove("open");
    assistantToggle.setAttribute("aria-expanded", "false");
    const panel = document.querySelector("#assistant-panel");
    if (panel) panel.setAttribute("aria-hidden", "true");
  });

  quickActions.forEach((action) => {
    action.addEventListener("click", () => {
      const key = action.textContent.trim().toLowerCase();
      createAssistantMessage(action.textContent.trim(), "user");
      const reply = assistantReplies[key] || assistantReplies.default;
      setTimeout(() => createAssistantMessage(reply, "bot"), 250);
      assistantInput.value = "";
    });
  });

  assistantForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = assistantInput.value.trim();
    if (!value) return;

    createAssistantMessage(value, "user");
    assistantInput.value = "";

    const lower = value.toLowerCase();
    const reply =
      lower.includes("price") || lower.includes("cost")
        ? assistantReplies.pricing
        : lower.includes("time") ||
            lower.includes("timeline") ||
            lower.includes("week")
          ? assistantReplies.timeline
          : lower.includes("portfolio") ||
              lower.includes("project") ||
              lower.includes("work")
            ? assistantReplies.portfolio
            : assistantReplies.default;

    setTimeout(() => createAssistantMessage(reply, "bot"), 300);
  });
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const animationTargets = document.querySelectorAll(
    ".float-card, .dev-window, .assistant-toggle",
  );
  animationTargets.forEach((element) => {
    element.style.animation = "none";
  });
}
