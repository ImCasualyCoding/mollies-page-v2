/* ==========================================================================
   MoveRx Webpage Logic (v2)
   Description: Dynamic JS content injection, navigation rendering,
                dynamic hero construction, and scroll-animated decorative leaf logic.
   ========================================================================== */

/* 1. CENTRALIZED WEBSITE CONTENT DEFINITIONS
   ==========================================================================
   Edit this object to update text, links, or image paths across the page.
   This avoids hardcoding strings directly in the HTML codebase. */
const websiteContent = {
    // Navigation Configuration
    navigation: {
        logo: {
            textHighlight: "Move", // Styled in accent green/italic
            textRegular: "Rx",     // Styled in tropical yellow/gold
            link: "index.html"
        },
        links: [
            { text: "Credentials", url: "credibility.html" },
            { text: "Testimonials", url: "testimonials.html" }
        ],
        cta: {
            text: "Book Consultation",
            url: "#contact"
        }
    },

    // Hero Section Configuration
    hero: {
        badge: "South Florida's Premier Specialist",
        heading: "Reclaim your freedom.<br>One step at a time.",
        description: "MoveRx blends movement science with clinical corrective exercise and post-rehab expertise. Working in close coordination with your healthcare providers, Mollie delivers safe, evidence-based training for precise functional recovery.",
        image: "assets/images/hero/mollies brother.jpg",
        imageAlt: "Mollie's brother wading in beach ocean waves during corrective physical mobility therapy",
        ctas: [
            { text: "Start Your Journey", url: "#contact", primary: true },
            { text: "Learn about Mollie", url: "credibility.html", primary: false }
        ]
    },

    // Success Stories Section Configuration
    successStories: {
        heading: "Gentle, reliable, and professional physical therapy tailored for older adults",
        subtext: "Mollie brings the clinic's expertise to the comfort of your sunny Florida lifestyle.",
        stories: [
            {
                category: "Weight Loss",
                title: "Weight Loss",
                clientName: "Jess",
                description: "Description will be provided later.",
                beforeImage: "assets/images/weight_loss/jess_before.jpg",
                afterImage: "assets/images/weight_loss/jess_after.jpg",
                beforeAlt: "Client Jess prior to training",
                afterAlt: "Client Jess weight loss progress results"
            },
            {
                category: "Sensorimotor Integration",
                title: "Sensorimotor Integration",
                clientName: "Doug",
                description: "Description will be provided later.",
                beforeImage: "assets/images/sensorimotor_integration/doug_before.jpg",
                afterImage: "assets/images/sensorimotor_integration/doug_after.jpg",
                beforeAlt: "Client Doug prior to training",
                afterAlt: "Client Doug sensorimotor integration progress results"
            },
            {
                category: "Personalized Body Sculpting",
                title: "Personalized Body Sculpting",
                clientName: "Amy",
                description: "Description will be provided later.",
                beforeImage: "assets/images/body_sculpting/amy_before.jpg",
                afterImage: "assets/images/body_sculpting/amy_after.jpg",
                beforeAlt: "Client Amy prior to training",
                afterAlt: "Client Amy personalized body sculpting progress results"
            }
        ]
    },

    // Decorative Scroll Layout Elements Settings
    leaves: [
        {
            id: "leaf-left-1",
            type: "leaf-left",
            svgType: "monstera",
            initialTop: 450 // Monstera leaf sits in Hero/Transition area
        },
        {
            id: "leaf-right-1",
            type: "leaf-right",
            svgType: "palm",
            initialTop: 1050 // Palm tree silhouette sits near Success header
        },
        {
            id: "leaf-left-2",
            type: "leaf-left",
            svgType: "sand",
            initialTop: 1650 // Sand ripples sit near Success card
        },
        {
            id: "leaf-right-2",
            type: "leaf-right",
            svgType: "fern",
            initialTop: 2250 // Fern leaf sits near footer transition
        }
    ],

    // Tropical SVG Shapes Vector Graphic Markups
    svgs: {
        // 1. Monstera leaf
        monstera: `
            <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M50,145 Q48,75 25,15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M47,125 C32,120 18,102 12,88 C18,92 36,110 46,115 Z" fill="currentColor"/>
                <path d="M45,110 C29,103 14,84 8,70 C15,74 34,92 43,99 Z" fill="currentColor"/>
                <path d="M42,95 C25,86 11,67 5,52 C13,57 30,77 40,84 Z" fill="currentColor"/>
                <path d="M39,80 C22,69 8,50 3,35 C11,40 27,60 37,69 Z" fill="currentColor"/>
                <path d="M35,65 C19,52 6,33 2,18 C9,23 23,43 33,54 Z" fill="currentColor"/>
                <path d="M31,50 C16,35 4,18 1,5 C7,10 19,27 28,39 Z" fill="currentColor"/>
                <path d="M51,125 C66,120 80,102 86,88 C80,92 62,110 52,115 Z" fill="currentColor"/>
                <path d="M49,110 C65,103 78,84 84,70 C77,74 58,92 49,99 Z" fill="currentColor"/>
                <path d="M46,95 C63,86 75,67 81,52 C73,57 56,77 46,84 Z" fill="currentColor"/>
                <path d="M43,80 C60,69 70,50 75,35 C67,40 51,60 41,69 Z" fill="currentColor"/>
                <path d="M39,65 C56,52 64,33 69,18 C61,23 47,43 37,54 Z" fill="currentColor"/>
                <path d="M34,50 C51,35 57,18 60,5 C53,10 41,27 32,39 Z" fill="currentColor"/>
            </svg>
        `,
        // 2. Palm tree silhouette
        palm: `
            <svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M40,175 Q45,110 70,55" fill="none" stroke="currentColor" stroke-width="6.5" stroke-linecap="round"/>
                <path d="M40,175 Q45,110 70,55" fill="none" stroke="#f8f6f0" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2 6"/>
                <path d="M70,55 Q50,45 25,48 Q48,32 70,55" fill="currentColor"/>
                <path d="M70,55 Q55,25 35,15 Q55,10 70,55" fill="currentColor"/>
                <path d="M70,55 Q75,20 88,10 Q85,25 70,55" fill="currentColor"/>
                <path d="M70,55 Q95,30 108,25 Q95,42 70,55" fill="currentColor"/>
                <path d="M70,55 Q100,58 112,65 Q95,68 70,55" fill="currentColor"/>
                <path d="M70,55 Q90,80 100,95 Q82,80 70,55" fill="currentColor"/>
                <path d="M70,55 Q65,75 58,98 Q58,75 70,55" fill="currentColor"/>
                <path d="M70,55 Q45,65 30,78 Q45,55 70,55" fill="currentColor"/>
            </svg>
        `,
        // 3. Sand waves ripples
        sand: `
            <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M10,25 C40,5 70,45 100,25 C120,15 135,22 145,28" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                <path d="M5,55 C35,35 65,75 95,55 C115,45 130,52 140,58" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
                <path d="M15,85 C45,65 75,105 105,85 C125,75 140,82 150,88" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
            </svg>
        `,
        // 4. Tropical Fern leaf
        fern: `
            <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M50,145 Q53,85 62,10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M51,130 Q30,125 15,122 Q35,118 52,122" fill="currentColor"/>
                <path d="M52,122 Q70,117 85,114 Q65,110 52,114" fill="currentColor"/>
                <path d="M53,110 Q32,104 18,100 Q37,97 53,101" fill="currentColor"/>
                <path d="M54,101 Q72,96 87,92 Q67,89 54,92" fill="currentColor"/>
                <path d="M54,90 Q34,83 20,78 Q39,76 55,80" fill="currentColor"/>
                <path d="M55,80 Q73,75 88,70 Q68,68 55,71" fill="currentColor"/>
                <path d="M56,70 Q36,62 22,57 Q41,55 56,59" fill="currentColor"/>
                <path d="M56,59 Q74,53 89,48 Q69,47 56,50" fill="currentColor"/>
                <path d="M57,50 Q38,42 25,37 Q43,35 57,39" fill="currentColor"/>
                <path d="M58,39 Q76,33 90,28 Q70,27 58,30" fill="currentColor"/>
                <path d="M59,30 Q42,22 30,17 Q47,16 59,20" fill="currentColor"/>
                <path d="M59,20 Q75,14 88,9 Q70,9 59,12" fill="currentColor"/>
            </svg>
        `
    }
};

