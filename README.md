# SuperStock: gestión de inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con React, React Router y Tailwind CSS en las actividades de la Experiencia 1 de **Desarrollo Frontend II (PFY2202)**, Duoc UC.

**Sitio publicado:** https://dcruz-00.github.io/supermercado-diego-cruz-PFY2202/

## Funcionalidades

- **Listado de inventario** con nombre, marca, tipo, precio, stock y estado (disponible, stock bajo o agotado).
- **Filtro por tipo**: muestra solo los artículos de la categoría elegida. La lista filtrada se calcula a partir del inventario completo, que nunca se modifica. El filtro se guarda en la URL (`?tipo=Lácteos`), por lo que se conserva al volver desde el detalle.
- **Detalle de artículo**: al hacer clic en un artículo del listado se muestra su información y se puede agregar al carrito la cantidad deseada, sin superar el stock disponible.
- **Carrito de compras**: lista los artículos agregados con subtotal y total. Permite aumentar, disminuir o quitar artículos; cada cambio actualiza el stock del inventario.
- **Agregar artículo**: formulario con validación por campo (expresiones regulares y rangos) y mensajes de error asociados a cada campo de forma accesible.
- **Diseño responsivo** con Tailwind CSS, adaptado a pantallas de celular y escritorio.

## Páginas

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Inicio | Resumen de productos, stock bajo y agotados |
| `/inventario` | Listado de inventario | Tabla de artículos con filtro por tipo |
| `/inventario/:id` | Detalle de artículo | Información del artículo y opción de agregarlo al carrito |
| `/inventario/agregar` | Agregar artículo | Formulario para ingresar artículos |
| `/carrito` | Carrito de compras | Artículos agregados, cantidades y total |
| `/tiendas` | Nuestras tiendas | Sucursales con dirección, horario y teléfono |
| `/preguntas-frecuentes` | Preguntas frecuentes | Preguntas desplegables sobre el uso del inventario |
| cualquier otra | No encontrada | Página 404 con enlace de regreso |

Las rutas están centralizadas en `src/routes/AppRoutes.jsx`. Todas comparten `LayoutPrincipal` (encabezado y menús), que dibuja la página activa con `<Outlet />`, y las rutas de inventario están anidadas bajo `/inventario`. El detalle usa el parámetro dinámico `:id`, que se lee con `useParams`.

## Gestión de estado

El inventario y el carrito forman un **estado global** creado con `useReducer` y compartido mediante Context:

- El estado tiene la forma `{ productos, carrito }`. El carrito guarda solo `{ id, cantidad }`; los demás datos se obtienen desde `productos`, para no duplicar información.
- `inventarioReducer` es una función pura con tres acciones: `agregar` (nuevo artículo), `agregar-al-carrito` y `quitar-del-carrito`. Las dos últimas mueven unidades entre el stock y el carrito en un solo paso, por lo que ambos siempre quedan sincronizados. Una operación inválida (por ejemplo, pedir más unidades que el stock) no modifica el estado.
- `InventarioProvider` envuelve la aplicación y expone el estado y las funciones para modificarlo.
- El hook `useInventario` permite usar el estado desde cualquier componente.

El estado vive en memoria: al recargar la página se vuelve a los datos de ejemplo y el carrito queda vacío.

## Componentes reutilizables

| Componente | Uso |
|---|---|
| `CampoFormulario` | Etiqueta, campo y mensaje de error con `aria-invalid`, `aria-describedby` y `required` |
| `SelectorCantidad` | Botones − / + con límites; se usa en el detalle y en el carrito |
| `EtiquetaEstado` | Etiqueta de estado del stock; se usa en el listado y en el detalle |
| `FiltroTipo` | Selector de tipo para el listado |
| `FilaProducto` | Fila de la tabla del listado |
| `TarjetaResumen` | Tarjetas de conteo en el inicio |
| `MenuInventario` / `MenuInferior` | Menús de navegación con `NavLink` |

## Tecnologías

- React 19
- React Router 8
- Vite 8
- Tailwind CSS 4
- gh-pages (publicación en GitHub Pages)

## Requisitos

- Node.js 22.22 o superior (exigido por React Router 8)
- npm

## Instalación y ejecución

```bash
git clone https://github.com/dcruz-00/supermercado-diego-cruz-PFY2202.git
cd supermercado-diego-cruz-PFY2202
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:5173/supermercado-diego-cruz-PFY2202/`.

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run lint` | Revisión del código con ESLint |
| `npm run build` | Compilación para producción en `dist/` |
| `npm run deploy` | Compila y publica `dist/` en la rama `gh-pages` |

## Publicación en GitHub Pages

- `base` en `vite.config.js` y `basename` en `BrowserRouter` agregan el prefijo `/supermercado-diego-cruz-PFY2202/`, porque GitHub Pages publica el sitio bajo el nombre del repositorio.
- Antes de publicar se copia `index.html` como `404.html`. Así, al recargar una ruta interna (por ejemplo, `/inventario/3`), GitHub Pages entrega la aplicación y React Router muestra la página correcta.

## Estructura

```
src/
├── main.jsx          # Punto de entrada: BrowserRouter e InventarioProvider
├── App.jsx           # Componente raíz: dibuja AppRoutes
├── index.css         # Importa Tailwind y define los colores del sitio
├── routes/           # AppRoutes: todas las rutas del sitio
├── layouts/          # LayoutPrincipal: encabezado, menús y <Outlet />
├── context/          # Estado global: reducer, contexto, provider y hook useInventario
├── components/       # Componentes reutilizables
├── pages/            # Una página por ruta
├── data/             # Datos de ejemplo (productos, tiendas, preguntas)
└── utils/            # Funciones auxiliares (precios, estado de stock, carrito)
```

## Nota

Los datos iniciales son de ejemplo y están definidos en el código; el sitio no se conecta a una base de datos.