/* ==========================================================================
   MoveRx The Mission Webpage Logic (v2)
   Description: Dynamic JS content injection, navigation rendering,
                specialties bento cards grid layout, dynamic scroll leaves,
                and green footer rendering.
   ========================================================================== */

/**
 * 1. DYNAMIC DOM RENDERERS
 * ==========================================================================
 */

/**
 * Renders the navigation bar pill inside the <header> tag
 */
function renderNavigation() {
    const header = document.getElementById("nav-header");
    if (!header) return;

    const navPill = document.createElement("nav");
    navPill.className = "nav-pill";

    // Logo
    const logo = document.createElement("a");
    logo.href = missionContent.navigation.logo.link;
    logo.className = "logo";
    logo.innerHTML = `<span>${missionContent.navigation.logo.textHighlight}</span>${missionContent.navigation.logo.textRegular}`;
    navPill.appendChild(logo);

    // Mobile menu toggle checkbox + label
    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.id = "mobile-toggle";
    toggleInput.className = "mobile-toggle-checkbox";
    toggleInput.setAttribute("aria-label", "Toggle Navigation");
    navPill.appendChild(toggleInput);

    const toggleLabel = document.createElement("label");
    toggleLabel.setAttribute("for", "mobile-toggle");
    toggleLabel.className = "mobile-toggle-label";
    toggleLabel.innerHTML = "<span></span><span></span><span></span>";
    navPill.appendChild(toggleLabel);

    // Links List
    const linksList = document.createElement("ul");
    linksList.className = "nav-links";

    missionContent.navigation.links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        
        // Highlight active link
        if (link.text === "The Mission") {
            a.className = "active-link";
        }
        
        li.appendChild(a);
        linksList.appendChild(li);
    });

    // Mobile Consulting Button inside navigation drawer
    const mobileConsultLi = document.createElement("li");
    mobileConsultLi.className = "mobile-only";
    mobileConsultLi.innerHTML = `<a href="${missionContent.navigation.cta.url}" class="btn-primary">${missionContent.navigation.cta.text}</a>`;
    linksList.appendChild(mobileConsultLi);

    navPill.appendChild(linksList);

    // Desktop Consulting Button
    const desktopCta = document.createElement("div");
    desktopCta.className = "nav-cta desktop-only";
    desktopCta.innerHTML = `<a href="${missionContent.navigation.cta.url}" class="btn-primary-small">${missionContent.navigation.cta.text}</a>`;
    navPill.appendChild(desktopCta);

    header.appendChild(navPill);
}

/**
 * Renders the hero header for the Credentials/Mission page
 */
function renderHero() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const section = document.createElement("section");
    section.className = "mission-hero animate-fade-in";

    // Decorative blur backdrops
    const tealGlow = document.createElement("div");
    tealGlow.className = "hero-glow-teal";
    section.appendChild(tealGlow);

    const goldGlow = document.createElement("div");
    goldGlow.className = "hero-glow-gold";
    section.appendChild(goldGlow);

    const container = document.createElement("div");
    container.className = "container mission-hero-content";

    const badge = document.createElement("span");
    badge.className = "pill-badge animate-slide-up delay-1";
    badge.textContent = "Professional Accreditations";
    container.appendChild(badge);

    const h1 = document.createElement("h1");
    h1.className = "animate-slide-up delay-2";
    h1.textContent = missionContent.hero.title;
    container.appendChild(h1);

    const p = document.createElement("p");
    p.className = "hero-subtext animate-slide-up delay-3";
    p.textContent = missionContent.hero.subtext;
    container.appendChild(p);

    section.appendChild(container);
    mainContent.appendChild(section);
}

/**
 * Renders the Bio Accent Summary & Stats Bento (Mollie's Practice & Principles)
 */
function renderPrinciples() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const data = missionContent.principles;
    if (!data) return;

    // Create section
    const section = document.createElement("section");
    section.className = "bio-accent-section";

    const container = document.createElement("div");
    container.className = "container";

    const grid = document.createElement("div");
    grid.className = "bio-bento-grid";

    // Text Card
    const textCard = document.createElement("div");
    textCard.className = "bio-card-text animate-slide-up delay-1";
    
    const h2 = document.createElement("h2");
    h2.textContent = data.heading;
    textCard.appendChild(h2);

    data.paragraphs.forEach(pText => {
        const p = document.createElement("p");
        p.innerHTML = pText;
        textCard.appendChild(p);
    });

    grid.appendChild(textCard);

    // Stats bubbles
    const statBubbles = document.createElement("div");
    statBubbles.className = "stat-bubbles animate-slide-up delay-2";

    data.stats.forEach(stat => {
        const bubble = document.createElement("div");
        bubble.className = "stat-bubble";
        bubble.innerHTML = `
            <div class="stat-bubble-number">${stat.number}</div>
            <div class="stat-bubble-title">${stat.title}</div>
            <div class="stat-bubble-desc">${stat.description}</div>
        `;
        statBubbles.appendChild(bubble);
    });

    grid.appendChild(statBubbles);
    container.appendChild(grid);
    section.appendChild(container);

    // Insert principles section after the hero section (which is the first child of mainContent)
    const heroSection = mainContent.querySelector(".mission-hero");
    if (heroSection && heroSection.nextSibling) {
        mainContent.insertBefore(section, heroSection.nextSibling);
    } else {
        mainContent.appendChild(section);
    }
}

