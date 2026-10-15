const PRODUCTS = [
  {
    id: 'stick-vapor',
    category: 'sticks',
    brand: 'Bauer',
    title: 'Клюшка VaporX Carbon Pro',
    sku: 'SKU-BAU-9921',
    price: 28990,
    oldPrice: 33490,
    rating: 4.9,
    reviewsCount: 128,
    weight: '385 г',
    kickPoint: 'Нижняя (Low-Kick)',
    material: '18K TeXtreme Carbon',
    blade: 'Aero-Foam Pro Core',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTV6A6fWgFhLYzyVxcsjHpn-syKhig0VxOJm5FJ_1rA9vzk-jY009JINsxR6S-w6fLYIqx515rF3OyC_ZsnIFAuFbXyCWBDM_Si8ltWT5GSGZt227cwoZrWK_DCpG_u3VTyWEuTEZAWiCsCQOxcy09_rTg3PyIfi_buel3lH4-3hPlpbxzj5xGQ62y5wN0nq71j1XpMK_wZjDASDG_MfB6dTkCrHANkOiaCLNtMDvgsUDNbFzPaZn10VJb0RTUOm9OEy665VuqJuZk',
    description: 'Разработана для элитных снайперов, которым нужна максимальная скорость и точность. В этой клюшке используется передовая технология наслаивания карбона для создания ультра-отзывчивой точки прогиба.',
    parameters: {
      flex: ['77 Flex', '87 Flex', '102 Flex'],
      curve: ['P92 (Matthews)', 'P28 (McDavid)', 'P88 (Kane)'],
      hand: ['Левый (Left)', 'Правый (Right)'],
      grip: ['Липкий Grip', 'Матовый Clear']
    }
  },
  {
    id: 'stick-x5pro',
    category: 'sticks',
    brand: 'Bauer',
    title: 'Клюшка Bauer Vapor X5 Pro',
    sku: 'SKU-BAU-8822',
    price: 25990,
    oldPrice: null,
    rating: 4.8,
    reviewsCount: 94,
    weight: '390 г',
    kickPoint: 'Нижняя точка прогиба',
    material: 'Spread Tow Carbon',
    blade: 'Energy Core 2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrExW21SlUbzQMvmtrk5AvZTJrXBwBf1MlhijaQRUscV4eG_mHOXD2BYFRDyqBZYqGov0O8A8ajZNz0WtxvA7KSbkz2u0TsQ9Zv4tRa7sGN9BfuNosPSQ8tw6tQf2nepx_p-9IZVkvgy_EzMmRfVg25bfQ5un9VFc1153Aoe_UDvNIz59EqCNAY2eIFFHuxPQzx0ZNU7VbwxWSCGK14yFsTAjsPdSPNIWL8wyE6792gZUVOlv4Z5Zl8bseTIPiZRhk4RAlnXsmjAV',
    description: 'Элитная клюшка с заниженной точкой удара и непревзойденной динамической отдачей в момент передачи или кистевого щелчка.',
    parameters: {
      flex: ['70 Flex', '77 Flex', '87 Flex'],
      curve: ['P92 (Matthews)', 'P28 (McDavid)'],
      hand: ['Левый (Left)', 'Правый (Right)'],
      grip: ['Grip Tack']
    }
  },
  {
    id: 'stick-trigger',
    category: 'sticks',
    brand: 'CCM',
    title: 'Клюшка CCM Ribcor Trigger 8',
    sku: 'SKU-CCM-8810',
    price: 32990,
    oldPrice: 35000,
    rating: 4.9,
    reviewsCount: 112,
    weight: '375 г',
    kickPoint: 'Оптимизированная нижняя',
    material: 'Nanolite Shield Carbon',
    blade: 'Dual-Feel Blade Core',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXLqRK0H1Z2NfBr3yOdl11hFT5810QVi8ZU3RQVTNyg6oa3Cx2c4rpjg1ORy63Dit632_iW9WdSuOix0vSuZQV8sdVvvlK1EhzO9iioBbVFVfn_V3pTb2lwwwObQELDAnqZRc8gUiR-lA9ULVK9Cj067-sUqbVGnzkKMy1RQlQWAVdOgRdmq2m59RkDAJplxF2G2uUA_EU38TWGcKCQU4TFDfRBNGuBVu-srMmA27DdxEdB2aQZYaMTccCKk-554sCxhOE9kHXMhET',
    description: 'Эргономичная геометрия трубы E-Geometry с повышенной чувствительностью крюка при приеме жестких передач.',
    parameters: {
      flex: ['75 Flex', '85 Flex', '95 Flex'],
      curve: ['P29 (Crosby)', 'P28 (McDavid)'],
      hand: ['Левый (Left)', 'Правый (Right)'],
      grip: ['Grip Tack']
    }
  },
  {
    id: 'stick-alpha',
    category: 'sticks',
    brand: 'Warrior',
    title: 'Клюшка Warrior Alpha LX2 Pro',
    sku: 'SKU-WAR-2201',
    price: 29990,
    oldPrice: null,
    rating: 4.7,
    reviewsCount: 65,
    weight: '390 г',
    kickPoint: 'Средняя точка прогиба',
    material: 'Minimus Carbon 25',
    blade: 'FuelCore Ultra',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUXoiatKvgj1JNpY9ovDp4lYgyuecoZZ-I7CY_1V6k5oLu12LvexITHFHqVBjXDMDtAOcrNW840zjsFj5pYgio4nJ7gOTu_jnAALkyr65y7FB6oj4W53NB_kcUqprSlnqCbtcHa_F053480LTYTjxFRRVidqky2DCew2R741kqa9XSQLLJsthn4cKq3xsMXuX8lXB1e2tSbk5bWtHlTqjeAEOeWRYmisYbh9ZP1SN_bm7fKGsn7FGGCLijAdFIDsILfAw83JoQM5og',
    description: 'Универсальная клюшка для мощных щелчков и точных передач на любой дистанции благодаря гибридному прогибу.',
    parameters: {
      flex: ['75 Flex', '85 Flex', '100 Flex'],
      curve: ['W03', 'W28'],
      hand: ['Левый (Left)', 'Правый (Right)'],
      grip: ['Apex Grip']
    }
  },
  {
    id: 'skates-supreme',
    category: 'skates',
    brand: 'Bauer',
    title: 'Коньки Supreme Elite Pro',
    sku: 'SKU-BAU-7720',
    price: 68900,
    oldPrice: 74900,
    rating: 5.0,
    reviewsCount: 52,
    weight: '790 г',
    kickPoint: 'Анатомическая колодка',
    material: '3D 12K Carbon Curv',
    blade: 'Tuuk Lightspeed Pulse Ti',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJfSq6bGQZsnkLQ0fwuVEIwWMAXwe4DM7A8bIcZqxnJSbN420tI-LVXxhW3LgVYpSSbvzEzP8rZdu-EIenO1H_JUbmvGKKSVRjzSHQgDx7QOuYYjgc3s4nD7nUmi4W8IzUCLGq3uSkP44iW37bx6RftUVST9BkkjmWHGDYSCiFXwy0MXdQrdxD731cEM81D8YcauJt2lDbnknA_pKqeO95QAovMr-shPMtUwKb308QX1L5xWbfsp9fehU2iSfoZI_uDIEpFt3ScRah',
    description: 'Профессиональные коньки с титановыми лезвиями и термоформуемым карбоновым ботинком для взрывного разгона.',
    parameters: {
      size: ['7.0', '7.5', '8.0', '8.5', '9.0', '9.5', '10.0', '10.5'],
      fit: ['Fit 1 (Узкая)', 'Fit 2 (Стандарт)', 'Fit 3 (Широкая)'],
      sharpening: ['Без заточки', 'Классический желоб 1/2"', 'FBV 100/75 Pro']
    }
  },
  {
    id: 'skates-tacks',
    category: 'skates',
    brand: 'CCM',
    title: 'Коньки CCM Tacks AS-V Pro',
    sku: 'SKU-CCM-5520',
    price: 64900,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 47,
    weight: '810 г',
    kickPoint: 'Монолитный ботинок One-Piece',
    material: 'RocketFrame Composite',
    blade: 'Step Blacksteel DLC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChiLBdHFz-acRkl4kQEmq5Pb1hiZZKejzRjq3ZtnHWtziRUxKVtTGYcL8VjLxoIMpuI8j7XeyQ9p-v2Pga0Tfi8ZDpFtyVCZ6DvuHEVlmJBxtgvTaLUhO71jH2YPEujxqb39yjH5hYPQ7WYc98UUszp1mSiXb8OAN3q5Ws8GoWdfU5v73q4y2nsmaOIQmYqziJIwQxqxBOzJx2g6e004j3zzNM7r-GjultHdjh1NmzszESYdb8Kh47O6cg20LIbxQfVBKeYvt2eWcy',
    description: 'Цельная конструкция ботинка обеспечивает прямую передачу каждого ватта энергии от ноги на зеркало льда.',
    parameters: {
      size: ['7.5', '8.0', '8.5', '9.0', '9.5', '10.0'],
      fit: ['Tapered (Узкая)', 'Regular (Стандарт)', 'Wide (Широкая)'],
      sharpening: ['Желоб 15 мм', 'Профиль Zuperior']
    }
  },
  {
    id: 'helmet-aero',
    category: 'helmets',
    brand: 'Bauer',
    title: 'Шлем хоккейный Aero V2 Pro',
    sku: 'SKU-BAU-4411',
    price: 24990,
    oldPrice: null,
    rating: 4.8,
    reviewsCount: 41,
    weight: '520 г',
    kickPoint: 'Регулировка FreeForm 3D',
    material: 'Comfort Pods + VTX Foam',
    blade: 'Сертификат CSA / HECC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc3PLNqE-ugESK9K9syaZeozcz2xRGZNyPWee4_q6pshPzkYWe8NqSVWNtBLH8Dc-I7FdrMHzfej7oP8fi48OAtSKc-yraxVUu_7r9l4gueRDv9p9mAbxBOxkfO9wABdZRbKlFrWFOnccZ4jwD2w2McXt7smrqQoBLG_Oa0dN3Q7CsPn5w_ATX6_-wS3KXyyWm-GdFUvcSgxUMzRsp8zLjowJq3XhewWhShJp2f0_RpFGa6T2zsPUl3IyYaNjCMhvoTlDE4Q4ASrfQ',
    description: 'Система регулировки размера независимо по длине и ширине. Максимальная защита от линейных и ротационных ударов.',
    parameters: {
      size: ['S (51-56 см)', 'M (55-59 см)', 'L (57-62 см)'],
      combo: ['Без маски', 'С решеткой (Combo)', 'С визором'],
      color: ['Черный', 'Белый', 'Темно-синий']
    }
  },
  {
    id: 'gloves-pro',
    category: 'gloves',
    brand: 'Bauer',
    title: 'Краги Pro Elite Hyperlite',
    sku: 'SKU-BAU-3320',
    price: 18990,
    oldPrice: 21500,
    rating: 4.9,
    reviewsCount: 37,
    weight: '290 г',
    kickPoint: 'Коническая посадка (Tapered)',
    material: 'PRO Palm + ShockLite Foam',
    blade: '3-составной палец',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDixwBjE6m4aTbP2i7RTdEJGvqD0xRbYXFEAmiVS76XRQXdcyj7VAqNYU_6Mu1p4d4cWupx8hJVWzmN3SGOwJEDCiuSRSZJCCaneU8shNS5qtC1Fx3BeWfoX4msSGxLud0zJBzJNk6i6pPsUHNSlUbgdfuXxMfnZQQNvsKs9qV9lfZmpqLaQ-9aITDGYhTkc3jD8vSZ8S4gGd3SsHPZ3w09fWkKaSoW3t4j03TeFfI5erPPNx59b4HdWru4-lLdQN_NsMTWDuPpM9BQ',
    description: 'Ультралегкие краги с ладошкой Pro Palm для эталонного контроля клюшки без снижения защитных свойств.',
    parameters: {
      size: ['13" (33 см)', '14" (36 см)', '15" (38 см)'],
      palm: ['Одинарная Pro Palm', 'Двойная с усилением'],
      color: ['Black/White', 'Navy/Red']
    }
  }
];

