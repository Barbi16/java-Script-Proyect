// DECLARO LAS EXPRESIONES REGULARES //
const expresiones =  {
	nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  
	email : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

let formulario = document.getElementsByClassName("formulario_reservas");
let formularioArray = Object.values(formulario);
let inputs = document.getElementsByClassName("inputs");
let inputsArray = Object.values(inputs);

// DECLARO OBJETO CON LOS LOS RESPECTIVOS CAMPOS DE VALIDACION EN FALSO //
let campos = {
	nombre: false,
	email: false,
	sucursales: false,
	personas: false,
	calendario: false,
	hora: false

}

// VALIDO LOS CAMPOS Y LOS VUELVO TRUE //

function validarFormulario (e) {

	switch (e.target.getAttribute("data-nombre")){

		case "nombre" :			
			 validarCampo(expresiones.nombre, e.target.value, "nombre");
		
		break;
		case "email" :
			validarCampo(expresiones.email, e.target.value, "email");

		break;
		case "calendario" :
			campos.calendario = true;
		break;
	}
}
function validarSelect (e) {

	campos[e.getAttribute("data-nombre")] = true;

}
$(".hora").on("change", function () {
	campos.hora = true;
})


function validarCampo (expresiones, input, campo) {
		if(expresiones.test(input)){
			$(`#grupo__${campo}`).removeClass("formulario__grupo-incorrecto");
			$(`#grupo__${campo}`).addClass("formulario__grupo-correcto");
			$(`#grupo__${campo} i`).addClass("bi bi-check-circle-fill");
			$(`#grupo__${campo} i`).removeClass("bi bi-exclamation-circle-fill");
			$(`#grupo__${campo} .formulario__input-error`).removeClass("formulario__input-error-activo");
			campos[campo] = true;

		} else {
			$(`#grupo__${campo}`).addClass("formulario__grupo-incorrecto");
			$(`#grupo__${campo}`).removeClass("formulario__grupo-correcto");
			$(`#grupo__${campo} i`).addClass("bi bi-exclamation-circle-fill");
			$(`#grupo__${campo} i`).removeClass("bi bi-check-circle-fill");
			$(`#grupo__${campo} .formulario__input-error`).addClass("formulario__input-error-activo");
			campos[campo] = false;
	}
}

Array.from(inputsArray).forEach(input => {
   input.addEventListener("keyup", validarFormulario);
   input.addEventListener("blur", validarFormulario);
});


$("#enviar").click ((e) => {
	if(campos.nombre && campos.email && campos.sucursales && campos.personas && campos.calendario && campos.hora){
		formulario_correcto = $(".formulario__grupo-correcto")

	/*	Array.from(inputsArray).forEach(icono => {
			icono.removeClass('.formulario__grupo-correcto') 
			 });*/
		 $(".formulario__mensaje").removeClass("formulario__mensaje-activo")
		 ventanaEmergente ()
		
	}else {
		$(".formulario__mensaje").addClass("formulario__mensaje-activo")

	}
});

