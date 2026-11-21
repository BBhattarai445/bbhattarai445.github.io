
// ========================================
// Mobile Navigation Menu
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    function closeMenu() {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    }

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            navLinks.classList.add("active");

            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Close navigation menu");
            menuToggle.textContent = "✕";
        }
    });

    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu when Escape is pressed

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}


// ========================================
// Automatic Copyright Year
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ========================================
// PDF Viewer
// ========================================

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


// Close PDF Viewer

function closePDF() {

    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");

    if (!modal || !viewer) return;

    modal.style.display = "none";
    viewer.src = "about:blank";

    document.body.style.overflow = "";
}


// ========================================
// Close PDF with Escape or Outside Click
// ========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closePDF();
    }

});

const pdfModal = document.getElementById("pdfModal");

if (pdfModal) {

    pdfModal.addEventListener("click", (event) => {

        if (event.target === pdfModal) {
            closePDF();
        }

    });

}
