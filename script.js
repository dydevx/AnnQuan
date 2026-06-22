// WhatsApp-Nummer später hier eintragen, zum Beispiel: "4937112345678".
const WHATSAPP_NUMMER = "";

const BILDER = {
  vorspeise: "assets/vorspeise.jpg",
  bun: "assets/bun-cha.jpg",
  bunNoodles: "assets/bun-noodles.jpg",
  pho: "assets/pho-ga.png",
  phoSoup: "assets/pho-soup.jpg",
  phoXao: "assets/pho-xao.jpg",
  mien: "assets/mien-ga.jpg",
  com: "assets/com-rice.jpg",
  comGa: "assets/com-ga.jpg",
  comVit: "assets/com-vit.jpg",
  dessert: "assets/dessert.jpg",
};

const LOGO_IMAGE = "logo.jpg";

const DISH_IMAGE_FILES = [
  "Bun Bo Nam Bo.jpg",
  "Bun Cha Ha Noi.jpg",
  "Bun Cha La Lot.jpg",
  "Bun Dau Chien Xu.jpg",
  "Bun Nem Chay.jpg",
  "Bun Nem.jpg",
  "Com Ga.jpg",
  "Com Hai San.jpg",
  "Com Thit Bo.jpg",
  "Com Tofu.jpg",
  "Com Vit.jpg",
  "Dau Chien Xu.jpg",
  "Edamame.jpg",
  "Edgy Banana.jpg",
  "Extra Beilage.jpg",
  "Fischwaffel.jpg",
  "Kem Dua.jpg",
  "Kem Xoi.jpg",
  "Mien Ga Groß.jpg",
  "Mien Ga Klein.jpg",
  "Mien Xao Ga Chien.jpg",
  "Mien Xao Ga.jpg",
  "Mien Xao Tom.jpg",
  "Mien Xao Vit.jpg",
  "Mochi Eis.jpg",
  "Nem Gio Re.jpg",
  "Nem Ha Noi.jpg",
  "Nom Mien Yam Gung.jpg",
  "Nom Mien.jpg",
  "Nom Xoai.jpg",
  "Pho Bo Classic Groß.jpg",
  "Pho Bo Classic Klein.jpg",
  "Pho Bo Premium.jpg",
  "Pho Ga Groß.jpg",
  "Pho Ga Klein.jpg",
  "Pho Sot Vang Groß.jpg",
  "Pho Sot Vang Klein.jpg",
  "Pho Tofu Groß.jpg",
  "Pho Tofu Klein.jpg",
  "Pho Xao mit Hühnerfleisch.jpg",
  "Pho Xao mit knusprigem Hühnchen.jpg",
  "Pho Xao mit knuspriger Ente.jpg",
  "Pho Xao mit Rindfleisch.jpg",
  "Pho Xao mit Tofu-Streifen oder Gemüse.jpg",
  "Sesam Bällchen.jpg",
  "Tom Chien Com.jpg",
];

const DISH_IMAGES_BY_NAME = DISH_IMAGE_FILES.reduce((images, fileName) => {
  const dishName = fileName.replace(/\.[^.]+$/, "");
  images[normalizeDishName(dishName)] = fileName;
  return images;
}, {});

const KATEGORIEN = [
  "Vorspeise",
  "Bún",
  "Phở",
  "Miến",
  "Cơm - Reisgerichte",
  "Dessert",
];

