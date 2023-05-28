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
