/**
 * Lumina & Co. Events - Master Application Logic
 * Interactive Investment Estimator, Portfolio Modals, Multi-Step Booking Wizard, Moodboards
 */

import {
  PORTFOLIO_ITEMS,
  SERVICES,
  PRODUCTION_PHASES,
  MOODBOARD_THEMES,
  TESTIMONIALS,
  FAQS
} from './data.js';

// Global Application State
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

// ==========================================================================
// Initialization
// ==========================================================================
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

// ==========================================================================
// Sticky Navbar & Smooth Scrolling
// ==========================================================================
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

// ==========================================================================
// Toast Notifications
// ==========================================================================
export function showToast(message) {
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

// ==========================================================================
// Interactive Event Investment Estimator (P0)
// ==========================================================================
function initEstimator() {
  const typePills = document.querySelectorAll('[data-event-type]');
  const guestSlider = document.getElementById('guestSlider');
  const guestCountDisplay = document.getElementById('guestCountDisplay');
  const servicePills = document.querySelectorAll('[data-service-level]');
  const addonCards = document.querySelectorAll('.addon-card');
  const consultWithScopeBtn = document.getElementById('consultWithScopeBtn');

  // Event Type click
  typePills.forEach(pill => {
    pill.addEventListener('click', () => {
      typePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.estimator.eventType = pill.dataset.eventType;
      calculateEstimator();
    });
  });

  // Guest Slider change
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

  // Service Level click
  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      servicePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.estimator.serviceLevel = pill.dataset.serviceLevel;
      calculateEstimator();
    });
  });

  // Addon Cards toggle
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

  // Prefill Consultation from Estimator
  if (consultWithScopeBtn) {
    consultWithScopeBtn.addEventListener('click', () => {
      // Transfer to wizard state
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

  // Base pricing models by event type
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

  // Render Price Tag
  const priceDisplay = document.getElementById('estimatedPriceRange');
  if (priceDisplay) {
    priceDisplay.textContent = `$${lowEst.toLocaleString()} – $${highEst.toLocaleString()}`;
  }

  // Update Scope Summary Badges
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

  // Update Allocation Breakdown Bars
  const allocMgmt = document.getElementById('allocMgmt');
  const allocVenue = document.getElementById('allocVenue');
  const allocDecor = document.getElementById('allocDecor');
  const allocMedia = document.getElementById('allocMedia');

  if (allocMgmt) allocMgmt.textContent = `$${Math.round(grandTotal * 0.20).toLocaleString()}`;
  if (allocVenue) allocVenue.textContent = `$${Math.round(grandTotal * 0.42).toLocaleString()}`;
  if (allocDecor) allocDecor.textContent = `$${Math.round(grandTotal * 0.23).toLocaleString()}`;
  if (allocMedia) allocMedia.textContent = `$${Math.round(grandTotal * 0.15).toLocaleString()}`;
}

// ==========================================================================
// Curated Portfolio (P0)
// ==========================================================================
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

  // Attach card click handlers for modal
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

  // Metrics
  document.getElementById('modalPlanningTime').textContent = item.metrics.planningTime;
  document.getElementById('modalVendorsCount').textContent = item.metrics.vendorsCurated;
  document.getElementById('modalSustainability').textContent = item.metrics.sustainabilityRating;

  // Palette
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

  // Quote
  document.getElementById('modalQuoteText').textContent = `"${item.clientQuote.text}"`;
  document.getElementById('modalQuoteAuthor').textContent = `${item.clientQuote.author} — ${item.clientQuote.title}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ==========================================================================
// The 4-Phase Lumina Method
// ==========================================================================
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

// ==========================================================================
// Interactive Moodboard & Aesthetic Visualizer
// ==========================================================================
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

// ==========================================================================
// Testimonials & FAQs
// ==========================================================================
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
      
      // Close others
      container.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      
      if (!isOpen) {
        parent.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// Multi-Step Consultation Booking Wizard (P0)
// ==========================================================================
function initWizard() {
  const stepPanels = document.querySelectorAll('.wizard-step-panel');
  const progressNodes = document.querySelectorAll('.progress-node');
  const progressLineActive = document.getElementById('wizardProgressActive');

  const nextStep1Btn = document.getElementById('wizNextStep1');
  const prevStep2Btn = document.getElementById('wizPrevStep2');
  const nextStep2Btn = document.getElementById('wizNextStep2');
  const prevStep3Btn = document.getElementById('wizPrevStep3');
  const submitBookingBtn = document.getElementById('wizSubmitBooking');

  // Vibe Selection Chips
  const vibeChips = document.querySelectorAll('[data-vibe-choice]');
  vibeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      vibeChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      state.wizard.formData.vibe = chip.dataset.vibeChoice;
    });
  });

  // Next from Step 1 to Step 2
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

  // Back from Step 2 to Step 1
  if (prevStep2Btn) {
    prevStep2Btn.addEventListener('click', () => goToStep(1));
  }

  // Next from Step 2 to Step 3
  if (nextStep2Btn) {
    nextStep2Btn.addEventListener('click', () => {
      const budgetBracket = document.getElementById('wizBudgetBracket').value;
      state.wizard.formData.budgetBracket = budgetBracket;
      goToStep(3);
    });
  }

  // Back from Step 3 to Step 2
  if (prevStep3Btn) {
    prevStep3Btn.addEventListener('click', () => goToStep(2));
  }

  // Submit Booking Form
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

      // Render Confirmation
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

// ==========================================================================
// Mobile Navigation Drawer
// ==========================================================================
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

// ==========================================================================
// Newsletter Subscription
// ==========================================================================
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

