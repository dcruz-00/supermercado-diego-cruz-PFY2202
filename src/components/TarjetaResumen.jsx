// Tailwind solo genera las clases que encuentra escritas completas en el código,
// por eso se usa un objeto en vez de armar el nombre con `border-l-${variante}`.
const COLOR_BORDE = {
  normal: 'border-l-primario',
  bajo: 'border-l-bajo',
  agotado: 'border-l-agotado',
}

function TarjetaResumen({ titulo, valor, variante = 'normal' }) {
  return (
    <div
      className={`flex flex-col rounded-lg border border-l-4 border-borde bg-superficie px-4 py-3 ${COLOR_BORDE[variante]}`}
    >
      <span className="text-sm text-texto-suave">{titulo}</span>
      <strong className="text-3xl">{valor}</strong>
    </div>
  )
}

export default TarjetaResumen