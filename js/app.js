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
    // Smooth Anchor Scrolling
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

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