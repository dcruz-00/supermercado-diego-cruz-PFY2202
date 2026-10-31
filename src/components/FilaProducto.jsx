import { formatearPrecio, obtenerEstado } from '../utils/inventario.js'

const COLOR_ESTADO = {
  disponible: 'text-primario',
  bajo: 'text-bajo',
  agotado: 'text-agotado',
}

function FilaProducto({ producto }) {
  const estado = obtenerEstado(producto.stock)

  return (
    // *: aplica las clases a cada hijo directo (cada <td>)
    <tr className="*:border-b *:border-borde *:px-3 *:py-2.5 *:whitespace-nowrap">
      <td>{producto.nombre}</td>
      <td>{producto.marca}</td>
      <td>{producto.tipo}</td>
      <td className="text-right">{formatearPrecio(producto.precio)}</td>
      <td className="text-right">{producto.stock}</td>
      <td>
        <span
          className={`rounded-full border border-current px-2 py-0.5 text-xs font-semibold ${COLOR_ESTADO[estado.clase]}`}
        >
          {estado.texto}
        </span>
      </td>
    </tr>
  )
}

export default FilaProducto