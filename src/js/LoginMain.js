$('#ingresar').click(
    function(e){
        let input = $('#usuario').val();
        if (input.toUpperCase() === "INICIO") {
            window.location.href = './inicio.html';
        }
        e.preventDefault()
    }
);

$('#button-addon2').click(
    function(){
        let contrasenia = $('#contrasenia');
        if(contrasenia.prop('type') === 'password'){
            contrasenia.clone().prop('type','text').insertAfter('#contrasenia').prev().remove();
        }else{
            contrasenia.clone().prop('type','password').insertAfter('#contrasenia').prev().remove();
        }
    }
);
