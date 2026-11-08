import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'
import EtiquetaEstado from '../components/EtiquetaEstado.jsx'
import SelectorCantidad from '../components/SelectorCantidad.jsx'
import { useInventario } from '../context/useInventario.js'
import { formatearPrecio } from '../utils/inventario.js'

function DetalleArticulo() {
  const { id } = useParams() // siempre texto, por eso los ids son texto en todo el estado
  const { state } = useLocation()
  const volverA = state?.volverA ?? '/inventario' // si se entra directo por URL, no hay state

  const { productos, carrito, agregarAlCarrito } = useInventario()
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(0)

  const producto = productos.find((p) => p.id === id)

  if (!producto) {
    return (
      <section>
        <h2 className="mb-2 text-xl font-semibold">Artículo no encontrado</h2>
        <p className="mb-4">No existe un artículo con ese identificador.</p>
        <Link to="/inventario" className="font-semibold text-primario underline">Volver al listado</Link>
      </section>
    )
  }

  const enCarrito = carrito.find((item) => item.id === id)?.cantidad ?? 0
  const agotado = producto.stock === 0
  // Si el stock bajó por debajo de la cantidad elegida, se muestra el máximo posible.
  const cantidadValida = Math.min(cantidad, Math.max(producto.stock, 1))

  function handleAgregar() {
    agregarAlCarrito(producto.id, cantidadValida)
    setAgregado(cantidadValida)
    setCantidad(1)
  }

  return (
    <section className="max-w-xl">
      <Link to={volverA} className="mb-4 inline-block text-sm font-semibold text-primario hover:underline">
        ← Volver al listado
      </Link>

      <article className="rounded-lg border border-borde bg-superficie p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-texto-suave">{producto.marca}</p>
          </div>
          <EtiquetaEstado stock={producto.stock} />
        </div>

        <dl className="mb-5 grid grid-cols-2 gap-x-4 gap-y-2 *:even:text-right">
          <dt className="text-texto-suave">Tipo</dt>
          <dd>{producto.tipo}</dd>
          <dt className="text-texto-suave">Precio</dt>
          <dd className="font-semibold">{formatearPrecio(producto.precio)}</dd>
          <dt className="text-texto-suave">Stock disponible</dt>
          <dd>{producto.stock}</dd>
          <dt className="text-texto-suave">En el carrito</dt>
          <dd>{enCarrito}</dd>
        </dl>

        {agotado ? (
          <p className="font-semibold text-agotado">Sin stock: no se puede agregar al carrito.</p>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <SelectorCantidad
              valor={cantidadValida}
              max={producto.stock}
              onCambiar={setCantidad}
              etiqueta="Cantidad a agregar"
            />
            <button
              type="button"
              onClick={handleAgregar}
              className="rounded-md bg-primario px-4 py-2 font-semibold text-white hover:opacity-90"
            >
              Agregar al carrito
            </button>
          </div>
        )}

        {agregado > 0 && (
          <p className="mt-4 rounded-md border border-primario px-4 py-3" role="status">
            Se agregaron <strong>{agregado}</strong> unidad(es) al carrito.
          </p>
        )}
      </article>
    </section>
  )
}

export default DetalleArticulo