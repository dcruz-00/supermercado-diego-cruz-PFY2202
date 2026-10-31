import { useContext } from 'react'
import { InventarioContext } from './InventarioContext.js'

// Hook propio: cualquier componente dentro de InventarioProvider puede leer
// el inventario con `const { productos, agregarProducto } = useInventario()`.
export function useInventario() {
  const contexto = useContext(InventarioContext)
  if (contexto === null) {
    throw new Error('useInventario debe usarse dentro de <InventarioProvider>')
  }
  return contexto
}