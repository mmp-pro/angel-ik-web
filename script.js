// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) scrollTopBtn.classList.add('visible');
  else scrollTopBtn.classList.remove('visible');
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 120) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== FORM SUBMIT =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Mensaje enviado con éxito! Te contactaremos pronto. 🌸');
  this.reset();
});

// ===== ZOOM / LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

const closeLightbox = () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
};
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

// ===== MODALES DE GALERÍA =====
function openModal(modalName) {
  const modal = document.getElementById('modal-' + modalName);
  if (modal) { modal.style.display = 'block'; document.body.style.overflow = 'hidden'; }
}
function closeModal(modalName) {
  const modal = document.getElementById('modal-' + modalName);
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}

// ===== SUBCATEGORÍAS =====
function openSubcategory(category) {
  const sub = document.getElementById('subcategory-' + category);
  if (sub) { sub.style.display = 'block'; document.body.style.overflow = 'hidden'; }
}
function closeSubcategory(category) {
  const sub = document.getElementById('subcategory-' + category);
  if (sub) { sub.style.display = 'none'; document.body.style.overflow = 'auto'; }
}

// ===== CONTROLADOR GLOBAL DE CIERRE (EVITA DUPLICADOS) =====
window.onclick = function(event) {
  if (!event.target.classList.contains('modal')) return;
  
  if (event.target.id.startsWith('subcategory-')) {
    closeSubcategory(event.target.id.replace('subcategory-', ''));
  } else {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

document.addEventListener('keydown', function(event) {
  if (event.key !== 'Escape') return;
  
  if (lightbox.style.display === 'flex') { closeLightbox(); return; }
  
  const sub = document.querySelector('.subcategory-modal[style*="display: block"]');
  if (sub) { closeSubcategory(sub.id.replace('subcategory-', '')); return; }
  
  const modal = document.querySelector('.modal[style*="display: block"]:not(.subcategory-modal)');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
});
