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
            { text: "The Mission", url: "the-mission.html" },
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
            { text: "The Mission", url: "the-mission.html", primary: false }
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
            initialTop: 1850 // Fern leaf sits near footer transition
        }
    ],

    // Verified Credentials & Certifications list
    credentials: [
        {
            title: "Corrective Exercise Specialist",
            organization: "International Sports Sciences Association (ISSA)",
            filePath: "assets/certs/Corrective_Exercise_Specialist.jpg"
        },
        {
            title: "Post-Rehabilitation & Special Populations Specialist",
            organization: "Fitness Institute International",
            filePath: "assets/certs/Special_Populations_Post_Rehabilitation_Specialist.jpg"
        },
        {
            title: "Functional Fitness Trainer",
            organization: "American Sports & Fitness Association (ASFA)",
            filePath: "assets/certs/Functional_Fitness_Trainer.jpg"
        },
        {
            title: "Strength & Conditioning Specialist",
            organization: "Fitness Institute International",
            filePath: "assets/certs/Strength_Conditioning_Specialist.jpg"
        },
        {
            title: "Fitness Testing Specialist",
            organization: "Fitness Institute International",
            filePath: "assets/certs/Fitness_Testing_Specialist.jpg"
        },
        {
            title: "Weight Management Specialist & Nutrition Educator",
            organization: "Fitness Institute International",
            filePath: "assets/certs/Weight_Management_Specialist_Nutrition_Educator.jpg"
        },
        {
            title: "Advanced Senior Fitness Instructor",
            organization: "American Sports & Fitness Association (ASFA)",
            filePath: "assets/certs/Advanced_Senior_Fitness_Instructor.jpg"
        },
        {
            title: "CPR / AED & First Aid",
            organization: "MyCPR NOW",
            filePath: "assets/certs/CPR_AED_First_Aid_Certified.jpg"
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
                let peakOpacity = 0.38; // Default leaf
                if (leaf.classList.contains("type-palm")) peakOpacity = 0.25; // Delicate silhouette
                if (leaf.classList.contains("type-sand")) peakOpacity = 0.20; // Soft ripples

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

/**
 * Renders the Premium Dark-Green Footer Section with a Business Card and 3D Spotlight Card
 */
function renderFooter() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
        console.error("Main content mount container '#main-content' not found.");
        return;
    }

    // 1. Create Footer Element
    const footer = document.createElement("footer");
    footer.className = "site-footer-green";

    // 2. Create Grid Container
    const gridContainer = document.createElement("div");
    gridContainer.className = "container footer-grid-container";

    // Column 1: Business Card
    const leftCol = document.createElement("div");
    leftCol.className = "footer-left-col";

    const businessCard = document.createElement("div");
    businessCard.className = "business-card";
    businessCard.innerHTML = `
        <div class="card-logo">
            <span class="logo-move">Move</span><span class="logo-rx">Rx</span>
        </div>
        <div class="card-title-group">
            <h3>Mollie W.</h3>
            <p class="card-specialty">Corrective Exercise Specialist & Movement Scientist</p>
        </div>
        <div class="card-contact-info">
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

    // 25 Invisible Trackers
    for (let i = 1; i <= 25; i++) {
        const tracker = document.createElement("div");
        tracker.className = `tracker tr-${i}`;
        canvas.appendChild(tracker);
    }

    // Spotlight Split Content
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

    // 3. Add Footer Bottom Copyright
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
 * Renders the Credentials and Board Certifications Section inside #main-content
 */
function renderCredentials() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
        console.error("Main content mount container '#main-content' not found.");
        return;
    }

    const certsData = websiteContent.credentials;
    if (!certsData || certsData.length === 0) return;

    // 1. Create section container
    const section = document.createElement("section");
    section.className = "credentials-section";
    section.id = "credentials";

    // 2. Create inner container
    const container = document.createElement("div");
    container.className = "container";

    // 3. Section Header
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header animate-fade-in";
    sectionHeader.innerHTML = `
        <span class="pill-badge" style="background-color: var(--sun-accent); color: var(--text-primary); margin-bottom: 12px; font-size: 10px; font-weight: 700; box-shadow: none;">Verified Qualifications</span>
        <h2>Board Certifications & Credentials</h2>
        <p class="section-subtext">Click on any credential plaque below to view the official scanned course certificate.</p>
    `;
    container.appendChild(sectionHeader);

    // 4. Grid wrapper
    const grid = document.createElement("div");
    grid.className = "credentials-grid";

    // 5. Generate cards
    certsData.forEach((cert, index) => {
        const card = document.createElement("div");
        card.className = "cert-card animate-fade-in";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View details of ${cert.title} certified by ${cert.organization}`);
        
        card.innerHTML = `
            <div class="cert-visual-zone">
                <div class="loading-overlay-spinner">
                    <div class="spinner"></div>
                </div>
                <img src="${cert.filePath}" class="cert-img-preview" alt="Scan preview of ${cert.title}" loading="lazy">
            </div>
            <h3 class="cert-card-title">${cert.title}</h3>
            <div class="cert-card-org">${cert.organization}</div>
        `;

        // Handle image loading events to dismiss loading spinner
        const img = card.querySelector(".cert-img-preview");
        if (img) {
            if (img.complete) {
                const spinner = card.querySelector(".loading-overlay-spinner");
                if (spinner) spinner.remove();
            } else {
                img.onload = () => {
                    const spinner = card.querySelector(".loading-overlay-spinner");
                    if (spinner) spinner.remove();
                };
                img.onerror = () => {
                    const spinner = card.querySelector(".loading-overlay-spinner");
                    if (spinner) spinner.remove();
                    const visualZone = card.querySelector(".cert-visual-zone");
                    if (visualZone) {
                        visualZone.innerHTML = `<span style="font-size: 12px; font-weight: 500; color: var(--text-secondary); text-align: center; padding: 16px;">Preview unavailable</span>`;
                    }
                };
            }
        }

        // Click interaction to open modal
        const openCertModal = () => {
            setupModal(cert);
        };
        
        card.addEventListener("click", openCertModal);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openCertModal();
            }
        });

        grid.appendChild(card);
    });

    container.appendChild(grid);
    section.appendChild(container);
    mainContent.appendChild(section);
}

