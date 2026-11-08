const CLASES_BOTON =
  'h-9 w-9 text-lg font-semibold text-primario hover:bg-fondo disabled:cursor-not-allowed disabled:text-borde disabled:hover:bg-transparent'

// Botones − y + alrededor de un número. Componente controlado: no guarda la
// cantidad, solo pide cambiarla con onCambiar y se desactiva en los límites.
function SelectorCantidad({ valor, min = 1, max, onCambiar, etiqueta = 'Cantidad' }) {
  return (
    <div role="group" aria-label={etiqueta} className="inline-flex items-center overflow-hidden rounded-md border border-borde bg-superficie">
      <button
        type="button"
        onClick={() => onCambiar(valor - 1)}
        disabled={valor <= min}
        aria-label="Disminuir cantidad"
        className={CLASES_BOTON}
      >
        −
      </button>
      <span className="min-w-10 text-center font-semibold" aria-live="polite">{valor}</span>
      <button
        type="button"
        onClick={() => onCambiar(valor + 1)}
        disabled={valor >= max}
        aria-label="Aumentar cantidad"
        className={CLASES_BOTON}
      >
        +
      </button>
    </div>
  )
}

export default SelectorCantidad