const MENU_ITEMS = [
  {
    id: "100a",
    category: "Vorspeise",
    name: "100. Nem Song - Maishähnchen und Ei",
    description: "Reispapierrollen mit Reisnudeln, Karotten, Gurken, Salat und asiatischen Kräutern.",
    price: "6,50€",
    image: BILDER.vorspeise,
  },
  {
    id: "100b",
    category: "Vorspeise",
    name: "100. Nem Song - Avocado und Shrimps",
    description: "Reispapierrollen mit Reisnudeln, Karotten, Gurken, Salat und asiatischen Kräutern.",
    price: "7,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "100c",
    category: "Vorspeise",
    name: "100. Nem Song - Tofu und Ei",
    description: "Reispapierrollen mit Reisnudeln, Karotten, Gurken, Salat und asiatischen Kräutern.",
    price: "6,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "101",
    category: "Vorspeise",
    name: "101. Nem Gio Re",
    description: "Knusprige Reispapierrollen mit Krabben, Shrimps, Glasnudeln, Wurzelgemüse und Morcheln.",
    price: "6,50€",
    image: BILDER.vorspeise,
  },
  {
    id: "102",
    category: "Vorspeise",
    name: "102. Dau Chien Xu",
    description: "Knuspriger Seidentofu mit Hoisin-Sauce.",
    price: "6,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "103",
    category: "Vorspeise",
    name: "103. Nom Xoai",
    description: "Frischer Mangosalat mit Garnelen, Koriander, Minze, Gurken, Karotten und Sesam.",
    price: "8,50€",
    image: BILDER.vorspeise,
  },
  {
    id: "104",
    category: "Vorspeise",
    name: "104. Nom Mien Yam Gung",
    description: "Garnelensalat mit verschiedenem Gemüse, scharf-sauer.",
    price: "8,50€",
    image: BILDER.vorspeise,
  },
  {
    id: "105",
    category: "Vorspeise",
    name: "105. Nom Mien",
    description: "Glasnudelsalat mit Maishähnchenstreifen, Kräutern, Gurken, Karotten und Sesam.",
    price: "8,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "106",
    category: "Vorspeise",
    name: "106. Nem Ha Noi",
    description: "Knusprige hausgemachte Reispapierrollen mit Garnelen-Schweine-Füllung.",
    price: "7,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "107",
    category: "Vorspeise",
    name: "107. Tom Chien Com",
    description: "Frische Garnelen in knusprigem Com gewälzt, serviert mit süßsaurer Sauce.",
    price: "7,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "108",
    category: "Vorspeise",
    name: "108. Edamame",
    description: "Gekochte grüne Sojabohnen mit Meersalz.",
    price: "6,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "200",
    category: "Bún",
    name: "200. Bun Cha Ha Noi",
    description: "Gegrilltes Schweinefleisch nach nordvietnamesischer Art mit weißem Sesam.",
    price: "15,50€",
    image: BILDER.bun,
  },
  {
    id: "201",
    category: "Bún",
    name: "201. Bun Nem",
    description: "Knusprige Reispapierrollen mit Garnelen-Schweine-Ei-Füllung.",
    price: "14,50€",
    image: BILDER.bun,
  },
  {
    id: "202",
    category: "Bún",
    name: "202. Bun Nem Chay",
    description: "Vegetarische Reispapierrollen mit Tofu-Ei-Füllung, Glasnudeln und Gemüse.",
    price: "14,50€",
    image: BILDER.bun,
  },
  {
    id: "203",
    category: "Bún",
    name: "203. Bun Cha La Lot",
    description: "Schweinehackfleisch in vietnamesischen Pfefferblättern mit Garnelen und Erdnüssen.",
    price: "15,50€",
    image: BILDER.bun,
  },
  {
    id: "204",
    category: "Bún",
    name: "204. Bun Bo Nam Bo",
    description: "Süß-vietnamesisch mariniertes Rindfleisch mit Erdnüssen und asiatischen Kräutern.",
    price: "16,50€",
    image: BILDER.bun,
  },
  {
    id: "205",
    category: "Bún",
    name: "205. Bun Dau Chien Xu",
    description: "Veganer knusprig gebackener Seidentofu mit schwarzem Sesam.",
    price: "13,50€",
    image: BILDER.bun,
  },
  {
    id: "300k",
    category: "Phở",
    name: "300. Pho Ga Klein",
    description: "Reisbandnudelsuppe mit zarter Maishähnchenbrust.",
    price: "8,00€",
    image: BILDER.pho,
  },
  {
    id: "300g",
    category: "Phở",
    name: "300. Pho Ga Groß",
    description: "Reisbandnudelsuppe mit zarter Maishähnchenbrust.",
    price: "14,50€",
    image: BILDER.pho,
  },
  {
    id: "301k",
    category: "Phở",
    name: "301. Pho Bo Classic Klein",
    description: "Reisbandnudelsuppe mit saftigem Rindfleisch oder medium rare angebraten.",
    price: "8,00€",
    image: BILDER.pho,
  },
  {
    id: "301g",
    category: "Phở",
    name: "301. Pho Bo Classic Groß",
    description: "Reisbandnudelsuppe mit saftigem Rindfleisch oder medium rare angebraten.",
    price: "16,00€",
    image: BILDER.pho,
  },
  {
    id: "302",
    category: "Phở",
    name: "302. Pho Bo Premium",
    description: "Rindfleisch von Ribs und geschmorte Rinderrippenknochen.",
    price: "20,00€",
    image: BILDER.pho,
  },
  {
    id: "303k",
    category: "Phở",
    name: "303. Pho Sot Vang Klein",
    description: "Vietnamesisches Rindergulasch mit Tomaten, Kräutern und Rotwein.",
    price: "9,00€",
    image: BILDER.pho,
  },
  {
    id: "303g",
    category: "Phở",
    name: "303. Pho Sot Vang Groß",
    description: "Vietnamesisches Rindergulasch mit Tomaten, Kräutern und Rotwein.",
    price: "15,50€",
    image: BILDER.pho,
  },
  {
    id: "304k",
    category: "Phở",
    name: "304. Pho Tofu Klein",
    description: "Reisbandnudelsuppe mit gebratenem Tofu.",
    price: "7,00€",
    image: BILDER.pho,
  },
  {
    id: "304g",
    category: "Phở",
    name: "304. Pho Tofu Groß",
    description: "Reisbandnudelsuppe mit gebratenem Tofu.",
    price: "11,50€",
    image: BILDER.pho,
  },
  {
    id: "305a",
    category: "Phở",
    name: "305. Pho Xao mit Rindfleisch",
    description: "Gebratene Reisnudeln mit Gemüse, Kräutern, Sprossen und Erdnüssen.",
    price: "17,00€",
    image: BILDER.pho,
  },
  {
    id: "305b",
    category: "Phở",
    name: "305. Pho Xao mit Tofu-Streifen oder Gemüse",
    description: "Gebratene Reisnudeln mit Gemüse, Kräutern, Sprossen und Erdnüssen.",
    price: "14,50€",
    image: BILDER.pho,
  },
  {
    id: "305c",
    category: "Phở",
    name: "305. Pho Xao mit Hühnerfleisch",
    description: "Gebratene Reisnudeln mit Gemüse, Kräutern, Sprossen und Erdnüssen.",
    price: "15,50€",
    image: BILDER.pho,
  },
  {
    id: "305d",
    category: "Phở",
    name: "305. Pho Xao mit knusprigem Hühnchen",
    description: "Gebratene Reisnudeln mit Gemüse, Kräutern, Sprossen und Erdnüssen.",
    price: "17,50€",
    image: BILDER.pho,
  },
  {
    id: "305e",
    category: "Phở",
    name: "305. Pho Xao mit knuspriger Ente",
    description: "Gebratene Reisnudeln mit Gemüse, Kräutern, Sprossen und Erdnüssen.",
    price: "18,50€",
    image: BILDER.pho,
  },
  {
    id: "400k",
    category: "Miến",
    name: "400. Mien Ga Klein",
    description: "Glasnudeln mit Maishähnchenstreifen, Frühlingszwiebeln, Sprossen und Kräutern.",
    price: "8,00€",
    image: BILDER.mien,
  },
  {
    id: "400g",
    category: "Miến",
    name: "400. Mien Ga Groß",
    description: "Glasnudeln mit Maishähnchenstreifen, Frühlingszwiebeln, Sprossen und Kräutern.",
    price: "15,50€",
    image: BILDER.mien,
  },
  {
    id: "401",
    category: "Miến",
    name: "401. Mien Xao Tom",
    description: "Gebratene Glasnudeln mit Garnelen, Gurken, Karotten, Pak Choi, Kräutern und Sesam.",
    price: "18,40€",
    image: BILDER.mien,
  },
  {
    id: "402",
    category: "Miến",
    name: "402. Mien Xao Ga",
    description: "Gebratene Glasnudeln mit Hühnerfleisch, Gurken, Karotten, Pak Choi, Kräutern und Sesam.",
    price: "15,40€",
    image: BILDER.mien,
  },
  {
    id: "403",
    category: "Miến",
    name: "403. Mien Xao Vit",
    description: "Gebratene Glasnudeln mit knuspriger Ente, Gurken, Karotten, Pak Choi, Kräutern und Sesam.",
    price: "18,40€",
    image: BILDER.mien,
  },
  {
    id: "404",
    category: "Miến",
    name: "404. Mien Xao Ga Chien",
    description: "Gebratene Glasnudeln mit knusprigem Hähnchen, Gurken, Karotten, Pak Choi, Kräutern und Sesam.",
    price: "17,40€",
    image: BILDER.mien,
  },
  {
    id: "500",
    category: "Cơm - Reisgerichte",
    name: "500. Com Tofu",
    description: "Reisgericht mit verschiedenem Gemüse, frischen Kräutern und Sauce nach Wahl.",
    price: "14,50€",
    image: BILDER.com,
  },
  {
    id: "501",
    category: "Cơm - Reisgerichte",
    name: "501. Com Ga",
    description: "Reisgericht mit Gemüse, Kräutern und Sauce nach Wahl.",
    price: "16,00€",
    image: BILDER.com,
  },
  {
    id: "502",
    category: "Cơm - Reisgerichte",
    name: "502. Com Vit",
    description: "Reisgericht mit knusprigem Entenfilet, Gemüse, Kräutern und Sauce nach Wahl.",
    price: "16,90€",
    image: BILDER.com,
  },
  {
    id: "503",
    category: "Cơm - Reisgerichte",
    name: "503. Com Thit Bo",
    description: "Reisgericht mit Rindfleisch, Gemüse, Kräutern und Sauce nach Wahl.",
    price: "17,50€",
    image: BILDER.com,
  },
  {
    id: "504",
    category: "Cơm - Reisgerichte",
    name: "504. Com Hai San",
    description: "Reisgericht mit Garnelen, Gemüse, Kräutern und Sauce nach Wahl.",
    price: "19,00€",
    image: BILDER.com,
  },
  {
    id: "beilage",
    category: "Cơm - Reisgerichte",
    name: "Extra Beilage",
    description: "Angebratener Reis, Reisnudeln oder Glasnudeln.",
    price: "3,00€",
    image: BILDER.com,
  },
  {
    id: "700",
    category: "Dessert",
    name: "700. Edgy Banana",
    description: "Knusprige Banane mit Kondensmilch und gerösteten Mandeln.",
    price: "5,50€",
    image: BILDER.dessert,
  },
  {
    id: "701",
    category: "Dessert",
    name: "701. Kem Xoi",
    description: "Pandan-Klebreis mit Vanilleeis und Kokosnussmilchsauce.",
    price: "6,50€",
    image: BILDER.dessert,
  },
  {
    id: "702",
    category: "Dessert",
    name: "702. Kem Dua",
    description: "Kokoseis in Kokosschale.",
    price: "6,50€",
    image: BILDER.dessert,
  },
  {
    id: "703",
    category: "Dessert",
    name: "703. Mochi Eis",
    description: "Zwei Klebreiskuchen mit verschiedenen Eisfüllungen.",
    price: "6,50€",
    image: BILDER.dessert,
  },
  {
    id: "704",
    category: "Dessert",
    name: "704. Sesam Bällchen",
    description: "Knusprige Sesambällchen mit süßer roter Bohnenpaste.",
    price: "5,50€",
    image: BILDER.dessert,
  },
  {
    id: "705",
    category: "Dessert",
    name: "705. Fischwaffel",
    description: "Gebackene Fischwaffel mit Schokolade, Erdbeeren oder Karamell.",
    price: "6,50€",
    image: BILDER.dessert,
  },
];

