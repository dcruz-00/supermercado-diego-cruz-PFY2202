import preguntas from '../data/preguntas.js'

function PreguntasFrecuentes() {
  return (
    <section>
      <h2>Preguntas frecuentes</h2>

      <div className="lista-preguntas">
        {preguntas.map((item) => (
          <details key={item.id} className="pregunta">
            <summary>{item.pregunta}</summary>
            <p>{item.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default PreguntasFrecuentes
