import preguntas from '../data/preguntas.js'

function PreguntasFrecuentes() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Preguntas frecuentes</h2>

      <div className="space-y-2">
        {preguntas.map((item) => (
          <details key={item.id} className="rounded-lg border border-borde bg-superficie px-4 py-3">
            <summary className="cursor-pointer font-semibold">{item.pregunta}</summary>
            <p className="mt-2 text-texto-suave">{item.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default PreguntasFrecuentes