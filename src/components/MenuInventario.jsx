import { NavLink } from 'react-router'
import { useInventario } from '../context/useInventario.js'
import { contarUnidades } from '../utils/carrito.js'

function clasesEnlace({ isActive }) {
  const base = 'border-b-2 px-3 py-3 text-sm whitespace-nowrap'
  return isActive
    ? `${base} border-primario font-semibold text-primario`
    : `${base} border-transparent text-texto-suave hover:text-texto`
}

function MenuInventario() {
  const { carrito } = useInventario()
  const unidades = contarUnidades(carrito)

  return (
    <nav className="border-b border-borde bg-superficie" aria-label="Menú de inventario">
      <div className="mx-auto flex max-w-240 gap-2 px-4">
        {/* end: evita que este enlace quede activo también en /inventario/agregar */}
        {/* En pantallas chicas se ocultan las palabras finales para que los 3 enlaces quepan */}
        <NavLink to="/inventario" end className={clasesEnlace}>
          Listado<span className="hidden sm:inline"> de inventario</span>
        </NavLink>
        <NavLink to="/inventario/agregar" className={clasesEnlace}>
          Agregar<span className="hidden sm:inline"> artículo</span>
        </NavLink>
        <NavLink to="/carrito" className={clasesEnlace}>
          Carrito
          <span className="ml-1.5 rounded-full bg-primario px-2 py-0.5 text-xs font-semibold text-white">
            {unidades}
            {/* sr-only: invisible en pantalla, pero el lector lee "Carrito 3 unidades" */}
            <span className="sr-only"> unidades</span>
          </span>
        </NavLink>
      </div>
    </nav>
  )
}

export default MenuInventario