function getDishImage(item) {
  return DISH_IMAGES_BY_NAME[normalizeDishName(item.name)] || LOGO_IMAGE;
}

function getDishImageClass(item) {
  return item.image === LOGO_IMAGE ? "is-logo-image" : "";
}

function normalizeDishName(value) {
  return value
    .replace(/^\d+\.\s*/, "")
    .normalize("NFC")
    .trim()
    .toLowerCase();
}

MENU_ITEMS.forEach((item) => {
  item.image = getDishImage(item);
  item.imageClass = getDishImageClass(item);
});

const SPECIALTY_IDS = ["106", "200", "300g", "305e", "501", "703"];
const cart = {};

const specialtyGrid = document.getElementById("specialtyGrid");
const menuList = document.getElementById("menuList");
const menuPager = document.getElementById("menuPager");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartSubmit = document.getElementById("cartSubmit");
const cartForm = document.getElementById("cartForm");
const floatingCartButton = document.getElementById("floatingCartButton");
const floatingCartCount = document.getElementById("floatingCartCount");
const floatingCartItems = document.getElementById("floatingCartItems");
const floatingCartTotal = document.getElementById("floatingCartTotal");
const cartPreviewPanel = document.getElementById("cartPreviewPanel");
const cartPreviewBackdrop = document.getElementById("cartPreviewBackdrop");
const cartPreviewClose = document.getElementById("cartPreviewClose");
const cartPreviewCheckout = document.getElementById("cartPreviewCheckout");
let activeCategoryIndex = 0;

