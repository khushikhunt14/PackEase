/* PackEase Main Customer JS */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    const savedTheme = localStorage.getItem('packease_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      themeBtn.textContent = '☀️';
    } else {
      themeBtn.textContent = '🌙';
    }

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('packease_theme', isDark ? 'dark' : 'light');
    });
  }

  // 2. Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 3. FAQ Accordion Handler
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));
        // Open clicked if was closed
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Modal Overlays
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach(overlay => {
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
      });
    }
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  // 5. Quote Calculator Logic (if present on page)
  const calcBoxType = document.getElementById('calcBoxType');
  const calcQuantity = document.getElementById('calcQuantity');
  const calcMaterial = document.getElementById('calcMaterial');
  const estimateTotal = document.getElementById('estimateTotal');
  const estimateUnitPrice = document.getElementById('estimateUnitPrice');

  function calculateQuote() {
    if (!calcBoxType || !calcQuantity || !estimateTotal) return;

    const basePrices = {
      'corrugated': 25,
      'rigid': 120,
      'paperbag': 15,
      'cosmetic': 80,
      'flexible': 10,
      'labels': 5
    };

    const materialMultipliers = {
      'standard': 1.0,
      'kraft': 1.1,
      'recycled': 1.25,
      'luxury': 1.5
    };

    const selectedType = calcBoxType.value || 'corrugated';
    const selectedMat = calcMaterial ? (calcMaterial.value || 'standard') : 'standard';
    const quantity = parseInt(calcQuantity.value) || 100;

    let base = basePrices[selectedType] || 20;
    let mult = materialMultipliers[selectedMat] || 1.0;

    // Quantity Discount Tier
    let discount = 1.0;
    if (quantity >= 5000) discount = 0.65;
    else if (quantity >= 2500) discount = 0.75;
    else if (quantity >= 1000) discount = 0.85;
    else if (quantity >= 500) discount = 0.92;

    const unitPrice = Math.max(1, (base * mult * discount)).toFixed(2);
    const total = (unitPrice * quantity).toLocaleString('en-IN');

    estimateTotal.textContent = `₹${total}`;
    if (estimateUnitPrice) {
      estimateUnitPrice.textContent = `(Approx. ₹${unitPrice} / unit for ${quantity} pcs)`;
    }
  }

  if (calcBoxType) calcBoxType.addEventListener('change', calculateQuote);
  if (calcQuantity) calcQuantity.addEventListener('input', calculateQuote);
  if (calcMaterial) calcMaterial.addEventListener('change', calculateQuote);
  calculateQuote(); // Init

  // 6. Category Filter Tabs (Products Page)
  const filterBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 7. General Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your quote request has been submitted successfully.');
      contactForm.reset();
    });
  }
});

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>📦</span> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
