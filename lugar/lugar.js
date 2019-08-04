const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '7dc640f7fbmsh1cc5366cb689817p1bab7bjsnc3b055807256' }
    });

    const resp = await instance.get();


    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}