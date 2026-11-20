
// Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
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
}

// Automatic copyright year

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Open PDF inside website

function openPDF(pdfPath) {
    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");

    if (!modal || !viewer) {
        console.error("PDF viewer elements not found.");
        return;
    }

    viewer.src = encodeURI(pdfPath);

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Close PDF and return to previous page position

function closePDF() {
    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");

    if (!modal || !viewer) return;

    modal.style.display = "none";
    viewer.src = "about:blank";

    document.body.style.overflow = "";
}


