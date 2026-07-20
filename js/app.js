document.addEventListener("DOMContentLoaded", () => {

    // Trigger hero fade-in
    document.body.classList.add("loaded");

    // ==========================================
    // Scroll Progress Bar
    // ==========================================

    const progress = document.getElementById("progress");

    function updateProgress() {

        const scrollTop = window.scrollY;

        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

        const percent =
            maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

        progress.style.width = percent + "%";
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress);


    // ==========================================
    // Fade-In Sections
    // ==========================================

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    document
        .querySelectorAll("section, .day-photo, .day-copy")
        .forEach((element) => {

            element.classList.add("reveal");

            observer.observe(element);

        });


    // ==========================================
    // Navbar Styling
    // ==========================================

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);


    // ==========================================
    // Mobile Navigation
    // ==========================================

    const menuToggle = navbar.querySelector(".menu-toggle");
    const navigationLinks = navbar.querySelectorAll("a");

    function setMenuOpen(isOpen) {

        navbar.classList.toggle("menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    }

    menuToggle.addEventListener("click", () => {

        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            setMenuOpen(false);
            menuToggle.focus();
        }

    });

    document.addEventListener("click", (event) => {

        if (!navbar.contains(event.target)) {
            setMenuOpen(false);
        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {
            setMenuOpen(false);
        }

    });


    // ==========================================
    // Smooth Anchor Scrolling
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();
            setMenuOpen(false);

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

});
