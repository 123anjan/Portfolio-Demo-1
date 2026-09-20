document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      `Name: ${form.get("name")}`,
      `Business: ${form.get("business") || "Not provided"}`,
      "",
      form.get("message"),
    ].join("\n");
    const url = `https://wa.me/919330492466?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
