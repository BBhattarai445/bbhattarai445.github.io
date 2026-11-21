

/* ========================================
   1. MOBILE NAVIGATION MENU
======================================== */

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

}


/* ========================================
   2. AUTOMATIC COPYRIGHT YEAR
======================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ========================================
   3. PDF VIEWER ELEMENTS
======================================== */

const pdfModal = document.getElementById("pdfModal");
const pdfViewer = document.getElementById("pdfViewer");

let previousBodyOverflow = "";


/* ========================================
   4. OPEN PDF VIEWER
======================================== */

function openPDF(pdfPath) {

    if (!pdfModal || !pdfViewer) {
        console.error("PDF viewer elements not found.");
        return;
    }

    if (!pdfPath) {
        console.error("No PDF file path was provided.");
        return;
    }

    // Remember the current page scrolling setting
    previousBodyOverflow = document.body.style.overflow;

    // Load the PDF
    pdfViewer.src = encodeURI(pdfPath);

    // Display the modal as a centered flex container
    pdfModal.style.display = "flex";

    // Prevent background page scrolling
    document.body.style.overflow = "hidden";

}


/* ========================================
   5. CLOSE PDF VIEWER
======================================== */

function closePDF() {

    if (!pdfModal || !pdfViewer) {
        return;
    }

    // Hide the modal
    pdfModal.style.display = "none";

    // Stop displaying the PDF
    pdfViewer.src = "about:blank";

    // Restore the previous page scrolling setting
    document.body.style.overflow = previousBodyOverflow;

}


/* ========================================
   6. CLOSE PDF WHEN CLICKING OUTSIDE
======================================== */

if (pdfModal) {

    pdfModal.addEventListener("click", (event) => {

        // Close only when the dark overlay itself is clicked
        if (event.target === pdfModal) {
            closePDF();
        }

    });

}


/* ========================================
   7. KEYBOARD CONTROLS
======================================== */

document.addEventListener("keydown", (event) => {

    // Escape closes the PDF viewer
    if (event.key === "Escape") {

        if (pdfModal && pdfModal.style.display === "flex") {
            closePDF();
        }

        // Also close the mobile navigation
        if (navLinks && navLinks.classList.contains("active")) {
            closeMenu();
        }

    }

});


/* ========================================
   8. INITIAL PDF VIEWER STATE
======================================== */

if (pdfModal) {
    pdfModal.style.display = "none";
}