function whatsappUrl(message) {
  const target = WHATSAPP_NUMMER.trim();
  const baseUrl = target ? `https://wa.me/${target}` : "https://wa.me/";
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  window.open(whatsappUrl(message), "_blank", "noopener");
}

function parsePrice(price) {
  return Number(price.replace("€", "").replace(",", ".").trim()) || 0;
}

function formatPrice(value) {
  return `${value.toFixed(2).replace(".", ",")}€`;
}

function getItem(id) {
  return MENU_ITEMS.find((item) => item.id === id);
}

function renderMenuCard(item, className = "menu-text-card reveal") {
  return `
    <article class="${className} menu-card-enter">
      <img class="menu-thumb ${item.imageClass}" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.classList.add('is-logo-image'); this.removeAttribute('style'); this.src='${LOGO_IMAGE}';" />
      <div class="menu-text-body">
        <div class="menu-text-top">
          <h4>${item.name}</h4>
          <strong>${item.price}</strong>
        </div>
        <p>${item.description}</p>
        <div class="menu-actions">
          <button class="button button-outline" type="button" data-cart-add="${item.id}">In den Warenkorb</button>
          <button class="button button-secondary" type="button" data-direct-order="${item.id}">Direkt bestellen</button>
        </div>
      </div>
    </article>
  `;
}

