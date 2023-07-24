window.addEventListener("load", function () {
    document.querySelectorAll(".codeblock-wrapper").forEach((codeBlock) => {
        const clipboardIcon = codeBlock.querySelector(".code-copy-tag");

        // There may not be an icon
        if (!clipboardIcon) {
            return;
        }

        clipboardIcon.addEventListener("click", (event) => {
            event.preventDefault();
            navigator.clipboard
                .writeText(codeBlock.querySelector("pre").textContent)
                .then(() => {
                    clipboardIcon.textContent = "✅"

                    setTimeout(() => {
                        clipboardIcon.textContent = "📋"
                    }, 3000);
                });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.getElementById("navbar-burger");

    navbarBurger.addEventListener('click', () => {
        const target = document.getElementById(navbarBurger.dataset.target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        navbarBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });
});
