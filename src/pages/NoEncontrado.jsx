import { Link } from 'react-router-dom'

function NoEncontrado() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Página no encontrada</h2>
      <p className="mb-4">La dirección que buscas no existe.</p>
      <Link to="/" className="font-semibold text-primario underline">Volver al inventario</Link>
    </section>
  )
}

export default NoEncontrado