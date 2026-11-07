import { NavLink } from 'react-router'

function clasesEnlace({ isActive }) {
  const base = 'border-b-2 px-3 py-3 text-sm'
  return isActive
    ? `${base} border-primario font-semibold text-primario`
    : `${base} border-transparent text-texto-suave hover:text-texto`
}

function MenuInventario() {
  return (
    <nav className="border-b border-borde bg-superficie" aria-label="Menú de inventario">
      <div className="mx-auto flex max-w-240 gap-2 px-4">
        {/* end: evita que este enlace quede activo también en /inventario/agregar */}
        <NavLink to="/inventario" end className={clasesEnlace}>Listado de inventario</NavLink>
        <NavLink to="/inventario/agregar" className={clasesEnlace}>Agregar artículo</NavLink>
      </div>
    </nav>
  )
}

export default MenuInventario