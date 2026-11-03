import FilaProducto from '../components/FilaProducto.jsx'
import { useInventario } from '../context/useInventario.js'

function ListadoInventario() {
  const { productos } = useInventario()

  return (
    <section>
      <h2 className="mb-1 text-xl font-semibold">Listado de inventario</h2>
      <p className="mb-4 text-texto-suave">{productos.length} artículos registrados</p>

      <div className="overflow-x-auto rounded-lg border border-borde bg-superficie">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-texto-suave *:border-b *:border-borde *:px-3 *:py-2.5 *:font-semibold">
              <th className="text-left">Producto</th>
              <th className="text-left">Marca</th>
              <th className="text-left">Tipo</th>
              <th className="text-right">Precio</th>
              <th className="text-right">Stock</th>
              <th className="text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <FilaProducto key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ListadoInventario