const ARENAS = [
  {
    id: 'brest',
    name: 'Ледовый дворец спорта',
    city: 'г. Брест, ул. Московская, 151',
    coords: [52.0963, 23.7547],
    distance: '1.2 км',
    status: 'Главный пункт выдачи',
    phone: '+375 162 25-10-00',
    hours: '10:00 - 20:00',
    tags: ['fbv', 'showroom', 'custom'],
    services: ['Заточка FBV 100/75', 'Пункт выдачи заказов', 'Термоформовка в печи', 'Ремонт шафтов'],
    img: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'minsk',
    name: 'Минск-Арена',
    city: 'г. Минск, пр. Победителей, 111',
    coords: [53.9362, 27.4819],
    distance: '340 км',
    status: 'Pro Stock Флагман',
    phone: '+375 17 279-06-00',
    hours: '09:00 - 21:00',
    tags: ['fbv', 'showroom', 'custom'],
    services: ['Флагманский шоурум', '3D Сканер стопы Bauer', 'Заточка Prosharp Quad', 'Сервис клюшек'],
    img: 'https://images.unsplash.com/photo-1515703407324-5f753eed2477?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cska',
    name: 'ЦСКА Арена',
    city: 'г. Москва, ул. Автозаводская, 23А',
    coords: [55.7028, 37.6478],
    distance: '1 050 км',
    status: 'Официальный партнер лиги',
    phone: '+7 495 555-88-99',
    hours: '10:00 - 22:00',
    tags: ['custom', 'fbv'],
    services: ['Кастом-лаборатория', 'Тестовый закрытый лед', 'Срочная доставка к матчу'],
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80'
  }
];

