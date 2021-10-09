$(document).ready(function () {
  console.log("El DOM esta listo");
});

$("#submit").click(function (e) {
  e.preventDefault();

  if ($(".form-control").val().length <= 0) {
    $(".form-control").css("border", "solid 3px #FA5858");
  } else {
    $(".form-control").css("border", "none");
    alert("Los datos ingresados, seran enviados a nuestro equipo de Ayuda");
  }
});

$("#reset").click(function(e) {
    e.preventDefault();
    
    $("#form-contacto")[0].reset()
})
