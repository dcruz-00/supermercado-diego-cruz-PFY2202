function TarjetaResumen({ titulo, valor, variante = 'normal' }) {
  return (
    <div className={`tarjeta-resumen ${variante}`}>
      <span className="tarjeta-titulo">{titulo}</span>
      <strong className="tarjeta-valor">{valor}</strong>
    </div>
  )
}

export default TarjetaResumen
