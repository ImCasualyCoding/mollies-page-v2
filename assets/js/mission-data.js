/* ==========================================================================
   MoveRx The Mission Page Data
   Description: Decoupled specialty areas and credentials data for easy updating.
   ========================================================================== */

const missionContent = {
    // Navigation Configuration
    navigation: {
        logo: {
            textHighlight: "Move",
            textRegular: "Rx",
            link: "index.html"
        },
        links: [
            { text: "The Mission", url: "the-mission.html" },
            { text: "Testimonials", url: "testimonials.html" }
        ],
        cta: {
            text: "Book Consultation",
            url: "index.html#contact"
        }
    },

    // Hero Section Configuration
    hero: {
        title: "The Mission & Credentials.",
        subtext: "Discover Mollie's evidence-based clinical specialties, post-rehab recoveries, and physical methodologies designed to safely restore movement confidence."
    },

    // Mollie's Practice & Principles Configuration
    principles: {
        heading: "Mollie’s Practice & Principles",
        paragraphs: [
            "Under the <strong>MoveRx</strong> framework, I merge <strong>corrective exercise</strong> and <strong>post-rehab expertise</strong> with evidence-based programming. By collaborating closely with your healthcare providers, I ensure your transition from clinical care to functional recovery is seamless, precise, and completely safe.",
            "With over six and a half years of active physical rehabilitation in South Florida, my practice is built around precision safety—designing customized movement plans for clients recovering from orthopedic surgeries, joint replacements, and neurological transitions.",
            "<strong>\"Functional recovery is built on evidence-based movement. Through close medical collaboration, I provide the precise and safe training you need to move with absolute confidence.\"</strong> — Mollie Wittenkeller"
        ],
        stats: [
            {
                number: "6.5+ Yrs",
                title: "Clinical Practice",
                description: "Active rehabilitation training across South Florida's coastal communities."
            },
            {
                number: "100%",
                title: "Accredited Safety",
                description: "Zero training injuries during recovery procedures. Extremely cautious care."
            },
            {
                number: "2,500+",
                title: "Therapy Hours",
                description: "Of dedicated client contact, muscle sculpting, and mobility restoration."
            }
        ]
    },

    // Specialties Bento Sections
    specialties: [
        {
            title: "Posture Correction Specialist",
            description: "Poor posture is called “Forward Head Posture” (FHP) and is successfully treatable and preventable. It is evident by the ears protruding forward past the level of the shoulders rather than being in line with them.\n\nClients often describe symptoms of extreme tension or tightness in the front of their necks, along with pain and discomfort in the back of the skull and shoulders. As FHP progresses over time, the brain attempts to level the eyes by increasing the head tilt on the skull, causing major headaches and tension behind the eyeballs.",
            image: "assets/images/mission/posture_specialist.png",
            badge: "Biomechanics"
        },
        {
            title: "Post Rehab Specialist",
            description: "The most common client for a post-rehabilitation fitness trainer is an older adult recovering from surgeries (such as hip or knee replacements) or managing chronic joint pain.\n\nThese sessions are heavily focused on functional fitness, fall prevention, and rebuilding trust in an injured joint after physical therapy ends.",
            image: "assets/images/mission/post_rehab.png",
            badge: "Recovery"
        },
        {
            title: "Strength Training Specialist",
            description: "These sessions feature evidence-based exercise programs personally designed to improve physical performance, build muscle, and reduce injury risk.\n\nWe assess and construct specific movement patterns, teach proper lifting techniques, and monitor progress, working with everyone from elite athletes to individuals recovering from injuries.",
            image: "assets/images/mission/strength_training.png",
            badge: "Performance"
        },
        {
            title: "Aqua Fitness Instructor",
            description: "Buoyancy supports roughly 90% of total body weight when submerged, making it ideal for those with arthritis, recovering from injuries, or managing weight.\n\nPushing and pulling against water naturally engages opposing muscle groups, serving as an effective way to tone muscles without using heavy weights.",
            image: "assets/images/mission/aqua_fitness.png",
            badge: "Hydrotherapy"
        }
    ],

    // Leaves scroll config
    leaves: [
        {
            id: "leaf-left-1",
            type: "leaf-left",
            svgType: "monstera",
            initialTop: 450
        },
        {
            id: "leaf-right-1",
            type: "leaf-right",
            svgType: "palm",
            initialTop: 950
        },
        {
            id: "leaf-left-2",
            type: "leaf-left",
            svgType: "sand",
            initialTop: 1400
        }
    ],

    // SVGs for scroll-animated foliage
    svgs: {
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
        sand: `
            <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M10,25 C40,5 70,45 100,25 C120,15 135,22 145,28" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                <path d="M5,55 C35,35 65,75 95,55 C115,45 130,52 140,58" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
                <path d="M15,85 C45,65 75,105 105,85 C125,75 140,82 150,88" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
            </svg>
        `
    }
};
