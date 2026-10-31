import tiendas from '../data/tiendas.js'

function NuestrasTiendas() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Nuestras tiendas</h2>
      <p className="mb-4 text-texto-suave">Encuentra la sucursal más cercana y sus horarios de atención.</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {tiendas.map((tienda) => (
          <article key={tienda.id} className="space-y-1 rounded-lg border border-borde bg-superficie p-4">
            <h3 className="mb-2 font-semibold text-primario">{tienda.nombre}</h3>
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