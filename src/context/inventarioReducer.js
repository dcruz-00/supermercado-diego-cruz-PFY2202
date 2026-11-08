export const ACCIONES = {
  AGREGAR: 'agregar',
  AGREGAR_AL_CARRITO: 'agregar-al-carrito',
  QUITAR_DEL_CARRITO: 'quitar-del-carrito',
}

// Mueve unidades entre el inventario y el carrito en un solo paso, para que
// ambos cambien juntos. `cantidad` positiva: inventario → carrito; negativa: carrito → inventario.
// Si la operación no es posible, devuelve el mismo estado (no cambia nada).
function moverUnidades(estado, id, cantidad) {
  const producto = estado.productos.find((p) => p.id === id)
  const item = estado.carrito.find((i) => i.id === id)
  const enCarrito = item ? item.cantidad : 0

  if (!producto || !Number.isInteger(cantidad) || cantidad === 0) return estado
  if (cantidad > producto.stock) return estado // no hay stock suficiente
  if (-cantidad > enCarrito) return estado // no se puede quitar más de lo que hay

  const productos = estado.productos.map((p) =>
    p.id === id ? { ...p, stock: p.stock - cantidad } : p,
  )

  const nuevaCantidad = enCarrito + cantidad
  let carrito
  if (!item) {
    carrito = [...estado.carrito, { id, cantidad: nuevaCantidad }]
  } else if (nuevaCantidad === 0) {
    carrito = estado.carrito.filter((i) => i.id !== id)
  } else {
    carrito = estado.carrito.map((i) => (i.id === id ? { ...i, cantidad: nuevaCantidad } : i))
  }

  return { productos, carrito }
}

export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case ACCIONES.AGREGAR:
      return { ...estado, productos: [...estado.productos, accion.payload] }
    case ACCIONES.AGREGAR_AL_CARRITO:
      return moverUnidades(estado, accion.payload.id, accion.payload.cantidad)
    case ACCIONES.QUITAR_DEL_CARRITO:
      return moverUnidades(estado, accion.payload.id, -accion.payload.cantidad)
    default:
      throw new Error(`Acción desconocida: ${accion.type}`)
  }
}