const SIZE_GUIDES = {
  sticks: {
    title: 'Подбор клюшек по росту, весу и жесткости',
    calculatorText: 'Базовое правило подбора: Flex = ваш вес в кг, деленный на 2. Например, 85 кг / 2 ≈ 85-87 Flex.',
    tableHeaders: ['Категория', 'Рост игрока (см)', 'Вес (кг)', 'Рекомендуемый Flex', 'Длина'],
    tableRows: [
      ['Юниоры (Youth / JR)', '115 – 140 см', '30 – 45 кг', '40 – 52 Flex', '46" – 52"'],
      ['Подростки (Intermediate)', '140 – 165 см', '45 – 65 кг', '55 – 65 Flex', '54" – 57"'],
      ['Взрослые (Senior Soft)', '165 – 178 см', '65 – 80 кг', '70 – 77 Flex', '60"'],
      ['Взрослые (Senior Regular)', '175 – 188 см', '80 – 95 кг', '85 – 87 Flex', '60" – 62"'],
      ['Взрослые (Senior Stiff)', '185 – 200+ см', '95 – 115+ кг', '100 – 102 Flex', '62" – 64"']
    ],
    curves: [
      { name: 'P92 (Matthews / Ovechkin)', desc: 'Универсальный с открытым носком — для быстрых кистевых верховых бросков и удобного контроля.' },
      { name: 'P28 (McDavid)', desc: 'Агрессивный крюк с загибом на самом кончике — максимальная скорость полета шайбы с носка.' },
      { name: 'P88 (Kane)', desc: 'Закрытый средний загиб — максимальная точность передач низом и мощный щелчок от синей линии.' }
    ]
  },
  skates: {
    title: 'Размеры коньков и система подбора Fit 1 / Fit 2 / Fit 3',
    calculatorText: 'Размер коньков обычно на 1.0 – 1.5 размера меньше повседневного размера обуви.',
    tableHeaders: ['Длина стопы (мм)', 'Размер РФ', 'Размер Bauer / CCM', 'Размер US', 'Размер EUR'],
    tableRows: [
      ['255 мм', '39.5', '7.0', '8.5', '42.0'],
      ['260 мм', '40.0', '7.5', '9.0', '42.5'],
      ['264 мм', '41.0', '8.0', '9.5', '43.0'],
      ['268 мм', '41.5', '8.5', '10.0', '44.0'],
      ['272 мм', '42.0', '9.0', '10.5', '44.5'],
      ['277 мм', '43.0', '9.5', '11.0', '45.0'],
      ['281 мм', '43.5', '10.0', '11.5', '45.5'],
      ['285 мм', '44.0', '10.5', '12.0', '46.0']
    ],
    curves: [
      { name: 'Fit 1 (Narrow)', desc: 'Узкая стопа, минимальный объем подъема, плотная фиксация пятки.' },
      { name: 'Fit 2 (Standard)', desc: 'Стандартная ширина и объем подъема — подходит большинству хоккеистов.' },
      { name: 'Fit 3 (Wide)', desc: 'Широкая стопа, высокий свод подъема и глубокий карман для пятки.' }
    ]
  },
  helmets: {
    title: 'Размеры хоккейных шлемов',
    calculatorText: 'Измерьте обхват головы сантиметровой лентой на 1-2 см выше линии бровей.',
    tableHeaders: ['Размер шлема', 'Обхват головы (см)', 'Обхват (дюймы)', 'US размер'],
    tableRows: [
      ['S (Small)', '51 – 56 см', '20.0" – 22.0"', '6 3/8 – 7'],
      ['M (Medium)', '55 – 59 см', '21.5" – 23.0"', '6 7/8 – 7 3/8'],
      ['L (Large)', '57 – 62 см', '22.5" – 24.5"', '7 1/8 – 7 3/4'],
      ['XL (Extra Large)', '60 – 65 см', '23.5" – 25.5"', '7 1/2 – 8']
    ],
    curves: [
      { name: 'Регулировка FreeForm', desc: 'Позволяет независимо изменять длину и ширину шлема винтовым или клипсовым механизмом.' }
    ]
  },
  gloves: {
    title: 'Размеры хоккейных краг',
    calculatorText: 'Измерьте расстояние от основания ладони (линия сгиба запястья) до кончика среднего пальца.',
    tableHeaders: ['Размер краг', 'Длина ладони (см)', 'Рост игрока (см)', 'Категория'],
    tableRows: [
      ['11" (Youth / JR)', '14 – 16 см', '120 – 140 см', 'Дети 8-11 лет'],
      ['12" (Junior)', '16 – 18 см', '140 – 155 см', 'Подростки 11-13 лет'],
      ['13" (Intermediate / SR)', '18 – 20 см', '155 – 170 см', 'Юноши и взрослые'],
      ['14" (Senior)', '20 – 22 см', '170 – 185 см', 'Взрослые игроки'],
      ['15" (Senior Extra)', '22 – 24 см', '185+ см', 'Крупные игроки']
    ],
    curves: [
      { name: 'Анатомическая посадка (Contoured)', desc: 'Плотно облегает руку для максимального чувства клюшки.' },
      { name: 'Зауженная посадка (Tapered)', desc: 'Плотная ладонь и свободная манжета для подвижности кистей.' },
      { name: 'Классическая (4-Roll)', desc: 'Традиционная просторная посадка для свободы движений пальцев.' }
    ]
  },
  protection: {
    title: 'Размеры нагрудников и щитков',
    calculatorText: 'Измерьте обхват грудной клетки на уровне подмышек и рост игрока.',
    tableHeaders: ['Размер', 'Обхват груди (см)', 'Рост игрока (см)', 'Вес игрока (кг)'],
    tableRows: [
      ['JR L', '81 – 91 см', '145 – 160 см', '40 – 55 кг'],
      ['SR S', '91 – 102 см', '165 – 175 см', '55 – 70 кг'],
      ['SR M', '102 – 112 см', '170 – 180 см', '70 – 85 кг'],
      ['SR L', '112 – 122 см', '175 – 185 см', '85 – 100 кг'],
      ['SR XL', '122 – 132 см', '185+ см', '100+ кг']
    ],
    curves: [
      { name: 'Посадка Supreme', desc: 'Анатомическая защита тела максимального покрытия.' },
      { name: 'Посадка Vapor', desc: 'Клиновидная посадка для скоростной маневренной игры.' }
    ]
  }
};

let userProfile = {
  fullName: 'Павел Пикта',
  role: 'Нападающий #99 • ХК «Брест» / Pro Stock Elite',
  height: 186,
  weight: 86,
  hand: 'Левый (L)'
};

let cart = [
  {
    product: PRODUCTS[0],
    selectedParams: { flex: '87 Flex', curve: 'P92 (Matthews)', hand: 'Левый (Left)', grip: 'Липкий Grip' },
    qty: 1
  }
];

let appliedPromo = null;
let currentFilter = 'all';
let currentProduct = PRODUCTS[0];
let currentSelectedParams = {};
let currentReviewRating = 5;
let currentFitHand = 'left';
let currentArenaTag = 'all';
let selectedArenaId = 'brest';
let screenHistory = ['home'];

let leafletMapInstance = null;
let leafletMarkersMap = {};
let mapTileLayers = {};
let currentMapTileMode = 'streets';

