/**
 * DEMO DATA — Plaza Verde
 * -------------------------------------------------------
 * Formato idéntico al que devuelve la API real.
 * Reemplaza las URLs de imágenes y los textos según necesites.
 *
 * Imágenes del patio:
 *   Banner  →  public/demo/plaza-verde/banner.jpg
 *   Logo    →  public/demo/plaza-verde/logo.png
 *
 * Imágenes de restaurantes y productos:
 *   Usa URLs propias o reemplaza las de Unsplash por archivos locales
 *   en public/demo/plaza-verde/restaurantes/ y /productos/
 * -------------------------------------------------------
 */

// ─── Food Court ─────────────────────────────────────────────────────────────

export const FOOD_COURT = {
  id: 1,
  slug: 'plaza-verde',
  name: 'Plaza Verde',
  description: 'Donde la naturaleza, la calma y el buen sabor se encuentran',
  banner: '/demo/plaza-verde/banner.jpg',
  logo: '/demo/plaza-verde/logo.png',
}

// ─── Restaurantes ───────────────────────────────────────────────────────────

export const RESTAURANTS = [
  {
    id: 1,
    slug: 'a-fuego-lento',
    name: 'A Fuego Lento',
    type: 'Parrilla & Asados',
    slogan: 'El auténtico sabor a las brasas',
    icon: 'https://placehold.co/200x200/7c2d12/ffffff?text=ER',
    banner: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=400&fit=crop&auto=format&q=80',
    food_court: 1,
  },
  {
    id: 2,
    slug: 'verde-y-fresco',
    name: 'Verde & Fresco',
    type: 'Ensaladas & Bowls',
    slogan: 'Fresco, natural y lleno de vida',
    icon: 'https://placehold.co/200x200/15803d/ffffff?text=VF',
    banner: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=400&fit=crop&auto=format&q=80',
    food_court: 1,
  },
  {
    id: 3,
    slug: 'sabor-peruano',
    name: 'Sabor Peruano',
    type: 'Comida Típica',
    slogan: 'El alma de Perú en cada plato',
    icon: 'https://placehold.co/200x200/b45309/ffffff?text=SC',
    banner: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=1200&h=400&fit=crop&auto=format&q=80',
    food_court: 1,
  },
  {
    id: 4,
    slug: 'punto-di-pizza',
    name: 'Punto di Pizza',
    type: 'Pizzas & Pastas',
    slogan: 'Masa artesanal, sabor de siempre',
    icon: 'https://placehold.co/200x200/dc2626/ffffff?text=LP',
    banner: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&h=400&fit=crop&auto=format&q=80',
    food_court: 1,
  },
  {
    id: 5,
    slug: 'frutissimo-express',
    name: 'Frutissimo Express',
    type: 'Postres & Cafés',
    slogan: 'El final perfecto para tu tarde',
    icon: 'https://placehold.co/200x200/db2777/ffffff?text=DT',
    banner: 'https://images.unsplash.com/photo-1563805042-7f466585e291?w=1200&h=400&fit=crop&auto=format&q=80',
    food_court: 1,
  },
]

// ─── Productos por restaurante (clave = slug del restaurante) ────────────────

