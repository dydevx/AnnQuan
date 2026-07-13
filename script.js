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
  "Hausgemachte Getränke",
  "Getränke mit Alkohol",
];

const DISH_IMAGE_FOCUS = {
  "assets/vorspeise.jpg": "50% 76%",
  "assets/bun-cha.jpg": "50% 52%",
  "assets/bun-noodles.jpg": "50% 52%",
  "assets/pho-ga.png": "50% 50%",
  "assets/pho-soup.jpg": "50% 52%",
  "assets/pho-xao.jpg": "50% 46%",
  "assets/mien-ga.jpg": "50% 50%",
  "assets/com-rice.jpg": "50% 48%",
  "assets/com-ga.jpg": "45% 55%",
  "assets/com-vit.jpg": "48% 48%",
  "assets/dessert.jpg": "50% 50%",
  "Com Tofu.jpg": "52% 50%",
  "Com Ga.jpg": "50% 52%",
  "Com Vit.jpg": "46% 46%",
  "Com Thit Bo.jpg": "62% 58%",
  "Com Hai San.jpg": "50% 52%",
  "Extra Beilage.jpg": "50% 48%",
  "Nem Gio Re.jpg": "50% 48%",
  "Nem Ha Noi.jpg": "50% 54%",
  "Dau Chien Xu.jpg": "50% 50%",
  "Nom Xoai.jpg": "50% 52%",
  "Nom Mien Yam Gung.jpg": "50% 52%",
  "Nom Mien.jpg": "50% 52%",
};

