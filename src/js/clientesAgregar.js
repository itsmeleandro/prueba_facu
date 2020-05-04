function deleteAlert() {
    if ($('#alert')) {
        $('#alert').remove();
    }
}
$('document').ready(
    function(){
        $('#registro').submit(
            function (e) {
                if($('#alert')){
                    deleteAlert();
                }
                let alert = $(`
                <div id='alert' class="alert alert-success" role="alert">
                    Registro completado satisfactorimente.
                </div>`);
                $('#registro').before(alert);
                setTimeout(deleteAlert, 3000);
                e.preventDefault();
                e.stopPropagation();
            }
        )
    }
);
