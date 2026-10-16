const projectCards = document.querySelectorAll(".project-card");

const projectModal = document.getElementById("project-modal");
const modalContent = projectModal.querySelector(".project-modal-content");
const modalClose = document.getElementById("modal-close");

const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const modalTags = document.getElementById("modal-tags");
const modalGithub = document.getElementById("modal-github");

const projectDetails = [
    {
        category: "01 / AUTOMATIZACIÓN",
        title: "Pruebas web con Selenium",
        description:
            "Automatización de interacciones con una aplicación web mediante Python y Selenium WebDriver.",
        details: [
            "Implementación del patrón Page Object Model (POM).",
            "Localización de elementos mediante XPath y otros selectores.",
            "Uso de esperas explícitas para sincronizar las interacciones.",
            "Ejecución y validación de pruebas con pytest."
        ],
        tags: ["Python", "Selenium", "pytest", "POM"],
        github: "https://github.com/juandavidaf/qa-project-Urban-Routes-es"
    },
    {
        category: "02 / PRUEBAS DE API",
        title: "Validación de servicios API",
        description:
            "Pruebas automatizadas para verificar las respuestas de servicios API y el comportamiento de sus endpoints.",
        details: [
            "Validación de códigos de estado HTTP.",
            "Comprobación de datos y estructura de las respuestas.",
            "Pruebas con solicitudes válidas e inválidas.",
            "Organización y ejecución de pruebas con Python y pytest."
        ],
        tags: ["Python", "API", "pytest", "HTTP"],
        github: "https://github.com/juandavidaf/qa-project-Urban-Grocers-app-es"
    },
    {
        category: "03 / DISEÑO DE PRUEBAS",
        title: "Análisis y diseño de casos",
        description:
            "Diseño de pruebas a partir de requisitos para identificar escenarios relevantes y posibles defectos.",
        details: [
            "Descomposición de requisitos en condiciones verificables.",
            "Aplicación de particiones de equivalencia y valores límite.",
            "Diseño de escenarios y listas de comprobación.",
            "Documentación de defectos mediante informes de errores."
        ],
        tags: ["Test Design", "QA", "Equivalence Classes", "Bug Reports"],
        github: "https://github.com/juandavidaf/Urban_Routes_Design_Test"
    }
];

function openProjectModal(index) {
    const project = projectDetails[index];

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalGithub.href = project.github;

    // Crear la lista de detalles
    modalDetails.replaceChildren();

    project.details.forEach((detail) => {
        const item = document.createElement("li");
        item.textContent = detail;
        modalDetails.appendChild(item);
    });

    // Crear las etiquetas de tecnologías
    modalTags.replaceChildren();

    project.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    modalClose.focus();
}

function closeProjectModal() {
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (document.activeElement instanceof HTMLElement) {
        // El foco se devuelve a la tarjeta que abrió la ventana.
        lastFocusedCard?.focus();
    }
}

let lastFocusedCard = null;

projectCards.forEach((card, index) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute(
        "aria-label",
        `Ver detalles del proyecto: ${projectDetails[index].title}`
    );

    card.addEventListener("click", (event) => {
        // Los enlaces de GitHub deben seguir funcionando normalmente.
        if (event.target.closest("a")) {
            return;
        }

        lastFocusedCard = card;
        openProjectModal(index);
    });

    card.addEventListener("keydown", (event) => {
        if (
            (event.key === "Enter" || event.key === " ") &&
            event.target === card
        ) {
            event.preventDefault();
            lastFocusedCard = card;
            openProjectModal(index);
        }
    });
});

// Cerrar mediante el botón X.
modalClose.addEventListener("click", closeProjectModal);

// Cerrar al hacer clic fuera del contenido.
projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
        closeProjectModal();
    }
});

// Cerrar con Escape.
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        projectModal.classList.contains("is-open")
    ) {
        closeProjectModal();
    }
});

const hitAreas = document.querySelectorAll(".qa-hitarea");
const wheel = document.querySelector(".qa-wheel");
const pieces = document.querySelectorAll(".qa-piece");
const activeIcon = document.querySelector(".qa-icon");
const activeTitle = document.querySelector(".qa-active-title");
const activeDescription = document.querySelector(".qa-active-description");

const principles = {
    quality: {
        title: "Calidad",
        icon: "✓",
        description: "Construir software confiable desde el inicio."
    },

    automation: {
        title: "Automatización",
        icon: "⚙",
        description: "Reducir tareas repetitivas mediante pruebas automatizadas."
    },

    improvement: {
        title: "Mejora continua",
        icon: "↗",
        description: "Aprender de cada prueba para mejorar el proceso."
    },

    collaboration: {
        title: "Colaboración",
        icon: "◎",
        description: "Trabajar en equipo para prevenir y detectar problemas."
    }
};;

hitAreas.forEach((area) => {

    area.addEventListener("mouseenter", () => {

        const principle = area.dataset.principle;
        const data = principles[principle];

        activeIcon.textContent = data.icon;
        activeTitle.textContent = data.title;
        activeDescription.textContent = data.description;

        pieces.forEach((piece) => {
        piece.classList.remove("is-selected");
        });

        const selectedPiece = document.querySelector(
            `.qa-piece-${principle}`
        );

        selectedPiece.classList.add("is-selected");

        wheel.classList.add("is-active");
    });

    area.addEventListener("mouseleave", () => {

        wheel.classList.remove("is-active");

        pieces.forEach((piece) => {
            piece.classList.remove("is-selected");
        });

    });

});