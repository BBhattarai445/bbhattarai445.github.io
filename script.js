
// Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Automatic copyright year

document.getElementById("year").textContent =
  new Date().getFullYear();

function openPDF(pdfPath) {
    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");

    viewer.src = encodeURI(pdfPath);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closePDF() {
    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");

    modal.style.display = "none";
    viewer.src = "about:blank";
    document.body.style.overflow = "";
}


