// Mobile Menu Toggle avec nomenclature BEM
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle")
    const navMenu = document.getElementById("navMenu")

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true"

            navMenu.classList.toggle("active")
            menuToggle.classList.toggle("active")

            // Mise à jour de l'attribut aria-expanded pour l'accessibilité
            menuToggle.setAttribute("aria-expanded", !isExpanded)
            menuToggle.setAttribute(
                "aria-label",
                isExpanded ? "Ouvrir le menu de navigation" : "Fermer le menu de navigation",
            )
        })

        // Fermer le menu lors du clic sur un lien
        const navLinks = navMenu.querySelectorAll(".header__nav-link")
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active")
                menuToggle.classList.remove("active")
                menuToggle.setAttribute("aria-expanded", "false")
                menuToggle.setAttribute("aria-label", "Ouvrir le menu de navigation")
            })
        })

        // Fermer le menu lors du clic à l'extérieur
        document.addEventListener("click", (event) => {
            const isClickInside = navMenu.contains(event.target) || menuToggle.contains(event.target)

            if (!isClickInside && navMenu.classList.contains("active")) {
                navMenu.classList.remove("active")
                menuToggle.classList.remove("active")
                menuToggle.setAttribute("aria-expanded", "false")
                menuToggle.setAttribute("aria-label", "Ouvrir le menu de navigation")
            }
        })

        // Gestion de la touche Escape pour fermer le menu (accessibilité)
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && navMenu.classList.contains("active")) {
                navMenu.classList.remove("active")
                menuToggle.classList.remove("active")
                menuToggle.setAttribute("aria-expanded", "false")
                menuToggle.setAttribute("aria-label", "Ouvrir le menu de navigation")
                menuToggle.focus()
            }
        })
    }
})
