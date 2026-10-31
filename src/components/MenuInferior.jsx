import { NavLink } from 'react-router-dom'

function clasesEnlace({ isActive }) {
  const base = 'flex flex-1 items-center justify-center px-2 text-center text-sm'
  return isActive
    ? `${base} font-semibold text-primario shadow-[inset_0_3px_0_var(--color-primario)]`
    : `${base} text-texto-suave`
}

function MenuInferior() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 flex h-16 border-t border-borde bg-superficie"
      aria-label="Navegación principal"
    >
      <NavLink to="/" end className={clasesEnlace}>Inventario</NavLink>
      <NavLink to="/tiendas" className={clasesEnlace}>Nuestras tiendas</NavLink>
      <NavLink to="/preguntas-frecuentes" className={clasesEnlace}>Preguntas frecuentes</NavLink>
    </nav>
  )
}

export default MenuInferior