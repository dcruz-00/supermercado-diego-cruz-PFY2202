import { Link } from 'react-router-dom'

function NoEncontrado() {
  return (
    <section>
      <h2>Página no encontrada</h2>
      <p>La dirección que buscas no existe.</p>
      <Link to="/">Volver al inventario</Link>
    </section>
  )
}

export default NoEncontrado