const MENU_ITEMS = [
  {
    id: "100",
    category: "Vorspeise",
    name: "100. Nem Song",
    description: "Im Reispapier eingewickelte Reisnudeln, Karotten, Gurken, Salat, asiatischen Kräuter serviert mit einer Limetten-Chili-Fischsauce und schwarzem Sesam.",
    price: "6,00€",
    image: LOGO_IMAGE,
    optionGroups: [
      {
        id: "fuellung",
        title: "Wähle deine Füllung",
        required: true,
        options: [
          { id: "tofu", label: "Tofu (6,00€)", priceDelta: 0 },
          { id: "huhn", label: "Hühnerfleisch (6,00€)", priceDelta: 0 },
          { id: "garnele", label: "Garnelen (6,00€)", priceDelta: 0 },
        ],
      },
    ],
  },
  {
    id: "101",
    category: "Vorspeise",
    name: "101. Nem Gio Re",
    description: "Knusprige Reispapierrollen aus geflochtenen Reisnudelfäden mit Krabben-Shrimps-Füllung, Glasnudeln, Wurzelgemüse und Morcheln. Serviert mit Limetten-Chili-Fischsauce.",
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
    description: "Frischer Mangosalat mit Garnelen, Koriander, Minze, Gurken, Karotten und schwarzem Sesam in einer Limette-Fischsauce-Vinaigrette und das Reiscracker.",
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
    description: "Glasnudelsalat mit Maishähnchenstreifen, Koriander, Minze, Gurken, Karotten und schwarzem Sesam in einer Limetten-Fischsauce-Vinaigrette und dazu Reiscracker.",
    price: "8,00€",
    image: BILDER.vorspeise,
  },
  {
    id: "106",
    category: "Vorspeise",
    name: "106. Nem Ha Noi",
    description: "Knusprige hausgemachte Reispapierrollen mit einer Garnelen-Schweine-Fullung-Glasnudeln-Wurzelgemüse-Pilzen.",
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
    description: "Gegrilltes nach nord - vietnamesischer art, mariniertes Schweinefleisch mit weißem Sesam. Vietnamesische Reisfadennudel mit Gurken, Karotten, frischem Salat und asiatischen Kräutern in einer Limetten Chilli-Fischsauce.",
    price: "15,50€",
    image: BILDER.bun,
  },
  {
    id: "201",
    category: "Bún",
    name: "201. Bun Nem",
    description: "Knusprige Reispapierrollen mit Garnelen-Schweine-Ei-füllung-Glasnudeln-Wurzelgemüse und Pilzen. Vietnamesische Reisfadennudel mit Gurken, Karotten, frischem Salat und asiatischen Kräutern in einer Limetten Chilli-Fischsauce.",
    price: "14,50€",
    image: BILDER.bun,
  },
  {
    id: "202",
    category: "Bún",
    name: "202. Bun Nem Chay (Vegetarisch)",
    description: "Knusprige Reispapierrollen mit einer Tofu-Ei-Füllung, Glasnudeln, Wurzelgemüse und Pilzen. Vietnamesische Reisfadennudel mit Gurken, Karotten, frischem Salat und asiatischen Kräutern in einer Limetten Chilli-Fischsauce.",
    price: "14,50€",
    image: BILDER.bun,
  },
  {
    id: "203",
    category: "Bún",
    name: "203. Bun Cha La Lot",
    description: "In vietnamesischen Pfefferblättern eingewickeltes Schweinehackfleisch mit gehackten Erdnüssen. Vietnamesische Reisfadennudel mit Gurken, Karotten, frischem Salat und asiatischen Kräutern in einer Limetten Chilli-Fischsauce.",
    price: "15,50€",
    image: BILDER.bun,
  },
  {
    id: "204",
    category: "Bún",
    name: "204. Bun Bo Nam Bo",
    description: "Gebratenes, auf süß- vietnamesische Art, mariniertes Rindfleisch mit gehackten Erdnüssen und saisonalen asiatischen Kräutern. Vietnamesische Reisfadennudel mit Gurken, Karotten, frischem Salat und asiatischen Kräutern in einer Limetten Chilli-Fischsauce.",
    price: "16,50€",
    image: BILDER.bun,
  },
  {
    id: "205",
    category: "Bún",
    name: "205. Bun Dau Chien Xu (Vegan)",
    description: "Knuspriger gebackener Seidentofu mit schwarzem Sesam. Vietnamesische Reisfadennudel mit Gurken, Karotten, frischem Salat und asiatischen Kräutern in einer Limetten Chilli-Fischsauce.",
    price: "13,50€",
    image: BILDER.bun,
  },
  {
    id: "300",
    category: "Phở",
    name: "300. Pho Ga",
    description: "Mit zarter Maishähnchenbrust. Traditionell Vietnamesische Reisbandnudelsuppen mit 8 Stunden gekochter knochenbrühe und ver. Gemüse (Frühlingszwiebeln, Koriander, Lauchzwiebeln und Minze).",
    price: "8,00€",
    image: BILDER.pho,
    optionGroups: [
      {
        id: "size",
        title: "Wähle deine Größe",
        required: true,
        options: [
          { id: "klein", label: "Klein", priceDelta: 0 },
          { id: "gross", label: "Groß", priceDelta: 6.5 },
        ],
      },
    ],
  },
  {
    id: "301",
    category: "Phở",
    name: "301. Pho Bo Classic",
    description: "Mit saftigem Rindfleisch oder kurz angebratenem in medium rare. Traditionell Vietnamesische Reisbandnudelsuppen mit 8 Stunden gekochter knochenbrühe und ver. Gemüse (Frühlingszwiebeln, Koriander, Lauchzwiebeln und Minze).",
    price: "9,90€",
    image: BILDER.pho,
    optionGroups: [
      {
        id: "size",
        title: "Wähle deine Größe",
        required: true,
        options: [
          { id: "klein", label: "Klein", priceDelta: 0 },
          { id: "gross", label: "Groß", priceDelta: 8 },
        ],
      },
    ],
  },
  {
    id: "302",
    category: "Phở",
    name: "302. Pho Bo Premium",
    description: "Mit dünn gekochtem Rindfleisch von Ribs und 4 Stunden geschmorter Rinderrippenknochen, saftig und von der knochenstruktur Fallend. Traditionell Vietnamesische Reisbandnudelsuppen mit 8 Stunden gekochter knochenbrühe und ver. Gemüse (Frühlingszwiebeln, Koriander, Lauchzwiebeln und Minze).",
    price: "20,00€",
    image: BILDER.pho,
  },
  {
    id: "303",
    category: "Phở",
    name: "303. Pho Sot Vang",
    description: "Vietnamesisches Gulasch vom Rindfleisch mit Tomaten, asiatischen Kräutern, verfeinert mit Rotwein, wahlweise mit Reis oder Reisnudeln. Traditionell vietnamesische Reisbandnudelsuppen mit 8 Stunden gekocht Knochenbrühe und ver. Gemüse (frühlingszwiebeln, Koriander, lauchzwiebeln und Minze).",
    price: "9,00€",
    image: BILDER.pho,
    optionGroups: [
      {
        id: "size",
        title: "Wähle deine Größe",
        required: true,
        options: [
          { id: "klein", label: "Klein", priceDelta: 0 },
          { id: "gross", label: "Groß", priceDelta: 6.5 },
        ],
      },
      {
        id: "side",
        title: "Deine Wahl",
        required: true,
        options: [
          { id: "reis", label: "Reis", priceDelta: 0 },
          { id: "reisnudeln", label: "Reisnudeln", priceDelta: 0 },
        ],
      },
    ],
  },
  {
    id: "304",
    category: "Phở",
    name: "304. Pho Tofu",
    description: "Traditionelle vietnamesische Reisbandnudelsuppe mit gebratenem Tofu, acht Stunden gekochter Knochenbrühe, Frühlingszwiebeln, Koriander und Minze.",
    price: "7,00€",
    image: BILDER.pho,
    optionGroups: [{ id: "size", title: "Wähle deine Größe", required: true, options: [
      { id: "klein", label: "Klein", priceDelta: 0 },
      { id: "gross", label: "Groß", priceDelta: 4.5 },
    ] }],
  },
  {
    id: "305",
    category: "Phở",
    name: "305. Pho Xao",
    description: "Gebratene Reisnudeln mit saisonalem Gemüse, asiatischen Kräutern, Sprossen und gehackten Erdnüssen.",
    price: "14,50€",
    image: BILDER.pho,
    optionGroups: [{ id: "topping", title: "Wähle dein Topping", required: true, options: [
      { id: "tofu", label: "Tofu-Streifen oder Gemüse", priceDelta: 0 },
      { id: "huhn", label: "Hühnerfleisch", priceDelta: 1 },
      { id: "rind", label: "Rindfleisch", priceDelta: 2.5 },
      { id: "knusperhuhn", label: "Knuspriges Hühnchen", priceDelta: 3 },
      { id: "ente", label: "Knusprige Ente", priceDelta: 4 },
    ] }],
  },
  {
    id: "400",
    category: "Miến",
    name: "400. Mien Ga",
    description: "Glasnudeln mit Maishähnchenstreifen, Frühlingszwiebeln, Sprossen, asiatischen Kräutern und einem halben Ei.",
    price: "8,00€",
    image: BILDER.mien,
    optionGroups: [{ id: "size", title: "Wähle deine Größe", required: true, options: [
      { id: "klein", label: "Klein", priceDelta: 0 },
      { id: "gross", label: "Groß", priceDelta: 7.5 },
    ] }],
  },
  {
    id: "401",
    category: "Miến",
    name: "401. Mien Xao Tom",
    description: "Gebratene Glasnudeln mit Garnelen, Gurken, Karotten, Pak Choi, asiatischen Kräutern und weißem Sesam.",
    price: "18,40€",
    image: BILDER.mien,
  },
  {
    id: "402",
    category: "Miến",
    name: "402. Mien Xao Ga Chien",
    description: "Gebratene Glasnudeln mit Hühnerfleisch, Gurken, Karotten, Pak Choi, asiatischen Kräutern und weißem Sesam.",
    price: "15,40€",
    image: BILDER.mien,
  },
  {
    id: "403",
    category: "Miến",
    name: "403. Mien Xao Vit",
    description: "Gebratene Glasnudeln mit knuspriger Ente, Gurken, Karotten, Pak Choi, asiatischen Kräutern und weißem Sesam.",
    price: "18,40€",
    image: BILDER.mien,
  },
  {
    id: "404",
    category: "Miến",
    name: "404. Mien Xao Ga Chien",
    description: "Gebratene Glasnudeln mit knusprigem Hähnchen, Gurken, Karotten, Pak Choi, asiatischen Kräutern und weißem Sesam.",
    price: "17,40€",
    image: BILDER.mien,
  },
  {
    id: "500",
    category: "Cơm - Reisgerichte",
    name: "500. Com Tofu",
    description: "Sauce mit verschiedenem Gemüse (Paprika, Bambus, Lauchzwiebeln, Brokkoli, Chinakohl und Karotte), frischen Kräutern und Duftreis.",
    price: "14,50€",
    image: BILDER.com,
    optionGroups: [
      { id: "sauce", title: "Wähle deine Sauce", required: true, options: [
        { id: "kokos-curry", label: "Kokosnussmilch und Curry Sauce (mild-scharf)", priceDelta: 0 },
        { id: "dunkel", label: "Herzhafte dunkle Sauce", priceDelta: 0 },
        { id: "erdnuss", label: "Erdnuss Sauce", priceDelta: 0 },
        { id: "mango", label: "Fruchtige Mango Sauce", priceDelta: 0 },
      ] },
      { id: "beilage", title: "Wähle deine Beilage", required: false, options: [
        { id: "reis", label: "Angebratener Reis", priceDelta: 3 },
        { id: "reisnudeln", label: "Reisnudeln", priceDelta: 3 },
        { id: "glasnudeln", label: "Glasnudeln", priceDelta: 3 },
      ] },
    ],
  },
  {
    id: "501",
    category: "Cơm - Reisgerichte",
    name: "501. Com Ga",
    description: "Sauce mit verschiedenem Gemüse (Paprika, Bambus, Lauchzwiebeln, Brokkoli, Chinakohl und Karotte), frischen Kräutern und Duftreis.",
    price: "16,00€",
    image: BILDER.com,
    optionGroups: [
      { id: "sauce", title: "Wähle deine Sauce", required: true, options: [
        { id: "kokos-curry", label: "Kokosnussmilch und Curry Sauce (mild-scharf)", priceDelta: 0 },
        { id: "dunkel", label: "Herzhafte dunkle Sauce", priceDelta: 0 },
        { id: "erdnuss", label: "Erdnuss Sauce", priceDelta: 0 },
        { id: "mango", label: "Fruchtige Mango Sauce", priceDelta: 0 },
        { id: "suess-sauer", label: "Süß-Sauer Sauce mit Ananas, Gurken, Paprika und Lauchzwiebeln", priceDelta: 0 },
        { id: "roter-curry", label: "Roter Curry (scharf)", priceDelta: 0 },
      ] },
      { id: "beilage", title: "Wähle deine Beilage", required: false, options: [
        { id: "reis", label: "Angebratener Reis", priceDelta: 3 }, { id: "reisnudeln", label: "Reisnudeln", priceDelta: 3 }, { id: "glasnudeln", label: "Glasnudeln", priceDelta: 3 },
      ] },
      { id: "sonderwunsch", title: "Dein Sonderwunsch", required: false, options: [{ id: "knusperhuhn", label: "Knuspriges Hähnchenfilet", priceDelta: 2 }] },
    ],
  },
  {
    id: "502",
    category: "Cơm - Reisgerichte",
    name: "502. Com Vit",
    description: "Sauce mit verschiedenem Gemüse (Paprika, Bambus, Lauchzwiebeln, Brokkoli, Chinakohl und Karotte), frischen Kräutern und Duftreis.",
    price: "16,90€",
    image: BILDER.com,
    optionGroups: [
      { id: "sauce", title: "Wähle deine Sauce", required: true, options: [
        { id: "kokos-curry", label: "Kokosnussmilch und Curry Sauce (mild-scharf)", priceDelta: 0 }, { id: "dunkel", label: "Herzhafte dunkle Sauce", priceDelta: 0 }, { id: "erdnuss", label: "Erdnuss Sauce", priceDelta: 0 }, { id: "mango", label: "Fruchtige Mango Sauce", priceDelta: 0 }, { id: "suess-sauer", label: "Süß-Sauer Sauce mit Ananas, Gurken, Paprika und Lauchzwiebeln", priceDelta: 0 }, { id: "roter-curry", label: "Roter Curry (scharf)", priceDelta: 0 }, { id: "curry-frucht", label: "Roter Curry mit Kokosmilch, Ananas und Litschi", priceDelta: 0 },
      ] },
      { id: "beilage", title: "Wähle deine Beilage", required: false, options: [{ id: "reis", label: "Angebratener Reis", priceDelta: 3 }, { id: "reisnudeln", label: "Reisnudeln", priceDelta: 3 }, { id: "glasnudeln", label: "Glasnudeln", priceDelta: 3 }] },
      { id: "sonderwunsch", title: "Dein Sonderwunsch", required: false, options: [{ id: "knusperente", label: "Knuspriges Entenfilet", priceDelta: 2 }] },
    ],
  },
  {
    id: "503",
    category: "Cơm - Reisgerichte",
    name: "503. Com Thit Bo",
    description: "Mit Rindfleisch. Sauce mit verschiedenem Gemüse (Paprika, Bambus, Lauchzwiebeln, Brokkoli, Chinakohl und Karotte), frischen Kräutern und Duftreis.",
    price: "17,50€",
    image: BILDER.com,
    optionGroups: [
      { id: "sauce", title: "Wähle deine Sauce", required: true, options: [{ id: "kokos-curry", label: "Kokosnussmilch und Curry Sauce (mild-scharf)", priceDelta: 0 }, { id: "dunkel", label: "Herzhafte dunkle Sauce", priceDelta: 0 }, { id: "erdnuss", label: "Erdnuss Sauce", priceDelta: 0 }, { id: "mango", label: "Fruchtige Mango Sauce", priceDelta: 0 }, { id: "suess-sauer", label: "Süß-Sauer Sauce mit Ananas, Gurken, Paprika und Lauchzwiebeln", priceDelta: 0 }] },
      { id: "beilage", title: "Wähle deine Beilage", required: false, options: [{ id: "reis", label: "Angebratener Reis", priceDelta: 3 }, { id: "reisnudeln", label: "Reisnudeln", priceDelta: 3 }, { id: "glasnudeln", label: "Glasnudeln", priceDelta: 3 }] },
    ],
  },
  {
    id: "504",
    category: "Cơm - Reisgerichte",
    name: "504. Com Hai San",
    description: "Mit Garnelen. Sauce mit verschiedenem Gemüse (Paprika, Bambus, Lauchzwiebeln, Brokkoli, Chinakohl und Karotte), frischen Kräutern und Duftreis.",
    price: "19,00€",
    image: BILDER.com,
    optionGroups: [
      { id: "sauce", title: "Wähle deine Sauce", required: true, options: [{ id: "kokos-curry", label: "Kokosnussmilch und Curry Sauce (mild-scharf)", priceDelta: 0 }, { id: "suess-sauer", label: "Süß-Sauer Sauce mit Ananas, Gurken, Paprika und Lauchzwiebeln", priceDelta: 0 }, { id: "curry-frucht", label: "Roter Curry mit Kokosmilch, Ananas und Litschi", priceDelta: 0 }] },
      { id: "beilage", title: "Wähle deine Beilage", required: false, options: [{ id: "reis", label: "Angebratener Reis", priceDelta: 3 }, { id: "reisnudeln", label: "Reisnudeln", priceDelta: 3 }, { id: "glasnudeln", label: "Glasnudeln", priceDelta: 3 }] },
    ],
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
    description: "Zwei Mochi-Klebreiskuchen mit Eisfüllungen in verschiedenen Geschmacksrichtungen: Schokolade, Mango, Maracuja, Kokosnuss oder Erdbeere.",
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
    description: "Frisch gebackene, knusprige Waffel in Fischform mit einer Sauce nach Wahl.",
    price: "6,50€",
    image: BILDER.dessert,
    optionGroups: [{ id: "sauce", title: "Wähle deine Sauce", required: true, options: [
      { id: "schokolade", label: "Schokolade", priceDelta: 0 },
      { id: "erdbeere", label: "Erdbeere", priceDelta: 0 },
      { id: "karamell", label: "Karamell", priceDelta: 0 },
    ] }],
  },
  { id: "d01", category: "Hausgemachte Getränke", name: "Eistee Pfirsich 0,5 l", description: "Hausgemachter Pfirsich-Eistee.", price: "6,00€", image: LOGO_IMAGE },
  { id: "d02", category: "Hausgemachte Getränke", name: "Eistee Maracuja 0,5 l", description: "Hausgemachter Maracuja-Eistee.", price: "6,00€", image: LOGO_IMAGE },
  { id: "d03", category: "Hausgemachte Getränke", name: "Eistee Mango 0,5 l", description: "Hausgemachter Mango-Eistee.", price: "6,00€", image: LOGO_IMAGE },
  { id: "d04", category: "Hausgemachte Getränke", name: "Eistee Aloe Vera 0,5 l", description: "Hausgemachter Aloe-Vera-Eistee.", price: "6,00€", image: LOGO_IMAGE },
  { id: "d05", category: "Hausgemachte Getränke", name: "Hausgemachter Eistee 0,4 l", description: "Erfrischender Eistee nach Art des Hauses.", price: "6,00€", image: LOGO_IMAGE },
  { id: "d06", category: "Hausgemachte Getränke", name: "Ingwer-Limetten-Soda 0,4 l", description: "Hausgemachte Soda mit Ingwer und Limette.", price: "6,00€", image: LOGO_IMAGE },
  { id: "d07", category: "Hausgemachte Getränke", name: "Lychee Limo 0,4 l", description: "Hausgemachte Limonade mit Lychee.", price: "6,00€", image: LOGO_IMAGE },
  { id: "d08", category: "Hausgemachte Getränke", name: "Mango Lassi", description: "Cremiges Joghurtgetränk mit Mango.", price: "6,50€", image: LOGO_IMAGE },
  { id: "d09", category: "Hausgemachte Getränke", name: "Mango Soda", description: "Prickelnde Mango-Soda.", price: "6,50€", image: LOGO_IMAGE },
  { id: "a01", category: "Getränke mit Alkohol", name: "Schöfferhofer Hefeweizen Dunkel 0.5l", description: "Nur für Personen ab 18 Jahren.", price: "4,82€", unitPrice: "9,64 €/L", deposit: "0,08 € Pfand", fixedFee: 0.08, volume: "500 ml", alcohol: "5% vol.", image: LOGO_IMAGE },
  { id: "a02", category: "Getränke mit Alkohol", name: "Schöfferhofer Hefeweizen Alkoholfrei 0.5l", description: "Alkoholfreies Hefeweizen.", price: "4,82€", unitPrice: "9,64 €/L", deposit: "0,08 € Pfand", fixedFee: 0.08, volume: "500 ml", image: LOGO_IMAGE },
  { id: "a03", category: "Getränke mit Alkohol", name: "Schöfferhofer Hefeweizen Hell 0.5l", description: "Nur für Personen ab 18 Jahren.", price: "4,82€", unitPrice: "9,64 €/L", deposit: "0,08 € Pfand", fixedFee: 0.08, volume: "500 ml", alcohol: "5% vol.", image: LOGO_IMAGE },
];

