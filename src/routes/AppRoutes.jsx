import { Routes, Route } from 'react-router'
import LayoutPrincipal from '../layouts/LayoutPrincipal.jsx'
import Inicio from '../pages/Inicio.jsx'
import ListadoInventario from '../pages/ListadoInventario.jsx'
import AgregarArticulo from '../pages/AgregarArticulo.jsx'
import DetalleArticulo from '../pages/DetalleArticulo.jsx'
import Carrito from '../pages/Carrito.jsx'
import NuestrasTiendas from '../pages/NuestrasTiendas.jsx'
import PreguntasFrecuentes from '../pages/PreguntasFrecuentes.jsx'
import NoEncontrado from '../pages/NoEncontrado.jsx'

// Todas las rutas del sitio en un solo lugar.
function AppRoutes() {
  return (
    <Routes>
      {/* Ruta "de layout": no tiene path, solo envuelve a sus hijas con LayoutPrincipal */}
      <Route element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />

        {/* Rutas anidadas: los path de las hijas se suman al del padre */}
        <Route path="inventario">
          <Route index element={<ListadoInventario />} />
          <Route path="agregar" element={<AgregarArticulo />} />
          {/* :id es un parámetro dinámico; DetalleArticulo lo lee con useParams */}
          <Route path=":id" element={<DetalleArticulo />} />
        </Route>

        <Route path="carrito" element={<Carrito />} />
        <Route path="tiendas" element={<NuestrasTiendas />} />
        <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes