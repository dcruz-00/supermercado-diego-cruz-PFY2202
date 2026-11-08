import { TIPOS } from '../data/productos.js'

// Componente controlado: no guarda estado propio. Muestra `valor` y avisa
// los cambios con `onCambiar`; quien lo usa decide dónde se guarda el filtro.
function FiltroTipo({ valor, onCambiar }) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="filtro-tipo" className="text-sm font-semibold">Filtrar por tipo</label>
      <select
        id="filtro-tipo"
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
        className="rounded-md border border-borde bg-superficie px-3 py-2 focus:outline-2 focus:outline-primario"
      >
        <option value="">Todos</option>
        {TIPOS.map((tipo) => (
          <option key={tipo} value={tipo}>{tipo}</option>
        ))}
      </select>
    </div>
  )
}

export default FiltroTipo