function getDishImage(item) {
  return DISH_IMAGES_BY_NAME[normalizeDishName(item.name)] || item.image || LOGO_IMAGE;
}

function getDishImageClass(item) {
  return item.image === LOGO_IMAGE ? "is-logo-image" : "";
}

function getDishImageFocus(item) {
  return DISH_IMAGE_FOCUS[item.image] || "50% 50%";
}

function normalizeDishName(value) {
  return value
    .replace(/^\d+\.\s*/, "")
    .replace(/\s*\([^)]*\)\s*$/, "")
    .normalize("NFC")
    .trim()
    .toLowerCase();
}

MENU_ITEMS.forEach((item) => {
  item.image = getDishImage(item);
  item.imageClass = getDishImageClass(item);
  item.imageFocus = getDishImageFocus(item);
});

const SPECIALTY_IDS = ["106", "200", "300", "305", "501", "703"];
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
let menuMasonryFrame = 0;

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

function getItemOptionGroups(item) {
  return item.optionGroups || [];
}

function getOptionPriceLabel(option) {
  if (!option.priceDelta) return "";
  return `+${formatPrice(option.priceDelta)}`;
}

function renderMenuOptions(item) {
  const groups = getItemOptionGroups(item);
  if (!groups.length) return "";

  return `
    <div class="menu-option-groups" data-option-groups>
      ${groups.map((group) => `
        <fieldset class="menu-option-group" data-option-group="${group.id}">
          <legend>
            <span>${group.title}</span>
            ${group.required ? `<em>Pflicht</em>` : ""}
          </legend>
          <p class="menu-option-hint">${group.required ? "1 auswählen" : "Optional · 1 auswählen"}</p>
          <div class="menu-option-list">
            ${group.options.map((option) => `
              <label class="menu-option-row">
                <span>
                  <strong>${option.label}</strong>
                  ${option.priceDelta ? `<small>${getOptionPriceLabel(option)}</small>` : ""}
                </span>
                <input type="radio" name="option-${item.id}-${group.id}" value="${option.id}" data-option-input data-option-group-id="${group.id}" data-option-price="${option.priceDelta || 0}" />
              </label>
            `).join("")}
          </div>
          <p class="menu-option-error">Bitte wählen Sie eine Option aus.</p>
        </fieldset>
      `).join("")}
    </div>
  `;
}

