import { obtenerEstado } from '../utils/inventario.js'

const COLOR_ESTADO = {
  disponible: 'text-primario',
  bajo: 'text-bajo',
  agotado: 'text-agotado',
}

// Etiqueta "Disponible / Stock bajo / Agotado". La usan el listado y el detalle.
function EtiquetaEstado({ stock }) {
  const estado = obtenerEstado(stock)

  return (
    <span className={`rounded-full border border-current px-2 py-0.5 text-xs font-semibold ${COLOR_ESTADO[estado.clase]}`}>
      {estado.texto}
    </span>
  )
}

export default EtiquetaEstado