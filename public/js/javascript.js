//jshint esversion:6
//Valido el formulario antes de enviarselo al servidor
var botonEnviar=document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click", function(){
  let tipoCasa=formulario.tipoVivienda.value;
  let annos=formulario.annos.value;
  let interes=formulario.interes.value;
  
  if(tipoCasa=="..."||(annos=="...")||(interes=="...")){
    //aviso del error y termino sin enviar al server
    alert("El formulario está incompleto");
    return false;
  }
  formulario.submit(); //Envio el formulario porque está completo
});
// Hay que poner a escuchar los cambios que realice el usuario en la lista del tipo de vivienda
// para cambiar la foto

var tipoVivienda = formulario.tipoVivienda;
tipoVivienda.addEventListener("change", function() {
  //Cambiamos la foto de la vivienda
  var nuevaVivienda = formulario.tipoVivienda.value;
  //Selecciono la foto
  var foto = document.querySelector(".fotocasa");
  //cambio la imagen de la foto
  switch (nuevaVivienda) {
    case "piso":
      foto.src = "../imagenes/piso.jpg";
      break;
    case "chalet":
      foto.src = "../imagenes/casoplon.jpg";
      break;
    case "duplex":
      foto.src = "../imagenes/duplex.jpg";
      break;
  }
});