function getSelectedOptionState(item, trigger) {
  const groups = getItemOptionGroups(item);
  if (!groups.length) {
    return {
      isValid: true,
      cartId: item.id,
      options: [],
      price: formatPrice(parsePrice(item.price) + Number(item.fixedFee || 0)),
    };
  }

  const card = trigger?.closest(`[data-menu-item-id="${item.id}"]`);
  const selections = [];
  let total = parsePrice(item.price) + Number(item.fixedFee || 0);
  let isValid = true;

  groups.forEach((group) => {
    const groupElement = card?.querySelector(`[data-option-group="${group.id}"]`);
    groupElement?.classList.remove("has-error");

    const selectedInput = card?.querySelector(`input[name="option-${item.id}-${group.id}"]:checked`);
    const selectedOption = group.options.find((option) => option.id === selectedInput?.value);

    if (group.required && !selectedOption) {
      isValid = false;
      groupElement?.classList.add("has-error");
      return;
    }

    if (!selectedOption) return;

    const priceDelta = Number(selectedOption.priceDelta || 0);
    total += priceDelta;
    selections.push({
      groupId: group.id,
      groupLabel: group.title,
      optionId: selectedOption.id,
      optionLabel: selectedOption.label,
      priceDelta,
    });
  });

  if (!isValid) {
    card?.querySelector(".menu-option-group.has-error input")?.focus();
    scheduleMenuMasonry();
  }

  return {
    isValid,
    cartId: [item.id, ...selections.map((selection) => `${selection.groupId}-${selection.optionId}`)].join("__"),
    options: selections,
    price: formatPrice(total),
  };
}

