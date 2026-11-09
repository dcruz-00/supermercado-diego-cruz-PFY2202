import { Link } from 'react-router'
import SelectorCantidad from '../components/SelectorCantidad.jsx'
import { useInventario } from '../context/useInventario.js'
import { contarUnidades, detallarCarrito } from '../utils/carrito.js'
import { formatearPrecio } from '../utils/inventario.js'

function Carrito() {
  const { productos, carrito, agregarAlCarrito, quitarDelCarrito } = useInventario()

  const lineas = detallarCarrito(productos, carrito)
  const unidades = contarUnidades(carrito)
  const total = lineas.reduce((suma, linea) => suma + linea.subtotal, 0)

  // El selector entrega la cantidad nueva; aquí se traduce a "agregar" o "quitar"
  // la diferencia, que son las acciones que mueven unidades con el inventario.
  function cambiarCantidad(linea, nuevaCantidad) {
    const diferencia = nuevaCantidad - linea.cantidad
    if (diferencia > 0) agregarAlCarrito(linea.id, diferencia)
    if (diferencia < 0) quitarDelCarrito(linea.id, -diferencia)
  }

  if (lineas.length === 0) {
    return (
      <section>
        <h2 className="mb-2 text-xl font-semibold">Carrito de compras</h2>
        <p className="mb-4 text-texto-suave">Tu carrito está vacío.</p>
        <Link to="/inventario" className="font-semibold text-primario underline">Ir al listado de inventario</Link>
      </section>
    )
  }

  return (
    <section>
      <h2 className="mb-1 text-xl font-semibold">Carrito de compras</h2>
      <p className="mb-4 text-texto-suave">{unidades} unidad(es) en {lineas.length} artículo(s)</p>

      <ul className="space-y-3">
        {lineas.map((linea) => (
          <li
            key={linea.id}
            className="grid gap-3 rounded-lg border border-borde bg-superficie p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"
          >
            <div>
              <Link to={`/inventario/${linea.id}`} className="font-semibold text-primario hover:underline">
                {linea.nombre}
              </Link>
              <p className="text-sm text-texto-suave">
                {linea.marca} · {formatearPrecio(linea.precio)} c/u · quedan {linea.stock} en inventario
              </p>
            </div>

            <div className="flex items-center gap-3">
              <SelectorCantidad
                valor={linea.cantidad}
                max={linea.cantidad + linea.stock}
                onCambiar={(n) => cambiarCantidad(linea, n)}
                etiqueta={`Cantidad de ${linea.nombre}`}
              />
              <button
                type="button"
                onClick={() => quitarDelCarrito(linea.id, linea.cantidad)}
                className="text-sm font-semibold text-agotado hover:underline"
              >
                Quitar
              </button>
            </div>

            <p className="font-semibold sm:min-w-24 sm:text-right">{formatearPrecio(linea.subtotal)}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between rounded-lg border border-borde bg-superficie p-4 text-lg">
        <span>Total</span>
        <strong>{formatearPrecio(total)}</strong>
      </div>
    </section>
  )
}

export default Carrito