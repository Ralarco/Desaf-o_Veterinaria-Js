const fs = require("fs")


const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const mascota = [{
            Nombre: nombre,
            Edad: edad,
            Tipo: tipo,
            Color: color,
            Enfermedad: enfermedad
        }]
    
        const datosGuardados = fs.readFileSync( 'citas.json', 'utf8' )
        const datos = JSON.parse(datosGuardados)
        datos.push(mascota)
        fs.writeFileSync('citas.json', JSON.stringify(datos) )
}

const leer = () => {
    const misDatos = fs.readFileSync( 'citas.json', 'utf8' )
    console.log(misDatos)
}

module.exports = { registrar, leer }