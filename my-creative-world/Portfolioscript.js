document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }));
  }

  const currentPage = location.pathname.split("/").pop() || "Portfolioindex.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const target = link.getAttribute("href") || "";
    if (target === currentPage || (currentPage === "" && target === "Portfolioindex.html")) {
      link.classList.add("active");
    }
  });

  const backTop = document.querySelector(".back-top");
  if (backTop) {
    window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 450));
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
});
