
//CIERRO VENTANA Y LIMPIO EL CAMPO
$("#X").click(()=>{
  $("#PopUp").fadeOut("slow");
  $("#conteinerPopUp").empty();

});

// ABRO VENTANA Y COMPLETO EL CAMPO SI ES QUE ESTA VACIO
function ventanaEmergente () {
  var respuesta = {};
  let info = document.getElementsByClassName("informacion");
  for (let i = 0, data; data = info[i]; i++){ 
   var dataNombre = data.getAttribute("data-nombre");
   if (dataNombre == "personas" || dataNombre == "sucursales") {
     if (data.classList.contains("subitem-selected")) {
      respuesta [dataNombre] = data.getAttribute("value")  
     }
       
   } else if (dataNombre == "Tipo-de-evento") {
      if (data.value != "tipo-eventos") {
        respuesta [dataNombre] = data.value
      }
   } else { 
       respuesta [dataNombre] = data.value
   }
  } 
  
  localStorage.setItem("estadoPagina",JSON.stringify(respuesta));

  //MUESTRO EL MSJ EN LA VENTANA EMERGENTE //
  
   $("#PopUp").fadeIn("slow")
    if( $("#conteinerPopUp").children("p").length == 0) {  
    $("#conteinerPopUp").append(`<p> Hola ${respuesta["nombre"]} tu reserva fue aceptada para el ${respuesta["calendario"]} a las ${respuesta["hora"]} en ${respuesta["sucursales"]}. Muchas gracias!</p>`)
  }
};
