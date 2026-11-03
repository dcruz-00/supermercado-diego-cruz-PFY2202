import { Link } from 'react-router-dom'
import { useInventario } from '../context/useInventario.js'
import { STOCK_MINIMO } from '../utils/inventario.js'
import TarjetaResumen from '../components/TarjetaResumen.jsx'

function Inicio() {
  const { productos } = useInventario()
  const agotados = productos.filter((p) => p.stock === 0).length
  const stockBajo = productos.filter((p) => p.stock > 0 && p.stock < STOCK_MINIMO).length

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Resumen del inventario</h2>

      <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        <TarjetaResumen titulo="Productos" valor={productos.length} />
        <TarjetaResumen titulo="Stock bajo" valor={stockBajo} variante="bajo" />
        <TarjetaResumen titulo="Agotados" valor={agotados} variante="agotado" />
      </div>

      <Link to="/inventario" className="font-semibold text-primario underline">
        Ver listado completo
      </Link>
    </section>
  )
}

export default Inicio