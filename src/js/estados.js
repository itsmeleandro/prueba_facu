$('#dataTable tr').each(function () {
    var estado = $(this).find("td").eq(4).html();
    var boton = document.getElementById("deshab");
    var boton2 = document.getElementById("modificar");
    if (estado == "En Proceso") {
        boton.disabled = true;
        boton2.href = "#";
       
    }
    else if (estado == "Terminado") {
        boton2.href = "#";
        
    }
});