import { createContext } from 'react'

// El "canal" por el que viaja el inventario. El valor real lo entrega InventarioProvider.
export const InventarioContext = createContext(null)