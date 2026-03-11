let currentLang = 'fr';

const translations = {
    fr: {
        "nav-home": "Accueil", "nav-projects": "Projets", "nav-skills": "Mes Compétences", "nav-about": "À propos",
        "hero-title": "Portfolio", "hero-desc": "UX/UI Designer Junior",
        "footer-desc-title": "Étudiante en BUT MMI", "footer-desc-text": "Parcours stratégie de communication numérique et design d'expérience",
        skills: [
            { name: "Figma", icon: "icons/icon_figma.svg", desc: "Wireframes, design system & prototypes" },
            { name: "VS Code", icon: "icons/icon_vscode.svg", desc: "CSS, HTML, frameworks" },
            { name: "Photoshop", icon: "icons/icon_photoshop.svg", desc: "Détourage photo, mockups" },
            { name: "Illustrator", icon: "icons/icon_illustrator.svg", desc: "Icônes, illustrations & logos" },
            { name: "Blender", icon: "icons/icon_blender.svg", desc: "Modélisation 3D" }
        ],
        projects: [
            { id: 'p1', title: "Tiny", tag: "UI", date: "Janvier 2025", short: "Projet de publication d'une boutique e-commerce", img: "tiny_cover.jpg" },
            { id: 'p2', title: "Compose ton Logo", tag: "UX/UI", date: "Janvier 2026", short: "Dispositif interactif pour la Journée Portes Ouvertes", img: "compose_logo.jpg" },
            { id: 'p3', title: "Trégor Spectacles", tag: "UX/UI", date: "Novembre 2025", short: "Maquette mobile de l'activité culturelle dans le Trégor", img: "tregor.jpg" },
            { id: 'p4', title: "Application Pêche à pied", tag: "UX", date: "Septembre 2025", short: "Maquette mobile de pêche à pied à destination des débutants", img: "peche_ux.jpg" },
            { id: 'p5', title: "La Confiserie", tag: "UX/UI", date: "Juin 2025", short: "Développement d'un site web de confiserie en HTML, CSS, PHP", img: "confiserie_cover.jpg" },
            { id: 'p6', title: "Collection Pokémon", tag: "UX/UI", date: "Janvier 2025", short: "Développement d'un site web d'une collection de Pokémon", img: "pokemon_cover.jpg" }


        ]
    },
    en: {
        "nav-home": "Home", "nav-projects": "Projects", "nav-skills": "My Skills", "nav-about": "About",
        "hero-title": "Portfolio", "hero-desc": "Junior UX/UI Designer",
        "footer-desc-title": "MMI Student", "footer-desc-text": "Digital Communication Strategy and Experience Design track",
        skills: [
            { name: "Figma", icon: "icon_figma.svg", desc: "Design & prototypes" },
            { name: "Photoshop", icon: "icon_photoshop.svg", desc: "Photo editing, mockups" },
            { name: "Illustrator", icon: "icon_illustrator.svg", desc: "Logos, illustrations & icons" },
            { name: "VS Code", icon: "icon_vscode.svg", desc: "CSS, HTML, frameworks" },
            { name: "Blender", icon: "icon_blender.svg", desc: "3D Modeling" }
        ],
        projects: [
            { id: 'p1', title: "Tiny", tag: "E-commerce", date: "January 2026", short: "E-commerce store development project", img: "tiny_cover.jpg" },
            { id: 'p2', title: "Logo Maker", tag: "Interactive", date: "January 2026", short: "Interactive setup for the Open Day", img: "compose_logo.jpg" },
            { id: 'p3', title: "Tregor Show", tag: "Interface", date: "November 2025", short: "Mobile mockup of cultural activities in the Trégor region", img: "tregor.jpg" }
            ,
            { id: 'p4', title: "Pêche à pied", tag: "UX", date: "September 2025", short: "Mobile mockup of a pêche à pied app for beginners", img: "peche_ux.jpg" },
            { id: 'p5', title: "La Confiserie", tag: "Web Design", date: "June 2025", short: "Website development for a confiserie in HTML, CSS, PHP", img: "confiserie_cover.jpg" },
            { id: 'p6', title: "Collection Pokémon", tag: "UI Design", date: "January 2025", short: "Website development for a Pokémon collection site", img: "pokemon_cover.jpg" },

        ]


    }
};

