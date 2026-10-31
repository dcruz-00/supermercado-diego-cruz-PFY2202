import { useInventario } from '../context/useInventario.js'
import FilaProducto from '../components/FilaProducto.jsx'
import { STOCK_MINIMO } from '../utils/inventario.js'
import TarjetaResumen from '../components/TarjetaResumen.jsx'

function Inicio() {
  const { productos } = useInventario()
  const agotados = productos.filter((p) => p.stock === 0).length
  const stockBajo = productos.filter((p) => p.stock > 0 && p.stock < STOCK_MINIMO).length

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Inventario</h2>

      <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        <TarjetaResumen titulo="Productos" valor={productos.length} />
        <TarjetaResumen titulo="Stock bajo" valor={stockBajo} variante="bajo" />
        <TarjetaResumen titulo="Agotados" valor={agotados} variante="agotado" />
      </div>

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

export default Inicio