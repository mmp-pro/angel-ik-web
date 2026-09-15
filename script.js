// ==========================================================================
// ANGEL-IK - SCRIPT PRINCIPAL & CONTROLADOR DE MÓDULOS
// ==========================================================================

const WHATSAPP_PHONE = '525535865673';

// ===== ESTADO GLOBAL =====
let currentCategory = 'todos';
let currentSubcategory = 'all';
let searchQuery = '';
let displayedLimit = 24;
const PAGE_CHUNK = 24;
let filteredItems = [];

// Lightbox
let currentLightboxIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// Testimonios
let currentTestimonialIndex = 0;
let testimonialInterval = null;

const TESTIMONIALS_DATA = [
  {
    quote: "La calidad de los productos y la atención personalizada superaron todas mis expectativas. El dulcero de mi hija quedó precioso, ¡totalmente recomendada!",
    name: "María Castillo",
    role: "Cliente Frecuente",
    initials: "MC"
  },
  {
    quote: "Los artículos de promoción de Natura son increíbles. Siempre encuentro ofertas que realmente valen la pena y la entrega en CDMX fue súper puntual.",
    name: "Roxana Rodríguez",
    role: "Emprendedora",
    initials: "RR"
  },
  {
    quote: "Los recuerdos para el bautizo de mi sobrino quedaron hermosos y muy finos. Profesionales, creativos y con un toque único que marca la diferencia.",
    name: "Ana Schultz",
    role: "Cliente VIP",
    initials: "AS"
  },
  {
    quote: "Excelente consultora Natura y sus arreglos buchonés son los mejores para regalar. Siempre tiene los mejores detalles para fechas especiales.",
    name: "Thalía Rodríguez",
    role: "Ing. Textil",
    initials: "TR"
  },
  {
    quote: "Siempre un trato cálido, precios accesibles y garantía total en sus trabajos de centro de mesa. Es mi contacto de confianza para eventos.",
    name: "Aranza Cárdenas",
    role: "Decoración y Hogar",
    initials: "AC"
  },
  {
    quote: "Sin duda su trabajo respalda su profesionalismo en cada detalle. La ropa seleccionada está impecable y los dulceros infantiles son una maravilla.",
    name: "Patricia Johnson",
    role: "C.P.",
    initials: "PJ"
  }
];

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPortfolio();
  initWishlist();
  initTestimonials();
  initContactForm();
  initScrollAnimations();
});

// ===== 1. NAVBAR & SCROLL BEHAVIOR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    // Navbar scrolled
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll top button
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }

    // Scrollspy enlaces activos
    updateActiveNavLink();
  });

  // Mobile menu
  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('active');
    });
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (navLinks?.classList.contains('active') && !navLinks.contains(e.target) && !hamburger?.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 150;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (scrollPosition >= top && scrollPosition < top + height) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}

// ===== 2. EXPLORADOR DE PORTAFOLIO =====
function initPortfolio() {
  renderCategoryPills();
  
  const searchInput = document.getElementById('portfolioSearch');
  const clearBtn = document.getElementById('searchClearBtn');

  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    if (clearBtn) {
      clearBtn.style.display = searchQuery ? 'flex' : 'none';
    }
    displayedLimit = PAGE_CHUNK;
    applyPortfolioFilter();
  });

  // Render inicial
  applyPortfolioFilter();
}

