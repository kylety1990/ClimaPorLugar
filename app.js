const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const direccion = {
    alias: 'd',
    desc: 'Direccion de la ciudad a obtener clima',
    demand: true

}

const argv = require('yargs').options({
    direccion
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => console.log(err))



// clima.getClima(, )
//     .then(console.log)
//     .catch(err => console.log(err))

const getInfo = async(direccion) => {
    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng)
        return `El clima de ${direccion} es de ${temperatura}`

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err));