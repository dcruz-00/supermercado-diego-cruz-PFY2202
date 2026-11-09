// Une cada item del carrito ({ id, cantidad }) con los datos de su producto
// y calcula el subtotal. Se recalcula en cada render: nada de esto se guarda.
export function detallarCarrito(productos, carrito) {
  return carrito.map((item) => {
    const producto = productos.find((p) => p.id === item.id)
    return { ...producto, cantidad: item.cantidad, subtotal: producto.precio * item.cantidad }
  })
}

export function contarUnidades(carrito) {
  return carrito.reduce((total, item) => total + item.cantidad, 0)
}