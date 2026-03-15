# Menú Digital — Food Courts

Aplicación React (Vite) de menú digital de solo lectura para patios de comidas con múltiples restaurantes.

## Stack

- React 18 + Vite
- React Router v6
- Axios
- Tailwind CSS v4
- Context API

## Instalación

```bash
cd menus-app
npm install
```

## Variables de entorno

Copia el archivo de ejemplo y configura tu URL de API:

```bash
cp .env.example .env
```

| Variable       | Descripción                                           |
|----------------|-------------------------------------------------------|
| `VITE_API_URL` | URL base de la API REST (ej: `https://tu-api.com/v1`) |

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Rutas

| Ruta                               | Descripción                          |
|------------------------------------|--------------------------------------|
| `/menus`                           | Lista de todos los patios de comida  |
| `/menus/:slug`                     | Restaurantes del patio de comida     |
| `/menus/:slug/:restaurant`         | Menú completo del restaurante        |

### Query params opcionales

En la ruta del restaurante se pueden pasar `?mesa=3&cliente=Juan`. Se muestra un badge visible si están presentes.

## Autenticación

La API espera un token Bearer JWT guardado en `localStorage` bajo la clave `menu_token`. El interceptor de Axios lo inyecta automáticamente en cada request.

## Estructura de carpetas

```
src/
├── components/
│   ├── ui/             # SearchBar, CategoryFilter, ProductModal, TableBadge
│   ├── FoodCourtCard
│   ├── RestaurantCard
│   ├── RestaurantHeader
│   └── ProductCard
├── context/            # MenuContext, CartContext, TableContext
├── hooks/              # useFoodCourts, useFoodCourt, useRestaurant, useAuth
├── pages/              # FoodCourtsPage, FoodCourtPage, RestaurantMenuPage
├── services/           # api.js (Axios), foodCourts.service.js, restaurants.service.js
└── utils/              # formatPrice.js, slugify.js
```
