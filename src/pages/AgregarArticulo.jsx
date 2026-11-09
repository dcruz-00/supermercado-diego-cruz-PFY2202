import { useState } from 'react'
import { Link } from 'react-router'
import CampoFormulario from '../components/CampoFormulario.jsx'
import { TIPOS } from '../data/productos.js'
import { useInventario } from '../context/useInventario.js'

const FORMULARIO_VACIO = { nombre: '', marca: '', tipo: '', precio: '', stock: '' }

// \p{L} = cualquier letra (incluye tildes y ñ), \p{N} = cualquier dígito; requieren la bandera u.
// Debe empezar con letra o número y luego admite espacios y signos comunes en nombres de productos.
const REGEX_NOMBRE = /^[\p{L}\p{N}][\p{L}\p{N} .,&'%/()-]{1,59}$/u // 2 a 60 caracteres
const REGEX_MARCA = /^[\p{L}\p{N}][\p{L}\p{N} .&'-]{0,39}$/u // 1 a 40 caracteres
// Solo dígitos: rechaza "1e3", "-5", "12.5" o " 7", que Number() sí convertiría.
const REGEX_PRECIO = /^\d{1,7}$/ // CLP no usa decimales
const REGEX_STOCK = /^\d{1,5}$/

// Devuelve un objeto con un mensaje por cada campo inválido; vacío si todo está bien.
function validar(formulario) {
  const errores = {}
  const nombre = formulario.nombre.trim()
  const marca = formulario.marca.trim()

  if (nombre === '') errores.nombre = 'Ingresa el nombre.'
  else if (!REGEX_NOMBRE.test(nombre)) {
    errores.nombre = 'Usa de 2 a 60 caracteres: letras, números, espacios y . , & \' % / ( ) -'
  }

  if (marca === '') errores.marca = 'Ingresa la marca.'
  else if (!REGEX_MARCA.test(marca)) {
    errores.marca = 'Usa hasta 40 caracteres: letras, números, espacios y . & \' -'
  }

  if (!TIPOS.includes(formulario.tipo)) errores.tipo = 'Selecciona un tipo.'

  // Precio: entero en pesos, al menos $1 (un producto a $0 no tiene sentido).
  if (!REGEX_PRECIO.test(formulario.precio) || Number(formulario.precio) < 1) {
    errores.precio = 'Ingresa un precio entero en pesos, entre 1 y 9.999.999 (sin puntos).'
  }

  // Stock: cantidad entera de unidades; 0 es válido (producto agotado).
  if (!REGEX_STOCK.test(formulario.stock)) {
    errores.stock = 'Ingresa una cantidad entera entre 0 y 99.999.'
  }

  return errores
}

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
      <h2 className="mb-1 text-xl font-semibold">Agregar artículo</h2>
      <p className="mb-4 text-sm text-texto-suave">Todos los campos son obligatorios.</p>

      {agregado && (
        <p className="mb-4 rounded-md border border-primario bg-superficie px-4 py-3" role="status">
          Se agregó <strong>{agregado}</strong> al inventario.{' '}
          <Link to="/inventario" className="font-semibold text-primario underline">Ver listado</Link>
        </p>
      )}

      {/* noValidate: se usan los mensajes propios en vez de los globos del navegador;
          required sigue informando a los lectores de pantalla que el campo es obligatorio. */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-lg border border-borde bg-superficie p-4">
        <CampoFormulario
          id="nombre"
          etiqueta="Nombre"
          value={formulario.nombre}
          onChange={handleChange}
          error={errores.nombre}
          autoComplete="off"
        />

        <CampoFormulario
          id="marca"
          etiqueta="Marca"
          value={formulario.marca}
          onChange={handleChange}
          error={errores.marca}
          autoComplete="off"
        />

        <CampoFormulario
          id="tipo"
          etiqueta="Tipo de producto"
          opciones={TIPOS}
          value={formulario.tipo}
          onChange={handleChange}
          error={errores.tipo}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <CampoFormulario
            id="precio"
            etiqueta="Precio (CLP)"
            inputMode="numeric"
            value={formulario.precio}
            onChange={handleChange}
            error={errores.precio}
            autoComplete="off"
          />

          <CampoFormulario
            id="stock"
            etiqueta="Stock"
            inputMode="numeric"
            value={formulario.stock}
            onChange={handleChange}
            error={errores.stock}
            autoComplete="off"
          />
        </div>

        <button type="submit" className="rounded-md bg-primario px-4 py-2 font-semibold text-white hover:opacity-90">
          Agregar al inventario
        </button>
      </form>
    </section>
  )
}

export default AgregarArticulo