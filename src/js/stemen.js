document.querySelector('#ingresar').onclick = function(e){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
   
     if (usuario === "usuario" && contraseña === "usuario") {
        window.location.href = './inicio.html';
        
        }
        if (usuario === "usuario2" && contraseña === "usuario2") {
            window.location.href = './inicio2.html';
            }
            if (usuario === "usuario3" && contraseña === "usuario3") {
                window.location.href = './inicio3.html';
                }
                if (usuario === "usuario4" && contraseña === "usuario4") {
                    window.location.href = './inicio4.html';
                    }
                    if (usuario === "usuario5" && contraseña === "usuario5") {
                        window.location.href = './inicio5.html';
                        }
                        if (usuario === "usuario6" && contraseña === "usuario6") {
                            window.location.href = './inicio6.html';
                            }
                            if (usuario== "" || contraseña=="") {
                                alert("verifique usuario o contraseña")
                            }
    
    

    e.preventDefault()
    
}