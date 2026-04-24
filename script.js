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
  
  // Obtener los datos del formulario
  const nombre = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('subject').value;
  const mensaje = document.getElementById('message').value;
  
  // Número de WhatsApp (sin espacios ni símbolos)
  const whatsappNumber = '525535865673';
  
  // Crear el mensaje formateado
  const whatsappMessage = `*Nuevo mensaje de contacto* 🌸

*Nombre:* ${nombre}
*Email:* ${email}
*Asunto:* ${asunto}

*Mensaje:*
${mensaje}

---
Enviado desde Angelik-Page-Shop`;
  
  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  // Crear la URL de WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Abrir WhatsApp en nueva pestaña
  window.open(whatsappURL, '_blank');
  
  // Limpiar el formulario
  this.reset();
  
  // Mensaje de confirmación
  alert('¡Gracias por contactarnos! 🌸\n\nSerás redirigido a WhatsApp para enviar tu mensaje.');
});

// ===== ZOOM / LIGHTBOX DE IMÁGENES =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

// Abrir Lightbox al hacer clic en una imagen
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

// Función para cerrar Lightbox
const closeLightbox = () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
};

// Cerrar con botón X
lightboxClose.addEventListener('click', closeLightbox);

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// ===== MODALES DE GALERÍA =====

// Función para abrir el modal
function openModal(modalName) {
  const modal = document.getElementById('modal-' + modalName);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// Función para cerrar el modal
function closeModal(modalName) {
  const modal = document.getElementById('modal-' + modalName);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ===== SUBCATEGORÍAS =====

// Función para abrir subcategoría
function openSubcategory(category) {
  const subcategoryModal = document.getElementById('subcategory-' + category);
  if (subcategoryModal) {
    subcategoryModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// Función para cerrar subcategoría
function closeSubcategory(category) {
  const subcategoryModal = document.getElementById('subcategory-' + category);
  if (subcategoryModal) {
    subcategoryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ... (Deja intacto todo lo de arriba: Navbar, Scroll, Reveal) ...

// ===== CONTROL DE MODALES UNIFICADO =====

// Función para cerrar TODO (Lightbox, Subcategorías, Modales normales)
function closeAll() {
    // Cerrar Lightbox
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.style.display = 'none';

    // Cerrar todos los modales
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });

    // Restaurar scroll
    document.body.style.overflow = 'auto';
}

// Cerrar al hacer clic fuera (Overlay oscuro)
window.onclick = function(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('lightbox-overlay')) {
        closeAll();
    }
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAll();
    }
});

// Funciones específicas para abrir (Asegúrate de que estas existan)
function openModal(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
}

function openSubcategory(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden';
}