function renderCategoryPills() {
  const container = document.getElementById('categoryPills');
  if (!container || typeof PORTFOLIO_CATEGORIES === 'undefined') return;

  container.innerHTML = PORTFOLIO_CATEGORIES.map(cat => `
    <button class="cat-pill ${cat.id === currentCategory ? 'active' : ''}" 
            onclick="selectCategory('${cat.id}')">
      <span>${cat.icon || '🌸'}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

function renderSubcategoryPills(categoryObj) {
  const wrap = document.getElementById('subcatPillsWrap');
  if (!wrap) return;

  if (!categoryObj || !categoryObj.subcategories || categoryObj.subcategories.length === 0) {
    wrap.classList.remove('visible');
    wrap.innerHTML = '';
    return;
  }

  wrap.classList.add('visible');
  wrap.innerHTML = categoryObj.subcategories.map(sub => `
    <button class="subcat-pill ${sub.id === currentSubcategory ? 'active' : ''}"
            onclick="selectSubcategory('${sub.id}')">
      ${sub.name}
    </button>
  `).join('');
}

function selectCategory(catId) {
  currentCategory = catId;
  currentSubcategory = 'all';
  displayedLimit = PAGE_CHUNK;

  // Actualizar UI pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  const activePill = Array.from(document.querySelectorAll('.cat-pill')).find(
    pill => pill.getAttribute('onclick')?.includes(`'${catId}'`)
  );
  activePill?.classList.add('active');

  // Subcategorías
  const catObj = PORTFOLIO_CATEGORIES.find(c => c.id === catId);
  renderSubcategoryPills(catObj);

  applyPortfolioFilter();
}

function selectSubcategory(subId) {
  currentSubcategory = subId;
  displayedLimit = PAGE_CHUNK;

  document.querySelectorAll('.subcat-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  const activePill = Array.from(document.querySelectorAll('.subcat-pill')).find(
    pill => pill.getAttribute('onclick')?.includes(`'${subId}'`)
  );
  activePill?.classList.add('active');

  applyPortfolioFilter();
}

// Salto directo desde otras secciones (Servicios, Natura)
function selectCategoryDirectly(catId) {
  selectCategory(catId);
  const portfolioSection = document.getElementById('portafolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function clearPortfolioSearch() {
  const input = document.getElementById('portfolioSearch');
  const clearBtn = document.getElementById('searchClearBtn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  searchQuery = '';
  displayedLimit = PAGE_CHUNK;
  applyPortfolioFilter();
}

function applyPortfolioFilter() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  filteredItems = PORTFOLIO_DATA.filter(item => {
    // 1. Filtro por categoría principal
    if (currentCategory !== 'todos' && item.category !== currentCategory) {
      return false;
    }

    // 2. Filtro por subcategoría
    if (currentSubcategory !== 'all' && !currentSubcategory.startsWith('todos-')) {
      if (item.subcategory !== currentSubcategory) {
        return false;
      }
    }

    // 3. Filtro por buscador
    if (searchQuery) {
      const matchTitle = item.title.toLowerCase().includes(searchQuery);
      const matchDesc = item.description?.toLowerCase().includes(searchQuery);
      const matchCat = item.categoryName?.toLowerCase().includes(searchQuery);
      const matchSub = item.subcategoryName?.toLowerCase().includes(searchQuery);
      if (!matchTitle && !matchDesc && !matchCat && !matchSub) {
        return false;
      }
    }

    return true;
  });

  renderGalleryGrid();
  updateResultsCount();
}

function renderGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  const loadMoreWrap = document.getElementById('loadMoreWrap');
  if (!grid) return;

  if (filteredItems.length === 0) {
    grid.innerHTML = `
      <div class="empty-gallery">
        <div class="empty-gallery-icon">🔍</div>
        <h3>No encontramos diseños que coincidan</h3>
        <p>Intenta con otra palabra clave o selecciona otra categoría.</p>
        <button class="btn btn-secondary" onclick="resetPortfolioFilters()">Ver todos los diseños</button>
      </div>
    `;
    if (loadMoreWrap) loadMoreWrap.style.display = 'none';
    return;
  }

  const itemsToRender = filteredItems.slice(0, displayedLimit);
  const wishlist = getWishlist();

  grid.innerHTML = itemsToRender.map((item, index) => {
    const isSaved = wishlist.some(w => w.id === item.id);
    return `
      <div class="gallery-card">
        <div class="gallery-img-wrap" onclick="openLightbox(${index})">
          <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" decoding="async">
          <button class="btn-card-wishlist ${isSaved ? 'active' : ''}" 
                  onclick="event.stopPropagation(); toggleWishlistItem('${item.id}')" 
                  title="${isSaved ? 'Eliminar de cotización' : 'Guardar en cotización'}">
            ${isSaved ? '❤️' : '🤍'}
          </button>
          <div class="gallery-tag-pill">${item.subcategoryName || item.categoryName}</div>
        </div>
        
        <div class="gallery-card-body">
          <div class="gallery-category-sub">${item.categoryName}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          
          <div class="gallery-card-actions">
            <button class="btn-card-quote" onclick="quoteSingleItem('${item.id}')">
              <span>💬 Cotizar</span>
            </button>
            <button class="btn-card-view" onclick="openLightbox(${index})" title="Ver ampliado">
              👁️
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Botón cargar más
  if (loadMoreWrap) {
    if (displayedLimit < filteredItems.length) {
      loadMoreWrap.style.display = 'block';
      const remaining = filteredItems.length - displayedLimit;
      const loadBtn = document.getElementById('loadMoreBtn');
      if (loadBtn) {
        loadBtn.textContent = `Ver más diseños (quedan ${remaining}) ✨`;
      }
    } else {
      loadMoreWrap.style.display = 'none';
    }
  }
}

function loadMoreItems() {
  displayedLimit += PAGE_CHUNK;
  renderGalleryGrid();
}

function updateResultsCount() {
  const countEl = document.getElementById('resultsCount');
  if (countEl) {
    const shown = Math.min(displayedLimit, filteredItems.length);
    countEl.innerHTML = `Mostrando <strong>${shown}</strong> de <strong>${filteredItems.length}</strong> diseños`;
  }
}

function resetPortfolioFilters() {
  clearPortfolioSearch();
  selectCategory('todos');
}

// ===== 3. LIGHTBOX CON VISOR MODERNO =====
function openLightbox(index) {
  if (filteredItems.length === 0 || index < 0 || index >= filteredItems.length) return;
  currentLightboxIndex = index;
  updateLightboxContent();

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function updateLightboxContent() {
  const item = filteredItems[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightboxTitle');
  const category = document.getElementById('lightboxCategory');
  const currentSpan = document.getElementById('current-img');
  const totalSpan = document.getElementById('total-imgs');
  const wishlistBtn = document.getElementById('lightboxWishlistBtn');

  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = item.image;
      img.alt = item.title;
      img.style.opacity = '1';
    }, 150);
  }

  if (title) title.textContent = item.title;
  if (category) category.textContent = item.subcategoryName || item.categoryName;
  if (currentSpan) currentSpan.textContent = currentLightboxIndex + 1;
  if (totalSpan) totalSpan.textContent = filteredItems.length;

  if (wishlistBtn) {
    const isSaved = getWishlist().some(w => w.id === item.id);
    wishlistBtn.innerHTML = isSaved ? '<span>❤️ En tu Cotización</span>' : '<span>🤍 Guardar en Cotización</span>';
  }
}

