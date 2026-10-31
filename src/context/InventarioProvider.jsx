import { useReducer } from 'react'
import productosIniciales from '../data/productos.js'
import { InventarioContext } from './InventarioContext.js'
import { ACCIONES, inventarioReducer } from './inventarioReducer.js'

function InventarioProvider({ children }) {
  const [productos, dispatch] = useReducer(inventarioReducer, productosIniciales)

  // El id se genera aquí, antes de despachar, para que el reducer siga siendo puro.
  function agregarProducto(datos) {
    dispatch({
      type: ACCIONES.AGREGAR,
      payload: { id: crypto.randomUUID(), ...datos },
    })
  }

  return (
    <InventarioContext value={{ productos, agregarProducto }}>
      {children}
    </InventarioContext>
  )
}

export default InventarioProvider