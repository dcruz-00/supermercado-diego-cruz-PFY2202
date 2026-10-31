export const ACCIONES = {
    AGREGAR: 'agregar',
}

export function inventarioReducer(estado, accion) {
    switch (accion.type) {
        case ACCIONES.AGREGAR:
            return [...estado, accion.payload]
        default:
            throw new Error(`Acción desconocida: ${accion.type}`)
    }
}