function changeLightboxImage(direction) {
  if (filteredItems.length === 0) return;
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = filteredItems.length - 1;
  } else if (currentLightboxIndex >= filteredItems.length) {
    currentLightboxIndex = 0;
  }
  updateLightboxContent();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function toggleCurrentLightboxWishlist() {
  const item = filteredItems[currentLightboxIndex];
  if (item) {
    toggleWishlistItem(item.id);
    updateLightboxContent();
  }
}

function quoteCurrentLightboxItem() {
  const item = filteredItems[currentLightboxIndex];
  if (item) {
    quoteSingleItem(item.id);
  }
}

// Teclado & Swipe Lightbox
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (lightbox?.classList.contains('active')) {
    if (e.key === 'ArrowLeft') changeLightboxImage(-1);
    else if (e.key === 'ArrowRight') changeLightboxImage(1);
    else if (e.key === 'Escape') closeLightbox();
  }
});

const lightboxEl = document.getElementById('lightbox');
lightboxEl?.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

lightboxEl?.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) changeLightboxImage(1);
  else if (touchEndX - touchStartX > 50) changeLightboxImage(-1);
});

// Cerrar haciendo clic en el fondo
lightboxEl?.addEventListener('click', (e) => {
  if (e.target === lightboxEl) closeLightbox();
});

// ===== 4. LISTA DE COTIZACIÓN (WISHLIST) =====
const WISHLIST_KEY = 'angel_ik_wishlist_v1';

function getWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  } catch (err) {
    console.error('Error al guardar wishlist:', err);
  }
}

function initWishlist() {
  updateWishlistUI();
}

function toggleWishlistItem(itemId) {
  if (typeof PORTFOLIO_DATA === 'undefined') return;
  const item = PORTFOLIO_DATA.find(p => p.id === itemId);
  if (!item) return;

  let wishlist = getWishlist();
  const exists = wishlist.some(w => w.id === itemId);

  if (exists) {
    wishlist = wishlist.filter(w => w.id !== itemId);
    showToast(`Eliminado de tu cotización: ${item.title}`);
  } else {
    wishlist.push(item);
    showToast(`❤️ ¡Agregado a tu lista de cotización!`, 'success');
  }

  saveWishlist(wishlist);
  updateWishlistUI();
  renderGalleryGrid();
}

function removeWishlistItem(itemId) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(w => w.id !== itemId);
  saveWishlist(wishlist);
  updateWishlistUI();
  renderGalleryGrid();
  showToast('Artículo eliminado de la lista');
}

function clearWishlist() {
  saveWishlist([]);
  updateWishlistUI();
  renderGalleryGrid();
  showToast('Lista de cotización vaciada');
}

function updateWishlistUI() {
  const wishlist = getWishlist();
  const count = wishlist.length;

  // Actualizar contadores
  const navCount = document.getElementById('navWishlistCount');
  const floatingCount = document.getElementById('floatingWishlistCount');
  if (navCount) navCount.textContent = count;
  if (floatingCount) floatingCount.textContent = count;

  // Renderizar contenido del Drawer
  const drawerBody = document.getElementById('drawerBody');
  const drawerFooter = document.getElementById('drawerFooter');
  if (!drawerBody) return;

  if (count === 0) {
    drawerBody.innerHTML = `
      <div class="drawer-empty">
        <div class="drawer-empty-icon">🤍</div>
        <h4>Tu lista está vacía</h4>
        <p>Explora el portafolio y haz clic en el corazón de los diseños que te interesen para cotizarlos en un solo mensaje.</p>
        <button class="btn btn-sm btn-primary" onclick="toggleWishlistDrawer(false)" style="margin-top: 15px;">
          Explorar Diseños ✨
        </button>
      </div>
    `;
    if (drawerFooter) drawerFooter.style.display = 'none';
  } else {
    if (drawerFooter) drawerFooter.style.display = 'block';
    drawerBody.innerHTML = wishlist.map(item => `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.title}" class="wishlist-thumb">
        <div class="wishlist-item-info">
          <h4>${item.title}</h4>
          <span>${item.subcategoryName || item.categoryName}</span>
        </div>
        <button class="wishlist-remove-btn" onclick="removeWishlistItem('${item.id}')" title="Eliminar de la lista">
          🗑️
        </button>
      </div>
    `).join('');
  }
}

function toggleWishlistDrawer(forceOpen) {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistOverlay');
  if (!drawer || !overlay) return;

  const isOpen = drawer.classList.contains('open');
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !isOpen;

  if (shouldOpen) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

// ===== 5. GENERADORES DE MENSAJE WHATSAPP =====

// Cotizar un artículo individual
function quoteSingleItem(itemId) {
  const item = PORTFOLIO_DATA.find(p => p.id === itemId);
  if (!item) return;

  const text = `¡Hola Angel-IK! 🌸 Me interesa cotizar este diseño:

✨ *Producto:* ${item.title}
📂 *Categoría:* ${item.categoryName} (${item.subcategoryName})
🔗 *Referencia:* ${item.image}

¿Me podrías dar información sobre disponibilidad y costo? ¡Muchas gracias!`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  showToast('Redirigiendo a WhatsApp...', 'success');
}

// Cotizar lista agrupada
function sendWishlistViaWhatsApp() {
  const wishlist = getWishlist();
  if (wishlist.length === 0) {
    showToast('Agrega al menos un artículo a tu lista para cotizar');
    return;
  }

  const notes = document.getElementById('drawerNotes')?.value.trim();

  let message = `¡Hola Angel-IK! 🌸 Me gustaría cotizar los siguientes ${wishlist.length} artículos que seleccioné de tu página web:\n\n`;

  wishlist.forEach((item, idx) => {
    message += `${idx + 1}. *${item.title}* - _${item.subcategoryName || item.categoryName}_\n`;
  });

  if (notes) {
    message += `\n📝 *Notas adicionales / Fecha de evento:* \n${notes}\n`;
  }

  message += `\n¿Podrías apoyarme con la cotización estimada? ¡Gracias!`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
  showToast('Abriendo WhatsApp con tu cotización...', 'success');
  toggleWishlistDrawer(false);
}

// Formulario de Contacto
function initContactForm() {
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const category = document.getElementById('serviceCategory')?.value;
    const msg = document.getElementById('message')?.value.trim();

    const message = `*Nuevo mensaje de contacto web* 🌸

👤 *Nombre:* ${name}
📱 *Teléfono:* ${phone}
📂 *Interés:* ${category}

💬 *Mensaje:*
${msg}

---
Enviado desde angel-ik-web`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.reset();
    showToast('¡Gracias! Te estamos redirigiendo a WhatsApp...', 'success');
  });
}

// ===== 6. CARRUSEL DE TESTIMONIOS =====
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track || !dotsContainer) return;

  track.innerHTML = TESTIMONIALS_DATA.map(item => `
    <div class="testimonio-slide">
      <div class="testimonio-card-modern">
        <div class="quote-mark">“</div>
        <div class="stars-rating">★★★★★</div>
        <p>"${item.quote}"</p>
        <div class="author-box">
          <div class="author-avatar-circle">${item.initials}</div>
          <div class="author-meta">
            <h4>${item.name}</h4>
            <span>${item.role}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, i) => `
    <div class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></div>
  `).join('');

  startTestimonialTimer();

  const slider = document.querySelector('.testimonials-slider');
  slider?.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
  slider?.addEventListener('mouseleave', startTestimonialTimer);
}

function startTestimonialTimer() {
  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(() => {
    moveTestimonial(1);
  }, 6000);
}

function moveTestimonial(direction) {
  currentTestimonialIndex += direction;
  if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = TESTIMONIALS_DATA.length - 1;
  } else if (currentTestimonialIndex >= TESTIMONIALS_DATA.length) {
    currentTestimonialIndex = 0;
  }
  updateTestimonialUI();
}

function goToTestimonial(index) {
  currentTestimonialIndex = index;
  updateTestimonialUI();
}

function updateTestimonialUI() {
  const track = document.getElementById('testimonialsTrack');
  if (track) {
    track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
  }
  document.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentTestimonialIndex);
  });
}

// ===== 7. TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ===== 8. ANIMACIONES REVEAL ON SCROLL =====
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  } else {
    const handleScroll = () => {
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
}
