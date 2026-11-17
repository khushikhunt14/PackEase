/* PackEase Admin Panel JavaScript */

document.addEventListener('DOMContentLoaded', () => {
  // Highlight current active admin nav link
  const currentPath = window.location.pathname.split('/').pop() || 'admin-dashboard.html';
  const adminLinks = document.querySelectorAll('.admin-nav-item a');
  
  adminLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // Logout Handler
  const logoutBtns = document.querySelectorAll('.btn-logout, #adminLogoutBtn');
  logoutBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('Are you sure you want to log out of Admin Panel?')) {
        showToast('Logged out successfully. Redirecting...');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1200);
      }
    });
  });

  // Table Search Filter (Generic)
  const searchInput = document.getElementById('tableSearchInput');
  if (searchInput) {
    searchInput.addEventListener('keyup', () => {
      const filter = searchInput.value.toLowerCase();
      const rows = document.querySelectorAll('.admin-table tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
      });
    });
  }

  // Modal handlers in Admin
  const openModalBtns = document.querySelectorAll('[data-modal-target]');
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetId);
      if (targetModal) targetModal.classList.add('open');
    });
  });

  const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');
  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('open');
    });
  });

  // Dynamic Add Product Form Handler
  const addProductForm = document.getElementById('adminAddProductForm');
  if (addProductForm) {
    addProductForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pName = document.getElementById('pName').value;
      const pCategory = document.getElementById('pCategory').value;
      const pPrice = document.getElementById('pPrice').value;

      showToast(`Product "${pName}" added to catalog successfully!`);
      
      const modal = addProductForm.closest('.modal-overlay');
      if (modal) modal.classList.remove('open');
      addProductForm.reset();
    });
  }
});

// Toast Helper for Admin
function showToast(message) {
  let toast = document.getElementById('adminToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'adminToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>🛠️</span> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