/* 2. DYNAMIC DOM RENDERERS
   ========================================================================== */

/**
 * Renders the navigation bar pill inside the <header> tag
 */
function renderNavigation() {
    const header = document.getElementById("nav-header");
    if (!header) {
        console.error("Navigation mount container '#nav-header' not found.");
        return;
    }

    // 1. Create nav pill wrapper
    const navPill = document.createElement("nav");
    navPill.className = "nav-pill";

    // 2. Create Logo with split color classes (Move in Teal, Rx in Yellow)
    const logoLink = document.createElement("a");
    logoLink.href = websiteContent.navigation.logo.link;
    logoLink.className = "logo";
    logoLink.ariaLabel = `${websiteContent.navigation.logo.textHighlight}${websiteContent.navigation.logo.textRegular} Home`;
    logoLink.innerHTML = `
        <span class="logo-move">${websiteContent.navigation.logo.textHighlight}</span><span class="logo-rx">${websiteContent.navigation.logo.textRegular}</span>
    `;
    navPill.appendChild(logoLink);

    // 3. Create Mobile Hamburger Menu Toggle (Checkbox Hack for pure CSS action)
    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.id = "mobile-toggle";
    toggleInput.className = "mobile-toggle-checkbox";
    toggleInput.setAttribute("aria-label", "Toggle navigation menu");
    navPill.appendChild(toggleInput);

    const toggleLabel = document.createElement("label");
    toggleLabel.htmlFor = "mobile-toggle";
    toggleLabel.className = "mobile-toggle-label";
    toggleLabel.innerHTML = "<span></span><span></span><span></span>";
    navPill.appendChild(toggleLabel);

    // 4. Create Nav Links List
    const navLinks = document.createElement("ul");
    navLinks.className = "nav-links";

    // Populate standard links from content object
    websiteContent.navigation.links.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.text;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    // Mobile-only booking CTA in the slide-out menu drawer
    const mobileCtaLi = document.createElement("li");
    mobileCtaLi.className = "mobile-only";
    const mobileCta = document.createElement("a");
    mobileCta.href = websiteContent.navigation.cta.url;
    mobileCta.className = "btn-primary";
    mobileCta.textContent = websiteContent.navigation.cta.text;
    
    // Close navigation menu when clicking links or buttons
    mobileCta.addEventListener("click", () => {
        toggleInput.checked = false;
    });
    
    mobileCtaLi.appendChild(mobileCta);
    navLinks.appendChild(mobileCtaLi);

    navPill.appendChild(navLinks);

    // 5. Desktop-only booking CTA (styled inside nav-pill container)
    const desktopCtaContainer = document.createElement("div");
    desktopCtaContainer.className = "nav-cta desktop-only";
    const desktopCta = document.createElement("a");
    desktopCta.href = websiteContent.navigation.cta.url;
    desktopCta.className = "btn-primary-small";
    desktopCta.textContent = websiteContent.navigation.cta.text;
    desktopCtaContainer.appendChild(desktopCta);
    navPill.appendChild(desktopCtaContainer);

    // Close menu when clicking standard links in mobile view
    navLinks.querySelectorAll("a:not(.btn-primary)").forEach(link => {
        link.addEventListener("click", () => {
            toggleInput.checked = false;
        });
    });

    // Mount nav pill to header
    header.appendChild(navPill);
}

