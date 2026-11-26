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
        
        skills: [
        "Automatización de pruebas web.",
        "Implementación del patrón Page Object Model (POM).",
        "Localización de elementos mediante XPath y CSS.",
        "Uso de esperas explícitas.",
        "Diseño y ejecución de pruebas con pytest."
        ],

        application: "Urban Routes — aplicación web para configurar rutas y solicitar servicios de taxi.",
         
        tests: [
        "Configuración de direcciones de origen y destino.",
        "Selección de la tarifa Comfort.",
        "Introducción y validación del número telefónico.",
        "Interacción con los elementos del formulario de solicitud, como agregar una tarjeta de crédito, detalles del viaje y realizar el pedido."
        ],

        results: [
        "Se logró automatizar los flujos de interacción definidos.",
        "Pudieron validarse los elementos de la interfaz mediante aserciones.",
        "Se ejecutaron las pruebas automatizadas con pytest."
        ],

        evidence: [
                {
                        src: "images/automated_code.png",
                        alt: "Código de una prueba automatizada"
                    },
                    {
                        src: "images/test_execution.png",
                        alt: "Ejecución de una prueba"
                    }
        ],

        tags: ["Python", "Selenium", "pytest", "POM"],
        github: "https://github.com/juandavidaf/qa-project-Urban-Routes-es"
    },
    {
        category: "02 / PRUEBAS DE API",
        title: "Validación de servicios API",
        description:
            "Pruebas automatizadas para verificar las respuestas de servicios API y el comportamiento de sus endpoints.",
        
        skills: [
        "Validación de códigos de estado HTTP.",
        "Comprobación de datos y estructura de las respuestas.",
        "Pruebas con solicitudes válidas e inválidas.",
        "Organización y ejecución de pruebas con Python y pytest."
        ],

        application: "Urban Grocers — aplicación de entrega de productos por catálogo y kits preparados.",
         
        tests: [
        "Creación de un kit para el usuario o usuaria.",
        "Diseño de lista de comprobación de las restricciones en el campo 'name' al crear el kit.",
        "Ejecución de las pruebas individuales de la lista de comprobación."
        ],

        results: [
        "Automatización de las solicitudes de creación de kits.",
        "Comprobación de los límites establecidos para el campo.",
        "Ejecución de pruebas automatizadas con pytest."
        ],

        evidence: [
        {
                        src: "images/grocers_code.png",
                        alt: "Código de una prueba automatizada"
                    },
                    {
                        src: "images/pytest_grocers.png",
                        alt: "Ejecución de una prueba"
                    }
        ],

        tags: ["Python", "API", "pytest", "HTTP"],
        github: "https://github.com/juandavidaf/qa-project-Urban-Grocers-app-es"
    },
    {
        category: "03 / DISEÑO DE PRUEBAS",
        title: "Análisis y diseño de casos",
        description:
            "Diseño de pruebas a partir de requisitos para identificar escenarios relevantes y posibles defectos.",
        
        skills: [
        "Análisis de requisitos",
        "Creación de una lista de comprobación.",
        "Prueba de app móvil en emulador con Android Studio",
        "Comparación exhaustiva con diseño en Figma.",
        "Elaboración de informe de errores"
        ],

        application: "Urban Lunch — aplicación móvil para personalizar comidas de negocios de diferentes restaurantes de la ciudad",
         
        tests: [
        "Selección del punto de recogida.",
        "Selección de platillos de la lista.",
        "Confirmación del pedido."
        ],

        results: [
        "Ejecución de la aplicación móvil en emulador de Android Studio.",
        "Comparación de diseños establecidos en Figma.",
        "Reporte de diferencias encontradas en informes de errores."
        ],

        evidence: [
                {
                src: "images/emulator_lunch.png",
                alt: "Emulador"
            }
        ],
        
        tags: ["Test Design", "QA", "Android Studio", "Figma", "Bug Reports"],
        github: "https://github.com/juandavidaf/qa-project-UrbanLunch"
    }
];

function openProjectModal(index) {
    const project = projectDetails[index];

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalGithub.href = project.github;

    // Habilidades trabajadas
    const modalSkills = document.getElementById("modal-skills");
    modalSkills.replaceChildren();

    project.skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = skill;
        modalSkills.appendChild(item);
    });

    // Aplicación
    document.getElementById("modal-application").textContent =
        project.application;

    // Pruebas realizadas y resultados
    function populateList(elementId, items) {
        const list = document.getElementById(elementId);
        list.replaceChildren();

        items.forEach((itemText) => {
            const item = document.createElement("li");
            item.textContent = itemText;
            list.appendChild(item);
        });
    }

    populateList("modal-tests", project.tests);
    populateList("modal-results", project.results);

    // Etiquetas
    modalTags.replaceChildren();

    project.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    // Evidencias
    const modalEvidence = document.getElementById("modal-evidence");
    modalEvidence.replaceChildren();

    project.evidence.forEach((evidence) => {
        const img = document.createElement("img");
        img.src = evidence.src;
        img.alt = evidence.alt;
        img.loading = "lazy";

        modalEvidence.appendChild(img);
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