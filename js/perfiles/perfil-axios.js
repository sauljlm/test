/* const registrar_comentario = async(nombre, telefono, correo, comentario) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-comentario',
        responseType: 'json',
        data: {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            comentario: comentario
        }
    }).then((response) => {
        Swal.fire({
            'title': 'Su mensaje ha sido enviado',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
}; */