function updateMenuCardPrice(card) {
  if (!card) return;

  const item = getItem(card.dataset.menuItemId);
  const priceElement = card.querySelector("[data-item-price]");
  if (!item || !priceElement) return;

  const total = getItemOptionGroups(item).reduce((sum, group) => {
    const selectedInput = card.querySelector(`input[name="option-${item.id}-${group.id}"]:checked`);
    return sum + Number(selectedInput?.dataset.optionPrice || 0);
  }, parsePrice(item.price) + Number(item.fixedFee || 0));

  priceElement.textContent = formatPrice(total);
}

function renderCartOptionText(item) {
  if (!item.options?.length) return "";
  return `<p class="cart-option-text">${item.options.map((option) => `${option.groupLabel}: ${option.optionLabel}`).join(" · ")}</p>`;
}

function buildOrderLine(item) {
  const options = item.options?.length
    ? ` | ${item.options.map((option) => `${option.groupLabel}: ${option.optionLabel}`).join(", ")}`
    : "";
  return `- ${item.quantity}× ${item.name}${options} (${item.price})`;
}

function renderMenuCard(item, className = "menu-text-card reveal") {
  if (item.category === "Getränke mit Alkohol") {
    return `
      <article class="${className} alcohol-menu-row" data-menu-item-id="${item.id}">
        <div class="alcohol-menu-content">
          <h4>${item.name}</h4>
          <p class="alcohol-menu-meta">
            <strong>${item.price}</strong>
            <span>(${item.unitPrice})</span>
            <span>+ ${item.deposit}</span>
            <span aria-hidden="true">·</span>
            <span>${item.volume}</span>
          </p>
          ${item.alcohol ? `<p class="alcohol-menu-volume">${item.alcohol}</p>` : ""}
          <p class="alcohol-menu-note">${item.description}</p>
        </div>
        <div class="menu-actions alcohol-menu-actions">
          <button class="button button-outline" type="button" data-cart-add="${item.id}" aria-label="${item.name} in den Warenkorb">Hinzufügen</button>
        </div>
      </article>
    `;
  }

  const hasOptions = getItemOptionGroups(item).length > 0;
  const isDrink = item.category === "Hausgemachte Getränke";

  return `
    <article class="${className} menu-card-enter${hasOptions ? " has-options" : ""}${isDrink ? " homemade-drink-row" : ""}" data-menu-item-id="${item.id}">
      <div class="menu-text-body">
        <div class="menu-text-top">
          <div>
            <h4>${item.name}</h4>
            ${hasOptions ? `<p class="menu-choice-summary">Mit Auswahlmöglichkeiten</p>` : ""}
          </div>
          <strong data-item-price>${hasOptions ? `<small>ab</small> ` : ""}${item.price}</strong>
        </div>
        <p class="menu-item-description">${item.description}</p>
        ${renderMenuOptions(item)}
        <div class="menu-actions">
          <button class="button button-outline" type="button" data-cart-add="${item.id}">${isDrink ? "Hinzufügen" : "In den Warenkorb"}</button>
          <button class="button button-secondary" type="button" data-direct-order="${item.id}">Sofort bestellen</button>
        </div>
      </div>
    </article>
  `;
}

