

//ANIMACION AL TITULO PRINCIPAL PANZA Y CORAZON

$("#tituloPrincipal").click(() => {
       $("#tituloPrincipal").slideUp(2000)
                            .delay(1000)
                            .slideDown(2000)
                            .delay(500)
                            .animate ({
                                opacity: "0.8", },
                                "slow",
                                );
})