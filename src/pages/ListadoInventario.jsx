import { useSearchParams } from 'react-router'
import FilaProducto from '../components/FilaProducto.jsx'
import FiltroTipo from '../components/FiltroTipo.jsx'
import { useInventario } from '../context/useInventario.js'
import { TIPOS } from '../data/productos.js'

function ListadoInventario() {
  const { productos } = useInventario()

  // El filtro vive en la URL (/inventario?tipo=Lácteos): se conserva al volver
  // desde otra página y se puede compartir el enlace ya filtrado.
  const [parametros, setParametros] = useSearchParams()
  const tipoEnUrl = parametros.get('tipo') ?? ''
  // Un valor inventado en la URL (?tipo=xyz) se trata como "Todos".
  const tipo = TIPOS.includes(tipoEnUrl) ? tipoEnUrl : ''

  // Lista derivada: se calcula en cada render a partir del inventario completo,
  // que nunca se modifica ni se guarda filtrado.
  const visibles = tipo === '' ? productos : productos.filter((p) => p.tipo === tipo)

  function cambiarTipo(nuevoTipo) {
    // replace: cambiar el filtro no agrega una entrada nueva al historial del navegador.
    setParametros(nuevoTipo === '' ? {} : { tipo: nuevoTipo }, { replace: true })
  }

  // Dirección actual del listado (con filtro) para volver a ella desde el detalle.
  const volverA = tipo === '' ? '/inventario' : `/inventario?${parametros}`

  return (
    <section>
      <h2 className="mb-1 text-xl font-semibold">Listado de inventario</h2>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-texto-suave" aria-live="polite">
          {tipo === ''
            ? `${productos.length} artículos registrados`
            : `${visibles.length} de ${productos.length} artículos (${tipo})`}
        </p>
        <FiltroTipo valor={tipo} onCambiar={cambiarTipo} />
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
            {visibles.map((producto) => (
              <FilaProducto key={producto.id} producto={producto} volverA={volverA} />
            ))}
            {visibles.length === 0 && (
              <tr>
                <td colSpan={6} className="px-3 py-6 text-center text-texto-suave">
                  No hay artículos de este tipo.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ListadoInventario