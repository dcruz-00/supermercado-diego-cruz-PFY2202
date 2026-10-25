import tiendas from '../data/tiendas.js'

function NuestrasTiendas() {
  return (
    <section>
      <h2>Nuestras tiendas</h2>
      <p>Encuentra la sucursal más cercana y sus horarios de atención.</p>

      <div className="lista-tiendas">
        {tiendas.map((tienda) => (
          <article key={tienda.id} className="tarjeta-tienda">
            <h3>{tienda.nombre}</h3>
            <p>{tienda.direccion}</p>
            <p>{tienda.horario}</p>
            <p>{tienda.telefono}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NuestrasTiendas