/**
 * Renders the specialties bento grid
 */
function renderSpecialties() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const section = document.createElement("section");
    section.className = "specialties-section";

    const container = document.createElement("div");
    container.className = "container";

    const grid = document.createElement("div");
    grid.className = "specialties-grid";

    missionContent.specialties.forEach((spec, index) => {
        const card = document.createElement("div");
        card.className = `specialty-card animate-slide-up delay-${(index % 4) + 1}`;

        // Image Section
        const imgZone = document.createElement("div");
        imgZone.className = "specialty-image-zone";
        imgZone.innerHTML = `
            <span class="specialty-badge">${spec.badge}</span>
            <img src="${spec.image}" alt="${spec.title}" class="specialty-img">
        `;
        card.appendChild(imgZone);

        // Text Info Section
        const infoZone = document.createElement("div");
        infoZone.className = "specialty-info";
        
        const title = document.createElement("h3");
        title.className = "specialty-title";
        title.textContent = spec.title;
        infoZone.appendChild(title);

        const desc = document.createElement("p");
        desc.className = "specialty-description";
        desc.textContent = spec.description;
        infoZone.appendChild(desc);

        card.appendChild(infoZone);
        grid.appendChild(card);
    });

    container.appendChild(grid);
    section.appendChild(container);
    mainContent.appendChild(section);
}

/**
 * Creates and injects the scroll-animated leaf containers in the DOM
 */
function renderLeaves() {
    const mountPoint = document.getElementById("leaves-mount");
    if (!mountPoint) return;

    missionContent.leaves.forEach(leafData => {
        const leafContainer = document.createElement("div");
        leafContainer.id = leafData.id;
        leafContainer.className = `scroll-leaf-container ${leafData.type} type-${leafData.svgType}`;
        leafContainer.style.top = `${leafData.initialTop}px`;
        
        leafContainer.innerHTML = missionContent.svgs[leafData.svgType];
        mountPoint.appendChild(leafContainer);
    });
}

/**
 * Setup scroll event handlers to animate decorative foliage sways
 */
