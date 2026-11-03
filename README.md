# SuperStock: gestión de inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con React y React Router como actividades formativas 1 y 2 de **Desarrollo Frontend II (PFY2202)**, Duoc UC.

## Páginas

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Inicio | Resumen de productos, stock bajo y agotados |
| `/inventario` | Listado de inventario | Tabla con todos los artículos del inventario |
| `/inventario/agregar` | Agregar artículo | Formulario para ingresar artículos (nombre, marca, tipo, precio y stock) |
| `/tiendas` | Nuestras tiendas | Sucursales con dirección, horario y teléfono |
| `/preguntas-frecuentes` | Preguntas frecuentes | Preguntas desplegables sobre el uso del inventario |
| cualquier otra | No encontrada | Página 404 con enlace de regreso |

La navegación usa dos menús implementados con `NavLink` de React Router, sin recargar la página: un menú superior para el inventario (listado y formulario) y un menú inferior fijo para el resto del sitio.

## Gestión de estado

La lista de artículos es un **estado global** creado con `useReducer` y compartido mediante Context:

- `inventarioReducer` es una función pura que recibe el estado y una acción (`agregar`) y devuelve un arreglo nuevo.
- `InventarioProvider` envuelve la aplicación y expone `productos` y `agregarProducto`.
- El hook `useInventario` permite leer el estado desde cualquier página.

Así, un artículo agregado en el formulario aparece de inmediato en el listado y en el resumen de inicio. El estado vive en memoria: al recargar la página se vuelve a los datos de ejemplo.

## Tecnologías

- React
- React Router
- Vite
- Tailwind CSS v4

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
├── main.jsx          # Punto de entrada: monta App dentro de BrowserRouter e InventarioProvider
├── App.jsx           # Definición de rutas y menús
├── index.css         # Importa Tailwind y define los colores del sitio
├── context/          # Estado global: reducer, contexto, provider y hook useInventario
├── components/       # Componentes reutilizables (menús, fila de producto, tarjeta de resumen)
├── pages/            # Una página por ruta
├── data/             # Datos de ejemplo (productos, tiendas, preguntas)
└── utils/            # Funciones auxiliares (formato de precio, estado de stock)
```

## Nota

Los datos iniciales son de ejemplo y están definidos en el código; el sitio no se conecta a una base de datos.