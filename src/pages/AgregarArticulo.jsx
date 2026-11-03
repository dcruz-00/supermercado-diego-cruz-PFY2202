import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TIPOS } from '../data/productos.js'
import { useInventario } from '../context/useInventario.js'

const FORMULARIO_VACIO = { nombre: '', marca: '', tipo: '', precio: '', stock: '' }

// Devuelve un objeto con un mensaje por cada campo inválido; vacío si todo está bien.
function validar(formulario) {
  const errores = {}
  if (formulario.nombre.trim() === '') errores.nombre = 'Ingresa el nombre.'
  if (formulario.marca.trim() === '') errores.marca = 'Ingresa la marca.'
  if (!TIPOS.includes(formulario.tipo)) errores.tipo = 'Selecciona un tipo.'
  if (formulario.precio === '' || !Number.isInteger(Number(formulario.precio)) || Number(formulario.precio) < 0) {
    errores.precio = 'El precio debe ser un número entero mayor o igual a 0.'
  }
  if (formulario.stock === '' || !Number.isInteger(Number(formulario.stock)) || Number(formulario.stock) < 0) {
    errores.stock = 'El stock debe ser un número entero mayor o igual a 0.'
  }
  return errores
}

const CLASES_CAMPO = 'w-full rounded-md border border-borde bg-superficie px-3 py-2 focus:outline-2 focus:outline-primario'

function AgregarArticulo() {
  const { agregarProducto } = useInventario()
  const [formulario, setFormulario] = useState(FORMULARIO_VACIO)
  const [errores, setErrores] = useState({})
  const [agregado, setAgregado] = useState(null)

  // Un solo manejador para todos los campos: usa el atributo `name` del input
  // para saber qué propiedad del objeto actualizar.
  function handleChange(e) {
    const { name, value } = e.target
    setFormulario({ ...formulario, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nuevosErrores = validar(formulario)
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) return

    const articulo = {
      nombre: formulario.nombre.trim(),
      marca: formulario.marca.trim(),
      tipo: formulario.tipo,
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
    }
    agregarProducto(articulo)
    setAgregado(articulo.nombre)
    setFormulario(FORMULARIO_VACIO)
  }

  return (
    <section className="max-w-xl">
      <h2 className="mb-4 text-xl font-semibold">Agregar artículo</h2>

      {agregado && (
        <p className="mb-4 rounded-md border border-primario bg-superficie px-4 py-3" role="status">
          Se agregó <strong>{agregado}</strong> al inventario.{' '}
          <Link to="/inventario" className="font-semibold text-primario underline">Ver listado</Link>
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-lg border border-borde bg-superficie p-4">
        <div>
          <label htmlFor="nombre" className="mb-1 block text-sm font-semibold">Nombre</label>
          <input id="nombre" name="nombre" value={formulario.nombre} onChange={handleChange} className={CLASES_CAMPO} />
          {errores.nombre && <p className="mt-1 text-sm text-agotado">{errores.nombre}</p>}
        </div>

        <div>
          <label htmlFor="marca" className="mb-1 block text-sm font-semibold">Marca</label>
          <input id="marca" name="marca" value={formulario.marca} onChange={handleChange} className={CLASES_CAMPO} />
          {errores.marca && <p className="mt-1 text-sm text-agotado">{errores.marca}</p>}
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1 block text-sm font-semibold">Tipo de producto</label>
          <select id="tipo" name="tipo" value={formulario.tipo} onChange={handleChange} className={CLASES_CAMPO}>
            <option value="">Selecciona un tipo</option>
            {TIPOS.map((tipo) => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
          {errores.tipo && <p className="mt-1 text-sm text-agotado">{errores.tipo}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="precio" className="mb-1 block text-sm font-semibold">Precio (CLP)</label>
            <input id="precio" name="precio" type="number" min="0" step="1" value={formulario.precio} onChange={handleChange} className={CLASES_CAMPO} />
            {errores.precio && <p className="mt-1 text-sm text-agotado">{errores.precio}</p>}
          </div>

          <div>
            <label htmlFor="stock" className="mb-1 block text-sm font-semibold">Stock</label>
            <input id="stock" name="stock" type="number" min="0" step="1" value={formulario.stock} onChange={handleChange} className={CLASES_CAMPO} />
            {errores.stock && <p className="mt-1 text-sm text-agotado">{errores.stock}</p>}
          </div>
        </div>

        <button type="submit" className="rounded-md bg-primario px-4 py-2 font-semibold text-white hover:opacity-90">
          Agregar al inventario
        </button>
      </form>
    </section>
  )
}

export default AgregarArticulo