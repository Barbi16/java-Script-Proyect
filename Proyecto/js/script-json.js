const urlJSON = "/Proyecto/js/datos.json"

// FUNCION PARA SELECCIONAR LOS ITEMS DE PERSONAS Y SUCURSALES

function selectItem (element) {
  let subitemdes = document.getElementsByName( element.getAttribute("name"))
  for (let j = 0, subdes; subdes = subitemdes[j]; j++){
  subdes.classList.remove("subitem-selected")
  }  
  element.classList.add("subitem-selected")
  console.log(campos)
  validarSelect (element)
} 

function ItemsSeleccionados (){ 
      let subitemListas = document.getElementsByClassName("subitem");
      for (let i = 0, subitem; subitem = subitemListas[i]; i++){
          subitem.addEventListener("click", (event)=> {
          selectItem(event.target)
          },false)
      }
}

//TRAIGO LA INFORMACION DEL JSON A LAS LISTAS SUCURSALES Y PERSONAS

function respuesta2 (listas) {
    return function (respuesta, estado) {
    if(estado === "success"){
      let datos = respuesta[listas]
      var classElemento = ".sublista" + listas;
      if ($(classElemento).children('li').length == 0) { 
        for (var i = 0, dato; dato = datos[i]; i++) {
          var nombres = listas.toLowerCase(); 
          var elementLi = '<li class="subitem informacion" data-nombre ="' + nombres + '" name = "' + nombres + '" value = "' + dato + '"> ' + dato + '</li>';
          $(classElemento).prepend(elementLi);
          }
          ItemsSeleccionados();  
      }
     
        }
    }
}

$("#itemsSucursales").click(() => { 
  $.getJSON(urlJSON, respuesta2("Sucursales"));
});
$("#itemsPersonas").click(() => { 
  $.getJSON(urlJSON, respuesta2("Personas"));
});

// TRAIGO LA INFORMACION DE TIPO DE EVENTOS EL HORARIO//

    function respuesta3 (listas) {
      return function (respuesta, estado) {
      if(estado === "success"){
        let datos = respuesta[listas]
        var classElemento = "#options" + listas;
        if ($(classElemento).children('option').length == 1) { 
          for (var i = 0, dato; dato = datos[i]; i++) {
            var nombres = listas.toLowerCase(); 
            var elementOptions = (`<option value="${dato}">${dato}</option>`);
            $(classElemento).prepend(elementOptions);
            }
        }
        ItemsSeleccionados();  
          }
      }
  }
  $("#optionsEvento").click(() => { 
    $.getJSON(urlJSON, respuesta3("Evento"));
  });
  $("#optionsHora").click(() => { 
    $.getJSON(urlJSON, respuesta3("Hora"));
  });