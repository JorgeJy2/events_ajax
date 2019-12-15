// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
let upcomingEvents = new Array();
$(document).ready(function() {


    //Carga los datos que estan en el JSON (info.json) usando AJAX
    fetch('info.json')
        .then(response => response.json())
        .then(result => {
            console.log(result);
            //Guarda el resultado en variables
            const today = result.fechaActual;
            //Clasifica los eventos segun la fecha actual del JSON
            const events = bubbleSortDate(result.eventos);
            const dateNew = getObjDateString(today);

            console.log(events);
            events.forEach(event => {

                //Extrae solo eventos mayores
                if (dateNew <= getObjDateString(event.fecha))
                    upcomingEvents.push(event);
            });


            upcomingEvents.forEach(event => {
                viewEvent(event, 'proximos');
            });
        })
        .catch(console.error);

    //Recorre el arreglo y concatena el HTML para cada evento


});


//Ordena los eventos segun la fecha (los mas cercanos primero)
let bubbleSortDate = (dates) => {
    const lengthDates = dates.length;
    for (let i = 1; i < (lengthDates - 1); i++) {
        for (let n = 0; n < (lengthDates - i); n++) {
            if (getObjDateString(dates[n].fecha) > getObjDateString(dates[n + 1].fecha)) {
                const aux = dates[n + 1];
                dates[n + 1] = dates[n];
                dates[n] = aux;
            }
        }
    }
    return dates;
};

let getObjDateString = (dateString) => {
    const newDate = dateString.split('-');
    return new Date(newDate[0], newDate[1], newDate[2]);
};

//Crea un string que contenga el HTML que describe el detalle del evento
let viewEvent = (event, elementID) => {

    const eventsNext = document.getElementById(elementID);
    let contentView =
        `<div class="col-md-12 mb-4">
  <div class="card">
    <div class="card-body text-center">
      <h2 class="card-title">${event.nombre}</h2>
      <h2 class="badge badge-primary card-subtitle mb-2">${event.fecha}</h2>
      <p class="card-text">${event.descripcion}</p>
      <a href="detalle.html?id=${event.id}" class="card-link">Ver detalles</a>
    </div>
  </div>
</div>`;
    //Modifica el DOM agregando el html generado
    eventsNext.insertAdjacentHTML('beforeend', contentView);
};