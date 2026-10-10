// Small interactions for the portfolio
const navLinks = document.querySelectorAll(".sidebar nav a");
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

sections.forEach((section) => observer.observe(section));

// Prepare a message in the visitor's email app; this demo does not store submissions.
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const recipient = "your.email@example.com"; // Replace with your real email.
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
