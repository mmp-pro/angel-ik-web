// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
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

// Variables del carrusel (declaradas globalmente)
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
    
    // Mostrar lightbox
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

// Función para cambiar imagen (carrusel)
function changeImage(direction) {
  if (galleryImages.length === 0) return;
  
  currentImageIndex += direction;
  
  // Loop infinito
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }
  
  // Actualizar imagen con animación
  lightboxImg.style.opacity = '0';
  setTimeout(() => {
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxImg.alt = galleryImages[currentImageIndex].alt;
    lightboxImg.style.opacity = '1';
  }, 150);
}

// Cerrar lightbox
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
  if (startX - endX > 50) changeImage(1);      // Swipe izquierda → siguiente
  else if (endX - startX > 50) changeImage(-1); // Swipe derecha → anterior
});

// ===== SOPORTE PARA SWIPE EN MÓVILES =====
lightbox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchend', () => {
  if (startX - endX > 50) {
    // Swipe hacia la izquierda - siguiente imagen
    changeImage(1);
  } else if (endX - startX > 50) {
    // Swipe hacia la derecha - imagen anterior
    changeImage(-1);
  }
});

// ===== SOPORTE PARA DRAG CON MOUSE EN PC =====
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
    if (diff < 0) {
      changeImage(1); // Siguiente
    } else {
      changeImage(-1); // Anterior
    }
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

// Cambiar cursor al entrar
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
  const subcategoryModal = document.getElementById('subcategory-' + category);
  if (subcategoryModal) {
    subcategoryModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeSubcategory(category) {
  const subcategoryModal = document.getElementById('subcategory-' + category);
  if (subcategoryModal) {
    subcategoryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ===== CONTROLADOR GLOBAL DE CIERRE (UNIFICADO) =====
window.onclick = function(event) {
  if (event.target.classList.contains('modal') && event.target.id.startsWith('subcategory-')) {
    const category = event.target.id.replace('subcategory-', '');
    closeSubcategory(category);
  }
  else if (event.target.classList.contains('modal') && !event.target.id.startsWith('subcategory-')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  else if (event.target.classList.contains('lightbox-overlay')) {
    closeLightbox();
  }
};

document.addEventListener('keydown', function(event) {
  if (event.key !== 'Escape') return;
  
  if (lightbox.style.display === 'flex') {
    closeLightbox();
    return;
  }
  
  const subcategories = document.querySelectorAll('.subcategory-modal');
  subcategories.forEach(modal => {
    if (modal.style.display === 'block') {
      const category = modal.id.replace('subcategory-', '');
      closeSubcategory(category);
    }
  });
  
  const modals = document.querySelectorAll('.modal:not(.subcategory-modal)');
  modals.forEach(modal => {
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
