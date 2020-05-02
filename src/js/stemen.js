$('#ingresar').click(
    function(e){
        var usuario= document.getElementById("usuario").value;
        var contraseña= document.getElementById("contrasenia").value;
        
        if (usuario == "ventas" && contraseña=="ventas") {
            window.location.href= "./menuventas.html"; }
            if (usuario == "compras" && contraseña=="compras") {
                window.location.href= "./menucompras.html"; }
        
        
 
        

    e.preventDefault()
}
);