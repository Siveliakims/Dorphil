const WHATSAPP_NUMBER = "260975868663";

// Sample food photography is loaded from Unsplash. These are illustrative photos,
// not guaranteed photographs of Dorphil's exact dishes.
const menuItems = [
  {name:"Vegetable Samosas",category:"Starters & Platters",price:"K13",description:"Crispy pastry filled with a savoury vegetable filling.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",keywords:"starter snack samosa vegetarian"},
  {name:"Chicken Samosas",category:"Starters & Platters",price:"K13",description:"Golden samosas with a savoury chicken filling.",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85",keywords:"starter snack chicken samosa"},
  {name:"Beef Samosas",category:"Starters & Platters",price:"K13",description:"Crisp pastry parcels with a savoury beef filling.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",keywords:"starter snack beef samosa"},
  {name:"Mini Pizza",category:"Starters & Platters",price:"K35",description:"A small pizza with a golden crust and tasty toppings.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85",keywords:"pizza starter"},
  {name:"Sausage Rolls",category:"Starters & Platters",price:"K30",description:"Golden pastry rolls with a savoury sausage filling.",image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",keywords:"pastry sausage snack"},
  {name:"Vegetable Spring Rolls",category:"Starters & Platters",price:"K30",description:"Crispy rolls filled with vegetables.",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",keywords:"vegetarian spring roll starter"},
  {name:"Chicken Pieces",category:"Starters & Platters",price:"K85",description:"A platter of chicken pieces, prepared for sharing.",image:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=85",keywords:"chicken platter starter"},
  {name:"Chips",category:"Starters & Platters",price:"K55",description:"Hot, golden chips served fresh.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85",keywords:"fries chips potatoes side"},
  {name:"Chicken Nshima with Vegetables",category:"Nshima Meals",price:"K95",description:"Nshima served with chicken and vegetables.",image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=85",keywords:"zambian traditional chicken nshima vegetables"},
  {name:"T-Bone Nshima with Vegetables",category:"Nshima Meals",price:"K150",description:"Nshima and vegetables served with a T-bone steak.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",keywords:"t bone steak nshima vegetables beef"},
  {name:"Fish Nshima with Vegetables",category:"Nshima Meals",price:"K150",description:"Nshima and vegetables served with fish.",image:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",keywords:"fish nshima vegetables"},
  {name:"Village Chicken, Nshima & Vegetables",category:"Nshima Meals",price:"K150",description:"A hearty serving of village chicken with nshima and vegetables.",image:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",keywords:"village chicken traditional zambian nshima"},
  {name:"Nshima with Broiler Chicken",category:"Nshima Meals",price:"K95",description:"Nshima served with broiler chicken.",image:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",keywords:"chicken nshima broiler"},
  {name:"Visashi Nshima",category:"Nshima Meals",price:"K75",description:"Nshima served with visashi, a local leafy vegetable dish.",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",keywords:"visashi vegetables nshima local traditional"},
  {name:"Beans Nshima",category:"Nshima Meals",price:"K75",description:"A comforting serving of beans with nshima.",image:"https://images.unsplash.com/photo-1515543904379-3d757ffee810?auto=format&fit=crop&w=1000&q=85",keywords:"beans nshima vegetarian traditional"},
  {name:"T-Bone with Chips & Salad",category:"Meals with Chips/Other",price:"K150",description:"T-bone steak served with chips and salad.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",keywords:"t bone steak chips salad beef"},
  {name:"Fish with Chips & Salad",category:"Meals with Chips/Other",price:"K150",description:"Fish served with chips and salad.",image:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",keywords:"fish chips salad"},
  {name:"Chicken Schnitzel with Chips & Salad",category:"Meals with Chips/Other",price:"K150",description:"Crispy chicken schnitzel served with chips and salad.",image:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=85",keywords:"chicken schnitzel chips salad"},
  {name:"Chicken & Chips with Salad",category:"Meals with Chips/Other",price:"K130",description:"Chicken and golden chips with a fresh salad.",image:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=85",keywords:"chicken chips salad"},
  {name:"Beef Burger",category:"Meals with Chips/Other",price:"K150",description:"A beef burger served with classic accompaniments.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",keywords:"beef burger"},
  {name:"Vegetable Burger",category:"Meals with Chips/Other",price:"K150",description:"A vegetable burger with fresh toppings.",image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1000&q=85",keywords:"vegetable veggie burger vegetarian"},
  {name:"Chicken Curry",category:"Meals with Chips/Other",price:"K150",description:"A warmly spiced chicken curry.",image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85",keywords:"chicken curry"},
  {name:"Vegetable Curry",category:"Meals with Chips/Other",price:"K150",description:"A flavourful curry made with vegetables.",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",keywords:"vegetable curry vegetarian"},
  {name:"Chicken Shawarma",category:"Meals with Chips/Other",price:"K130",description:"Chicken shawarma wrapped and ready to enjoy.",image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=85",keywords:"chicken shawarma wrap"},
  {name:"Vegetable Quiche with Salad",category:"Meals with Chips/Other",price:"K150",description:"Vegetable quiche served with salad.",image:"https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?auto=format&fit=crop&w=1000&q=85",keywords:"vegetable quiche salad vegetarian"},
  {name:"Cake of the Day",category:"Desserts",price:"Price on request",description:"Ask us which cake is available today.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",keywords:"cake dessert sweet"},
  {name:"Pancake with Honey",category:"Desserts",price:"Price on request",description:"Pancake served with honey. Ask us for today's availability.",image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",keywords:"pancake honey dessert breakfast"}
];

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const categoryFilter = document.getElementById("categoryFilter");
const menuCount = document.getElementById("menuCount");

function makeOrderLink(item) {
  const message = `Hello Dorphil Restaurant & TakeAway! I would like to order: ${item.name}. Listed price: ${item.price}. Please confirm availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderMenu() {
  if (!menuGrid || !menuSearch || !categoryFilter) return;
  const query = menuSearch.value.toLowerCase().trim();
  const category = categoryFilter.value;
  const filtered = menuItems.filter(item => {
    const matchesCategory = category === "all" || item.category === category;
    const searchable = `${item.name} ${item.description} ${item.category} ${item.keywords || ""}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  if (menuCount) menuCount.textContent = `Showing ${filtered.length} of ${menuItems.length} menu items`;
  if (!filtered.length) {
    menuGrid.innerHTML = '<div class="no-results">No dishes match your search. Try another name or choose a different category.</div>';
    return;
  }

  menuGrid.innerHTML = filtered.map((item, index) => `
    <article class="menu-item reveal" style="--delay:${Math.min(index,8)*45}ms">
      <div class="menu-item-image">
        <img src="${item.image}" alt="${item.name} (sample food photo)" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80';">
      </div>
      <div class="menu-item-body">
        <span class="badge">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <strong class="menu-price">${item.price}</strong>
        <a class="btn btn-primary" href="${makeOrderLink(item)}" target="_blank" rel="noopener">Order on WhatsApp ↗</a>
      </div>
    </article>
  `).join("");
  observeReveals(menuGrid.querySelectorAll(".reveal"));
}

let revealObserver;
function observeReveals(elements) {
  elements.forEach(el => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("show");
      return;
    }
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add("show");
  });
}

function initRevealAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("show"));
    return;
  }
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px 40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

document.querySelectorAll(".service-link").forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dorphil Restaurant & TakeAway! I would like to enquire about: " + link.dataset.service + ".")}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name || !phone || !message) return;
    const text = `Hello Dorphil Restaurant & TakeAway!%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Dorphil Restaurant & TakeAway!\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`)}`, "_blank", "noopener");
  });
}

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

initRevealAnimations();
renderMenu();