const reviewsData = [
  {
    name: 'Джек Д.',
    date: '2 дня назад',
    rating: 5,
    text: 'Невероятный баланс и отклик. Перешел с прошлогодней модели, и снижение веса заметно сразу на льду. Чувство шайбы невероятное.'
  },
  {
    name: 'Майк С.',
    date: '1 неделю назад',
    rating: 4,
    text: 'Отличная клюшка, хват мог бы быть лучше. Точка прогиба идеальна для быстрых кистевых бросков.'
  },
  {
    name: 'Алекс Р.',
    date: '2 недели назад',
    rating: 5,
    text: 'Абсолютная пушка! Щелчки получаются взрывными. Жесткость держится идеально. Стоит каждой копейки.'
  }
];

function initApp() {
  initTheme();
  setupGlobalButtonEffects();
  renderCatalog();
  renderCart();
  renderReviews();
  updateCartBadges();
  renderRelatedProducts();
  setupHeroVideo();
  updateInteractiveFitting();
  initLeafletMap();
  renderArenaSidebarCards();
  renderProfileUI();
}

function setupGlobalButtonEffects() {
  document.addEventListener('pointerdown', (e) => {
    const btn = e.target.closest('button, a, input[type="button"], input[type="submit"], .clickable-target, .chip-filter, .config-btn-selector, .size-tab-btn, .profile-tab-btn, .fit-hand-btn, .delivery-radio-card, .arena-item-card, .arena-filter-tag');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const circle = document.createElement('span');
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-wave');

    btn.appendChild(circle);
    setTimeout(() => {
      circle.remove();
    }, 600);
  });
}

function initTheme() {
  const saved = localStorage.getItem('pro_hockey_theme') || 'light';
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    document.getElementById('themeIcon').textContent = 'light_mode';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.getElementById('themeIcon').textContent = 'dark_mode';
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  html.classList.toggle('light', !isDark);
  localStorage.setItem('pro_hockey_theme', isDark ? 'dark' : 'light');
  document.getElementById('themeIcon').textContent = isDark ? 'light_mode' : 'dark_mode';
  
  if (currentMapTileMode === 'streets' || currentMapTileMode === 'dark') {
    setMapTileMode(isDark ? 'dark' : 'streets');
  }

  showToast(isDark ? 'Включена темная тема оформления' : 'Включена светлая тема оформления');
}

function setupHeroVideo() {
  const video = document.getElementById('heroHockeyVideo');
  const fallback = document.getElementById('heroPosterFallback');
  if (!video) return;

  video.muted = true;
  video.play().then(() => {
    if (fallback) fallback.style.opacity = '0';
  }).catch(() => {
    if (fallback) fallback.style.opacity = '1';
  });

  video.addEventListener('error', () => {
    if (fallback) fallback.style.opacity = '1';
  });
}

function toggleHeroVideoPlay() {
  const video = document.getElementById('heroHockeyVideo');
  const icon = document.getElementById('videoPlayIcon');
  if (!video) return;
  if (video.paused) {
    video.play();
    icon.textContent = 'pause';
  } else {
    video.pause();
    icon.textContent = 'play_arrow';
  }
}

function toggleHeroVideoSound() {
  const video = document.getElementById('heroHockeyVideo');
  const icon = document.getElementById('videoSoundIcon');
  if (!video) return;
  video.muted = !video.muted;
  icon.textContent = video.muted ? 'volume_off' : 'volume_up';
  showToast(video.muted ? 'Звук выключен' : 'Звук включен');
}

