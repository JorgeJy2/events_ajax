// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function() {

    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

    const id = location.search.split('id=')[1];
    console.log(id);

    //Carga los datos que estan en el JSON (info.json) usando AJAX

    fetch('info.json')
        .then(response => response.json())
        .then(result => {

            //Guarda el resultado en variables
            //Guarda el resultado en una variable
            //Busca el elemento en el arreglo
            let resultFilter = result.eventos.filter(event => event.id == id)[0];

            if (resultFilter !== undefined) {
                drawDetails(resultFilter, 'evento');
            }
        })
        .catch(console.error);




    let drawDetails = (event, elementID) => {
        //Crea un string que contenga el HTML que describe el detalle del evento
        const content = `<div class="jumbotron text-center col-md-12">
          <p class="display-4">${event.nombre}</p>
          <button type="button" class="btn gradient-bg mb-3">${event.fecha}</button>
          <hr class="my-4">
          <h3>${event.descripcion}</h3>
          <p>Lugar: ${event.lugar}</p>
          <p>Invitados : ${event.invitados}</p>
          <p>Precio: ${event.precio}$</p>
          <br>
          <a class="btn btn-outline-secondary" href="index.html" role="button">Regresar</a>
          </div>`;
        const elementHtml = document.getElementById(elementID);
        //Modifica el DOM agregando el html generado dentro del div con id=evento
        elementHtml.insertAdjacentHTML('beforeend', content);
    }
});