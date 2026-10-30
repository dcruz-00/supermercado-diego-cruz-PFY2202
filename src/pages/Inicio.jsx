import productos from '../data/productos.js'
import FilaProducto from '../components/FilaProducto.jsx'
import { STOCK_MINIMO } from '../utils/inventario.js'
import TarjetaResumen from '../components/TarjetaResumen.jsx'

function Inicio() {
  const agotados = productos.filter((p) => p.stock === 0).length
  const stockBajo = productos.filter((p) => p.stock > 0 && p.stock < STOCK_MINIMO).length

  return (
    <section>
      <h2>Inventario</h2>

      <div className="resumen">
        <TarjetaResumen titulo="Productos" valor={productos.length} />
        <TarjetaResumen titulo="Stock bajo" valor={stockBajo} variante="bajo" />
        <TarjetaResumen titulo="Agotados" valor={agotados} variante="agotado" />
      </div>

      <div className="tabla-contenedor">
        <table className="tabla-inventario">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th className="numero">Precio</th>
              <th className="numero">Stock</th>
              <th>Estado</th>
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
