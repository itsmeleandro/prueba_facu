$('#ingresar').click(
    function(e){
        var usuario= document.getElementById("usuario").value;
        var contraseña= document.getElementById("contrasenia").value;
        
        if (usuario == "ventas" && contraseña=="ventas") {
            window.location.href= "src/menusPrincipales/menuventas.html"; }
            if (usuario == "compras" && contraseña=="compras") {
                window.location.href= "src/menusPrincipales/menucompras.html"; }
                if (usuario == "admin" && contraseña=="admin") {
                    window.location.href= "src/menusPrincipales/menuadmin.html"; }
                    if (usuario == "produccion" && contraseña=="produccion") {
                        window.location.href= "src/menusPrincipales/menuprod.html"; }
        
        
 
        

    e.preventDefault()
}
);

$('#button-addon2').click(
    function(e){
        let contrasenia = $('#contrasenia');
        if(contrasenia.prop('type') === 'password'){
            contrasenia.clone().prop('type','text').insertAfter('#contrasenia').prev().remove();
        }else{
            contrasenia.clone().prop('type','password').insertAfter('#contrasenia').prev().remove();
        }
        e.preventDefault()
    }
);