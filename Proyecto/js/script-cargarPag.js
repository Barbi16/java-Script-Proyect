window.addEventListener("load",() => {
  let estadoPagina = JSON.parse(localStorage.getItem("estadoPagina"))
  let info = document.getElementsByClassName("informacion");
  for (let i = 0, data; data = info[i]; i++){ 
      var dataNombre = data.getAttribute("data-nombre")
      if (dataNombre == "nombre" || dataNombre == "email") { 
        data.value = estadoPagina[dataNombre] 
       }
     }
},false)


