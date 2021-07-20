'use-strict';
const obtenerVacunas = async() => {
    let listaVacunas;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-vacunas',
            responseType: 'json'
        })
        .then((response) => {
            listaVacunas = response.data.vacunas;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaVacunas;
};