function renderSpecialties() {
  specialtyGrid.innerHTML = SPECIALTY_IDS.map((id) => {
    const item = getItem(id);
    return `
      <article class="dish-card reveal">
        <img class="${item.imageClass}" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.classList.add('is-logo-image'); this.removeAttribute('style'); this.src='${LOGO_IMAGE}';" />
        <div class="dish-body">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="dish-meta">
            <span class="dish-price">${item.price}</span>
            <button class="button button-outline" type="button" data-cart-add="${item.id}">In den Warenkorb</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderMenuList() {
  const category = KATEGORIEN[activeCategoryIndex];
  const items = MENU_ITEMS.filter((item) => item.category === category);

  menuList.innerHTML = `
    <section class="menu-category is-visible">
      <h3>${category}</h3>
      <div class="menu-items">
        ${items.map((item) => renderMenuCard(item, "menu-text-card")).join("")}
      </div>
    </section>
  `;
}

function renderMenuPager() {
  menuPager.innerHTML = `
    <button class="menu-page-button" type="button" data-menu-page="prev">Vorherige Kategorie</button>
    ${KATEGORIEN.map((category, index) => `
      <button class="menu-page-button ${index === activeCategoryIndex ? "is-active" : ""}" type="button" data-menu-page="${index}" aria-current="${index === activeCategoryIndex ? "page" : "false"}">${category}</button>
    `).join("")}
    <button class="menu-page-button" type="button" data-menu-page="next">Nächste Kategorie</button>
  `;
}

function changeMenuPage(page) {
  if (page === "prev") {
    activeCategoryIndex = activeCategoryIndex === 0 ? KATEGORIEN.length - 1 : activeCategoryIndex - 1;
  } else if (page === "next") {
    activeCategoryIndex = activeCategoryIndex === KATEGORIEN.length - 1 ? 0 : activeCategoryIndex + 1;
  } else {
    activeCategoryIndex = Number(page);
  }

  renderMenuPager();
  renderMenuList();
}

function initMenuPager() {
  menuPager.addEventListener("click", (event) => {
    const button = event.target.closest("[data-menu-page]");
    if (!button || button.disabled) return;
    changeMenuPage(button.dataset.menuPage);
  });
}

function setCartPreviewOpen(isOpen) {
  if (!cartPreviewPanel || !cartPreviewBackdrop || !floatingCartButton) return;
  if (isOpen && !Object.keys(cart).length) return;

  cartPreviewPanel.hidden = !isOpen;
  cartPreviewBackdrop.hidden = !isOpen;
  cartPreviewPanel.setAttribute("aria-hidden", String(!isOpen));
  floatingCartButton.setAttribute("aria-expanded", String(isOpen));
}

function pulseFloatingCartButton() {
  if (!floatingCartButton) return;
  floatingCartButton.classList.remove("has-items");
  void floatingCartButton.offsetWidth;
  floatingCartButton.classList.add("has-items");
}

function renderFloatingCart(items, total) {
  if (!floatingCartButton || !floatingCartCount || !floatingCartItems || !floatingCartTotal || !cartPreviewCheckout) return;

  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  floatingCartCount.textContent = quantity;
  floatingCartCount.hidden = quantity === 0;
  floatingCartTotal.textContent = formatPrice(total);
  cartPreviewCheckout.disabled = quantity === 0;

  if (!items.length) {
    floatingCartItems.innerHTML = `<p class="cart-empty">Ihr Warenkorb ist noch leer.</p>`;
    return;
  }

  floatingCartItems.innerHTML = items.map((item) => `
    <div class="cart-preview-line">
      <img class="${item.imageClass}" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.classList.add('is-logo-image'); this.removeAttribute('style'); this.src='${LOGO_IMAGE}';" />
      <div class="cart-preview-line-body">
        <h4>${item.name}</h4>
        <div class="cart-preview-line-meta">
          <p>${item.price} × ${item.quantity}</p>
          <div class="cart-qty">
            <button type="button" data-cart-minus="${item.id}" aria-label="${item.name} reduzieren">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-plus="${item.id}" aria-label="${item.name} erhöhen">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function updateCart() {
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
  cartItems.innerHTML = "";
  renderFloatingCart(items, total);

  if (!items.length) {
    cartItems.innerHTML = `<p class="cart-empty">Ihr Warenkorb ist noch leer.</p>`;
    cartTotal.textContent = "0,00€";
    cartSubmit.disabled = true;
    setCartPreviewOpen(false);
    return;
  }

  items.forEach((item) => {
    const line = document.createElement("div");
    line.className = "cart-line";
    line.innerHTML = `
      <div>
        <p><strong>${item.name}</strong></p>
        <p>${item.price} × ${item.quantity}</p>
      </div>
      <div class="cart-qty">
        <button type="button" data-cart-minus="${item.id}" aria-label="${item.name} reduzieren">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-cart-plus="${item.id}" aria-label="${item.name} erhöhen">+</button>
      </div>
    `;
    cartItems.appendChild(line);
  });

  cartTotal.textContent = formatPrice(total);
  cartSubmit.disabled = false;
}

function addToCart(id) {
  const item = getItem(id);
  if (!item) return;

  if (!cart[id]) {
    cart[id] = { ...item, quantity: 1 };
  } else {
    cart[id].quantity += 1;
  }

  updateCart();
  pulseFloatingCartButton();
}

function changeCartQuantity(id, direction) {
  if (!cart[id]) return;
  cart[id].quantity += direction;

  if (cart[id].quantity <= 0) {
    delete cart[id];
  }

  updateCart();
  if (direction > 0) {
    pulseFloatingCartButton();
  }
}

function buildOrderLines() {
  return Object.values(cart).map((item) => `- ${item.quantity}× ${item.name} (${item.price})`);
}

function initCartActions() {
  document.body.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-cart-add]");
    const directButton = event.target.closest("[data-direct-order]");
    const plusButton = event.target.closest("[data-cart-plus]");
    const minusButton = event.target.closest("[data-cart-minus]");

    if (addButton) {
      addToCart(addButton.dataset.cartAdd);
      return;
    }

    if (directButton) {
      const item = getItem(directButton.dataset.directOrder);
      if (!item) return;
      openWhatsApp(`Hallo Ann-Quán,

ich möchte gerne Essen zum Mitnehmen bestellen.

Bestellung:
- 1× ${item.name} (${item.price})

Anmerkung: -`);
      return;
    }

    if (plusButton) {
      changeCartQuantity(plusButton.dataset.cartPlus, 1);
      return;
    }

    if (minusButton) {
      changeCartQuantity(minusButton.dataset.cartMinus, -1);
    }
  });

  cartForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!Object.keys(cart).length) return;

    if (!cartForm.checkValidity()) {
      cartForm.reportValidity();
      return;
    }

    const data = new FormData(cartForm);
    const total = Object.values(cart).reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
    const message = `Hallo Ann-Quán,

ich möchte gerne Essen zum Mitnehmen bestellen.

Name: ${data.get("cartName")}
Telefon: ${data.get("cartPhone")}
Abholzeit: ${data.get("cartPickup")}

Bestellung:
${buildOrderLines().join("\n")}

Summe: ${formatPrice(total)}
Anmerkung: ${data.get("cartNote") || "-"}`;

    openWhatsApp(message);
  });
}