function updateUI() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
    });

    document.getElementById('skills-container').innerHTML = translations[currentLang].skills.map(s => `
        <div class="skill-card">
            <img src="${s.icon}" alt="${s.name}" class="skill-icon">
            <h3>${s.name}</h3><p>${s.desc}</p>
        </div>
    `).join('');

    document.getElementById('projects-container').innerHTML = translations[currentLang].projects.map(p => {
        const projectLink = (p.id === 'p1') ? 'tiny.html' : (p.id === 'p2') ? 'ctl.html' : (p.id === 'p3') ? 'tregor-spectacles.html' : (p.id === 'p4') ? 'peche-a-pied.html' : (p.id === 'p5') ? 'la-confiserie.html' : (p.id === 'p6') ? 'site-pokemon.html' : `project.html?id=${p.id}`;

        return `
    <a href="${projectLink}" class="project-card" data-tag="${p.tag}">
        <div class="project-img-container">
            <div class="project-tag">${p.tag}</div>
            <div class="project-img" style="background-image: url('images/${p.img}')"></div>
        </div>
        <div class="project-info">
            <span class="project-date">${p.date}</span>
            <h3>${p.title}</h3>
            <p>${p.short}</p>
        </div>
    </a>
    `;
    }).join('');
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-link').forEach(el => el.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
    updateUI();
}

const photo = document.getElementById('heroPhoto');
const tools = ['icon_figma.svg', 'icon_photoshop.svg', 'icon_illustrator.svg', 'icon_vscode.svg', 'icon_blender.svg'];

if (photo) {
    photo.addEventListener('click', () => {
        photo.style.transform = 'scale(0.95)';
        setTimeout(() => photo.style.transform = 'scale(1)', 100);

        tools.forEach((tool, index) => {
            const icon = document.createElement('img');
            icon.src = tool;
            icon.className = 'floating-icon';
            const angle = (index / tools.length) * 2 * Math.PI;
            icon.style.setProperty('--a', `${angle}rad`);
            photo.parentElement.appendChild(icon);
            icon.style.animation = 'orbit 1s ease-out forwards';
            setTimeout(() => icon.remove(), 1000);
        });
    });
}

function filterProjects(category, clickedBtn) {
    // 1. Gestion visuelle des boutons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = clickedBtn || document.querySelector(`.filter-btn[onclick*="${category}"]`);
    if (targetBtn) targetBtn.classList.add('active');

    // 2. Filtrage des cartes
    const projects = document.querySelectorAll('.project-card');

    projects.forEach(card => {
        const projectTag = (card.getAttribute('data-tag') || '').toLowerCase();
        if (category === 'all' || projectTag === category.toLowerCase()) {
            card.style.display = "block";
            setTimeout(() => card.style.opacity = "1", 10);
        } else {
            card.style.opacity = "0";
            card.style.display = "none";
        }
    });
}



document.addEventListener('DOMContentLoaded', updateUI);

// Burger Menu Functionality
const burgerBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('header')) {
            burgerBtn.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

// --- Modal Gallery Functionality ---
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const galleryItems = document.querySelectorAll('.gallery-item');

if (modal && galleryItems.length > 0) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('.gallery-description').innerText;
            const description = item.getAttribute('data-description');

            document.getElementById('modalImageContainer').innerHTML = `<img src="${imgSrc}" alt="${title}">`;
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDescription').innerText = description;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const closeFunc = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    if (closeModal) {
        closeModal.addEventListener('click', closeFunc);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeFunc();
        }
    });

    // Handle Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeFunc();
        }
    });
}