/**
 * Setup and display the certificate details inside the lightbox modal
 */
function setupModal(cert) {
    const modal = document.getElementById("cert-modal");
    const mTitle = document.getElementById("m-title");
    const mOrg = document.getElementById("m-org");
    const mediaWrapper = document.getElementById("modal-media-wrapper");
    const downloadContainer = document.getElementById("modal-download-container");

    if (!modal || !mTitle || !mOrg || !mediaWrapper || !downloadContainer) {
        console.error("Modal elements missing in the DOM.");
        return;
    }

    // Set textual details
    mTitle.textContent = cert.title;
    mOrg.textContent = cert.organization;

    // Show loading spinner
    mediaWrapper.innerHTML = `
        <div class="loading-overlay-spinner">
            <div class="spinner"></div>
        </div>
    `;

    // Render full scale image scan
    const img = document.createElement("img");
    img.src = cert.filePath;
    img.alt = `${cert.title} scanned document`;
    img.onload = () => {
        const spinner = mediaWrapper.querySelector(".loading-overlay-spinner");
        if (spinner) spinner.remove();
    };
    img.onerror = () => {
        mediaWrapper.innerHTML = `<span style="font-size: 14px; font-weight: 500; color: var(--text-primary);">Document scan unavailable</span>`;
    };
    mediaWrapper.appendChild(img);

    // Setup download button
    downloadContainer.innerHTML = `
        <a href="${cert.filePath}" download class="modal-ctrl-btn" aria-label="Download ${cert.title} certificate scan image">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Scan
        </a>
    `;

    // Activate modal overlay and lock page scrolling
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

/**
 * Initialize closing interactions for the certificate modal
 */
function initModalCloseHandlers() {
    const modal = document.getElementById("cert-modal");
    const closeBtn = document.getElementById("modal-close");

    if (!modal || !closeBtn) return;

    const closeModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        
        // Clear media wrapper to free memory
        const mediaWrapper = document.getElementById("modal-media-wrapper");
        if (mediaWrapper) mediaWrapper.innerHTML = "";
    };

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

/* 4. APP INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Inject dynamic structures
    renderNavigation();
    renderHero();
    renderSuccessStories();
    renderCredentials();
    renderLeaves();
    renderFooter();

    // Bind event animations
    initLeafScrollAnimation();
    initModalCloseHandlers();

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