function scrollToHomeFittingTool() {
  const el = document.getElementById('homeFittingLab');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function setFitHand(hand, el) {
  currentFitHand = hand;
  document.querySelectorAll('.fit-hand-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  updateInteractiveFitting();
}

function updateInteractiveFitting() {
  const weight = parseInt(document.getElementById('fitWeightInput').value, 10);
  const height = parseInt(document.getElementById('fitHeightInput').value, 10);
  const style = document.getElementById('fitStyleSelect').value;

  document.getElementById('weightDisplayVal').textContent = `${weight} кг`;
  document.getElementById('heightDisplayVal').textContent = `${height} см`;

  let recommendedFlex = Math.round(weight / 2);
  if (recommendedFlex < 70) recommendedFlex = 70;
  else if (recommendedFlex <= 77) recommendedFlex = 77;
  else if (recommendedFlex <= 87) recommendedFlex = 87;
  else recommendedFlex = 102;

  let curve = 'P92 (Matthews)';
  if (style === 'sniper') curve = 'P28 (McDavid)';
  else if (style === 'power') curve = 'P88 (Kane)';

  const handLabel = currentFitHand === 'left' ? 'Левый (L)' : 'Правый (R)';
  const length = height > 185 ? '62"' : '60"';

  document.getElementById('fittingResultTitle').textContent = `${recommendedFlex} Flex • Загиб ${curve} • Хват ${handLabel} • Длина ${length}`;
}

function applyFitToProductAndOpen(productId) {
  openProductDetail(productId);
  showToast('Рекомендованные параметры применены!');
}

function navigateTo(screenId, pushHistory = true) {
  const screens = document.querySelectorAll('.screen-view');
  screens.forEach(s => s.classList.remove('active'));

  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (pushHistory && screenHistory[screenHistory.length - 1] !== screenId) {
    screenHistory.push(screenId);
  }

  const backBtn = document.getElementById('navBackBtn');
  if (screenHistory.length > 1 && screenId !== 'home') {
    backBtn.classList.remove('hidden');
  } else {
    backBtn.classList.add('hidden');
  }

  updateNavSelection(screenId);

  if (screenId === 'map' && leafletMapInstance) {
    setTimeout(() => {
      leafletMapInstance.invalidateSize();
      focusOnArena(selectedArenaId, false);
    }, 200);
  }
}

function goBack() {
  if (screenHistory.length > 1) {
    screenHistory.pop();
    const prev = screenHistory[screenHistory.length - 1];
    navigateTo(prev, false);
  } else {
    navigateTo('home', false);
  }
}

function updateNavSelection(screenId) {
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-target') === screenId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.nav-link').forEach(btn => {
    if (btn.getAttribute('data-screen') === screenId) {
      btn.classList.add('text-secondary');
    } else {
      btn.classList.remove('text-secondary');
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-[-100px]', 'opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('translate-y-[-100px]', 'opacity-0', 'pointer-events-none');
  }, 2600);
}

function renderCatalog(items = PRODUCTS) {
  const grid = document.getElementById('catalogGrid');
  const empty = document.getElementById('catalogEmptyState');

  if (items.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    empty.classList.add('flex');
    return;
  }

  empty.classList.add('hidden');
  empty.classList.remove('flex');

  grid.innerHTML = items.map(p => `
    <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div onclick="openProductDetail('${p.id}')" class="cursor-pointer">
        <div class="h-44 bg-surface-container-low flex items-center justify-center p-4 relative overflow-hidden">
          <img src="${p.image}" alt="${p.title}" class="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"/>
          ${p.oldPrice ? `<span class="absolute top-2.5 left-2.5 bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">СКИДКА</span>` : ''}
          <span class="absolute top-2.5 right-2.5 text-xs text-on-surface-variant font-bold bg-white/70 dark:bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded">${p.weight}</span>
        </div>
        <div class="p-3.5">
          <span class="text-[10px] font-bold uppercase tracking-wider text-secondary block">${p.brand}</span>
          <h4 class="font-bold text-sm text-primary line-clamp-1 mt-0.5">${p.title}</h4>
          <span class="text-xs text-on-surface-variant block mt-0.5 line-clamp-1">${p.kickPoint}</span>
        </div>
      </div>
      <div class="p-3.5 pt-0 flex items-center justify-between mt-auto border-t border-outline-variant/10">
        <div>
          <span class="font-black text-base text-primary">${p.price.toLocaleString('ru-RU')} ₽</span>
          ${p.oldPrice ? `<span class="block text-[10px] text-outline-variant line-through">${p.oldPrice.toLocaleString('ru-RU')} ₽</span>` : ''}
        </div>
        <div class="flex items-center gap-1.5">
          <button onclick="openSizeGuideModal('${p.category}')" title="Таблица размеров" class="w-8 h-8 rounded-xl bg-surface-container-high text-primary flex items-center justify-center hover:bg-surface-container-highest transition-colors">
            <span class="material-symbols-outlined text-base">straighten</span>
          </button>
          <button onclick="quickAddToCart('${p.id}')" title="Добавить в корзину" class="w-8 h-8 rounded-xl bg-secondary text-white flex items-center justify-center hover:bg-secondary-container transition-all active:scale-90 shadow-sm">
            <span class="material-symbols-outlined text-base">add</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function setFilterChip(cat, el = null) {
  currentFilter = cat;
  document.querySelectorAll('.chip-filter').forEach(btn => {
    btn.classList.remove('active', 'bg-primary', 'text-white');
    btn.classList.add('bg-surface-container-high', 'text-on-surface-variant');
  });

  if (el) {
    el.classList.add('active', 'bg-primary', 'text-white');
    el.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
  }

  applyCatalogFilters();
}

function filterAndOpenCatalog(cat) {
  navigateTo('catalog');
  const targetBtn = Array.from(document.querySelectorAll('.chip-filter')).find(b => b.textContent.toLowerCase().includes(cat.toLowerCase()));
  setFilterChip(cat, targetBtn);
}

function applyCatalogFilters() {
  const query = document.getElementById('catalogSearchInput').value.toLowerCase().trim();
  const sort = document.getElementById('catalogSortSelect').value;

  let filtered = PRODUCTS.filter(p => {
    const matchCat = (currentFilter === 'all') || (p.category === currentFilter);
    const matchQuery = p.title.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sort === 'weight-asc') filtered.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));

  renderCatalog(filtered);
}

function handleCatalogSearch() {
  applyCatalogFilters();
}

function handleCatalogSort() {
  applyCatalogFilters();
}

function resetCatalogFilters() {
  document.getElementById('catalogSearchInput').value = '';
  setFilterChip('all', document.querySelector('.chip-filter'));
}

function openProductDetail(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  currentProduct = p;
  currentSelectedParams = {};

  document.getElementById('detailProductImage').src = p.image;
  document.getElementById('detailBrand').textContent = p.brand;
  document.getElementById('detailSku').textContent = p.sku;
  document.getElementById('detailTitle').textContent = p.title;
  document.getElementById('detailPrice').textContent = `${p.price.toLocaleString('ru-RU')} ₽`;
  document.getElementById('detailOldPrice').textContent = p.oldPrice ? `${p.oldPrice.toLocaleString('ru-RU')} ₽` : '';
  document.getElementById('detailDescription').textContent = p.description;
  document.getElementById('detailReviewsCount').textContent = `(${p.reviewsCount} отзывов)`;

  renderProductParametersSelectors(p);

  const specs = [
    { label: 'Вес', val: p.weight },
    { label: 'Точка прогиба / Профиль', val: p.kickPoint },
    { label: 'Материал композита', val: p.material },
    { label: 'Сердцевина / Лезвие', val: p.blade },
    { label: 'Уровень игрока', val: 'Elite / Pro Stock' }
  ];

  document.getElementById('detailSpecsTable').innerHTML = specs.map(s => `
    <div class="flex justify-between py-3 text-xs">
      <span class="text-on-surface-variant font-medium">${s.label}</span>
      <span class="font-bold text-primary">${s.val}</span>
    </div>
  `).join('');

  renderRelatedProducts();
  navigateTo('product');
}

function renderProductParametersSelectors(p) {
  const container = document.getElementById('dynamicSizeSelectorsContainer');
  if (!p.parameters) {
    container.innerHTML = '';
    return;
  }

  const paramLabels = {
    flex: 'Жесткость (Flex)',
    curve: 'Загиб крюка',
    hand: 'Хват клюшки',
    grip: 'Покрытие рукояти',
    size: 'Размер экипировки',
    fit: 'Полнота колодки (Fit)',
    sharpening: 'Заточка лезвий на арене',
    combo: 'Комплектация визором / сеткой',
    palm: 'Тип ладошки краг',
    color: 'Цветовая гамма'
  };

  let html = '';
  for (const [key, options] of Object.entries(p.parameters)) {
    currentSelectedParams[key] = options[0];
    const labelText = paramLabels[key] || key;

    html += `
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <span class="text-xs uppercase font-bold text-primary tracking-wider">${labelText}</span>
          <span class="text-xs font-bold text-secondary" id="label-selected-${key}">${options[0]}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          ${options.map((opt, idx) => `
            <button onclick="selectProductParameter('${key}', '${opt}', this)" class="config-btn-selector ${idx === 0 ? 'active' : ''} py-2.5 px-4 rounded-xl border border-outline-variant text-xs font-bold transition-all hover:border-primary">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

function selectProductParameter(key, value, el) {
  currentSelectedParams[key] = value;
  const label = document.getElementById(`label-selected-${key}`);
  if (label) label.textContent = value;

  const parent = el.parentElement;
  parent.querySelectorAll('.config-btn-selector').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function openCurrentProductSizeGuide() {
  openSizeGuideModal(currentProduct.category);
}

function openSizeGuideModal(categoryKey = 'sticks') {
  const modal = document.getElementById('sizeGuideModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
  switchSizeGuideTab(categoryKey);
}

function closeSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

function switchSizeGuideTab(categoryKey) {
  const key = SIZE_GUIDES[categoryKey] ? categoryKey : 'sticks';
  const guide = SIZE_GUIDES[key];

  document.querySelectorAll('.size-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === key) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const content = document.getElementById('sizeGuideContentContainer');
  content.innerHTML = `
    <div>
      <h4 class="font-black text-base text-primary uppercase">${guide.title}</h4>
      <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">${guide.calculatorText}</p>
    </div>

    <div class="border border-outline-variant/30 rounded-2xl shadow-sm table-scroll-wrapper">
      <table class="size-table border-collapse">
        <thead>
          <tr>
            ${guide.tableHeaders.map(h => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${guide.tableRows.map(row => `
            <tr>
              ${row.map((cell, idx) => `<td class="${idx === 0 ? 'font-bold text-primary' : ''}">${cell}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    ${guide.curves ? `
      <div class="flex flex-col gap-2.5">
        <h5 class="text-xs font-bold uppercase tracking-wider text-primary">Варианты геометрии:</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${guide.curves.map(c => `
            <div class="bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant/30">
              <span class="text-xs font-bold text-secondary block">${c.name}</span>
              <p class="text-[11px] text-on-surface-variant mt-1 leading-relaxed">${c.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

function switchProfileSection(tabId) {
  document.querySelectorAll('.profile-tab-btn').forEach(b => {
    if (b.getAttribute('data-ptab') === tabId) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  document.querySelectorAll('.profile-sub-view').forEach(v => {
    v.classList.add('hidden');
    v.classList.remove('flex');
  });

  const target = document.getElementById(`profileSection-${tabId}`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('flex');
  }
}

function renderRelatedProducts() {
  const container = document.getElementById('relatedProductsContainer');
  if (!container) return;
  const related = PRODUCTS.filter(p => p.id !== currentProduct.id).slice(0, 3);
  container.innerHTML = related.map(p => `
    <div onclick="openProductDetail('${p.id}')" class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-3 shadow-sm hover:shadow-md cursor-pointer transition-all flex flex-col justify-between">
      <div class="h-28 bg-surface-container-low rounded-lg p-2 flex items-center justify-center mb-2">
        <img src="${p.image}" alt="${p.title}" class="h-full object-contain mix-blend-multiply"/>
      </div>
      <div>
        <span class="text-[10px] uppercase font-bold text-secondary block">${p.brand}</span>
        <h5 class="text-xs font-bold text-primary truncate">${p.title}</h5>
        <span class="text-xs font-black text-primary mt-1 block">${p.price.toLocaleString('ru-RU')} ₽</span>
      </div>
    </div>
  `).join('');
}

function toggleFavoriteCurrent() {
  showToast('Товар добавлен в избранное');
}

function quickAddToCart(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const defaultParams = {};
  if (p.parameters) {
    for (const [k, v] of Object.entries(p.parameters)) {
      defaultParams[k] = v[0];
    }
  }

  cart.push({ product: p, selectedParams: defaultParams, qty: 1 });
  renderCart();
  updateCartBadges();
  showToast(`«${p.title}» добавлен в корзину`);
}

function addCurrentProductToCart() {
  cart.push({
    product: currentProduct,
    selectedParams: { ...currentSelectedParams },
    qty: 1
  });
  renderCart();
  updateCartBadges();
  showToast(`«${currentProduct.title}» добавлен в корзину`);
  navigateTo('cart');
}

function renderCart() {
  const list = document.getElementById('cartItemsList');
  const empty = document.getElementById('cartEmptyState');
  const summary = document.getElementById('cartSummaryBox');

  if (cart.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    empty.classList.add('flex');
    summary.classList.add('hidden');
    updateCartTotals();
    return;
  }

  empty.classList.add('hidden');
  empty.classList.remove('flex');
  summary.classList.remove('hidden');

  list.innerHTML = cart.map((item, idx) => {
    const paramsText = Object.entries(item.selectedParams || {})
      .map(([k, v]) => `${v}`)
      .join(' • ');

    return `
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow">
        <input type="checkbox" checked class="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary cursor-pointer"/>
        <div class="w-20 h-20 bg-surface-container-low rounded-xl p-2 flex items-center justify-center flex-shrink-0">
          <img src="${item.product.image}" alt="${item.product.title}" class="max-h-full max-w-full object-contain mix-blend-multiply"/>
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-sm text-primary truncate">${item.product.title}</h4>
          <span class="text-xs text-on-surface-variant block mt-0.5 truncate">
            ${paramsText || item.product.weight}
          </span>
          <span class="font-black text-sm text-primary block mt-1">${(item.product.price * item.qty).toLocaleString('ru-RU')} ₽</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center border border-outline-variant/50 rounded-xl overflow-hidden bg-surface-container-low">
            <button onclick="changeCartQty(${idx}, -1)" class="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-surface-container-high transition-colors">-</button>
            <span class="w-7 text-center text-xs font-bold">${item.qty}</span>
            <button onclick="changeCartQty(${idx}, 1)" class="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-surface-container-high transition-colors">+</button>
          </div>
          <button onclick="removeCartItem(${idx})" class="w-8 h-8 rounded-full flex items-center justify-center text-outline-variant hover:text-error transition-colors">
            <span class="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  updateCartTotals();
}

function changeCartQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  renderCart();
  updateCartBadges();
}

function removeCartItem(idx) {
  cart.splice(idx, 1);
  renderCart();
  updateCartBadges();
  showToast('Позиция удалена');
}

function clearCart() {
  cart = [];
  renderCart();
  updateCartBadges();
  showToast('Корзина очищена');
}

function updateCartBadges() {
  const totalQty = cart.reduce((acc, c) => acc + c.qty, 0);
  const hBadge = document.getElementById('headerCartBadge');
  const mBadge = document.getElementById('mobileCartBadge');

  if (totalQty > 0) {
    hBadge.textContent = totalQty;
    mBadge.textContent = totalQty;
    hBadge.classList.remove('scale-0');
    mBadge.classList.remove('scale-0');
  } else {
    hBadge.classList.add('scale-0');
    mBadge.classList.add('scale-0');
  }
}

function updateCartTotals() {
  const subtotal = cart.reduce((acc, c) => acc + c.product.price * c.qty, 0);
  let discount = 0;

  if (appliedPromo === 'PRO2026') {
    discount = Math.round(subtotal * 0.15);
  } else if (appliedPromo === 'MVP10') {
    discount = Math.round(subtotal * 0.10);
  }

  const total = Math.max(0, subtotal - discount);

  document.getElementById('cartSubtotal').textContent = `${subtotal.toLocaleString('ru-RU')} ₽`;
  document.getElementById('cartDiscount').textContent = discount > 0 ? `-${discount.toLocaleString('ru-RU')} ₽` : '0 ₽';
  document.getElementById('cartTotal').textContent = `${total.toLocaleString('ru-RU')} ₽`;
  document.getElementById('paymentTotalAmount').textContent = `${total.toLocaleString('ru-RU')} ₽`;
}

function applyPromoCode() {
  const code = document.getElementById('promoInput').value.trim().toUpperCase();
  const msg = document.getElementById('promoMessage');

  if (code === 'PRO2026' || code === 'MVP10') {
    appliedPromo = code;
    msg.textContent = `Промокод ${code} активирован!`;
    msg.className = 'text-xs text-secondary font-bold block';
    showToast('Скидка успешно применена');
  } else {
    appliedPromo = null;
    msg.textContent = 'Неверный промокод (попробуйте PRO2026 или MVP10)';
    msg.className = 'text-xs text-error font-bold block';
  }
  updateCartTotals();
}

function handleDeliveryChange(val, el) {
  const courierBox = document.getElementById('courierAddressBox');
  const pickupBox = document.getElementById('pickupSelectBox');
  const addressInput = document.getElementById('orderAddress');

  document.querySelectorAll('.delivery-radio-card').forEach(c => c.classList.remove('active'));
  if (el) el.closest('.delivery-radio-card').classList.add('active');

  if (val === 'pickup') {
    courierBox.classList.add('hidden');
    pickupBox.classList.remove('hidden');
    pickupBox.classList.add('flex');
    addressInput.removeAttribute('required');
  } else {
    courierBox.classList.remove('hidden');
    pickupBox.classList.add('hidden');
    pickupBox.classList.remove('flex');
    addressInput.setAttribute('required', 'required');
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  navigateTo('payment');
}

function formatCardNumberInput(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  val = val.replace(/(.{4})/g, '$1 ').trim();
  input.value = val;
  document.getElementById('cardPreviewNumber').textContent = val || '•••• •••• •••• ••••';
}

function formatCardExpiryInput(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 2) {
    val = val.substring(0, 2) + '/' + val.substring(2, 4);
  }
  input.value = val;
  document.getElementById('cardPreviewExpiry').textContent = val || 'MM/YY';
}

function updateCardHolderPreview(input) {
  document.getElementById('cardPreviewHolder').textContent = input.value.toUpperCase() || 'PAVEL PIKTA';
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  showToast('Оплата проведена! Заказ #PH-2026 принят');
  cart = [];
  renderCart();
  updateCartBadges();
  setTimeout(() => {
    navigateTo('profile');
    switchProfileSection('orders');
  }, 1000);
}

function handleSearchScreenInput(val) {
  const query = val.toLowerCase().trim();
  const suggestions = document.getElementById('searchSuggestionsBox');
  if (query.length > 0) {
    suggestions.classList.add('hidden');
    document.getElementById('catalogSearchInput').value = query;
    applyCatalogFilters();
  } else {
    suggestions.classList.remove('hidden');
  }
}

function clearSearchScreenInput() {
  document.getElementById('liveSearchInput').value = '';
  document.getElementById('searchSuggestionsBox').classList.remove('hidden');
}

function selectSearchQuery(str) {
  document.getElementById('liveSearchInput').value = str;
  filterAndOpenCatalog(str);
}

function initLeafletMap() {
  const container = document.getElementById('interactiveMapContainer');
  if (!container || leafletMapInstance) return;

  leafletMapInstance = L.map('interactiveMapContainer', {
    center: [53.5, 27.5],
    zoom: 6,
    zoomControl: false,
    attributionControl: false
  });

  L.control.zoom({ position: 'bottomright' }).addTo(leafletMapInstance);

  mapTileLayers = {
    streets: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }),
    dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }),
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19
    })
  };

  const initialMode = document.documentElement.classList.contains('dark') ? 'dark' : 'streets';
  setMapTileMode(initialMode);

  ARENAS.forEach(arena => {
    const isSelected = arena.id === selectedArenaId;
    const marker = createCustomArenaMarker(arena, isSelected);
    marker.addTo(leafletMapInstance);
    leafletMarkersMap[arena.id] = marker;
  });
}

function createCustomArenaMarker(arena, isSelected = false) {
  const icon = L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div class="relative cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center">
        <div class="w-10 h-10 rounded-2xl ${isSelected ? 'bg-secondary text-white' : 'bg-primary text-white dark:bg-white dark:text-black'} flex items-center justify-center shadow-xl border-2 border-white">
          <span class="material-symbols-outlined text-xl">sports_hockey</span>
        </div>
        ${isSelected ? '<span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-ping"></span>' : ''}
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -22]
  });

  const marker = L.marker(arena.coords, { icon: icon });

  const popupContent = `
    <div class="flex flex-col gap-2 p-1 max-w-[220px]">
      <div class="font-black text-sm text-primary leading-tight">${arena.name}</div>
      <div class="text-[11px] text-on-surface-variant">${arena.city}</div>
      <div class="flex items-center justify-between text-[11px] font-bold text-secondary">
        <span>${arena.status}</span>
        <span>${arena.distance}</span>
      </div>
      <button onclick="selectArenaFromPopup('${arena.id}')" class="mt-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg hover:bg-secondary-container transition-colors">
        Выбрать пункт
      </button>
    </div>
  `;

  marker.bindPopup(popupContent);
  marker.on('click', () => {
    selectArena(arena.id);
  });

  return marker;
}

function setMapTileMode(mode) {
  currentMapTileMode = mode;
  if (!leafletMapInstance) return;

  Object.values(mapTileLayers).forEach(layer => {
    if (leafletMapInstance.hasLayer(layer)) {
      leafletMapInstance.removeLayer(layer);
    }
  });

  if (mapTileLayers[mode]) {
    mapTileLayers[mode].addTo(leafletMapInstance);
  }

  ['streets', 'satellite', 'dark'].forEach(m => {
    const btn = document.getElementById(`mapModeBtn-${m}`);
    if (!btn) return;
    if (m === mode) {
      btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-primary text-white';
    } else {
      btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all text-on-surface-variant hover:text-primary';
    }
  });
}

function renderArenaSidebarCards(filterText = '') {
  const container = document.getElementById('arenaSidebarCardsList');
  if (!container) return;

  let arenas = ARENAS;
  if (currentArenaTag !== 'all') {
    arenas = arenas.filter(a => a.tags.includes(currentArenaTag));
  }
  if (filterText) {
    const q = filterText.toLowerCase();
    arenas = arenas.filter(a => a.name.toLowerCase().includes(q) || a.city.toLowerCase().includes(q));
  }

  container.innerHTML = arenas.map(arena => {
    const isSelected = arena.id === selectedArenaId;
    return `
      <div onclick="selectArena('${arena.id}')" id="arenaCard-${arena.id}" class="arena-item-card ${isSelected ? 'active' : ''} p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 cursor-pointer transition-all shadow-sm flex flex-col gap-2">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-bold text-sm text-primary leading-tight">${arena.name}</h4>
            <span class="text-[11px] text-on-surface-variant block mt-0.5">${arena.city}</span>
          </div>
          <span class="text-xs font-black text-secondary whitespace-nowrap ml-2">${arena.distance}</span>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-1">
          ${arena.services.map(s => `<span class="bg-surface-container text-on-surface text-[10px] font-bold px-2 py-0.5 rounded-md">${s}</span>`).join('')}
        </div>
        <div class="flex justify-between items-center pt-2 border-t border-outline-variant/20 text-[11px]">
          <span class="text-on-surface-variant font-medium">Режим: ${arena.hours}</span>
          <button onclick="event.stopPropagation(); setPickupPoint('${arena.id}')" class="text-secondary font-bold hover:underline">Забрать отсюда</button>
        </div>
      </div>
    `;
  }).join('');
}

function filterArenasOnMap(query) {
  renderArenaSidebarCards(query);
}

function filterArenaByTag(tag, el) {
  currentArenaTag = tag;
  document.querySelectorAll('.arena-filter-tag').forEach(b => {
    b.classList.remove('active', 'bg-secondary', 'text-white');
    b.classList.add('bg-surface-container', 'text-on-surface-variant');
  });
  if (el) {
    el.classList.add('active', 'bg-secondary', 'text-white');
    el.classList.remove('bg-surface-container', 'text-on-surface-variant');
  }
  renderArenaSidebarCards();
}

function selectArena(arenaId) {
  selectedArenaId = arenaId;
  const arena = ARENAS.find(a => a.id === arenaId);
  if (!arena) return;

  renderArenaSidebarCards();

  if (leafletMapInstance) {
    focusOnArena(arenaId);
  }
}

function focusOnArena(arenaId, openPopup = true) {
  const arena = ARENAS.find(a => a.id === arenaId);
  if (!arena || !leafletMapInstance) return;

  leafletMapInstance.flyTo(arena.coords, 14, { duration: 1.2 });

  Object.entries(leafletMarkersMap).forEach(([id, marker]) => {
    const isTarget = id === arenaId;
    const icon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div class="relative cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center">
          <div class="w-10 h-10 rounded-2xl ${isTarget ? 'bg-secondary text-white' : 'bg-primary text-white dark:bg-white dark:text-black'} flex items-center justify-center shadow-xl border-2 border-white">
            <span class="material-symbols-outlined text-xl">sports_hockey</span>
          </div>
          ${isTarget ? '<span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-ping"></span>' : ''}
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -22]
    });
    marker.setIcon(icon);
    if (isTarget && openPopup) {
      setTimeout(() => marker.openPopup(), 400);
    }
  });
}

function selectArenaFromPopup(arenaId) {
  setPickupPoint(arenaId);
}

function setPickupPoint(arenaId) {
  const arena = ARENAS.find(a => a.id === arenaId);
  if (!arena) return;
  showToast(`Пункт самовывоза «${arena.name}» выбран`);
  const select = document.getElementById('pickupArenaSelect');
  if (select) select.value = arenaId;
}

function centerMapToUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (!leafletMapInstance) return;
        const userCoords = [pos.coords.latitude, pos.coords.longitude];
        leafletMapInstance.flyTo(userCoords, 12);
        showToast('Определено текущее местоположение');
      },
      () => {
        focusOnArena('brest');
        showToast('Показана арена по умолчанию (Брест)');
      }
    );
  } else {
    focusOnArena('brest');
  }
}

function renderProfileUI() {
  document.getElementById('profileDisplayFullName').textContent = userProfile.fullName;
  document.getElementById('profileDisplayRole').textContent = userProfile.role;
  document.getElementById('profileDisplayHeight').textContent = `${userProfile.height} см`;
  document.getElementById('profileDisplayWeight').textContent = `${userProfile.weight} кг`;
  document.getElementById('profileDisplayHand').textContent = userProfile.hand;
}

function openEditProfileModal() {
  document.getElementById('editProfileNameInput').value = userProfile.fullName;
  document.getElementById('editProfileRoleInput').value = userProfile.role;
  document.getElementById('editProfileHeightInput').value = userProfile.height;
  document.getElementById('editProfileWeightInput').value = userProfile.weight;
  document.getElementById('editProfileHandInput').value = userProfile.hand;

  const modal = document.getElementById('profileEditModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closeEditProfileModal() {
  const modal = document.getElementById('profileEditModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

function saveProfileEdits(e) {
  e.preventDefault();
  userProfile.fullName = document.getElementById('editProfileNameInput').value.trim();
  userProfile.role = document.getElementById('editProfileRoleInput').value.trim();
  userProfile.height = parseInt(document.getElementById('editProfileHeightInput').value, 10);
  userProfile.weight = parseInt(document.getElementById('editProfileWeightInput').value, 10);
  userProfile.hand = document.getElementById('editProfileHandInput').value;

  renderProfileUI();
  closeEditProfileModal();
  showToast('Профиль игрока обновлен!');
}

function triggerAvatarUploadPrompt() {
  showToast('Выберите новое фото профиля в настройках устройства');
}

function openPlayerPassportQRModal() {
  document.getElementById('qrModalTitle').textContent = `Пропуск игрока ${userProfile.fullName}`;
  document.getElementById('qrModalSubtitle').textContent = `${userProfile.role}`;
  const modal = document.getElementById('playerQRModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function openOrderQRReceipt(orderCode) {
  document.getElementById('qrModalTitle').textContent = `QR Заказа #${orderCode}`;
  document.getElementById('qrModalSubtitle').textContent = 'Покажите код сотруднику на стойке выдачи';
  const modal = document.getElementById('playerQRModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closePlayerQRModal() {
  const modal = document.getElementById('playerQRModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

function handleServiceBookingSubmit() {
  const time = document.getElementById('serviceTimeSelect').value;
  showToast(`Запись подтверждена на ${time} в сервисе арены`);
}

function switchProfileSection(tabId) {
  document.querySelectorAll('.profile-tab-btn').forEach(b => {
    if (b.getAttribute('data-ptab') === tabId) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  document.querySelectorAll('.profile-sub-view').forEach(v => {
    v.classList.add('hidden');
    v.classList.remove('flex');
  });

  const target = document.getElementById(`profileSection-${tabId}`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('flex');
  }
}

function renderReviews() {
  const container = document.getElementById('reviewsFeedList');
  container.innerHTML = reviewsData.map(r => `
    <article class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-5 shadow-sm">
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-primary text-white dark:text-black flex items-center justify-center font-bold text-sm">
            ${r.name.slice(0, 2)}
          </div>
          <div>
            <div class="text-xs font-bold text-primary">${r.name}</div>
            <div class="text-[10px] text-on-surface-variant flex items-center gap-1 font-semibold">
              <span class="material-symbols-outlined text-[13px] text-secondary font-fill">verified</span>
              Подтвержденный игрок
            </div>
          </div>
        </div>
        <span class="text-[11px] text-on-surface-variant">${r.date}</span>
      </div>
      <div class="flex text-secondary text-xs mb-2">
        ${Array.from({ length: 5 }, (_, i) => `
          <span class="material-symbols-outlined text-sm ${i < r.rating ? 'font-fill' : ''}">star</span>
        `).join('')}
      </div>
      <p class="text-xs text-on-surface-variant leading-relaxed">${r.text}</p>
    </article>
  `).join('');
}

function toggleReviewForm() {
  document.getElementById('newReviewFormBox').classList.toggle('hidden');
}

function setReviewRating(n) {
  currentReviewRating = n;
  document.querySelectorAll('.star-pick').forEach((s, idx) => {
    if (idx < n) {
      s.classList.add('font-fill');
    } else {
      s.classList.remove('font-fill');
    }
  });
}

function submitNewReview() {
  const author = document.getElementById('reviewAuthorInput').value.trim();
  const text = document.getElementById('reviewTextInput').value.trim();

  if (!author || !text) {
    showToast('Заполните имя и текст отзыва');
    return;
  }

  reviewsData.unshift({
    name: author,
    date: 'Только что',
    rating: currentReviewRating,
    text: text
  });

  document.getElementById('reviewAuthorInput').value = '';
  document.getElementById('reviewTextInput').value = '';
  toggleReviewForm();
  renderReviews();
  showToast('Спасибо за отзыв!');
}

document.addEventListener('DOMContentLoaded', initApp);