function renderSpecialties() {
  if (!specialtyGrid) return;

  specialtyGrid.innerHTML = SPECIALTY_IDS.map((id) => {
    const item = getItem(id);
    const hasOptions = getItemOptionGroups(item).length > 0;
    return `
      <article class="dish-card reveal">
        <div class="dish-body">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="dish-meta">
            <span class="dish-price">${item.price}</span>
            <button class="button button-outline" type="button" ${hasOptions ? `data-menu-select="${item.id}"` : `data-cart-add="${item.id}"`}>${hasOptions ? "Optionen wählen" : "In den Warenkorb"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderMenuList() {
  if (!menuList) return;

  const category = KATEGORIEN[activeCategoryIndex];
  const items = MENU_ITEMS.filter((item) => item.category === category);
  const menuKind = category === "Getränke mit Alkohol" ? "alcohol" : category === "Hausgemachte Getränke" ? "drinks" : "food";

  menuList.innerHTML = `
    <section class="menu-category is-visible" data-menu-kind="${menuKind}">
      <div class="menu-category-heading">
        <h3>${category}</h3>
        <p>${items.length} ${items.length === 1 ? "Artikel" : "Artikel"}</p>
      </div>
      <div class="menu-items">
        ${items.map((item) => renderMenuCard(item, "menu-text-card")).join("")}
      </div>
    </section>
  `;
  scheduleMenuMasonry();
}

function applyMenuMasonry() {
  if (!menuList) return;

  menuList.querySelectorAll(".menu-items").forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll(".menu-text-card"));
    const styles = window.getComputedStyle(grid);

    cards.forEach((card) => {
      card.style.removeProperty("--menu-card-rows");
    });

    const rowHeight = Number.parseFloat(styles.gridAutoRows) || 8;
    const rowGap = Number.parseFloat(styles.rowGap) || 0;

    cards.forEach((card) => {
      const height = card.getBoundingClientRect().height;
      const rows = Math.max(1, Math.ceil((height + rowGap) / (rowHeight + rowGap)));
      card.style.setProperty("--menu-card-rows", rows);
    });
  });
}

function scheduleMenuMasonry() {
  if (menuMasonryFrame) {
    window.cancelAnimationFrame(menuMasonryFrame);
  }

  menuMasonryFrame = window.requestAnimationFrame(() => {
    menuMasonryFrame = 0;
    applyMenuMasonry();
  });
}

function renderMenuPager() {
  if (!menuPager) return;

  menuPager.innerHTML = `
    <button class="menu-page-button menu-page-step" type="button" data-menu-page="prev">Zurück</button>
    ${KATEGORIEN.map((category, index) => `
      <button class="menu-page-button ${index === activeCategoryIndex ? "is-active" : ""}" type="button" data-menu-page="${index}" aria-current="${index === activeCategoryIndex ? "page" : "false"}">${category}</button>
    `).join("")}
    <button class="menu-page-button menu-page-step" type="button" data-menu-page="next">Weiter</button>
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
  if (!menuPager) return;

  menuPager.addEventListener("click", (event) => {
    const button = event.target.closest("[data-menu-page]");
    if (!button || button.disabled) return;
    changeMenuPage(button.dataset.menuPage);
  });
}

function openMenuList() {
  activeCategoryIndex = 0;
  renderMenuPager();
  renderMenuList();

  const orderSection = document.getElementById("online-order");
  if (!orderSection) return;

  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo({
    top: orderSection.getBoundingClientRect().top + window.scrollY,
    behavior: "auto",
  });
  window.requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  });

  if (window.location.hash !== "#online-order") {
    history.pushState(null, "", "#online-order");
  }
  window.setTimeout(() => {
    menuPager?.querySelector(".menu-page-button.is-active")?.focus({ preventScroll: true });
  }, 80);
}

