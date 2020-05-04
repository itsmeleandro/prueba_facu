function deleteAlert() {
    if ($('#alert')) {
        $('#alert').remove();
    }
}
function controlDeErrores(){
    deleteAlert();
    return controlDeValidacion();
}

function controlDeValidacion(){
    return (
        !$('#nombre')[0].checkValidity() || !$('#telefono')[0].checkValidity() || !$('#email')[0].checkValidity() 
        )
}
$('#registrar').click(
    function (e) {
        if(controlDeErrores()){
            console.log('hola')
        }
        let alert = $(`
        <div id='alert' class="alert alert-success" role="alert">
            Registro completado satisfactorimente.
        </div>`);
        $('#registro').before(alert);
        setTimeout(deleteAlert, 3000)
        e.preventDefault();
    }
);
