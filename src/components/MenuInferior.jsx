import { NavLink } from 'react-router-dom'

function MenuInferior() {
  return (
    <nav className="menu-inferior" aria-label="Navegación principal">
      <NavLink to="/" end>Inventario</NavLink>
      <NavLink to="/tiendas">Nuestras tiendas</NavLink>
      <NavLink to="/preguntas-frecuentes">Preguntas frecuentes</NavLink>
    </nav>
  )
}

export default MenuInferior
