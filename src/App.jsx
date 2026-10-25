import { Routes, Route } from 'react-router-dom'
import MenuInferior from './components/MenuInferior.jsx'
import Inicio from './pages/Inicio.jsx'
import NuestrasTiendas from './pages/NuestrasTiendas.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

function App() {
  return (
    <>
      <header className="encabezado">
        <h1>SuperStock</h1>
        <p>Gestión de inventario</p>
      </header>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tiendas" element={<NuestrasTiendas />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>

      <MenuInferior />
    </>
  )
}

export default App
