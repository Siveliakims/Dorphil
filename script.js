const menuItems = [
  {
    name: "Nshima & Local Chicken With Vegetables",
    category: "Zambian Favourites",
    price: "K 95",
    description: "Traditional nshima served with locally sourced chicken.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },
  {
    name: "Nshima & Fish",
    category: "Zambian Favourites",
    price: "K 95",
    description: "A classic Zambian combination featuring local fish.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },
  {
    name: "Chicken Schnitzel With Chips Salads",
    category: "Chicken & Meat",
    price: "K 150",
    description: "Crispy chicken schnitzel served with a fresh side.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80",
    popular: false
  },
  {
    name: "Pizza",
    category: "Pizza",
    price: "K 200",
    description: "Freshly cooked pizza with a golden crust.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },
  {
    name: "T Bone With Chips Salads",
    category: "Sides",
    price: "K 150",
    description: "Hot, crispy chips served fresh with T Bone.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
    popular: false
  },
  {
    name: "Soft Drink",
    category: "Drinks",
    price: "K 20",
    description: "Chilled drinks to pair with your meal.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=80",
    popular: false
  },
  {
    name: "Today's Special",
    category: "Specials",
    price: "Ask us",
    description: "Ask us about today's freshly prepared special.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    popular: true
  }
];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80", alt: "Nshima and chicken" },
  { src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80", alt: "Nshima and fish" },
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80", alt: "Pizza" },
  { src: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80", alt: "Chicken schnitzel With Chips Salads" },
  { src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80", alt: "T Bone With Chips Salads" },
  { src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80", alt: "Daily special" }
];

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const categoryFilter = document.getElementById("categoryFilter");
const galleryGrid = document.getElementById("galleryGrid");
const galleryModal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

function renderMenu() {
  const query = menuSearch.value.toLowerCase().trim();
  const category = categoryFilter.value;

  menuGrid.innerHTML = menuItems
    .filter(item => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesQuery = `${item.name} ${item.description}`.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    })
    .map(item => `
      <article class="menu-item reveal show">
        <img loading="lazy" src="${item.image}" alt="${item.name}">
        <div class="menu-item-body">
          <span class="badge">${item.category}</span>
          ${item.popular ? '<span class="badge" style="margin-left:8px;background:rgba(216,162,74,.14);color:#9b6724;">Popular</span>' : ''}
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <strong class="menu-price">${item.price}</strong>
          <a class="btn btn-primary"
             target="_blank"
             rel="noopener"
             href="https://wa.me/260975868663?text=${encodeURIComponent('Hello Dorphil Restaurant! I would like to order: ' + item.name)}">
             Order on WhatsApp
          </a>
        </div>
      </article>
    `)
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <div class="gallery-item reveal" data-index="${index}">
      <img loading="lazy" src="${item.src}" alt="${item.alt}">
    </div>
  `).join("");

  document.querySelectorAll(".gallery-item").forEach(card => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      modalImage.src = galleryItems[index].src;
      modalImage.alt = galleryItems[index].alt;
      galleryModal.classList.add("show");
    });
  });
}

function closeGallery() {
  galleryModal.classList.remove("show");
  modalImage.src = "";
}

menuSearch.addEventListener("input", renderMenu);
categoryFilter.addEventListener("change", renderMenu);
closeModal.addEventListener("click", closeGallery);
galleryModal.addEventListener("click", (e) => {
  if (e.target === galleryModal) closeGallery();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  document.querySelector(".nav").classList.toggle("scrolled", window.scrollY > 20);
});

renderMenu();
renderGallery();
