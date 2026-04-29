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

// ===== FORM SUBMIT - WHATSAPP =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('subject').value;
  const mensaje = document.getElementById('message').value;
  const whatsappNumber = '525535865673';
  const whatsappMessage = `*Nuevo mensaje de contacto* 🌸

*Nombre:* ${nombre}
*Email:* ${email}
*Asunto:* ${asunto}

*Mensaje:*
${mensaje}

---
Enviado desde Angelik-Page-Shop`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
  this.reset();
  alert('¡Gracias por contactarnos! 🌸\n\nSerás redirigido a WhatsApp para enviar tu mensaje.');
});

// ===== LIGHTBOX CON CARRUSEL =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const currentImgSpan = document.getElementById('current-img');
const totalImgsSpan = document.getElementById('total-imgs');

let currentImageIndex = 0;
let galleryImages = [];
let startX = 0;
let endX = 0;

// Abrir Lightbox con imágenes de la galería
document.querySelectorAll('.gallery-item img').forEach((img) => {
  img.addEventListener('click', () => {
    const gallery = img.closest('.modal-gallery');
    if (!gallery) return;
    galleryImages = Array.from(gallery.querySelectorAll('img'));
    currentImageIndex = galleryImages.indexOf(img);
    openLightbox(currentImageIndex);
  });
});

function openLightbox(index) {
  if (galleryImages.length === 0) return;
  currentImageIndex = index;
  updateLightboxImage();
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if (currentImgSpan && totalImgsSpan) {
    currentImgSpan.textContent = currentImageIndex + 1;
    totalImgsSpan.textContent = galleryImages.length;
  }
}

function changeImage(direction) {
  if (galleryImages.length === 0) return;
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }
  updateLightboxImage();
  if (currentImgSpan) {
    currentImgSpan.textContent = currentImageIndex + 1;
  }
}

function updateLightboxImage() {
  lightboxImg.style.opacity = '0';
  lightboxImg.style.transform = 'scale(0.95)';
  setTimeout(() => {
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxImg.alt = galleryImages[currentImageIndex].alt;
    lightboxImg.style.opacity = '1';
    lightboxImg.style.transform = 'scale(1)';
    lightboxImg.classList.add('lightbox-img-anim');
    setTimeout(() => {
      lightboxImg.classList.remove('lightbox-img-anim');
    }, 300);
  }, 150);
}

function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
  galleryImages = [];
}

// Cerrar con botón X
lightboxClose?.addEventListener('click', closeLightbox);

// Cerrar al hacer clic fuera
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Teclado: flechas para navegar
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display !== 'flex') return;
  if (e.key === 'ArrowLeft') changeImage(-1);
  else if (e.key === 'ArrowRight') changeImage(1);
  else if (e.key === 'Escape') closeLightbox();
});

// Swipe en móvil
lightbox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchend', () => {
  if (startX - endX > 50) changeImage(1);
  else if (endX - startX > 50) changeImage(-1);
});

// Drag con mouse en PC
let isDragging = false;
let startXMouse = 0;

lightbox.addEventListener('mousedown', (e) => {
  if (e.target !== lightboxImg) return;
  isDragging = true;
  startXMouse = e.clientX;
  lightboxImg.style.cursor = 'grabbing';
});

lightbox.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const diff = e.clientX - startXMouse;
  if (Math.abs(diff) > 50) {
    isDragging = false;
    lightboxImg.style.cursor = 'grab';
    if (diff < 0) changeImage(1);
    else changeImage(-1);
  }
});

lightbox.addEventListener('mouseup', () => {
  isDragging = false;
  lightboxImg.style.cursor = 'grab';
});

lightbox.addEventListener('mouseleave', () => {
  isDragging = false;
  lightboxImg.style.cursor = 'grab';
});

lightboxImg.addEventListener('mouseenter', () => {
  lightboxImg.style.cursor = 'grab';
});

// ===== MODALES DE GALERÍA =====
function openModal(modalName) {
  const modal = document.getElementById('modal-' + modalName);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalName) {
  const modal = document.getElementById('modal-' + modalName);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ===== SUBCATEGORÍAS =====
function openSubcategory(category) {
  const sub = document.getElementById('subcategory-' + category);
  if (sub) {
    sub.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeSubcategory(category) {
  const sub = document.getElementById('subcategory-' + category);
  if (sub) {
    sub.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ===== CONTROLADOR GLOBAL DE CIERRE =====
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
