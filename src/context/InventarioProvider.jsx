import { useReducer } from 'react'
import productosIniciales from '../data/productos.js'
import { InventarioContext } from './InventarioContext.js'
import { ACCIONES, inventarioReducer } from './inventarioReducer.js'

// El carrito guarda solo { id, cantidad }: nombre, precio, etc. se leen desde productos,
// así no hay datos duplicados que puedan quedar desactualizados.
const ESTADO_INICIAL = { productos: productosIniciales, carrito: [] }

function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(inventarioReducer, ESTADO_INICIAL)

  // El id se genera aquí, antes de despachar, para que el reducer siga siendo puro.
  function agregarProducto(datos) {
    dispatch({
      type: ACCIONES.AGREGAR,
      payload: { id: crypto.randomUUID(), ...datos },
    })
  }

  function agregarAlCarrito(id, cantidad = 1) {
    dispatch({ type: ACCIONES.AGREGAR_AL_CARRITO, payload: { id, cantidad } })
  }

  function quitarDelCarrito(id, cantidad = 1) {
    dispatch({ type: ACCIONES.QUITAR_DEL_CARRITO, payload: { id, cantidad } })
  }

  const valor = {
    productos: estado.productos,
    carrito: estado.carrito,
    agregarProducto,
    agregarAlCarrito,
    quitarDelCarrito,
  }

  return <InventarioContext value={valor}>{children}</InventarioContext>
}

export default InventarioProvider