function initFloatingCart() {
  if (!floatingCartButton || !cartPreviewPanel || !cartPreviewBackdrop || !cartPreviewClose || !cartPreviewCheckout) return;

  floatingCartButton.addEventListener("click", () => {
    setCartPreviewOpen(cartPreviewPanel.hidden);
  });

  cartPreviewBackdrop.addEventListener("click", () => {
    setCartPreviewOpen(false);
  });

  cartPreviewClose.addEventListener("click", () => {
    setCartPreviewOpen(false);
  });

  cartPreviewCheckout.addEventListener("click", () => {
    setCartPreviewOpen(false);
    document.getElementById("cart")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setCartPreviewOpen(false);
    }
  });
}

function initNavigation() {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

function initRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px 140px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function highlightCurrentOpeningDay() {
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "Europe/Berlin",
  }).format(new Date());

  document.querySelectorAll(".opening-day").forEach((day) => {
    day.classList.toggle("is-today", day.dataset.day === today);
  });
}

function requireValidForm(form) {
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }
  return true;
}

function initForms() {
  const reservationForm = document.getElementById("reservationForm");

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requireValidForm(reservationForm)) return;

    const data = new FormData(reservationForm);
    const message = `Hallo Ann-Quán,

ich möchte gerne einen Tisch reservieren.

Name: ${data.get("resName")}
Telefon: ${data.get("resPhone")}
Datum: ${data.get("resDate")}
Uhrzeit: ${data.get("resTime")}
Anzahl der Personen: ${data.get("resGuests")}
Anmerkung: ${data.get("resNote") || "-"}`;

    openWhatsApp(message);
    reservationForm.reset();
  });
}

function initContactWhatsApp() {
  document.getElementById("contactWhatsApp").addEventListener("click", () => {
    openWhatsApp("Hallo Ann-Quán,\n\nich möchte Sie gerne kontaktieren.");
  });
}

function initPageLoader() {
  const loader = document.getElementById("pageLoader");
  const hideLoader = () => {
    if (!loader) return;
    loader.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(hideLoader, 900);
  });

  window.addEventListener("load", () => {
    window.setTimeout(hideLoader, 250);
  });

  window.setTimeout(hideLoader, 1400);
}

function init() {
  initPageLoader();
  renderSpecialties();
  renderMenuPager();
  renderMenuList();
  initNavigation();
  initMenuPager();
  initRevealAnimation();
  highlightCurrentOpeningDay();
  initForms();
  initCartActions();
  initFloatingCart();
  initContactWhatsApp();
  updateCart();
}

init();