function initLeafScrollAnimation() {
    const leaves = document.querySelectorAll(".scroll-leaf-container");
    if (leaves.length === 0) return;

    function updateLeaves() {
        const viewportCenter = window.innerHeight / 2;
        const maxDistance = window.innerHeight * 0.65;

        leaves.forEach(leaf => {
            const rect = leaf.getBoundingClientRect();
            const leafCenter = rect.top + rect.height / 2;
            const distance = Math.abs(leafCenter - viewportCenter);

            if (distance < maxDistance) {
                const progress = 1 - (distance / maxDistance);
                const ease = Math.sin(progress * Math.PI / 2); // Sine ease sways

                let peakOpacity = 0.38;
                if (leaf.classList.contains("type-palm")) peakOpacity = 0.25;
                if (leaf.classList.contains("type-sand")) peakOpacity = 0.20;

                const opacity = ease * peakOpacity;
                const isLeft = leaf.classList.contains("leaf-left");

                const startAngle = 10;
                const endAngle = 55;
                const currentAngle = startAngle + ease * (endAngle - startAngle);
                const rotateDeg = isLeft ? currentAngle : -currentAngle;

                const slideOffset = (1 - ease) * 65;
                const translateX = isLeft ? -slideOffset : slideOffset;

                leaf.style.opacity = opacity;
                leaf.style.transform = `translateX(${translateX}px) rotate(${rotateDeg}deg)`;
            } else {
                const isLeft = leaf.classList.contains("leaf-left");
                leaf.style.opacity = 0;
                leaf.style.transform = `translateX(${isLeft ? -65 : 65}px) rotate(${isLeft ? 10 : -10}deg)`;
            }
        });
    }

    let scrollTicking = false;
    window.addEventListener("scroll", () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                updateLeaves();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    updateLeaves();
    window.addEventListener("resize", updateLeaves, { passive: true });
}

/**
 * Renders the Premium Dark-Green Footer Section
 */
function renderFooter() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const footer = document.createElement("footer");
    footer.className = "site-footer-green";

    const gridContainer = document.createElement("div");
    gridContainer.className = "container footer-grid-container";

    // Column 1: Business Card
    const leftCol = document.createElement("div");
    leftCol.className = "footer-left-col";

    const businessCard = document.createElement("div");
    businessCard.className = "business-card";
    businessCard.innerHTML = `
        <div class="card-brand">
            <span class="card-logo">MoveRx</span>
            <span class="card-tagline">Precision Mobility & Recovery</span>
        </div>
        <p class="card-quote">“Every movement is a stepping stone toward physical freedom. Let's reclaim your strength, safely and cautiously.”</p>
        <div class="card-contacts">
            <a href="tel:+15551234567" class="card-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(555) 123-4567</span>
            </a>
            <a href="mailto:mollie@activehorizonsfl.com" class="card-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>mollie@activehorizonsfl.com</span>
            </a>
            <div class="card-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a10 10 0 0 0-10 10c0 5.25 10 12 10 12s10-6.75 10-12a10 10 0 0 0-10-10z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Palm Beach County, FL</span>
            </div>
        </div>
        <div class="card-socials">
            <a href="#" class="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
                <svg fill="currentColor" viewBox="0 0 48 48"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
            </a>
        </div>
    `;
    leftCol.appendChild(businessCard);

    // Column 2: 3D Spotlight Card
    const rightCol = document.createElement("div");
    rightCol.className = "footer-right-col";

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container-3d noselect";
    cardContainer.setAttribute("aria-label", "Interactive 3D highlight card");

    const canvas = document.createElement("div");
    canvas.className = "canvas-3d";

    for (let i = 1; i <= 25; i++) {
        const tracker = document.createElement("div");
        tracker.className = `tracker tr-${i}`;
        canvas.appendChild(tracker);
    }

    const spotlightContent = document.createElement("div");
    spotlightContent.className = "card-content-3d spotlight-split-layout";
    spotlightContent.innerHTML = `
        <div class="spotlight-image-side">
            <img src="assets/images/misc/spotlight-image.jpeg" alt="Mollie MoveRx Mission Spotlight" class="spotlight-img">
        </div>
        <div class="spotlight-text-side">
            <span class="spotlight-badge">Clinical Spotlight</span>
            <h2 class="card-title-3d">The MoveRx Mission</h2>
            <p class="card-description-3d">
                “Reclaiming mobility requires precise corrective exercise and post-rehab expertise, ensuring every movement is safe, evidence-based, and coordinated with your healthcare team.”
                <span class="quote-author">– Mollie W.</span>
            </p>
            <div class="card-stats-row-3d">
                <div class="stat-box-3d">
                    <span class="stat-number-3d">27+</span>
                    <span class="stat-label-3d">Years Active</span>
                </div>
                <div class="stat-box-3d">
                    <span class="stat-number-3d">AED & CPR</span>
                    <span class="stat-label-3d">Certified</span>
                </div>
                <div class="stat-box-3d">
                    <span class="stat-number-3d">100%</span>
                    <span class="stat-label-3d">Mobile Care</span>
                </div>
            </div>
        </div>
    `;
    canvas.appendChild(spotlightContent);
    cardContainer.appendChild(canvas);
    rightCol.appendChild(cardContainer);

    gridContainer.appendChild(leftCol);
    gridContainer.appendChild(rightCol);
    footer.appendChild(gridContainer);

    // Footer Copyright
    const footerBottom = document.createElement("div");
    footerBottom.className = "footer-bottom-bar";
    footerBottom.innerHTML = `
        <div class="container">
            <p>&copy; 2026 MoveRx. All rights reserved.</p>
        </div>
    `;
    footer.appendChild(footerBottom);

    mainContent.appendChild(footer);
}

/**
 * 2. APP INITIALIZATION
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // Inject dynamic layout sections
    renderNavigation();
    renderHero();
    renderPrinciples();
    renderSpecialties();
    renderLeaves();
    renderFooter();

    // Initialize decorative animations
    initLeafScrollAnimation();

    // Dismiss preloader loading screen once loaded
    const loadStartTime = Date.now();
    const hidePreloader = () => {
        const preloader = document.getElementById("preloader");
        if (preloader && !preloader.classList.contains("fade-out")) {
            const elapsed = Date.now() - loadStartTime;
            const remainingDelay = Math.max(0, 1000 - elapsed);
            
            setTimeout(() => {
                preloader.classList.add("fade-out");
                setTimeout(() => preloader.remove(), 600);
            }, remainingDelay);
        }
    };
    window.addEventListener("load", hidePreloader);
    setTimeout(hidePreloader, 3500); // 3.5s safety fallback
});