/**
 * Renders the Full-Background Hero Section inside #main-content
 */
function renderHero() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
        console.error("Main content mount container '#main-content' not found.");
        return;
    }

    // 1. Create Hero section container
    const heroSection = document.createElement("section");
    heroSection.className = "hero-section";

    // 2. Create Dynamic Background Image element (independent opacity)
    const bgImage = document.createElement("div");
    bgImage.className = "hero-bg-image";
    bgImage.style.backgroundImage = `url('${websiteContent.hero.image}')`;
    bgImage.setAttribute("role", "img");
    bgImage.setAttribute("aria-label", websiteContent.hero.imageAlt);
    heroSection.appendChild(bgImage);

    // 3. Create Legibility Overlay
    const overlay = document.createElement("div");
    overlay.className = "hero-overlay";
    heroSection.appendChild(overlay);

    // Ambient decorative background orbs (sit between overlay and content)
    const glowTeal = document.createElement("div");
    glowTeal.className = "hero-glow-teal";
    const glowGold = document.createElement("div");
    glowGold.className = "hero-glow-gold";
    heroSection.appendChild(glowTeal);
    heroSection.appendChild(glowGold);

    // 4. Create Centered Content Container
    const container = document.createElement("div");
    container.className = "container hero-content-wrapper animate-fade-in";

    // Accent Badge
    const badge = document.createElement("span");
    badge.className = "pill-badge";
    badge.textContent = websiteContent.hero.badge;
    container.appendChild(badge);

    // Main Heading
    const heading = document.createElement("h1");
    heading.innerHTML = websiteContent.hero.heading;
    container.appendChild(heading);

    // Description text
    const description = document.createElement("p");
    description.className = "hero-description";
    description.textContent = websiteContent.hero.description;
    container.appendChild(description);

    // Action buttons container
    const actionsContainer = document.createElement("div");
    actionsContainer.className = "hero-actions";

    websiteContent.hero.ctas.forEach(cta => {
        const button = document.createElement("a");
        button.href = cta.url;
        button.textContent = cta.text;
        
        if (cta.primary) {
            button.className = "btn-primary";
        } else {
            button.className = "btn-secondary";
        }
        
        actionsContainer.appendChild(button);
    });

    container.appendChild(actionsContainer);

    // Assemble section
    heroSection.appendChild(container);
    
    // Inject at the beginning of the main content
    mainContent.appendChild(heroSection);
}

