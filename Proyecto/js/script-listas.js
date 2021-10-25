
// MUESTRO LAS LISTAS DE PERSONAS Y SUCURSALES CUANDO HAGO CLICK
$("#itemsListas").click ((event) => {
    if(event.target.className === 'items'){
        if(event.target.children[0].style.display === "block"){
            event.target.children[0].style.display = "none";
        } else {
            event.target.children[0].style.display = "block";
        }
    }
});


// MUESTRO EL TIPO DE EVENTOS SEGUN SI HACE CLICK EN SI O EN NO 
function eventosNo () {
    $("#tipo-evento-selected").addClass("tipo-evento-no");
    $("#tipo-evento-selected").removeClass("tipo-evento-si");
    $("#optionsEvento").val("tipo-eventos")
} 

 $("#eventoNo").click(()=> {  
    eventosNo()
})


 function eventosSi () {
    $("#tipo-evento-selected").addClass("tipo-evento-si");
    $("#tipo-evento-selected").removeClass("tipo-evento-no");  
 }


$("#eventoSi").click(()=> {
      eventosSi()
 })
