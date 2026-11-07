/**
 * Exclusive EVENTKN - Master Dataset
 * Structured data for services, portfolio, FAQs, and testimonials
 */

export const SERVICES = [
  {
    id: "weddings-bridal",
    title: "Weddings & Bridal Events",
    tagline: "Traditional and modern bridal ceremony styling, decor, and complete event planning.",
    idealFor: "Couples looking for a memorable, elegant wedding celebration.",
    leadTime: "Advance booking recommended",
    features: [
      "Traditional & modern bridal ceremony decor",
      "Full wedding design, stage setup & backdrop styling",
      "Reception tablescapes, floral arrangements & ambient lighting",
      "Vendor coordination and day-of event management"
    ]
  },
  {
    id: "birthdays-celebrations",
    title: "Birthday Parties & Kids' Celebrations",
    tagline: "Creative themed birthday parties, colorful setups, and unforgettable milestones.",
    idealFor: "Milestone birthdays, kids' themed celebrations, and family gatherings.",
    leadTime: "Advance booking recommended",
    features: [
      "Custom theme design & creative backdrops",
      "Balloon garlands, props, and decorative styling",
      "Kids' entertainment zones and customized party setups",
      "Cake tables and dessert display styling"
    ]
  },
  {
    id: "favours-experiences",
    title: "Favours & Curated Guest Experiences",
    tagline: "Thoughtful gift packaging, luxury party favours, and personalized keepsakes for your guests.",
    idealFor: "Guests at weddings, birthdays, and special milestones.",
    leadTime: "Advance booking recommended",
    features: [
      "Custom branded gift packaging and presentation",
      "Personalized souvenir boxes and luxury items",
      "Curated welcome packages for guests",
      "Coordinated thematic ribbons and stationery"
    ]
  },
  {
    id: "full-event-design",
    title: "Full Event Design & Decor Curation",
    tagline: "End-to-end styling, spatial design, and coordination to bring your vision to life.",
    idealFor: "Any private or special occasion seeking cohesive luxury decor.",
    leadTime: "Advance booking recommended",
    features: [
      "Concept development & custom color palette styling",
      "Furniture, drapery, and spatial lighting coordination",
      "Complete venue transformation and stage decoration",
      "Seamless on-site setup and breakdown supervision"
    ]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: "wedding-celebration-1",
    title: "Bridal Ceremony & Reception",
    category: "weddings",
    categoryLabel: "Weddings & Bridal",
    location: "Kano",
    date: "Recent Event",
    heroImage: "./public/images/portfolio/wedding-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    tagline: "Elegant bridal staging with floral backdrops and ambient lighting.",
    description: "A luxury wedding styling featuring delicate floral arrangements, custom sweetheart stage, and warm ambient lighting tailored for a memorable day.",
    placeholderSlot: "/public/images/portfolio/wedding-1.jpg",
    details: "[ADD DETAILS]"
  },
  {
    id: "wedding-celebration-2",
    title: "Traditional Ceremony Styling",
    category: "weddings",
    categoryLabel: "Weddings & Bridal",
    location: "Available for travel",
    date: "Recent Event",
    heroImage: "./public/images/portfolio/wedding-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    tagline: "Rich cultural ceremony decor with modern luxury accents.",
    description: "Traditional bridal and ceremony styling combining authentic cultural elegance with contemporary luxury decor.",
    placeholderSlot: "/public/images/portfolio/wedding-2.jpg",
    details: "[ADD DETAILS]"
  },
  {
    id: "birthday-celebration-1",
    title: "Themed Milestone Birthday Party",
    category: "birthdays",
    categoryLabel: "Birthdays & Kids",
    location: "Kano",
    date: "Recent Event",
    heroImage: "./public/images/portfolio/birthday-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Vibrant custom balloon installations and themed dessert tables.",
    description: "Custom party design featuring creative photo backdrops, balloon styling, and tailored celebration elements.",
    placeholderSlot: "/public/images/portfolio/birthday-1.jpg",
    details: "[ADD DETAILS]"
  },
  {
    id: "birthday-celebration-2",
    title: "Kids' Dream Wonderland Party",
    category: "birthdays",
    categoryLabel: "Birthdays & Kids",
    location: "Available for travel",
    date: "Recent Event",
    heroImage: "./public/images/portfolio/birthday-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    tagline: "Playful, magical decor designed to create smiles and joy.",
    description: "Fun, immersive birthday setup with themed decorations, personalized gift bags, and colorful party styling.",
    placeholderSlot: "/public/images/portfolio/birthday-2.jpg",
    details: "[ADD DETAILS]"
  },
  {
    id: "favours-curation-1",
    title: "Curated Luxury Guest Favours",
    category: "favours",
    categoryLabel: "Favours & Gifts",
    location: "Available for travel",
    date: "Recent Event",
    heroImage: "./public/images/portfolio/favours-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    tagline: "Custom packaged keepsakes and gifts for honored guests.",
    description: "Thoughtfully curated guest favours featuring luxury gift boxes, custom ribbons, and personalized details.",
    placeholderSlot: "/public/images/portfolio/favours-1.jpg",
    details: "[ADD DETAILS]"
  },
  {
    id: "favours-curation-2",
    title: "Bespoke Event Gift Boxes",
    category: "favours",
    categoryLabel: "Favours & Gifts",
    location: "Available for travel",
    date: "Recent Event",
    heroImage: "./public/images/portfolio/favours-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    tagline: "Artisan guest gift bags and tailored event hampers.",
    description: "Personalized welcome boxes and ceremony favours created to leave a lasting impression on your guests.",
    placeholderSlot: "/public/images/portfolio/favours-2.jpg",
    details: "[ADD DETAILS]"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "[ADD REAL CLIENT REVIEW]",
    author: "[ADD CLIENT NAME]",
    event: "Wedding Celebration",
    location: "Kano"
  },
  {
    id: 2,
    quote: "[ADD REAL CLIENT REVIEW]",
    author: "[ADD CLIENT NAME]",
    event: "Birthday Celebration",
    location: "Kano"
  }
];

export const FAQS = [
  {
    question: "How do I book a consultation?",
    answer: "You can reach out directly via WhatsApp at +234 813 006 9819 or send an email to exclusiveeventkn01@gmail.com. We will discuss your event date, theme, and requirements to get started."
  },
  {
    question: "Are you available for events outside Kano?",
    answer: "Yes, Exclusive EVENTKN is available for travel to plan and style events."
  },
  {
    question: "What types of events do you plan?",
    answer: "We specialize in weddings and bridal events, birthday parties and kids' celebrations, curated guest favours, and full event design and decor."
  },
  {
    question: "How far in advance should we contact you?",
    answer: "We recommend booking as early as possible so we can secure your preferred date and plan every detail with care."
  },
  {
    question: "Can we share our own ideas and themes?",
    answer: "Absolutely! We love bringing your personal vision to life with custom styling, color palettes, and unique touches."
  }
];
