import { formatearPrecio, obtenerEstado } from '../utils/inventario.js'

function FilaProducto({ producto }) {
  const estado = obtenerEstado(producto.stock)

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.categoria}</td>
      <td className="numero">{formatearPrecio(producto.precio)}</td>
      <td className="numero">{producto.stock}</td>
      <td>
        <span className={`estado ${estado.clase}`}>{estado.texto}</span>
      </td>
    </tr>
  )
}

export default FilaProducto
