import type { Demo } from "@/types";

export const javascriptDemos: Demo[] = [
  {
    id: "dynamic-ui",
    title: "Dynamic UI",
    description:
      "Interactive tabs, toggles and counters for responsive interface behavior.",
    category: "Frontend Logic",
    metrics: ["Tabs", "Counters", "State updates"],
  },
  {
    id: "api-interaction",
    title: "API Interaction",
    description:
      "Async data flow with loading and error states for real application interaction.",
    category: "Async Patterns",
    metrics: ["async/await", "Promise handling", "Rendered response"],
  },
  {
    id: "search-filter",
    title: "Search & Filtering",
    description:
      "Live search and category filters that update results without reloading the page.",
    category: "Data UX",
    metrics: ["Filter", "Search", "Sort"],
  },
  {
    id: "form-validation",
    title: "Form Validation",
    description:
      "Accessible validation for required fields, email input and validation feedback.",
    category: "User Experience",
    metrics: ["Required fields", "Email checks", "Success state"],
  },
];