function initMenuListTrigger() {
  document.body.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-menu-list]");
    if (!trigger) return;

    event.preventDefault();
    openMenuList();
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
      <div class="cart-preview-line-body">
        <h4>${item.name}</h4>
        ${renderCartOptionText(item)}
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
        ${renderCartOptionText(item)}
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

function addToCart(id, trigger) {
  const item = getItem(id);
  if (!item) return;
  const selectedState = getSelectedOptionState(item, trigger);
  if (!selectedState.isValid) return;

  if (!cart[selectedState.cartId]) {
    cart[selectedState.cartId] = {
      ...item,
      id: selectedState.cartId,
      itemId: item.id,
      options: selectedState.options,
      price: selectedState.price,
      quantity: 1,
    };
  } else {
    cart[selectedState.cartId].quantity += 1;
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
  return Object.values(cart).map((item) => buildOrderLine(item));
}

function initCartActions() {
  document.body.addEventListener("click", (event) => {
    const menuSelectButton = event.target.closest("[data-menu-select]");
    const addButton = event.target.closest("[data-cart-add]");
    const directButton = event.target.closest("[data-direct-order]");
    const plusButton = event.target.closest("[data-cart-plus]");
    const minusButton = event.target.closest("[data-cart-minus]");

    if (menuSelectButton) {
      const item = getItem(menuSelectButton.dataset.menuSelect);
      if (!item) return;

      activeCategoryIndex = Math.max(0, KATEGORIEN.indexOf(item.category));
      renderMenuPager();
      renderMenuList();
      document.getElementById("online-order")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        const card = document.querySelector(`[data-menu-item-id="${item.id}"]`);
        card?.classList.add("is-attention");
        card?.scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(() => card?.classList.remove("is-attention"), 1200);
      }, 120);
      return;
    }

    if (addButton) {
      addToCart(addButton.dataset.cartAdd, addButton);
      return;
    }

    if (directButton) {
      const item = getItem(directButton.dataset.directOrder);
      if (!item) return;
      const selectedState = getSelectedOptionState(item, directButton);
      if (!selectedState.isValid) return;
      const directItem = {
        ...item,
        options: selectedState.options,
        price: selectedState.price,
        quantity: 1,
      };
      openWhatsApp(`Hallo Ann-Quán,

ich möchte gerne Essen zum Mitnehmen bestellen.

Bestellung:
${buildOrderLine(directItem)}

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

  document.body.addEventListener("change", (event) => {
    const input = event.target.closest("[data-option-input]");
    if (!input) return;

    const card = input.closest("[data-menu-item-id]");
    input.closest(".menu-option-group")?.classList.remove("has-error");
    updateMenuCardPrice(card);
    scheduleMenuMasonry();
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
  window.addEventListener("resize", scheduleMenuMasonry);
  window.addEventListener("load", scheduleMenuMasonry);
  initNavigation();
  initMenuPager();
  initMenuListTrigger();
  initRevealAnimation();
  highlightCurrentOpeningDay();
  initForms();
  initCartActions();
  initFloatingCart();
  initContactWhatsApp();
  updateCart();
}

init();