let currentStoryIndex = 0;
let isFlinging = false;

/**
 * Renders the Centered Dynamic Fling Success Stories Section inside #main-content
 */
function renderSuccessStories() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
        console.error("Main content mount container '#main-content' not found.");
        return;
    }

    const storiesData = websiteContent.successStories;

    // 1. Create Success Stories Section Container
    const successSection = document.createElement("section");
    successSection.className = "success-section";
    successSection.id = "success";

    // 2. Create Header
    const container = document.createElement("div");
    container.className = "container";

    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header animate-fade-in";

    const heading = document.createElement("h2");
    heading.textContent = storiesData.heading;
    sectionHeader.appendChild(heading);

    const subtext = document.createElement("p");
    subtext.className = "section-subtext";
    subtext.textContent = storiesData.subtext;
    sectionHeader.appendChild(subtext);

    container.appendChild(sectionHeader);

    // 3. Create Showcase Fling Wrapper
    const showcaseContainer = document.createElement("div");
    showcaseContainer.className = "showcase-container animate-fade-in";

    // Prev Button
    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn prev-btn";
    prevBtn.setAttribute("aria-label", "Previous success story");
    prevBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    `;
    showcaseContainer.appendChild(prevBtn);

    // Card Mount Container
    const cardMount = document.createElement("div");
    cardMount.className = "card-mount";
    showcaseContainer.appendChild(cardMount);

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn next-btn";
    nextBtn.setAttribute("aria-label", "Next success story");
    nextBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    `;
    showcaseContainer.appendChild(nextBtn);

    container.appendChild(showcaseContainer);
    successSection.appendChild(container);
    mainContent.appendChild(successSection);

    // 4. Inner Function to Render Active Card
    function renderCard(index, animationClass = "") {
        cardMount.innerHTML = ""; // Clear existing

        const story = storiesData.stories[index];

        const card = document.createElement("div");
        card.className = `success-card ${animationClass}`;

        // Create before/after interactive image container
        const transitionBox = document.createElement("div");
        transitionBox.className = "image-transition-box";
        transitionBox.tabIndex = 0;
        transitionBox.setAttribute("role", "button");
        transitionBox.setAttribute("aria-label", `After progress photos of ${story.title}. Tap to toggle prior photo.`);

        const imgBefore = document.createElement("img");
        imgBefore.src = story.beforeImage;
        imgBefore.alt = story.beforeAlt;
        imgBefore.className = "img-before";

        const imgAfter = document.createElement("img");
        imgAfter.src = story.afterImage;
        imgAfter.alt = story.afterAlt;
        imgAfter.className = "img-after";

        const badgeBefore = document.createElement("div");
        badgeBefore.className = "status-badge badge-before";
        badgeBefore.textContent = "Before";

        const badgeAfter = document.createElement("div");
        badgeAfter.className = "status-badge badge-after";
        badgeAfter.textContent = "After Progress";

        const hint = document.createElement("div");
        hint.className = "interaction-hint";
        hint.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path>
            </svg>
            <span class="hint-text">Tap for Prior</span>
        `;

        transitionBox.appendChild(imgBefore);
        transitionBox.appendChild(imgAfter);
        transitionBox.appendChild(badgeBefore);
        transitionBox.appendChild(badgeAfter);
        transitionBox.appendChild(hint);

        // Click event to toggle prior photo (show-before)
        const togglePhoto = () => {
            transitionBox.classList.toggle("show-before");
            const hintText = hint.querySelector(".hint-text");
            if (transitionBox.classList.contains("show-before")) {
                hintText.textContent = "Tap for Progress";
            } else {
                hintText.textContent = "Tap for Prior";
            }
        };

        transitionBox.addEventListener("click", togglePhoto);
        transitionBox.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePhoto();
            }
        });

        card.appendChild(transitionBox);

        // Info pane
        const infoPane = document.createElement("div");
        infoPane.className = "service-info";

        const title = document.createElement("h3");
        title.className = "service-title";
        title.textContent = story.title;
        infoPane.appendChild(title);

        // Client Name Subtitle
        const clientName = document.createElement("h4");
        clientName.className = "client-name";
        clientName.textContent = `Client: ${story.clientName}`;
        infoPane.appendChild(clientName);

        const desc = document.createElement("p");
        desc.className = "service-desc";
        desc.textContent = story.description;
        infoPane.appendChild(desc);

        card.appendChild(infoPane);
        cardMount.appendChild(card);
    }

    // Render initial card
    renderCard(currentStoryIndex);

    // 5. Navigation Fling Animation Logic
    function navigate(direction) {
        if (isFlinging) return;
        isFlinging = true;

        const currentCard = cardMount.querySelector(".success-card");
        if (!currentCard) return;

        // Apply fling-out animation class
        if (direction === "next") {
            currentCard.classList.add("fling-out-left");
        } else {
            currentCard.classList.add("fling-out-right");
        }

        // Wait for fling-out transition to complete (350ms)
        setTimeout(() => {
            if (direction === "next") {
                currentStoryIndex = (currentStoryIndex + 1) % storiesData.stories.length;
            } else {
                currentStoryIndex = (currentStoryIndex - 1 + storiesData.stories.length) % storiesData.stories.length;
            }

            // Render new card with fling-in animation class
            const inClass = direction === "next" ? "fling-in-right" : "fling-in-left";
            renderCard(currentStoryIndex, inClass);

            // Wait for fling-in transition to complete (350ms)
            setTimeout(() => {
                const newCard = cardMount.querySelector(".success-card");
                if (newCard) {
                    newCard.classList.remove(inClass);
                }
                isFlinging = false;
            }, 350);

        }, 350);
    }

    prevBtn.addEventListener("click", () => navigate("prev"));
    nextBtn.addEventListener("click", () => navigate("next"));
}

/**
 * Creates and injects the scroll-animated leaf containers in the DOM
 */
function renderLeaves() {
    const mountPoint = document.getElementById("leaves-mount");
    if (!mountPoint) {
        console.error("Leaves mount container '#leaves-mount' not found.");
        return;
    }

    websiteContent.leaves.forEach(leafData => {
        const leafContainer = document.createElement("div");
        leafContainer.id = leafData.id;
        leafContainer.className = `scroll-leaf-container ${leafData.type} type-${leafData.svgType}`;
        leafContainer.style.top = `${leafData.initialTop}px`;
        
        // Dynamic loading of specific SVG vector graphic markup
        leafContainer.innerHTML = websiteContent.svgs[leafData.svgType];
        mountPoint.appendChild(leafContainer);
    });
}

/* 3. PERFORMANCE-OPTIMIZED LEAF SCROLL DECORATIONS
   ========================================================================== */

/**
 * Setup scroll event handlers to animate decorative foliage
 */
function initLeafScrollAnimation() {
    const leaves = document.querySelectorAll(".scroll-leaf-container");
    if (leaves.length === 0) return;

    function updateLeaves() {
        const viewportCenter = window.innerHeight / 2;
        const maxDistance = window.innerHeight * 0.65; // Range of scroll effect

        leaves.forEach(leaf => {
            const rect = leaf.getBoundingClientRect();
            const leafCenter = rect.top + rect.height / 2;
            const distance = Math.abs(leafCenter - viewportCenter);

            if (distance < maxDistance) {
                // Calculate scale of effect (0 = edge of range, 1 = centered)
                const progress = 1 - (distance / maxDistance);
                const ease = Math.sin(progress * Math.PI / 2); // Smooth sine ease out

                // Set different peak opacity for different elements for visual variety
                let peakOpacity = 0.14; // Default leaf
                if (leaf.classList.contains("type-palm")) peakOpacity = 0.08; // Delicate silhouette
                if (leaf.classList.contains("type-sand")) peakOpacity = 0.06; // Soft ripples

                const opacity = ease * peakOpacity;
                const isLeft = leaf.classList.contains("leaf-left");

                // Sway rotation: from 10deg (resting) to 55deg (reaching on-screen)
                const startAngle = 10;
                const endAngle = 55;
                const currentAngle = startAngle + ease * (endAngle - startAngle);
                const rotateDeg = isLeft ? currentAngle : -currentAngle;

                // Slide offset: from -65px to 0px
                const slideOffset = (1 - ease) * 65;
                const translateX = isLeft ? -slideOffset : slideOffset;

                leaf.style.opacity = opacity;
                leaf.style.transform = `translateX(${translateX}px) rotate(${rotateDeg}deg)`;
            } else {
                // Completely out of scope: hide and tuck away
                const isLeft = leaf.classList.contains("leaf-left");
                leaf.style.opacity = 0;
                leaf.style.transform = `translateX(${isLeft ? -65 : 65}px) rotate(${isLeft ? 10 : -10}deg)`;
            }
        });
    }

    // Scroll throttle using requestAnimationFrame
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

    // Run initially and on resize
    updateLeaves();
    window.addEventListener("resize", updateLeaves, { passive: true });
}

/* 4. APP INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Inject dynamic structures
    renderNavigation();
    renderHero();
    renderSuccessStories();
    renderLeaves();

    // Bind event animations
    initLeafScrollAnimation();
});
