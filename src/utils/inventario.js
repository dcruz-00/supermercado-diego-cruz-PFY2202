export const STOCK_MINIMO = 10

const formatoCLP = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

export function formatearPrecio(precio) {
  return formatoCLP.format(precio)
}

export function obtenerEstado(stock) {
  if (stock === 0) return { texto: 'Agotado', clase: 'agotado' }
  if (stock < STOCK_MINIMO) return { texto: 'Stock bajo', clase: 'bajo' }
  return { texto: 'Disponible', clase: 'disponible' }
}
