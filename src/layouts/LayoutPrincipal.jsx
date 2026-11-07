import { Outlet } from 'react-router'
import MenuInferior from '../components/MenuInferior.jsx'
import MenuInventario from '../components/MenuInventario.jsx'

// Estructura común a todas las páginas. <Outlet /> es el hueco donde
// React Router dibuja la página de la ruta hija que coincide con la URL.
function LayoutPrincipal() {
  return (
    <>
      <header className="bg-primario px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">SuperStock</h1>
        <p className="mt-1 opacity-85">Gestión de inventario</p>
      </header>

      <MenuInventario />
      {/* pb-22 deja espacio para que el menú inferior fijo no tape el contenido */}
      <main className="mx-auto max-w-240 px-4 pt-6 pb-22">
        <Outlet />
      </main>

      <MenuInferior />
    </>
  )
}

export default LayoutPrincipal