const CLASES_CAMPO =
  'w-full rounded-md border border-borde bg-superficie px-3 py-2 focus:outline-2 focus:outline-primario aria-invalid:border-agotado'

// Etiqueta + campo + mensaje de error, con los atributos de accesibilidad ya conectados.
// Si recibe `opciones` dibuja un <select>; si no, un <input>. El resto de las props
// (value, onChange, type, autoComplete, inputMode...) se pasan tal cual al campo.
function CampoFormulario({ id, etiqueta, error, opciones, ...props }) {
  const idError = `${id}-error`
  const atributos = {
    id,
    name: id,
    required: true,
    // Solo cuando hay error: el lector anuncia "inválido" y lee el mensaje asociado.
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? idError : undefined,
    className: CLASES_CAMPO,
    ...props,
  }

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">{etiqueta}</label>

      {opciones ? (
        <select {...atributos}>
          <option value="">Selecciona una opción</option>
          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>
      ) : (
        <input {...atributos} />
      )}

      {error && <p id={idError} className="mt-1 text-sm text-agotado">{error}</p>}
    </div>
  )
}

export default CampoFormulario