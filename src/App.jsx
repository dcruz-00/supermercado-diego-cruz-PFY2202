import { Routes, Route } from 'react-router-dom'
import MenuInferior from './components/MenuInferior.jsx'
import Inicio from './pages/Inicio.jsx'
import NuestrasTiendas from './pages/NuestrasTiendas.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

function App() {
  return (
    <>
      <header className="bg-primario px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">SuperStock</h1>
        <p className="mt-1 opacity-85">Gestión de inventario</p>
      </header>

      {/* pb-22 deja espacio para que el menú inferior fijo no tape el contenido */}
      <main className="mx-auto max-w-240 px-4 pt-6 pb-22">
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