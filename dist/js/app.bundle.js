(function() {
'use strict';
const SERVICES = [
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
const PORTFOLIO_ITEMS = [
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
const TESTIMONIALS = [
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
const FAQS = [
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
const state = {
  portfolioFilter: 'all',
  wizard: {
    currentStep: 1,
    formData: {
      eventType: 'wedding',
      targetDate: '',
      location: '',
      guestCount: '200',
      venueStatus: 'secured',
      vibe: 'Regal Traditional & Cultural Elegance',
      scopeNeeded: 'Full Event Design & Decor Curation',
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      consultationType: 'whatsapp',
      visionNotes: ''
    }
  }
};
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderPortfolio();
  initPortfolioModal();
  renderTestimonials();
  renderFaqs();
  initWizard();
  initMobileDrawer();
  initNewsletter();
});
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
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
        <img src="${item.heroImage}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${item.fallbackImage}'" />
        <span class="card-category-badge">${item.categoryLabel}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>📍 ${item.location}</span>
          <span>•</span>
          <span>${item.date}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-tagline">${item.tagline}</p>
        <div class="card-footer">
          <span class="slot-badge">${item.placeholderSlot}</span>
          <span class="view-case-study">View Details →</span>
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
  const heroImg = document.getElementById('modalHeroImg');
  if (heroImg) {
    heroImg.src = item.heroImage;
    heroImg.alt = item.title;
    heroImg.onerror = function() {
      this.src = item.fallbackImage;
    };
  }
  const catElem = document.getElementById('modalCategory');
  if (catElem) catElem.textContent = item.categoryLabel;
  const locElem = document.getElementById('modalLocation');
  if (locElem) locElem.textContent = item.location;
  const titleElem = document.getElementById('modalTitle');
  if (titleElem) titleElem.textContent = item.title;
  const descElem = document.getElementById('modalDescription');
  if (descElem) descElem.textContent = item.description;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;
  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <strong>${t.author}</strong>
        <span>${t.event} • ${t.location}</span>
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
      const eventType = document.getElementById('wizEventType')?.value || 'wedding';
      const targetDate = document.getElementById('wizTargetDate')?.value.trim() || '';
      const location = document.getElementById('wizLocation')?.value.trim() || '';
      const guestCount = document.getElementById('wizGuestCount')?.value || '200';
      const venueStatus = document.getElementById('wizVenueStatus')?.value || 'secured';
      if (!targetDate) {
        showToast("Please provide your target date or season.");
        document.getElementById('wizTargetDate')?.focus();
        return;
      }
      if (!location) {
        showToast("Please enter your event city or state (e.g. Kano, Abuja, Lagos).");
        document.getElementById('wizLocation')?.focus();
        return;
      }
      state.wizard.formData.eventType = eventType;
      state.wizard.formData.targetDate = targetDate;
      state.wizard.formData.location = location;
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
      const scopeNeeded = document.getElementById('wizScopeNeeded')?.value || 'Full Event Design & Decor Curation';
      state.wizard.formData.scopeNeeded = scopeNeeded;
      goToStep(3);
    });
  }
  if (prevStep3Btn) {
    prevStep3Btn.addEventListener('click', () => goToStep(2));
  }
  if (submitBookingBtn) {
    submitBookingBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('wizClientName')?.value.trim() || '';
      const email = document.getElementById('wizClientEmail')?.value.trim() || '';
      const phone = document.getElementById('wizClientPhone')?.value.trim() || '';
      const type = document.getElementById('wizConsultType')?.value || 'whatsapp';
      const notes = document.getElementById('wizVisionNotes')?.value.trim() || '';
      if (!name || name.length < 2) {
        showToast("Please provide your name.");
        document.getElementById('wizClientName')?.focus();
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showToast("Please enter a valid email address.");
        document.getElementById('wizClientEmail')?.focus();
        return;
      }
      if (!phone || phone.length < 6) {
        showToast("Please provide your WhatsApp or phone number.");
        document.getElementById('wizClientPhone')?.focus();
        return;
      }
      state.wizard.formData.clientName = name;
      state.wizard.formData.clientEmail = email;
      state.wizard.formData.clientPhone = phone;
      state.wizard.formData.consultationType = type;
      state.wizard.formData.visionNotes = notes;
      renderConfirmation();
      goToStep(4);
      showToast("Consultation Request Received!");
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
    const refCode = `EEKN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const refElem = document.getElementById('confirmedRefCode');
    const summaryBox = document.getElementById('confirmedSummaryDetails');
    if (refElem) refElem.textContent = `Reference: ${refCode}`;
    const consultLabels = {
      whatsapp: 'WhatsApp Audio / Chat Consultation',
      phone: 'Direct Phone Call',
      virtual: 'Virtual Video Call (Google Meet / Zoom)',
      in_person: 'In-Person Consultation'
    };
    if (summaryBox) {
      summaryBox.innerHTML = `
        <div class="scope-row"><span>Name:</span> <strong>${data.clientName}</strong></div>
        <div class="scope-row"><span>Contact:</span> <strong>${data.clientPhone} • ${data.clientEmail}</strong></div>
        <div class="scope-row"><span>Event Type:</span> <strong style="text-transform: capitalize;">${data.eventType}</strong></div>
        <div class="scope-row"><span>Location:</span> <strong>${data.location}</strong></div>
        <div class="scope-row"><span>Target Date:</span> <strong>${data.targetDate}</strong></div>
        <div class="scope-row"><span>Guests:</span> <strong>${data.guestCount} Guests</strong></div>
        <div class="scope-row"><span>Atmosphere & Theme:</span> <strong>${data.vibe}</strong></div>
        <div class="scope-row"><span>Service Requested:</span> <strong>${data.scopeNeeded}</strong></div>
        <div class="scope-row"><span>Consultation Method:</span> <strong>${consultLabels[data.consultationType] || data.consultationType}</strong></div>
      `;
    }
    const waText = encodeURIComponent(
      `Hello Exclusive EVENTKN,\n\nI would like to book a consultation for an event.\n` +
      `Reference: ${refCode}\n` +
      `Name: ${data.clientName}\n` +
      `Event Type: ${data.eventType}\n` +
      `Location: ${data.location}\n` +
      `Target Date: ${data.targetDate}\n` +
      `Guests: ${data.guestCount}\n` +
      `Service: ${data.scopeNeeded}\n` +
      `Notes: ${data.visionNotes || 'N/A'}`
    );
    const waLinkBtn = document.getElementById('confirmWhatsAppBtn');
    if (waLinkBtn) {
      waLinkBtn.href = `https://wa.me/2348130069819?text=${waText}`;
    }
    const emailLinkBtn = document.getElementById('confirmEmailBtn');
    if (emailLinkBtn) {
      emailLinkBtn.href = `mailto:exclusiveeventkn01@gmail.com?subject=Consultation%20Inquiry%20${refCode}&body=${waText}`;
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
      showToast("Thank you for subscribing to Exclusive EVENTKN updates.");
      input.value = '';
    }
  });
}
})();