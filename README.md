# SuperStock: gestión de inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con React y React Router como actividad formativa 1 de **Desarrollo Frontend II (PFY2202)**, Duoc UC.

## Páginas

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Inventario (home) | Resumen de productos, stock bajo y agotados, y tabla de inventario |
| `/tiendas` | Nuestras tiendas | Sucursales con dirección, horario y teléfono |
| `/preguntas-frecuentes` | Preguntas frecuentes | Preguntas desplegables sobre el uso del inventario |
| cualquier otra | No encontrada | Página 404 con enlace de regreso |

La navegación se realiza desde un menú inferior fijo, implementado con `NavLink` de React Router, sin recargar la página.

## Tecnologías

- React
- React Router
- Vite
- CSS

## Requisitos

- Node.js 20.19 o superior
- npm

## Instalación y ejecución

```bash
git clone git@github.com:dcruz-00/supermercado-diego-cruz-PFY2202.git
cd supermercado-diego-cruz-PFY2202
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:5173`.

## Estructura

```
src/
├── main.jsx          # Punto de entrada: monta App dentro de BrowserRouter
├── App.jsx           # Definición de rutas y menú inferior
├── index.css         # Estilos
├── components/       # Componentes reutilizables (menú, fila de producto, tarjeta de resumen)
├── pages/            # Una página por ruta
├── data/             # Datos de ejemplo (productos, tiendas, preguntas)
└── utils/            # Funciones auxiliares (formato de precio, estado de stock)
```

## Nota

Los datos son de ejemplo y están definidos en el código; el sitio no se conecta a una base de datos.

## Autor

Diego Cruz