export const PRODUCTS = {

  // ── A Fuego Lento ────────────────────────────────────────────────────────────
  'a-fuego-lento': [
    {
      id: 101,
      name: 'Bandeja Parrillera',
      description: 'Carne de res a las brasas, chorizo, costilla, arepa y papa criolla',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 1, name: 'Parrilla' },
    },
    {
      id: 102,
      name: 'Costillas BBQ',
      description: 'Costillas de cerdo glaseadas con salsa BBQ artesanal, acompañadas de ensalada',
      price: 42000,
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 1, name: 'Parrilla' },
    },
    {
      id: 103,
      name: 'Chuleta de Cerdo',
      description: 'Chuleta jugosa marinada en hierbas, servida con maduro asado y ensalada fresca',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1558030006-b6f92705c8e1?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 1, name: 'Parrilla' },
    },
    {
      id: 104,
      name: 'Chorizo Parrillero',
      description: 'Choricitos criollos a la parrilla con hogao y pan artesanal',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 1, name: 'Parrilla' },
    },
    {
      id: 105,
      name: 'Mazorca Asada',
      description: 'Mazorca tierna a las brasas con mantequilla y queso costeño',
      price: 9000,
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 2, name: 'Acompañamientos' },
    },
    {
      id: 106,
      name: 'Papas Criollas Asadas',
      description: 'Papa criolla al rescoldo con ají de maní y crema de cilantro',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 2, name: 'Acompañamientos' },
    },
    {
      id: 107,
      name: 'Limonada de Panela',
      description: 'Limonada natural endulzada con panela, con o sin hielo',
      price: 7000,
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 3, name: 'Bebidas' },
    },
    {
      id: 108,
      name: 'Agua de Panela con Limón',
      description: 'Clásica agua de panela caliente o fría, con un toque de limón',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 3, name: 'Bebidas' },
    },
  ],

  // ── Verde & Fresco ─────────────────────────────────────────────────────────
  'verde-y-fresco': [
    {
      id: 201,
      name: 'Bowl Proteico',
      description: 'Quinoa, pechuga de pollo grillada, aguacate, pepino y aderezo de limón',
      price: 24000,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 4, name: 'Bowls' },
    },
    {
      id: 202,
      name: 'Bowl Tropical',
      description: 'Arroz de coliflor, mango, piña, zanahoria rallada y vinagreta de jengibre',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 4, name: 'Bowls' },
    },
    {
      id: 203,
      name: 'Ensalada del Huerto',
      description: 'Mix de lechugas, tomates cherry, nueces, queso feta y aderezo balsámico',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99eb4b44e?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 5, name: 'Ensaladas' },
    },
    {
      id: 204,
      name: 'Ensalada Caprese',
      description: 'Tomate, mozarella fresca, albahaca, aceite de oliva y vinagre balsámico',
      price: 19000,
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 5, name: 'Ensaladas' },
    },
    {
      id: 205,
      name: 'Jugo Verde Detox',
      description: 'Espinaca, pepino, manzana verde, apio y jengibre. 100% natural',
      price: 10000,
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 6, name: 'Jugos Naturales' },
    },
    {
      id: 206,
      name: 'Jugo de Maracuyá',
      description: 'Maracuyá natural con agua o leche, sin azúcar añadida o al gusto',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1621519282163-d9d5e5e44c9c?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 6, name: 'Jugos Naturales' },
    },
    {
      id: 207,
      name: 'Smoothie de Frutos Rojos',
      description: 'Fresa, mora, frambuesa y arándanos con yogur natural y miel',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=400&h=300&fit=crop&auto=format&q=80',
      available: false,
      category: { id: 6, name: 'Jugos Naturales' },
    },
  ],

  // ── Sabor Peruano ───────────────────────────────────────────────────────
  'sabor-peruano': [
    {
      id: 301,
      name: 'Bandeja Paisa',
      description: 'Frijoles, chicharrón, chorizo, carne molida, huevo, arroz, arepa y plátano maduro',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 7, name: 'Platos Típicos' },
    },
    {
      id: 302,
      name: 'Cazuela de Frijoles',
      description: 'Frijoles criollos con costilla, chicharrón, carne cecina y hogao',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 7, name: 'Platos Típicos' },
    },
    {
      id: 303,
      name: 'Sudado de Pollo',
      description: 'Pollo en salsa de tomate y cebolla, con papa, yuca y arroz blanco',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 7, name: 'Platos Típicos' },
    },
    {
      id: 304,
      name: 'Sancocho Trifásico',
      description: 'Sopa de gallina, cerdo y res con papa, yuca, mazorca y plátano verde',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 8, name: 'Sopas' },
    },
    {
      id: 305,
      name: 'Ajiaco Bogotano',
      description: 'Sopa de tres tipos de papa, pollo, guascas, mazorca y crema de leche',
      price: 23000,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 8, name: 'Sopas' },
    },
    {
      id: 306,
      name: 'Empanadas de Pipián (3 und.)',
      description: 'Empanadas fritas rellenas de papa con hogao y guiso de pipián',
      price: 9000,
      image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8399b6?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 7, name: 'Platos Típicos' },
    },
    {
      id: 307,
      name: 'Chocolate Caliente',
      description: 'Chocolate de mesa con leche entera, servido con pan de queso',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 9, name: 'Bebidas' },
    },
    {
      id: 308,
      name: 'Jugo de Lulo',
      description: 'Lulo natural en agua o leche, endulzado al gusto',
      price: 7000,
      image: 'https://images.unsplash.com/photo-1621519282163-d9d5e5e44c9c?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 9, name: 'Bebidas' },
    },
  ],

  // ── Punto di Pizza ────────────────────────────────────────────────────────
  'punto-di-pizza': [
    {
      id: 401,
      name: 'Pizza Margarita',
      description: 'Salsa de tomate artesanal, mozzarella fresca y albahaca',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 10, name: 'Pizzas' },
    },
    {
      id: 402,
      name: 'Pizza Cuatro Quesos',
      description: 'Mozzarella, parmesano, gorgonzola y queso crema sobre base de aceite de oliva',
      price: 34000,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 10, name: 'Pizzas' },
    },
    {
      id: 403,
      name: 'Pizza Pepperoni',
      description: 'Generosa capa de pepperoni importado con mozzarella y orégano',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 10, name: 'Pizzas' },
    },
    {
      id: 404,
      name: 'Pasta Carbonara',
      description: 'Espagueti con panceta, yema de huevo, parmesano y pimienta negra',
      price: 26000,
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 11, name: 'Pastas' },
    },
    {
      id: 405,
      name: 'Pasta al Pesto',
      description: 'Linguini con pesto genovés de albahaca fresca, piñones y parmesano',
      price: 24000,
      image: 'https://images.unsplash.com/photo-1621996659420-3181d0441571?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 11, name: 'Pastas' },
    },
    {
      id: 406,
      name: 'Pasta Arrabiata',
      description: 'Penne con salsa de tomate picante, ajo y guindilla. Vegetariana',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=400&h=300&fit=crop&auto=format&q=80',
      available: false,
      category: { id: 11, name: 'Pastas' },
    },
    {
      id: 407,
      name: 'Jugo Natural del Día',
      description: 'Pregunta por los sabores disponibles. Servido en vaso grande',
      price: 7000,
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 12, name: 'Bebidas' },
    },
  ],

  // ── Frutissimo Express ────────────────────────────────────────────────────────
  'frutissimo-express': [
    {
      id: 501,
      name: 'Helado Artesanal (2 bolas)',
      description: 'Elige entre: vainilla, chocolate, fresa, maracuyá o arequipe',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 13, name: 'Helados' },
    },
    {
      id: 502,
      name: 'Sundae de Arequipe',
      description: 'Dos bolas de helado de vainilla con salsa de arequipe y maní tostado',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 13, name: 'Helados' },
    },
    {
      id: 503,
      name: 'Cheesecake de Frutos Rojos',
      description: 'Porción de cheesecake horneado con coulis de mora y fresa',
      price: 14000,
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 14, name: 'Postres' },
    },
    {
      id: 504,
      name: 'Brownie con Helado',
      description: 'Brownie de chocolate caliente con bola de helado de vainilla y nueces',
      price: 13000,
      image: 'https://images.unsplash.com/photo-1563805042-7f466585e291?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 14, name: 'Postres' },
    },
    {
      id: 505,
      name: 'Café Espresso',
      description: 'Espresso de origen colombiano, preparado al momento',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 15, name: 'Cafés & Bebidas' },
    },
    {
      id: 506,
      name: 'Café Latte',
      description: 'Espresso doble con leche vaporizada, opción de leche de avena',
      price: 9000,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&auto=format&q=80',
      available: true,
      category: { id: 15, name: 'Cafés & Bebidas' },
    },
  ],
}
