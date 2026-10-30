(function() {
'use strict';
const PORTFOLIO_ITEMS = [
  {
    id: "gala-solstice",
    title: "The Obsidian & Rose Solstice Union",
    category: "weddings",
    categoryLabel: "Luxury Wedding",
    location: "Villa Balbiano, Lake Como, Italy",
    date: "September 2026",
    guestCount: 180,
    budgetBracket: "$220,000+",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80"
    ],
    tagline: "A 3-day lakeside celebration combining Italian baroque architecture with modern editorial noir.",
    description: "Commissioned by a London financier and a contemporary gallery curator, this multi-day wedding transformed historic Lake Como grounds into an architectural dreamscape. Featuring custom matte obsidian glass dining tables, floating floral pergolas with over 12,000 garden roses, and an acoustic watercraft arrival.",
    challenges: "Coordinated boat logistics for 180 international guests across variable alpine weather while erecting custom structural platforms over centuries-old heritage stone without a single anchoring perforation.",
    palette: [
      { name: "Obsidian Noir", hex: "#0B0F17" },
      { name: "Antique Champagne", hex: "#D4AF37" },
      { name: "Blush Linen", hex: "#EAD7CE" },
      { name: "Deep Tuscan Terracotta", hex: "#633B2E" }
    ],
    metrics: {
      planningTime: "11 Months",
      vendorsCurated: 24,
      sustainabilityRating: "100% Zero Single-Use Plastic"
    },
    clientQuote: {
      text: "Lumina orchestrated an impossible dream. From the first sketch to the final firework over Lake Como, every second felt cinema-grade.",
      author: "Eleanor & Julian C.",
      title: "Bride & Groom, Lake Como"
    }
  },
  {
    id: "nova-ai-summit",
    title: "Nova Global Keynote & Sensory Gala",
    category: "corporate",
    categoryLabel: "Corporate Gala & Summit",
    location: "The Concourse & Pier 48, San Francisco, CA",
    date: "August 2026",
    guestCount: 520,
    budgetBracket: "$380,000+",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    ],
    tagline: "A futuristic executive symposium transitioning into an immersive generative-light banquet.",
    description: "Designed for a leading enterprise intelligence firm, this 500-attendee summit featured 360-degree interactive spatial projection, live orchestral synthesis, and a 14-course micro-gastronomy dining experience curated by two Michelin-starred guest chefs.",
    challenges: "Strict security protocols for 60 international C-suite executives and venture partners; seamless live streaming to 45,000 remote viewers alongside low-latency on-stage live demos.",
    palette: [
      { name: "Cyber Obsidian", hex: "#070A10" },
      { name: "Electric Phosphor", hex: "#00E5C9" },
      { name: "Titanium Slate", hex: "#2B3545" },
      { name: "Luminous Platinum", hex: "#E8ECF2" }
    ],
    metrics: {
      planningTime: "6 Months",
      vendorsCurated: 38,
      sustainabilityRating: "Carbon-Neutral Offset Verified"
    },
    clientQuote: {
      text: "Lumina gave our brand summit the cultural weight of the Met Gala paired with the logistical precision of NASA. Truly peerless.",
      author: "Marcus Vance",
      title: "VP Brand & Experience, Nova Systems"
    }
  },
  {
    id: "chateau-miraval-milestone",
    title: "Château de Miraval 50th Vintage Soirée",
    category: "private",
    categoryLabel: "Private Milestone Celebration",
    location: "Correns, Provence, France",
    date: "July 2026",
    guestCount: 65,
    budgetBracket: "$140,000+",
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
    ],
    tagline: "An intimate weekend retreat celebrating a half-century of heritage, olive groves, and rare vintages.",
    description: "An ultra-exclusive private salon in the heart of Provence. Guests were greeted with customized leather travel ateliers, helicopter transfers from Nice, candlelit banquets under century-old cypress trees, and an acoustic performance by a world-renowned cellist under the stars.",
    challenges: "Navigating rural historic preservation constraints, installing discrete air cooling within open-air pergolas, and maintaining complete discretion and NDA adherence.",
    palette: [
      { name: "Olive Cypress", hex: "#2D3E2F" },
      { name: "Sunlit Terracotta", hex: "#C77B58" },
      { name: "Provençal Ochre", hex: "#E0AC69" },
      { name: "Unbleached Linen", hex: "#F3EDE2" }
    ],
    metrics: {
      planningTime: "5 Months",
      vendorsCurated: 16,
      sustainabilityRating: "100% Hyper-Local Organic Produce"
    },
    clientQuote: {
      text: "Every guest commented that it felt like entering a private film set where every sense was pampered. They handled everything with absolute grace.",
      author: "Genevieve R.",
      title: "Private Host, Paris & London"
    }
  },
  {
    id: "aura-jewelry-launch",
    title: "Aura Haute Joaillerie Paris Showcase",
    category: "corporate",
    categoryLabel: "VIP Brand Launch",
    location: "Hôtel d’Évreux, Place Vendôme, Paris",
    date: "June 2026",
    guestCount: 110,
    budgetBracket: "$190,000+",
    heroImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
    ],
    tagline: "An evening of optical refraction, velvet chambers, and private vault unveilings.",
    description: "To launch the 'Constellation' high-jewelry collection, Lumina designed an architectural glass labyrinth with custom fiber-optic spotlights calibrated specifically to the refractive index of emeralds and diamonds. Attended by international fashion editors, ambassadors, and collectors.",
    challenges: "Armed vault-grade security synchronization with local authorities, vibration-free staging, and ultra-accurate thermal regulation for delicate rare gems.",
    palette: [
      { name: "Velvet Obsidian", hex: "#0A0D12" },
      { name: "Gilded Brass", hex: "#CCA43B" },
      { name: "Refractive Crystal", hex: "#E4F1FE" },
      { name: "French Truffle", hex: "#221F1E" }
    ],
    metrics: {
      planningTime: "4 Months",
      vendorsCurated: 21,
      sustainabilityRating: "Modular Reusable Display Architecture"
    },
    clientQuote: {
      text: "Lumina captured the essence of our jewelry house: uncompromising perfection, mysterious elegance, and breathtaking hospitality.",
      author: "Camille Dupont",
      title: "Global Creative Director, Maison Aura"
    }
  },
  {
    id: "cotswolds-glasshouse",
    title: "Verdant Glasshouse Botanica Union",
    category: "weddings",
    categoryLabel: "Luxury Wedding",
    location: "The Lost Orangery, Wiltshire, UK",
    date: "May 2026",
    guestCount: 140,
    budgetBracket: "$175,000+",
    heroImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
    ],
    tagline: "A cascading botanical celebration under glass ceilings, wild English garden floral arches, and candlelight.",
    description: "A breathtaking English country wedding featuring suspended hanging jasmine chandeliers, bespoke herbal cocktail pairings, an artisanal 5-tier matcha-vanilla cake, and an electric brass band that kept the dance floor full until sunrise.",
    challenges: "Unpredictable spring downpours mitigated by transparent modular glass canopies engineered to maintain acoustics and temperature.",
    palette: [
      { name: "Forest Moss", hex: "#1C3325" },
      { name: "Warm Champagne", hex: "#E3CAA5" },
      { name: "Wild Jasmine White", hex: "#F8F9FA" },
      { name: "Aged Oak", hex: "#5C4033" }
    ],
    metrics: {
      planningTime: "9 Months",
      vendorsCurated: 19,
      sustainabilityRating: "Living Rooted Flora (Replanted Post-Event)"
    },
    clientQuote: {
      text: "I did not stress for a single minute on our wedding day. Lumina's team moved like silent guardian angels.",
      author: "Clara & Sebastian H.",
      title: "Bride & Groom, London"
    }
  },
  {
    id: "manhattan-penthouse-soiree",
    title: "Apex FinTech Founders Sky Gala",
    category: "corporate",
    categoryLabel: "Corporate Gala & Summit",
    location: "The Glasshouse Penthouse, Manhattan, NY",
    date: "April 2026",
    guestCount: 260,
    budgetBracket: "$240,000+",
    heroImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    ],
    tagline: "Celebrating a unicorn IPO with skyline vistas, illuminated ice installations, and bespoke mixology.",
    description: "An evening at 70 floors above Manhattan celebrating ten years of fintech disruption. Featuring an interactive liquid nitrogen mixology laboratory, curated caviar tasting flight, and panoramic Hudson River projections.",
    challenges: "Strict load-in freight elevator windows in midtown Manhattan; precise sound containment to comply with city noise ordinances while delivering club-grade audio acoustics.",
    palette: [
      { name: "Gotham Obsidian", hex: "#0E131F" },
      { name: "Burnished Gold", hex: "#D4AF37" },
      { name: "Skyline Platinum", hex: "#CBD5E1" },
      { name: "Cobalt Depth", hex: "#1A365D" }
    ],
    metrics: {
      planningTime: "4 Months",
      vendorsCurated: 27,
      sustainabilityRating: "100% Food Rescue Redistribution Partner"
    },
    clientQuote: {
      text: "Lumina elevated our IPO celebration into an historic night our investors and founders are still raving about.",
      author: "David Zhao",
      title: "Founding Partner, Apex Ventures"
    }
  }
];
const SERVICES = [
  {
    id: "full-service",
    title: "Bespoke Full-Service Production",
    tagline: "Complete end-to-end creative direction, architectural scenography, and white-glove execution.",
    idealFor: "Weddings, multi-day celebrations, and marquee corporate summits requiring meticulous master planning.",
    leadTime: "6 to 14 Months",
    startingFrom: "$18,000 Design Fee / 15% Production Budget",
    features: [
      "Dedicated Senior Producer & Lead Spatial Designer",
      "Bespoke 3D Floorplans, Spatial CAD & Virtual Reality Walkthroughs",
      "Curated Vendor Procurement, Contract Negotiation & Risk Auditing",
      "Complete Budget Management & Real-Time Financial Ledger",
      "Gastronomy, Wine Pairing & Culinary Direction with Tastings",
      "Custom Scenography, Custom Floral Installations & Architectural Lighting",
      "Minute-by-Minute Master Run-of-Show & Safety Compliance Blueprint",
      "Unlimited On-Site Production Team from Load-In through Strike"
    ]
  },
  {
    id: "design-curation",
    title: "Aesthetic Design & Curated Sourcing",
    tagline: "For clients who have secured their venue and wish to elevate the visual narrative and guest atmosphere.",
    idealFor: "Brand launches, galas, and design-centric milestone celebrations.",
    leadTime: "4 to 8 Months",
    startingFrom: "$9,500 Creative Direction",
    features: [
      "Custom Editorial Moodboards & Color Palette Conceptualization",
      "Tablescape, Linen, Glassware & Furniture Curation",
      "Bespoke Floral Direction & Sample Mockup Sessions",
      "Stationery, Typography & Graphic Identity Styling",
      "Vendor Recommendations from our Private Atelier Roster",
      "Final 6-Week Production Handover & Logistics Review",
      "Full Day-Of Aesthetic Styling & Spatial Supervision"
    ]
  },
  {
    id: "executive-direction",
    title: "Executive Month-Of Direction",
    tagline: "Precision handover, vendor alignment, and logistical mastery during the crucial final countdown.",
    idealFor: "Clients who completed initial bookings and require flawless execution on the day.",
    leadTime: "2 to 3 Months",
    startingFrom: "$4,800 Coordination",
    features: [
      "Comprehensive Contract & Vendor Review at 60 Days Out",
      "Final Venue Walkthrough & Load-In Schedule Orchestration",
      "Master Timeline Distribution to All Stakeholders & Performers",
      "Rehearsal Direction & VIP Protocol Coordination",
      "14 Hours of Continuous On-Site Day-Of Management",
      "Complete Production Emergency Kit & Rapid Problem Resolution"
    ]
  }
];
const PRODUCTION_PHASES = [
  {
    phase: "01",
    title: "Vision & Spatial Architecture",
    tagline: "Translating your narrative into spatial blueprints and moodboards.",
    duration: "Weeks 1 - 4",
    deliverables: [
      "Creative Discovery Deep-Dive & Vibe Persona",
      "Architectural Site Inspection & Spatial Feasibility Analysis",
      "Comprehensive Budget Model & Investment Distribution Matrix",
      "Curated Venue Shortlist & Private Property Access"
    ],
    highlight: "We don't do templated themes. Every spatial concept is tailored specifically to your story and architectural context."
  },
  {
    phase: "02",
    title: "Curation & Sensory Design",
    tagline: "Assembling an elite team of artisans, culinary masters, and floral sculptors.",
    duration: "Weeks 5 - 16",
    deliverables: [
      "Private Vendor Casting & Contract Safeguards",
      "Chef-Led Menu Tastings & Wine Pairings",
      "3D Renderings & Floral Centerpiece Mockup Studio Sessions",
      "Custom Fabrication Sourcing (Lighting, Furniture, Staging)"
    ],
    highlight: "Exclusive access to Lumina's invite-only vendor network, securing wholesale preferential pricing and guaranteed tier-1 staffing."
  },
  {
    phase: "03",
    title: "The Logistical Blueprint",
    tagline: "Forensic scheduling where every second and load-in movement is accounted for.",
    duration: "Weeks 17 - 24",
    deliverables: [
      "Minute-by-Minute Master Run-of-Show Protocol",
      "Load-In / Strike Power Blueprints & City Permitting",
      "VIP Transportation, Hospitality & Concierge Schedules",
      "Weather Contingency Plan Alpha & Beta Frameworks"
    ],
    highlight: "We prepare for every variable. Our dual-path contingency framework guarantees an equally stunning celebration regardless of weather."
  },
  {
    phase: "04",
    title: "White-Glove Orchestration",
    tagline: "You celebrate as an honored guest while our command team operates invisibly.",
    duration: "Event Day & Beyond",
    deliverables: [
      "Multi-Producer On-Site Command Post with Radio Comms",
      "Vendor Coordination, Sound Checks & Cue Orchestration",
      "Personal VIP Concierge for the Hosts & Key Honorees",
      "Post-Event Vendor Settlement, Strike Audit & Gift Custody"
    ],
    highlight: "Zero stress. Zero interruptions. Total presence to immerse yourself in the memories of a lifetime."
  }
];
const MOODBOARD_THEMES = [
  {
    id: "gilded-obsidian",
    name: "Gilded Obsidian Noir",
    subtitle: "Architectural, Dramatic & Unapologetically Luxurious",
    description: "Deep carbon velvet textures framed with brushed champagne brass, structural dark calla lilies, amber uplighting, and smoky crystal stemware.",
    colors: ["#0B0F17", "#D4AF37", "#2D2622", "#F2E8DC"],
    idealFor: "Black-Tie Galas, Winter Weddings, Tech Unicorn Summits",
    stems: "Black Baccara Roses, Chocolate Cosmos, Gold-Dipped Monstera, Anthurium",
    lighting: "Warm 2200K Low Filament Candlelight with Amber Architectural Wall-Grazing",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tuscan-terracotta",
    name: "Tuscan Sun & Olive",
    subtitle: "Organic Heritage, Warm Stonework & Provençal Warmth",
    description: "Sun-drenched terracotta pavers, aged travertine, sprawling olive branch pergolas, unbleached heavy linen runners, and bespoke hand-painted ceramic ware.",
    colors: ["#2F3E30", "#C87854", "#DDA15E", "#FAF4EB"],
    idealFor: "Destination Celebrations, Intimate Vineyard Banquets, Anniversary Salons",
    stems: "Tuscan Olive Foliage, Café au Lait Dahlias, Garden Spray Roses, Dried Pampas",
    lighting: "Festoon Golden Hour String Lamps with 300+ Floating Table Tapers",
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ethereal-cloud",
    name: "Luminescent Cloud & Pearl",
    subtitle: "Romantic, Weightless & Timelessly Elegant",
    description: "Frosted glass accents, cascading white wisteria and baby's breath clouds, ivory silk draping, mother-of-pearl cutlery, and delicate mirrored runways.",
    colors: ["#0E141D", "#E0E7FF", "#C5B4E3", "#FFFFFF"],
    idealFor: "Spring & Summer Unions, High-Jewelry Salons, Coastal Private Estates",
    stems: "White French Ranunculus, Cascading Orchids, Hydrangea Clouds, Sweet Pea",
    lighting: "Cool Moonlit Blue-Silver Overhead Washes with Warm Glow Accent Tapers",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "modern-botanica",
    name: "Verdant Glasshouse Botanica",
    subtitle: "Greenhouse Splendor, Living Foliage & Contemporary Botanical Design",
    description: "Towering fiddle leaf figs, suspended moss chandeliers, industrial glass architecture, warm copper cutlery, and artisanal botanical infusions.",
    colors: ["#14281D", "#7B904B", "#E3CAA5", "#F7F9F6"],
    idealFor: "Contemporary Orangeries, Rooftop Garden Soirées, Spring Galas",
    stems: "Monstera Deliciosa, Maidenhair Ferns, White Peonies, Flowering Eucalyptus",
    lighting: "Diffuse Natural Sky Light supplemented by Hidden Warm Canopy Spotlights",
    heroImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80"
  }
];
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Lumina executed our 3-day wedding across Lake Como with surgical precision. When an unexpected thunderstorm threatened our open terrace reception, their team executed Plan B seamlessly in 20 minutes without any guest noticing.",
    author: "Elena Rostova & Julian Vance",
    event: "Lake Como Wedding (180 Guests)",
    location: "Villa Balbiano, Italy",
    rating: 5,
    pressQuote: "Featured in Vogue Weddings Best International Celebrations"
  },
  {
    id: 2,
    quote: "Our board gave us 8 weeks to produce a 500-person global investor summit in San Francisco. Lumina handled production, security, Michelin catering, and staging flawlessly. They redefined what a corporate summit can feel like.",
    author: "Marcus Thorne",
    event: "Enterprise Tech Global Keynote (520 Guests)",
    location: "Pier 48, San Francisco",
    rating: 5,
    pressQuote: "Covered by Forbes Business of Luxury"
  },
  {
    id: 3,
    quote: "Planning our 50th private family anniversary in Provence felt daunting from New York. Lumina's 3D renderings and transparent budgeting gave us total confidence. The final evening under the cypress trees was pure poetry.",
    author: "Henri & Beatrice Delacroix",
    event: "Estate Vintage Soirée (65 Guests)",
    location: "Château de Miraval, France",
    rating: 5,
    pressQuote: "Named Top Boutique Planner by Harper's Bazaar"
  }
];
const FAQS = [
  {
    question: "How far in advance should we engage Lumina & Co.?",
    answer: "For luxury weddings and large-scale corporate summits, we recommend booking 8 to 14 months in advance to secure top-tier venues and artisan partners. For private milestone events and corporate galas, a minimum of 3 to 6 months is standard. We take a limited portfolio of only 15 major productions per year to maintain uncompromising quality."
  },
  {
    question: "How does Lumina handle budgeting and pricing transparency?",
    answer: "We believe in radical clarity. Our client proposals clearly separate our management and design fees from direct vendor costs. You never face surprise markups: all vendor invoices and contracts are shared openly through your dedicated digital client portal."
  },
  {
    question: "Do you plan destination events internationally?",
    answer: "Yes, approximately 65% of our events are destination celebrations. We maintain active ateliers and producer alliances in New York, London, Paris, the French Riviera, Tuscany, and Lake Como, fully fluent in local permitting, logistics, and bilingual negotiations."
  },
  {
    question: "Can we bring our own vendors, or must we use your network?",
    answer: "You are welcome to introduce specific vendors (such as a personal family photographer or favored musical act). We audit every external vendor for insurance, technical capability, and schedule alignment to ensure seamless harmony with our master production blueprint."
  },
  {
    question: "What is your weather contingency and emergency protocol?",
    answer: "Every single outdoor celebration is designed with two parallel production blueprints: Plan Alpha (fair weather) and Plan Beta (sheltered/glasshouse/draped). Plan Beta is never an afterthought; we design it with the same lighting, floral drama, and acoustic standards as Plan Alpha."
  },
  {
    question: "What is the next step to explore working together?",
    answer: "Use our interactive Event Estimator or Consultation Scheduler below to submit your event date, expected guest count, and creative vision. Our partners will review your inquiry within 24 business hours to schedule a complimentary 30-minute discovery consultation."
  }
];
const state = {
  estimator: {
    eventType: 'wedding',
    guestCount: 150,
    serviceLevel: 'full',
    selectedAddons: ['catering', 'scenography']
  },
  portfolioFilter: 'all',
  activePhase: 0,
  activeMoodboard: 'gilded-obsidian',
  wizard: {
    currentStep: 1,
    formData: {
      eventType: 'wedding',
      targetDate: '',
      guestCount: '150',
      venueStatus: 'secured',
      vibe: 'Modern Black-Tie',
      budgetBracket: '$100k-$200k',
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      consultationType: 'virtual',
      visionNotes: ''
    }
  }
};
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initEstimator();
  renderPortfolio();
  initPortfolioModal();
  initProcessSwitcher();
  initMoodboard();
  renderTestimonials();
  renderFaqs();
  initWizard();
  initMobileDrawer();
  initNewsletter();
});
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✦</span> <div>${message}</div>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
function initEstimator() {
  const typePills = document.querySelectorAll('[data-event-type]');
  const guestSlider = document.getElementById('guestSlider');
  const guestCountDisplay = document.getElementById('guestCountDisplay');
  const servicePills = document.querySelectorAll('[data-service-level]');
  const addonCards = document.querySelectorAll('.addon-card');
  const consultWithScopeBtn = document.getElementById('consultWithScopeBtn');
  typePills.forEach(pill => {
    pill.addEventListener('click', () => {
      typePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.estimator.eventType = pill.dataset.eventType;
      calculateEstimator();
    });
  });
  if (guestSlider) {
    guestSlider.addEventListener('input', (e) => {
      const count = parseInt(e.target.value, 10);
      state.estimator.guestCount = count;
      if (guestCountDisplay) {
        guestCountDisplay.textContent = `${count} Guests`;
      }
      calculateEstimator();
    });
  }
  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      servicePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.estimator.serviceLevel = pill.dataset.serviceLevel;
      calculateEstimator();
    });
  });
  addonCards.forEach(card => {
    card.addEventListener('click', () => {
      const addonKey = card.dataset.addon;
      card.classList.toggle('selected');
      if (card.classList.contains('selected')) {
        if (!state.estimator.selectedAddons.includes(addonKey)) {
          state.estimator.selectedAddons.push(addonKey);
        }
      } else {
        state.estimator.selectedAddons = state.estimator.selectedAddons.filter(k => k !== addonKey);
      }
      calculateEstimator();
    });
  });
  if (consultWithScopeBtn) {
    consultWithScopeBtn.addEventListener('click', () => {
      state.wizard.formData.eventType = state.estimator.eventType;
      state.wizard.formData.guestCount = state.estimator.guestCount.toString();
      const typeSelect = document.getElementById('wizEventType');
      const guestsInput = document.getElementById('wizGuestCount');
      const budgetSelect = document.getElementById('wizBudgetBracket');
      if (typeSelect) typeSelect.value = state.estimator.eventType;
      if (guestsInput) guestsInput.value = state.estimator.guestCount;
      if (budgetSelect && state.estimator.lastCalculatedTotal) {
        const total = state.estimator.lastCalculatedTotal;
        let bracket = '$100,000 - $200,000';
        if (total < 100000) bracket = '$50,000 - $100,000';
        else if (total < 200000) bracket = '$100,000 - $200,000';
        else if (total < 400000) bracket = '$200,000 - $400,000';
        else bracket = '$400,000+';
        budgetSelect.value = bracket;
        state.wizard.formData.budgetBracket = bracket;
      }
      showToast("Estimator parameters transferred to Consultation Scheduler!");
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  calculateEstimator();
}
function calculateEstimator() {
  const { eventType, guestCount, serviceLevel, selectedAddons } = state.estimator;
  const baseRates = {
    wedding: { base: 65000, perGuest: 350 },
    corporate: { base: 45000, perGuest: 260 },
    private: { base: 32000, perGuest: 290 },
    brand: { base: 55000, perGuest: 320 }
  };
  const levelMultipliers = {
    full: 1.0,
    design: 0.65,
    direction: 0.38
  };
  const addonPrices = {
    catering: 12000 + (guestCount * 95),
    scenography: 16000,
    entertainment: 18000,
    cinema: 9500,
    concierge: 8500
  };
  const currentRate = baseRates[eventType] || baseRates.wedding;
  const rawCore = (currentRate.base + (guestCount * currentRate.perGuest)) * levelMultipliers[serviceLevel];
  let addonTotal = 0;
  selectedAddons.forEach(addon => {
    if (addonPrices[addon]) {
      addonTotal += addonPrices[addon];
    }
  });
  const grandTotal = rawCore + addonTotal;
  state.estimator.lastCalculatedTotal = grandTotal;
  const lowEst = Math.round((grandTotal * 0.92) / 1000) * 1000;
  const highEst = Math.round((grandTotal * 1.15) / 1000) * 1000;
  const priceDisplay = document.getElementById('estimatedPriceRange');
  if (priceDisplay) {
    priceDisplay.textContent = `$${lowEst.toLocaleString()} – $${highEst.toLocaleString()}`;
  }
  const scopeType = document.getElementById('scopeEventType');
  const scopeGuests = document.getElementById('scopeGuestCount');
  const scopeLevel = document.getElementById('scopeServiceLevel');
  const typeLabels = {
    wedding: 'Bespoke Wedding',
    corporate: 'Corporate Gala',
    private: 'Milestone Soirée',
    brand: 'Brand Showcase'
  };
  const levelLabels = {
    full: 'Full-Service Production',
    design: 'Design & Curation',
    direction: 'Executive Direction'
  };
  if (scopeType) scopeType.textContent = typeLabels[eventType] || 'Bespoke Event';
  if (scopeGuests) scopeGuests.textContent = `${guestCount} Attendees`;
  if (scopeLevel) scopeLevel.textContent = levelLabels[serviceLevel] || 'Full Service';
  const allocMgmt = document.getElementById('allocMgmt');
  const allocVenue = document.getElementById('allocVenue');
  const allocDecor = document.getElementById('allocDecor');
  const allocMedia = document.getElementById('allocMedia');
  if (allocMgmt) allocMgmt.textContent = `$${Math.round(grandTotal * 0.20).toLocaleString()}`;
  if (allocVenue) allocVenue.textContent = `$${Math.round(grandTotal * 0.42).toLocaleString()}`;
  if (allocDecor) allocDecor.textContent = `$${Math.round(grandTotal * 0.23).toLocaleString()}`;
  if (allocMedia) allocMedia.textContent = `$${Math.round(grandTotal * 0.15).toLocaleString()}`;
}
function renderPortfolio() {
  const container = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!container) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.portfolioFilter = btn.dataset.filter;
      displayFilteredItems();
    });
  });
  displayFilteredItems();
}
function displayFilteredItems() {
  const container = document.getElementById('portfolioGrid');
  if (!container) return;
  const filtered = state.portfolioFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === state.portfolioFilter);
  container.innerHTML = filtered.map(item => `
    <div class="portfolio-card" data-portfolio-id="${item.id}">
      <div class="card-image-box">
        <img src="${item.heroImage}" alt="${item.title}" loading="lazy" />
        <span class="card-category-badge">${item.categoryLabel}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>📍 ${item.location}</span>
          <span>•</span>
          <span>👥 ${item.guestCount} Guests</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-tagline">${item.tagline}</p>
        <div class="card-footer">
          <div class="palette-swatches">
            ${item.palette.map(p => `
              <span class="palette-circle" style="background-color: ${p.hex}" title="${p.name}"></span>
            `).join('')}
          </div>
          <span class="view-case-study">View Case Study →</span>
        </div>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.portfolioId;
      openPortfolioModal(id);
    });
  });
}
function initPortfolioModal() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}
function openPortfolioModal(itemId) {
  const item = PORTFOLIO_ITEMS.find(p => p.id === itemId);
  const modal = document.getElementById('caseStudyModal');
  if (!item || !modal) return;
  document.getElementById('modalHeroImg').src = item.heroImage;
  document.getElementById('modalHeroImg').alt = item.title;
  document.getElementById('modalCategory').textContent = item.categoryLabel;
  document.getElementById('modalLocation').textContent = item.location;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalDescription').textContent = item.description;
  document.getElementById('modalChallenges').textContent = item.challenges;
  document.getElementById('modalPlanningTime').textContent = item.metrics.planningTime;
  document.getElementById('modalVendorsCount').textContent = item.metrics.vendorsCurated;
  document.getElementById('modalSustainability').textContent = item.metrics.sustainabilityRating;
  const paletteContainer = document.getElementById('modalPaletteChips');
  if (paletteContainer) {
    paletteContainer.innerHTML = item.palette.map(p => `
      <div class="palette-chip">
        <span class="chip-circle" style="background-color: ${p.hex}"></span>
        <div class="chip-text">
          <span>${p.name}</span>
          <small>${p.hex}</small>
        </div>
      </div>
    `).join('');
  }
  document.getElementById('modalQuoteText').textContent = `"${item.clientQuote.text}"`;
  document.getElementById('modalQuoteAuthor').textContent = `${item.clientQuote.author} — ${item.clientQuote.title}`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function initProcessSwitcher() {
  const stepBtns = document.querySelectorAll('.process-step-btn');
  if (!stepBtns.length) return;
  stepBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      stepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activePhase = index;
      renderActiveProcessPhase();
    });
  });
  renderActiveProcessPhase();
}
function renderActiveProcessPhase() {
  const phase = PRODUCTION_PHASES[state.activePhase];
  if (!phase) return;
  const badge = document.getElementById('processPhaseBadge');
  const title = document.getElementById('processPhaseTitle');
  const tagline = document.getElementById('processPhaseTagline');
  const list = document.getElementById('processDeliverablesList');
  const highlight = document.getElementById('processHighlightText');
  if (badge) badge.textContent = `PHASE ${phase.phase} • ${phase.duration}`;
  if (title) title.textContent = phase.title;
  if (tagline) tagline.textContent = phase.tagline;
  if (highlight) highlight.textContent = phase.highlight;
  if (list) {
    list.innerHTML = phase.deliverables.map(item => `
      <li>${item}</li>
    `).join('');
  }
}
function initMoodboard() {
  const tabs = document.querySelectorAll('.moodboard-tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeMoodboard = tab.dataset.theme;
      renderMoodboard();
    });
  });
  renderMoodboard();
}
function renderMoodboard() {
  const theme = MOODBOARD_THEMES.find(t => t.id === state.activeMoodboard);
  if (!theme) return;
  document.getElementById('moodboardImg').src = theme.heroImage;
  document.getElementById('moodboardTitle').textContent = theme.name;
  document.getElementById('moodboardSubtitle').textContent = theme.subtitle;
  document.getElementById('moodboardDesc').textContent = theme.description;
  document.getElementById('moodboardIdeal').textContent = theme.idealFor;
  document.getElementById('moodboardStems').textContent = theme.stems;
  document.getElementById('moodboardLighting').textContent = theme.lighting;
  const colorStrip = document.getElementById('moodboardColorStrip');
  if (colorStrip) {
    colorStrip.innerHTML = theme.colors.map(hex => `
      <span class="palette-circle" style="background-color: ${hex}; width: 26px; height: 26px;" title="${hex}"></span>
    `).join('');
  }
}
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;
  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="star-rating">★★★★★</div>
        <p class="testimonial-quote">"${t.quote}"</p>
      </div>
      <div class="testimonial-author-box">
        <h4 class="author-name">${t.author}</h4>
        <p class="author-event">${t.event} • ${t.location}</p>
        <p class="press-endorsement">${t.pressQuote}</p>
      </div>
    </div>
  `).join('');
}
function renderFaqs() {
  const container = document.getElementById('faqList');
  if (!container) return;
  container.innerHTML = FAQS.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question-btn">
        <span>${faq.question}</span>
        <span class="faq-toggle-icon">+</span>
      </button>
      <div class="faq-answer-pane">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isOpen = parent.classList.contains('active');
      container.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!isOpen) {
        parent.classList.add('active');
      }
    });
  });
}
function initWizard() {
  const stepPanels = document.querySelectorAll('.wizard-step-panel');
  const progressNodes = document.querySelectorAll('.progress-node');
  const progressLineActive = document.getElementById('wizardProgressActive');
  const nextStep1Btn = document.getElementById('wizNextStep1');
  const prevStep2Btn = document.getElementById('wizPrevStep2');
  const nextStep2Btn = document.getElementById('wizNextStep2');
  const prevStep3Btn = document.getElementById('wizPrevStep3');
  const submitBookingBtn = document.getElementById('wizSubmitBooking');
  const vibeChips = document.querySelectorAll('[data-vibe-choice]');
  vibeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      vibeChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      state.wizard.formData.vibe = chip.dataset.vibeChoice;
    });
  });
  if (nextStep1Btn) {
    nextStep1Btn.addEventListener('click', () => {
      const eventType = document.getElementById('wizEventType').value;
      const targetDate = document.getElementById('wizTargetDate').value.trim();
      const guestCount = document.getElementById('wizGuestCount').value;
      const venueStatus = document.getElementById('wizVenueStatus').value;
      if (!targetDate) {
        showToast("Please provide your target date or season to continue.");
        document.getElementById('wizTargetDate').focus();
        return;
      }
      state.wizard.formData.eventType = eventType;
      state.wizard.formData.targetDate = targetDate;
      state.wizard.formData.guestCount = guestCount;
      state.wizard.formData.venueStatus = venueStatus;
      goToStep(2);
    });
  }
  if (prevStep2Btn) {
    prevStep2Btn.addEventListener('click', () => goToStep(1));
  }
  if (nextStep2Btn) {
    nextStep2Btn.addEventListener('click', () => {
      const budgetBracket = document.getElementById('wizBudgetBracket').value;
      state.wizard.formData.budgetBracket = budgetBracket;
      goToStep(3);
    });
  }
  if (prevStep3Btn) {
    prevStep3Btn.addEventListener('click', () => goToStep(2));
  }
  if (submitBookingBtn) {
    submitBookingBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('wizClientName').value.trim();
      const email = document.getElementById('wizClientEmail').value.trim();
      const phone = document.getElementById('wizClientPhone').value.trim();
      const type = document.getElementById('wizConsultType').value;
      const notes = document.getElementById('wizVisionNotes').value.trim();
      if (!name || name.length < 2) {
        showToast("Please provide your full name (at least 2 characters).");
        document.getElementById('wizClientName').focus();
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showToast("Please enter a valid email address (e.g. name@domain.com).");
        document.getElementById('wizClientEmail').focus();
        return;
      }
      state.wizard.formData.clientName = name;
      state.wizard.formData.clientEmail = email;
      state.wizard.formData.clientPhone = phone;
      state.wizard.formData.consultationType = type;
      state.wizard.formData.visionNotes = notes;
      renderConfirmation();
      goToStep(4);
      showToast("VIP Consultation Request Received!");
    });
  }
  function goToStep(stepNumber) {
    state.wizard.currentStep = stepNumber;
    stepPanels.forEach(panel => {
      panel.classList.remove('active');
      if (parseInt(panel.dataset.step, 10) === stepNumber) {
        panel.classList.add('active');
      }
    });
    progressNodes.forEach((node, idx) => {
      const nodeStep = idx + 1;
      node.classList.remove('active', 'completed');
      if (nodeStep === stepNumber) {
        node.classList.add('active');
      } else if (nodeStep < stepNumber) {
        node.classList.add('completed');
      }
    });
    if (progressLineActive) {
      const pct = ((stepNumber - 1) / (progressNodes.length - 1)) * 100;
      progressLineActive.style.width = `${pct}%`;
    }
  }
  function renderConfirmation() {
    const data = state.wizard.formData;
    const refCode = `LUM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const refElem = document.getElementById('confirmedRefCode');
    const summaryBox = document.getElementById('confirmedSummaryDetails');
    if (refElem) refElem.textContent = `Reference: ${refCode}`;
    if (summaryBox) {
      summaryBox.innerHTML = `
        <div class="scope-row"><span>Client:</span> <strong>${data.clientName}</strong></div>
        <div class="scope-row"><span>Email:</span> <strong>${data.clientEmail}</strong></div>
        <div class="scope-row"><span>Event Typology:</span> <strong style="text-transform: capitalize;">${data.eventType}</strong></div>
        <div class="scope-row"><span>Guest Count:</span> <strong>${data.guestCount} Guests</strong></div>
        <div class="scope-row"><span>Desired Aesthetic:</span> <strong>${data.vibe}</strong></div>
        <div class="scope-row"><span>Target Budget Bracket:</span> <strong>${data.budgetBracket}</strong></div>
        <div class="scope-row"><span>Consultation Format:</span> <strong style="text-transform: capitalize;">${data.consultationType} Atelier Call</strong></div>
      `;
    }
    const printBtn = document.getElementById('printConfirmationBtn');
    if (printBtn) {
      printBtn.onclick = () => window.print();
    }
  }
}
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const overlay = document.getElementById('drawerOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value) {
      showToast("Thank you for joining Lumina Private Gazette.");
      input.value = '';
    }
  });
}
})();