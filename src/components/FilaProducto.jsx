import { Link } from 'react-router'
import { formatearPrecio } from '../utils/inventario.js'
import EtiquetaEstado from './EtiquetaEstado.jsx'

// volverA: dirección del listado (con su filtro) para que el detalle sepa adónde regresar.
function FilaProducto({ producto, volverA }) {
  return (
    // *: aplica las clases a cada hijo directo (cada <td>)
    <tr className="*:border-b *:border-borde *:px-3 *:py-2.5 *:whitespace-nowrap">
      <td>
        <Link
          to={`/inventario/${producto.id}`}
          state={{ volverA }}
          className="font-semibold text-primario hover:underline"
        >
          {producto.nombre}
        </Link>
      </td>
      <td>{producto.marca}</td>
      <td>{producto.tipo}</td>
      <td className="text-right">{formatearPrecio(producto.precio)}</td>
      <td className="text-right">{producto.stock}</td>
      <td>
        <EtiquetaEstado stock={producto.stock} />
      </td>
    </tr>
  )
}

export default FilaProducto