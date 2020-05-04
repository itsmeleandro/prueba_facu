function deleteAlert() {
    if ($('#alert')) {
        $('#alert').remove();
    }
}
function controlDeErrores(){
    deleteAlert();
}

$('#registrar').click(
    function (e) {
        controlDeErrores();
        let alert = $(`
        <div id='alert' class="alert alert-success" role="alert">
            Registro completado satisfactorimente.
        </div>`);
        $('#registro').before(alert);
        setTimeout(deleteAlert, 3000)
        e.preventDefault();
    }
);
