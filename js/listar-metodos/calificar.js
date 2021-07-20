const EachRadio = document.querySelectorAll(".star-widget input");
let puntuacionGlobal = 0;
const contenedorPuntuar = document.querySelector(".container-stars");

const calificarServicio = async(id) => {

    let res = await fetch(`http://localhost:8080/cards/get-user-cards/${USUARIOACTUAL}`, {});
    const tarjetas = await res.json();
    console.table(tarjetas);
    return tarjetas
}

const patitasRadio = (e) => {
    id = e.currentTarget.id;
    puntuacion = Number(id.substring(5, 6));
    puntuacionGlobal = puntuacion;
}

EachRadio.forEach((radio) => {
    radio.addEventListener("click", patitasRadio);
})

const submit = document.querySelector("#submit");

submit.addEventListener("click", async(e) => {
    e.preventDefault();

    if (puntuacion = !0) {

        // const servicio = await window.sessionStorage.getItem("seletedService");

        //  await calificarServicio(id);

        contenedorPuntuar.classList.toggle("hide");

        // window.localStorage.href = "";





    } else {





    }

});