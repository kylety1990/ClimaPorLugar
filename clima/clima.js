const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3fd2d0c8ea417f42ab8426438b6e35cc&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}